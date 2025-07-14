console.log('Sąskaita')

fetch('https://in3.dev/inv/')
    .then(res => res.json())
    .then(data => {
        const saskaita = new Invoice(data);
        saskaita.render();
        document.querySelector('.konteineris').style.display = 'flex';
        document.querySelector('#pirma').style.display = 'flex';
        document.querySelector('#antra').style.display = 'flex';
    }); 

class Invoice {

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

        document.querySelector('.konteineris').style.display = 'flex';
        document.querySelector('#pirma').style.display = 'flex';
        document.querySelector('#antra').style.display = 'flex';
    }

    renderNumber() {
        document.querySelector('#number').innerHTML = `Serija: ${this.data.number}`;
    }

    renderDate() {
        document.querySelector('#date').innerHTML = `${this.data.date}`;
    }

    renderSeller() {
        const seller = this.data.company.seller;
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
        document.querySelector('#trans').textContent = `${this.shippingPrice.toFixed(2)} €`;
    }

    countTotal() {
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
