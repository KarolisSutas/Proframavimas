import locStor from './locStor.js'; // Importuojame locStor klasę darbui su localStorage
import Invoice from './Invoice.js'; // Importuojame Invoice klasę sąskaitos generavimui ir atvaizdavimui

export default class Main extends locStor{
    static init() {
        // Inicializuojame localStorage su raktu Sąskaitos
        locStor.storageInit({ key: 'Sąskaitos' });

        // Patikriname ar esame puslapyje, kuriame reikia kurti sąskaitą
        if (document.querySelector('[data-create]')) {
            this.initCreate();
            return;
        } else if (document.querySelector('[data-read]')) {
            this.initRead();
            return;
        } else if (document.querySelector('[data-delete]')) {
            this.initDelete();
            return;
        } else if (document.querySelector('[data-show-inv]')) {
            this.initShow();
            return;
        } else if (document.querySelector('[data-update]')) {
            this.initUpdate();
            return;
        }
        
    }


    static initCreate() {
        // Gauname atsitiktinius sąskaitos duomenis iš API
        fetch('https://in3.dev/inv/')
            .then(res => res.json()) // Konvertuojame atsakymą į JSON
            .then(data => {
                // Sukuriame naują Invoice objektą su gautais duomenimis
                const saskaita = new Invoice(data);
                saskaita.render(); // Atvaizduojame sąskaitą puslapyje

                // Parodome konteinerį ir sekcijas
                document.querySelector('.konteineris').style.display = 'flex';
                document.querySelector('#pirma').style.display = 'flex';
                document.querySelector('#antra').style.display = 'flex';

                const allInvButton = document.querySelector('[data-all]');

                allInvButton.addEventListener('click', () => {
                    window.location.href = 'read.html';
                })

                // Surandame mygtuką Saugoti
                const saveButton = document.querySelector('[data-save]');

                // Pridedame įvykio klausytoją mygtukui
                saveButton.addEventListener('click', () => {
                    
                    // locStor.store(saskaita.data);
                    // window.location.href = 'read.html';


                    const pilnaSaskaita = {
                        ...saskaita.data, // visi API duomenys
                        totals: {
                            tarpinė: document.querySelector('#tarp').textContent,
                            pvm: document.querySelector('#pvm').textContent,
                            bendra: document.querySelector('#viso').textContent
                        }
                    };
                    // Išsaugome pilną sąskaitą į localStorage
                    locStor.store(pilnaSaskaita);

                    // Patikriname ar tikrai išsaugojo (debug)
                    console.log('Sąskaita išsaugota:', saskaita.data);
                    console.log('Visos sąskaitos localStorage:', locStor.read());
                    // Nukreipiame į sąskaitų sąrašą po išsaugojimo
                    window.location.href = 'read.html';
                });
            });
    };

    static initRead() {

        const invoices = locStor.read();

        // Jei sąskaitų nėra – parodome žinutę
        if (!invoices || invoices.length == 0) {
            document.querySelector('[data-list]').innerHTML = '<li class="list-group-item">Nėra išsaugotų sąskaitų</li>';
            return;
        }

        const template = document.querySelector('template');
        const listEl = document.querySelector('[data-list]');
        listEl.innerHTML = ''; // išvalymas sąrašo prieš įkėlimą

        invoices.forEach(inv => {
            const clone = template.content.cloneNode(true);

            clone.querySelector('[data-title]').textContent = inv.number;
            clone.querySelector('[data-date]').textContent = inv.date;
            clone.querySelector('[data-sum]').textContent = inv.totals.bendra;

            clone.querySelector('[data-edit]').setAttribute('href', 'update.html#' + inv.id);
            clone.querySelector('[data-delete]').setAttribute('href', 'delete.html#' + inv.id);
            clone.querySelector('[data-show]').setAttribute('href', 'show.html#' + inv.id);

            listEl.appendChild(clone);

        });

    }

    static initDelete() {
        const invoices = locStor.read();
        const id = window.location.hash.slice(1); // id paemimas is hashtago
        const invoice = invoices.find(inv => inv.id == id);
        if (!invoice) {
            window.location.href = 'read.html'; // puslapio redirectas
            return; 
        }

        document.querySelector('[data-title]').innerText = invoice.number;
        const destroyButton = document.querySelector('[data-destroy]');
        destroyButton.addEventListener('click', _ => {
            locStor.destroy(invoice.id);
            window.location.href = 'read.html';
        });

    }

    static initShow() {
        const invoices = locStor.read();
        const id = window.location.hash.slice(1);
        const invoiceData = invoices.find(inv => inv.id == id);
        if (!invoiceData) {
            window.location.href = 'read.html'; 
            return;
        }
    
        // pirmiau parodome konteinerį ir sekcijas
        document.querySelector('.konteineris').style.display = 'flex';
        document.querySelector('#pirma').style.display = 'flex';
        document.querySelector('#antra').style.display = 'flex';
    
        // kuriame Invoice ir renderinam
        const invoiceShow = new Invoice(invoiceData);
        invoiceShow.render();
    }

    static initUpdate() {
        const invoices = locStor.read();
        console.log(invoices)
        const id = window.location.hash.slice(1);
        const invoice = invoices.find(inv => inv.id == id);
    
        if (!invoice) {
            alert('Sąskaita nerasta!');
            window.location.href = 'read.html';
            return;
        }
    
        // parodyti paslėptus blokus
        document.querySelector('.konteineris').style.display = 'flex';
        document.querySelector('#pirma').style.display = 'flex';
        document.querySelector('#antra').style.display = 'flex';
    
        // Sukuriam invoice objektą ir renderinam
        const invoiceUpdate = new Invoice(invoice);
        invoiceUpdate.renderNumber();
        invoiceUpdate.renderDate();
        invoiceUpdate.renderSeller();
        invoiceUpdate.renderBuyer();
        invoiceUpdate.renderTransport();
        invoiceUpdate.renderUpdatedItems(); // čia jau input laukų versija
        invoiceUpdate.countTotal(); // pradinis skaičiavimas
    
        document.querySelector('[data-save]').addEventListener('click', () => {
            const rows = document.querySelectorAll('tbody tr');
          
            rows.forEach((row, i) => {
              const qtyEl = row.querySelector('.qty');
              const typeEl = row.querySelector('.discount-type');
              const valueEl = row.querySelector('.discount-value');
          
              if (qtyEl && typeEl && valueEl) {
                invoice.items[i].quantity = parseFloat(qtyEl.value) || 0;
                invoice.items[i].discount.type = typeEl.value;
                invoice.items[i].discount.value = parseFloat(valueEl.value) || 0;
              } else {
                console.warn(`Trūksta laukų eilutėje ${i}`);
              }
            });

            // const allDiscounts = invoiceSection.querySelectorAll('[data-discount]');
            // allDiscounts.forEach((input, i) => {
            //     input.addEventListener('change', _ => {
            //         const newDiscountValue = parseFloat(input.value);
            //         if (isNaN(newDiscountValue) || newDiscountValue < 0) {
            //             input.value = invoice.items[i].discount?.value || 0; // Reset to original if invalid
            //             return;
            //         }
            //         const discountType = document.querySelector(`input[name="discount-type-${i}"]:checked`);
            //         if (!discountType) {
            //             const fixedRadio = invoiceSection.querySelector(`input[name="discount-type-${i}"][value="fixed"]`);
            //             fixedRadio.checked = true;
            //         }
            //         invoice.items[i].discount = {
            //             value: newDiscountValue,
            //             type: discountType ? discountType.value : 'fixed'
            //         };
            //         updateItemTotal(i);
            //         calcTotals();
            //         updateTotals();
            //     });
            // });
          
            

            // Išsaugoti atnaujintą sąskaitą
            const invoices = locStor.read();
            const index = invoices.findIndex(inv => inv.id === invoice.id);
            if (index !== -1) {
              invoices[index] = invoice;
              locStor.write(invoices);
              window.location.href = 'read.html';
            }
          });

    }
    


}