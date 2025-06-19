console.log('Sąskaita')

fetch('https://in3.dev/inv/')
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
        printData(data);
    }); 

const printData = data => {
    const div = document.querySelector('#duomenys');
        div.innerHTML = `
        ${data.company.seller.name}<br>
        ${data.company.seller.email}<br>
        ${data.company.seller.phone}<br>
        ${data.company.seller.address}<br>
        ${data.company.seller.code}<br>
        ${data.company.seller.vat}`;
};

