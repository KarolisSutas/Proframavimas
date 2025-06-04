console.log('Labas, bebrionai!');

const namas = {  
    kambariai: 5,
    langai: true,
    aukstai: 2
};

const pieštukai = [
    'raudonas',
    'mėlynas',
    'žalias',
    'geltonas'
];

console.log(namas);

// console.log(pieštukai[1]);
// pieštukai[2] = 'oranžinis'; // pakeicia spalva i oranzinis

pieštukai[4] = 'rožinis'; //pridedame nauja indeksa

// pieštukai[6] = 'baltas'; 

pieštukai.push('baltas'); // Ideda i masyvo pabaiga


const temp = pieštukai[0]; // saugome piestuko spalva i temp kintamaji
pieštukai[0] = pieštukai[3]; // pirma piestuka pakeiciam i ketvrta
pieštukai [3] = temp; // ketvirta piestuka pakeiciam i pirmo spalva

console.log(pieštukai, pieštukai.length); // isvedame piestuku masyva ir jo ilgi

// ARRAY
const objektynas = [
    {a: 1, b: 2},
    {a: 3, b: 4},
    777,
    {a: 7, b: 8}
];

const A = objektynas[0];
objektynas.push(A);

objektynas[0].a = 10; // pakeiciam pirmo objekto reiksme i 10
objektynas[0].c = 20; // pridedame nauja savybe c su reiksme 20

console.log(objektynas);

// CIKLAS

for(let i = 0; i < 10; i++) // i skaiciuotuvas, kartojam kol i < 10 true, i++ po pakartojimo padidinam i + 1
{
    console.log('GA GA');
}

for (let i = 0; i < pieštukai.length; i++) {
    console.log(pieštukai[i]);
    // console.log(`Pieštukas ${i + 1}: ${pieštukai[i]}`);
}

let htmlLis = '';

for (let i = 0; i < pieštukai.length; i++) {
    htmlLis += `<li>${pieštukai[i]}</li>`;
}

console.log(htmlLis);

const ul = document.querySelector('ul'); // pasirenkame ul elementa
ul.innerHTML = htmlLis; // irasome sukurta html i ul elementa

const allLis = document.querySelectorAll('li');

console.log(allLis);

for (let i = 0; i < allLis.length; i++) {
    const li = allLis[i];
    if( i % 2) { // atskirti elementa kita spalva ar savybe
        li.style.color = 'orange';
    }else {
    li.style.color = 'crimson';
    }
}