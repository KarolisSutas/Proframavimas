console.log('Sąskaita')

fetch('https://in3.dev/inv/')
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
        printSeller(data);
        printBuyer(data);
        printNumber(data);
        printDate(data);
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


