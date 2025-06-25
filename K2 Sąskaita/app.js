console.log('Sąskaita')

fetch('https://in3.dev/inv/')
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
        printSeller(data);
        printBuyer(data);
        printNumber(data);
        printDate(data);
        printItems(data.items);
        printTransport(data);
        countTotal();
        document.querySelector('.konteineris').style.display = 'flex';
        document.querySelector('#pirma').style.display = 'flex';
        document.querySelector('#antra').style.display = 'flex';
    }); 

const printNumber = numeris => {
    const h2 = document.querySelector('#number');
    h2.innerHTML = `Serija: ${numeris.number}`;
}

const printDate = data => {
    const h2 = document.querySelector('#date');
    h2.innerHTML = `${data.date}`;
}

const printSeller = pardavėjas => {
    const div = document.querySelector('#seller');
        div.innerHTML = ` <b>PARDAVĖJAS</b><br><br> 
        <b>${pardavėjas.company.seller.name}</b><br>
        El. paštas: ${pardavėjas.company.seller.email}<br>
        Tel. Nr. : ${pardavėjas.company.seller.phone}<br>
        Adresas: ${pardavėjas.company.seller.address}<br>
        Įmonės kodas: ${pardavėjas.company.seller.code}<br>
        PVM mokėtojo kodas: ${pardavėjas.company.seller.vat}`;
};

const printBuyer = pirkėjas => {
    const div = document.querySelector('#buyer');
        div.innerHTML = ` <b>PIRKĖJAS</b><br><br> 
        <b>${pirkėjas.company.buyer.name}</b><br>
        El. paštas: ${pirkėjas.company.buyer.email}<br>
        Tel. Nr. : ${pirkėjas.company.buyer.phone}<br>
        Adresas: ${pirkėjas.company.buyer.address}<br>
        Įmonės kodas: ${pirkėjas.company.buyer.code}<br>
        PVM mokėtojo kodas: ${pirkėjas.company.buyer.vat}<br><br><br><br><br>
        <b>Apmokėti iki: ${pirkėjas.due_date}</b>`;

};

const printItems = prekės => {
    const tbody = document.querySelector('tbody');
    const template = document.querySelector('[data-items-content]');
  
    prekės.forEach(items => {
      const clone = template.content.cloneNode(true);
  
      clone.querySelector('.prekė').textContent = items.description;
      clone.querySelector('.kiekis').textContent = items.quantity;
      clone.querySelector('.kaina').textContent = `${items.price.toFixed(2)} €`;
  
      let nuolaidosTekstas = '-';
      let Kaina = items.price;
  
      if (items.discount.type == 'percentage') {
        const procentinėNuolaida = items.price * items.discount.value / 100;
        Kaina -= procentinėNuolaida;
        nuolaidosTekstas = `-${items.discount.value}% (-${procentinėNuolaida.toFixed(2)} €)`;
      } else if (items.discount.type == 'fixed') {
        Kaina -= items.discount.value;
        nuolaidosTekstas = `-${items.discount.value.toFixed(2)} €`;
      }
  
      let suma = Kaina * items.quantity;
      clone.querySelector('.nuolaida').textContent = nuolaidosTekstas;
      clone.querySelector('.suma').textContent = `${(suma).toFixed(2)} €`;
  
      tbody.appendChild(clone);
    });
  }

  const printTransport = tr => {
    const td = document.querySelector('#trans');
    td.innerHTML = `${(tr.shippingPrice).toFixed(2)} €`;
}

const countTotal = () => {
    let suma = 0;

    // Paimam visas lentelės eilutes iš tbody
    const rows = document.querySelectorAll('#pirma table tbody tr');

    rows.forEach(row => {
        const lastCell = row.querySelector('td:last-child');
        if (lastCell) {
            const value = parseFloat(lastCell.textContent.trim());
            if (!isNaN(value)) {
                suma += value;
            }
        }
    });

    // Transporto kaina
    const transEl = document.querySelector('#trans');
    const transportas = transEl ? parseFloat(transEl.textContent.trim()) : 0;

    // Skaičiuojam galutinius rezultatus
    const tarpinė = suma;
    const suTransportu = tarpinė + transportas;
    const pvm = suTransportu * 0.21;
    const viso = suTransportu + pvm;

    // Įrašom reikšmes atitinkamuose laukeliuose
    document.querySelector('#tarp').textContent = `${tarpinė.toFixed(2)} €`;
    document.querySelector('#pvm').textContent = `${pvm.toFixed(2)} €`;
    document.querySelector('#viso').textContent = `${viso.toFixed(2)} €`;
};


// const printTarpinė = tarp => {
//     const td = document.querySelector('.tarp');
//     td.innerHTML = (Kaina * items.quantity) + tr.shippingPrice
// }