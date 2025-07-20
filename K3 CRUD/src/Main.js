import locStor from './locStor.js'; // Importuojame locStor klasę darbui su localStorage
import Invoice from './Invoice.js'; // Importuojame Invoice klasę sąskaitos generavimui ir atvaizdavimui

export default class Main {
    static init() {
        // Inicializuojame localStorage su raktu „Sąskaitos“
        locStor.storageInit({ key: 'Sąskaitos' });

        // Patikriname ar esame puslapyje, kuriame reikia kurti sąskaitą
        if (document.querySelector('[data-create]')) {
            this.initCreate();
        } else if (document.querySelector('[data-read]')) {
            this.initRead();
        } else if (document.querySelector('[data-delete]')) {
            this.initDelete();
        }
        
    }


    static initCreate() {
        // Gauname atsitiktinius sąskaitos duomenis iš API
        fetch('https://in3.dev/inv/')
            .then(res => res.json()) // Konvertuojame atsakymą į JSON
            .then(data => {
                // Sukuriame naują Invoice objektą su gautais duomenimis
                const saskaita = new Invoice(data);
                console.log(saskaita)
                saskaita.render(); // Atvaizduojame sąskaitą puslapyje

                // Parodome konteinerį ir sekcijas
                document.querySelector('.konteineris').style.display = 'flex';
                document.querySelector('#pirma').style.display = 'flex';
                document.querySelector('#antra').style.display = 'flex';

                const clearButton = document.querySelector('[data-clear]');

                clearButton.addEventListener('click', () => {
                    window.location.href = 'create.html';
                })


                // Surandame mygtuką „Saugoti“
                const saveButton = document.querySelector('[data-save]');

                // Pridedame įvykio klausytoją mygtukui
                saveButton.addEventListener('click', () => {

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

                    // Pranešimas, kad sąskaita išsaugota
                    alert('Sąskaita išsaugota į localStorage!');

                    // Nukreipiame į sąskaitų sąrašą po išsaugojimo
                    window.location.href = 'read.html';
                });
            })
            .catch(err => console.error('Klaida gaunant duomenis iš API:', err));
    }

    static initRead() {

        const invoices = locStor.read();

        // Jei sąskaitų nėra – parodome žinutę
        if (!invoices || invoices.length === 0) {
            document.querySelector('[data-list]').innerHTML = '<li class="list-group-item">Nėra išsaugotų sąskaitų</li>';
            return;
        }

        const template = document.querySelector('template');
        const listEl = document.querySelector('[data-list]');
        listEl.innerHTML = ''; // išvalome sąrašą prieš įkeldami

        invoices.forEach(inv => {
            const clone = template.content.cloneNode(true);

            clone.querySelector('[data-title]').textContent = inv.number;
            clone.querySelector('[data-date]').textContent = inv.date;
            clone.querySelector('[data-sum]').textContent = inv.totals.bendra;

            clone.querySelector('[data-edit]').setAttribute('href', 'edit.html#' + inv.id);
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

}