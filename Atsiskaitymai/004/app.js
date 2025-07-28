console.log('Atsiskaitymas 004');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

console.log('.....1 uždavinys.....');

const generBtn = document.querySelector('#gener');
const res1 = document.querySelector('#pirmas');
const res2 = document.querySelector('#antras');

generBtn.addEventListener('click', _ => {

    const skaicius1 = rand(1, 6); 
    const skaicius2 = rand(1, 6); 
    
    res1.innerText = skaicius1;
    res2.innerText = skaicius2;

    if (skaicius1 == skaicius2) {
        res1.style.color = 'red';
        res2.style.color = 'red';
    } else {
        res1.style.color = 'black';
        res2.style.color = 'black';
    }

  });

console.log('.....2 uždavinys.....');


  let box = [];
  const pridetBtn = document.querySelector('#pridet');
  const h3 = document.querySelector('h3');
  let suma = 0;

  pridetBtn.addEventListener('click', _ => {

    const skaicius3 = rand(1, 10); 

    box.push(skaicius3);
    console.log(box);
    
    suma += skaicius3;
    h3.innerText = suma;

  });

console.log('.....3 uždavinys.....');

const ul = document.querySelector('ul');
africa.forEach(i => {
    if (i != '') {
        const li = document.createElement('li');
        li.innerText = i;
        ul.appendChild(li);
    }
});

console.log('.....4 uždavinys.....');

const plusBtn = document.querySelector('#plus');
const minBtn = document.querySelector('#min');
const h5 = document.querySelector('h5');
const sk1 = document.querySelector('#input1');
const sk2 = document.querySelector('#input2');
let rez = 0;

plusBtn.addEventListener('click', _ => {

    rez = Number(sk1.value) + Number(sk2.value);
    h5.innerHTML = rez;

});

minBtn.addEventListener('click', _ => {

    rez = Number(sk1.value) - Number(sk2.value);
    h5.innerHTML = rez;

});




