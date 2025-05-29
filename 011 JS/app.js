console.log('Labas, Bebrai!');

// be kabuciu skaicius
console.log(87 + 13); 

// kabutese tekstas
console.log('87' + '13');

// visi skaiciai JS yra NUMBER tipas
// visi tekstai yra STRING tipas

// var tik programeriai naudoja var manoKintamasis = 10;
let manoKintamasis = 17; //kintamasis kuri galima keist
const manoKintamasis2 = 3; //panaudoti tik viena karta

manoKintamasis = '20';

console.log(typeof manoKintamasis);

console.log(manoKintamasis * manoKintamasis2);

// kitu kintamuju rinkinys tai objektas

let medis = {};

medis.tipas = 'Liepa';
medis.aukstis = 24;
medis.matavimoVienetai = 'm';

console.log(medis);

const manoH1 = document.querySelector('h1');
//null tai objekto tipo kintamasis kuris neegzistuoja

manoH1.style.color = 'crimson';
manoH1.style.fontSize = '50px';

console.log(manoH1);

// let manoPBarsukas = document.querySelector('p.barsukas');

// manoPBarsukas.style.color = 'green';

// let manoPBriedis = document.querySelector('p.briedis');

// manoPBriedis.style.color = 'blue';

const p1 = document.querySelector('p');
const p2 = document.querySelector('p + p');

p1.style.color = 'skyblue';
p2.style.color = 'skyblue';

const mano= 'Vištas';

const p3 = document.querySelector('p + p + p');
// valdyti vidu
// p3.innerText = 'Meškas';
p3.innerHTML = `<span class="animal">
Me<b>š</b>ka ${mano}
<span>`; //su backtik galima dalinti eilutes kad aiskiau butu




