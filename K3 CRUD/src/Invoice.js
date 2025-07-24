console.log('Sąskaita')

export default class Invoice {

    constructor(data) {
        this.data = data;
        this.items = data.items;
        this.shippingPrice = data.shippingPrice;
    }

    render() {
        this.renderNumber();
        this.renderDate();
        this.renderSeller();
        this.renderBuyer();
        this.renderItems();
        this.renderTransport();
        this.countTotal();
    }

    renderNumber() {
        const el = document.querySelector('#number');
        if (!el) return; // jei nėra elemento – nutraukiam
        el.innerHTML = `Serija: ${this.data.number}`;
      }

    renderDate() {
        const el = document.querySelector('#date')
        if (!el) return;
        el.innerHTML = `${this.data.date}`;
    }

    renderSeller() {
        const seller = this.data.company.seller;
        if (!document.querySelector('#seller')) {
            return;
        }

        document.querySelector('#seller').innerHTML = `
          <b>PARDAVĖJAS</b><br><br> 
          <b>${seller.name}</b><br>
          El. paštas: ${seller.email}<br>
          Tel. Nr.: ${seller.phone}<br>
          Adresas: ${seller.address}<br>
          Įmonės kodas: ${seller.code}<br>
          PVM mokėtojo kodas: ${seller.vat}`;
    }

    renderBuyer() {
        const buyer = this.data.company.buyer;
        if (!document.querySelector('#buyer')) {
            return;
        }
        document.querySelector('#buyer').innerHTML = `
          <b>PIRKĖJAS</b><br><br> 
          <b>${buyer.name}</b><br>
          El. paštas: ${buyer.email}<br>
          Tel. Nr.: ${buyer.phone}<br>
          Adresas: ${buyer.address}<br>
          Įmonės kodas: ${buyer.code}<br>
          PVM mokėtojo kodas: ${buyer.vat}<br><br><br><br><br>
          <b>Apmokėti iki: ${this.data.due_date}</b>`;
    }

    renderItems() {
        const tbody = document.querySelector('tbody');
        if (!document.querySelector('tbody')) {
            return;
        }
        const template = document.querySelector('[data-items-content]');
        tbody.innerHTML = '';

        this.items.forEach(item => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.prekė').textContent = item.description;
            clone.querySelector('.kiekis').textContent = item.quantity;
            clone.querySelector('.kaina').textContent = `${item.price.toFixed(2)} €`;

            let nuolaidosTekstas = '-';
            let Kaina = item.price;

            if (item.discount.type === 'percentage') {
                const procentinėNuolaida = item.price * item.discount.value / 100;
                Kaina -= procentinėNuolaida;
                nuolaidosTekstas = `-${item.discount.value}% (-${procentinėNuolaida.toFixed(2)} €)`;
            } else if (item.discount.type === 'fixed') {
                Kaina -= item.discount.value;
                nuolaidosTekstas = `-${item.discount.value.toFixed(2)} €`;
            }

            const suma = Kaina * item.quantity;
            clone.querySelector('.nuolaida').textContent = nuolaidosTekstas;
            clone.querySelector('.suma').textContent = `${suma.toFixed(2)} €`;

            tbody.appendChild(clone);
        });
    }

    renderTransport() {
        if (!document.querySelector('#trans')) {
            return;
        }
        document.querySelector('#trans').textContent = `${this.shippingPrice.toFixed(2)} €`;

    }

    countTotal() {
        if (!document.querySelector('#pirma table tbody tr')) {
            return;
        }
        const rows = document.querySelectorAll('#pirma table tbody tr');
        let suma = 0;

        rows.forEach(row => {
            const lastCell = row.querySelector('td:last-child');
            if (lastCell) {
                const value = parseFloat(lastCell.textContent.trim());
                if (!isNaN(value)) {
                    suma += value;
                }
            }
        });

        const transport = this.shippingPrice || 0;
        const tarpine = suma;
        const suTransportu = tarpine + transport;
        const pvm = suTransportu * 0.21;
        const viso = suTransportu + pvm;

        document.querySelector('#tarp').textContent = `${tarpine.toFixed(2)} €`;
        document.querySelector('#pvm').textContent = `${pvm.toFixed(2)} €`;
        document.querySelector('#viso').innerHTML = `<b>${viso.toFixed(2)} €</b>`;
    }

};


// console.log('Sąskaita');

// export default class Invoice {

//     constructor(data) {
//         this.data = data;
//         this.items = data.items;
//         this.shippingPrice = data.shippingPrice;
//     }

//     render() {
//         this.renderNumber();
//         this.renderDate();
//         this.renderSeller();
//         this.renderBuyer();
//         this.renderItems();   // dabar su input laukais
//         this.renderTransport();
//         this.countTotal();
//     }

//     renderNumber() {
//         const el = document.querySelector('#number');
//         if (!el) return;
//         el.innerHTML = `Serija: ${this.data.number}`;
//     }

//     renderDate() {
//         const el = document.querySelector('#date');
//         if (!el) return;
//         el.innerHTML = `${this.data.date}`;
//     }

//     renderSeller() {
//         const seller = this.data.company.seller;
//         const el = document.querySelector('#seller');
//         if (!el) return;

//         el.innerHTML = `
//           <b>PARDAVĖJAS</b><br><br> 
//           <b>${seller.name}</b><br>
//           El. paštas: ${seller.email}<br>
//           Tel. Nr.: ${seller.phone}<br>
//           Adresas: ${seller.address}<br>
//           Įmonės kodas: ${seller.code}<br>
//           PVM mokėtojo kodas: ${seller.vat}`;
//     }

//     renderBuyer() {
//         const buyer = this.data.company.buyer;
//         const el = document.querySelector('#buyer');
//         if (!el) return;

//         el.innerHTML = `
//           <b>PIRKĖJAS</b><br><br> 
//           <b>${buyer.name}</b><br>
//           El. paštas: ${buyer.email}<br>
//           Tel. Nr.: ${buyer.phone}<br>
//           Adresas: ${buyer.address}<br>
//           Įmonės kodas: ${buyer.code}<br>
//           PVM mokėtojo kodas: ${buyer.vat}<br><br><br><br><br>
//           <b>Apmokėti iki: ${this.data.due_date}</b>`;
//     }

//     renderItems() {
//         const tbody = document.querySelector('tbody');
//         const template = document.querySelector('[data-items-content]');
//         tbody.innerHTML = '';

//         this.items.forEach((item, index) => {
//             const clone = template.content.cloneNode(true);
//             clone.querySelector('.prekė').textContent = item.description;

//             // ✅ kiekis kaip input
//             clone.querySelector('.kiekis').innerHTML =
//                 `<input type="number" min="1" value="${item.quantity}" data-index="${index}" class="edit-qty">`;

//             // ✅ kaina tik tekstas
//             clone.querySelector('.kaina').textContent = `${item.price.toFixed(2)} €`;

//             // ✅ nuolaida kaip input (paprastumui tik €
//             const discountValue = item.discount?.value || 0;
//             clone.querySelector('.nuolaida').innerHTML =
//                 `<input type="number" min="0" step="0.01" value="${discountValue}" data-index="${index}" class="edit-discount">`;

//             // ✅ pradinė suma
//             const suma = this.calculateItemSum(item);
//             clone.querySelector('.suma').textContent = `${suma.toFixed(2)} €`;

//             tbody.appendChild(clone);
//         });

//         // Po atvaizdavimo prijungiam event'us
//         this.attachEditEvents();
//     }

//     // ✅ apskaičiuoja vienos prekės sumą
//     calculateItemSum(item) {
//         let finalPrice = item.price;

//         if (item.discount?.type === 'percentage') {
//             finalPrice -= item.price * (item.discount.value / 100);
//         } else if (item.discount?.type === 'fixed') {
//             finalPrice -= item.discount.value;
//         }

//         if (finalPrice < 0) finalPrice = 0; // apsauga nuo minusų
//         return finalPrice * item.quantity;
//     }

//     // ✅ gaudo kiekio ir nuolaidos pakeitimus
//     attachEditEvents() {
//         const qtyInputs = document.querySelectorAll('.edit-qty');
//         const discountInputs = document.querySelectorAll('.edit-discount');

//         qtyInputs.forEach(input => {
//             input.addEventListener('input', (e) => {
//                 const index = e.target.dataset.index;
//                 const value = parseFloat(e.target.value) || 1;
//                 this.items[index].quantity = value;
//                 this.updateItemRow(index);
//             });
//         });

//         discountInputs.forEach(input => {
//             input.addEventListener('input', (e) => {
//                 const index = e.target.dataset.index;
//                 const value = parseFloat(e.target.value) || 0;

//                 if (!this.items[index].discount) {
//                     this.items[index].discount = { type: 'fixed', value: 0 };
//                 }
//                 this.items[index].discount.value = value;
//                 this.items[index].discount.type = 'fixed'; // paprastumui €

//                 this.updateItemRow(index);
//             });
//         });
//     }

//     // ✅ atnaujina konkrečios eilutės sumą + perskaičiuoja visą lentelę
//     updateItemRow(index) {
//         const tbody = document.querySelector('tbody');
//         const row = tbody.querySelectorAll('tr')[index];
//         const sumaCell = row.querySelector('.suma');

//         const item = this.items[index];
//         const suma = this.calculateItemSum(item);
//         sumaCell.textContent = `${suma.toFixed(2)} €`;

//         this.countTotal();
//     }

//     renderTransport() {
//         const el = document.querySelector('#trans');
//         if (!el) return;
//         el.textContent = `${this.shippingPrice.toFixed(2)} €`;
//     }

//     countTotal() {
//         const rows = document.querySelectorAll('#pirma table tbody tr');
//         let suma = 0;

//         rows.forEach(row => {
//             const lastCell = row.querySelector('td:last-child');
//             if (lastCell) {
//                 const value = parseFloat(lastCell.textContent.replace('€', '').trim());
//                 if (!isNaN(value)) {
//                     suma += value;
//                 }
//             }
//         });

//         const transport = this.shippingPrice || 0;
//         const tarpine = suma;
//         const suTransportu = tarpine + transport;
//         const pvm = suTransportu * 0.21;
//         const viso = suTransportu + pvm;

//         document.querySelector('#tarp').textContent = `${tarpine.toFixed(2)} €`;
//         document.querySelector('#pvm').textContent = `${pvm.toFixed(2)} €`;
//         document.querySelector('#viso').innerHTML = `<b>${viso.toFixed(2)} €</b>`;
//     }
// }
