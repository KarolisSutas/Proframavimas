console.log('NSO');


// const nso = {}; tuscias

const nso = {
    aliensCount: 4, // kablelis privalomas ir dvitaskis, o ne lygybe
    starSystem: 'Gama Epsilon 4587-888'
};

nso.speed = 50;
nso.speedType = 'km/s';

console.log(nso.speed + ' ' + nso.speedType);

console.log(nso);


// sukurti objekta me, kuris turi turet savybes vardui, pavardei, metams, svoris
// tada naudokite objekta ir kosolej atspausdinkite
//Vardenis Pavardenis gimė prieš 40 metų ir užaugo iki 50 svorio
// i objekta me prideti savybe, kurioje butu paskaiciuotas svoris po 10 metu

const me = {}

me.Vardas = 'Antanas';
me.Pavarde = 'Antanaitis';
me.amzius = 100;
me.amziusType = 'm';
me.Svoris = 100;
me.SvorisType = 'kg';
me.ateitiesSvoris = me.Svoris / me.amzius * 10 + me.Svoris;

console.log(me.Vardas + ' ' + me.Pavarde + ' ' + 'gimė prieš' + ' ' + me.amzius + ' ' + me.amziusType + ' ' + 'ir uzaugo iki' + ' ' + me.Svoris +  ' ' + me.SvorisType + '. ' + 'svoris po 10 metu' + ' ' + me.ateitiesSvoris + ' ' + me.SvorisType);



let A = 5;
let B = A; // priskirimas by value (reiksme).

A = A + 2;

console.log(A, B);

const C = {
    sk: 5 // jei keiciama savybe ir vidus const keiciasi
};
const D = C; // priskirymas pagal nuoroda (BY REFERENCE).

C.sk = C.sk + 2;

console.log(C, D);

// jei objektas tai reference jei ne tada by value

console.log(5 === 5);

const o1 = {sk:5};
const o2 = {sk:5};

const o3 = o2;

console.log(o2 === o1);


const barsukas = document.querySelector('h1');

const barsukas2 = barsukas;

console.log(barsukas);
console.log(barsukas2);


const namas = {
    stogas: 'Skardinas',
    kambariai: {
        virtuve: 'didele',
        svetaine: 'Dar didesne'
    }
};

console.log(namas.stogas, namas.kambariai.virtuve);

namas.durys = 'medines';

namas.kambariai.miegamasis = 'Gigantiskas';

// let ABC;

 // undefined - nepriskirta reiksme
console.log(namas?.langai?.pirmas); //klaustukas panaikina konsolej klaida

const noriuPaziuret = 'miegamasis';

console.log(namas.kambariai[noriuPaziuret]); 

// optional chaining operatorius (?.)
//nullish coalescing operator (??)



