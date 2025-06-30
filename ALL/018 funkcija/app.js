console.log('Have fun!');


const manoStringas = 'AAA';
const manoStringas2 = 'A'.repeat(3);

const manoFunkcija = function() {
    return 'BBB';
}

console.log(manoStringas);
console.log(manoFunkcija); 
console.log(manoFunkcija()); // skliausteliai prie pavadinimo grazina rezultata


const manoFunkcija2 = function() {
    return 'B'.repeat(3);
}


console.log(manoStringas2);

console.log(manoFunkcija2());

const manoFunkcija3 = function(kiekis) { // kiekis yra parametras. kiekis yra susigalvotas kintamasis. 
    kiekis = kiekis + 2;
    return 'B'.repeat(kiekis); // funkcijos deklaravimas
}

console.log(manoFunkcija3(5)); //  taip galima parasyti kieki ir isves funkcija skaiciu koki ivedem
console.log(manoFunkcija3(10)); // funkcijos naudojimas. Ta pacia funkcija galim naudoti kiek norim kartu
console.log(manoFunkcija3(15)); // 15 yra argumentas.

const fun1 = function(pa1, pa2) {
    const rez = pa1 + pa2;
    return rez;
}

const sk1 = 8;

console.log(fun1(sk1, 1));
console.log(fun1(sk1, 7));

const fun2 = function(pa1, pa2, pa3 = 5) { // pa3 = 5 default reiksme, jei argumentas duotas tada pasiima argumento reiksme
    const rez1 = pa1 + pa2;
    const rez2 = pa1 + pa2 + pa3;
    // const rez = [rez1, rez2]
    // const rez = {};
    // rez.r1 = rez1;
    // rez.r2 = rez2;

    const rez = [];
    rez.push(rez1);
    rez.push(rez2);

    return rez;
}

// console.log(fun2(2, 4, 8, 10));
console.log(fun2(7, 7));


// parašykite funkciją kuri gauna 2 skaičius ir grąžina didesnį (paprastumo dėlei skaičiai negali būti lygus)
let didesnis = gautiDidesni(34, 12);

function gautiDidesni(skaicius1, skaicius2) {
    // 1 variantas
    if (skaicius1 > skaicius2) {
         return skaicius1;
     } else
         return skaicius2;
    }

console.log(didesnis);

// 2 variantas
const daugiau = function(sk1, sk2) {
    let rez;
    if (sk1 > sk2) {
        rez = sk1;
    } else {
        rez = sk2;
    }
    return rez;
    // 3 variantas
    // return sk1 > sk2 ? sk1 : sk2;
}

console.log(daugiau(5, 8));
console.log(daugiau(10, 7));


const obuoliai = function() {
    return this.sakos * 5;
}

const medis = {};
medis.sakos = 10;
medis.obuoliai = obuoliai; 
console.log(medis.obuoliai());


const medis2 = {};
medis2.sakos = 31;
medis2.obuoliai = obuoliai; 
console.log(medis2.obuoliai());



const hVienas = function(tekstas, spalva = 'crimson') { // anonimine funkcija. funkcijos vardas priskirimas kintamajam.
const section = document.querySelector('section');
const h1 = document.createElement('div');
h1.innerText = tekstas;
h1.style.color = spalva;
section.appendChild(h1);
}

hVienas('guliasas');
hVienas('Barsukas', 'orange');
hVienas('Briedis');


function suma(a, b) { // vardine funkcija
    return a + b;
}

function suma(a, b) { // vardine funkcija
    return a * b;
}

const suma2 = function(a, b) { // anonimine funkcija
    return a + b;
}

// const suma2 = function(a, b) {
//     return a * b;
// }

console.log( 'anonimine funkcija:', suma2(5, 6));
console.log( 'vardine funkcija:', suma(5, 6));
