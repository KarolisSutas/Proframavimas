console.log('Hello');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// do while ciklas yra nuo 1 iki daug kartu
// while nuo 0 iki daug



// Stasys vairuoja BOLT ir nori nusipirkt meskere uz 200eur
// per nakti uzdirba nuo 20 iki 80eur.


let stasys = 0;

do {
    const uzdarbis = rand(20, 80)
    stasys += uzdarbis;
    console.log(stasys);
} while(stasys < 200);

console.clear();

// turi mociute ir siandien Stasio gimtadienis.
// while nuo 0 iki daug

stasys = 0;

const mociute = rand(50, 300);

stasys = mociute;

console.log(stasys, 'po gimtadienio');

while(stasys < 200) {
    const uzdarbis = rand(20, 80)
    stasys += uzdarbis;
    console.log(stasys);
}
console.clear();

// SWITCH

// pastomatas S, M, L, XL

const siunta = 'M';

console.log('Turim ', siunta);

if (siunta == 'S') {
    console.log('Tikrinam S');
}

if (siunta == 'S' || siunta == 'M') {
    console.log('Tikrinam M');
}

if (siunta == 'S' || siunta == 'M' | siunta == 'L') {
    console.log('Tikrinam L');
}
console.log('Tikrinam XL');


console.log('...................');

switch(siunta) {
    case 'S': console.log('Tikrinam S');
    case 'M': console.log('Tikrinam M');
    case 'L': console.log('Tikrinam L');
    default: console.log('Tikrinam XL');
}

console.log('...................');

if (siunta == 'S') {
    console.log('Tikrinam S');
}

else if (siunta == 'M') {
    console.log('Tikrinam M');
}

else if (siunta == 'L') {
    console.log('Tikrinam L');
} else {
    console.log('Tikrinam XL');
}

console.log('...................');

// jeigu sudedam break gaunam if, jei ne gaunam ciklus
switch (siunta) {
    case 'S':
        console.log('Tikrinam S');
        break;
    case 'M':
        console.log('Tikrinam M');
        break;
    case 'L':
        console.log('Tikrinam L')
        break;
    default:
        console.log('Tikrinam XL');
}

console.clear();

const masyvas = [
    'Bijūnas', 
    'Jurginas', 
    'Rožė', 
    'Tulpė', 
    'Narcizas'
];

for (i = 0; i < masyvas.length; i++) {
    const gelyte = masyvas[i];
    console.log(gelyte);
}

console.log('...................');

// kai reikia isorinio ciklo

for ( const gelyte of masyvas) {
    if (gelyte == 'Rožė') {
        continue;
    }
    console.log(gelyte);
}

// nesigauna taip su vidiniu 
// masyvo metodas nesibreakina nesicontinueina
// masyvas.forEach(gelyte => {
//     if (gelyte == 'Rožė') {
//         break;
//     }
//     console.log(gelyte);
// })
console.log('...................');

const objektas = {
    darze:'Bijūnas',
    prie_kelio:'Jurginas', 
    po_langu:'Rožė', 
    sode:'Tulpė', 
    pamerktas:'Narcizas'
};

// of duoda reiksme, o in duoda indeksa arba rakta
// gali eiti per enumus - rinkinys sutartiniu stringu
// gali pereiti per objekta
for ( const gelyte in objektas) {
    if (objektas[gelyte] == 'Rožė') {
        continue;
    }
    console.log(objektas[gelyte]);
}

console.log('...................');

// sukurkite  masyva su 5 elementais kurie yra random skaiciai nuo 5 iki 10

let f = [rand(5, 10), rand(5, 10), rand(5, 10), rand(5, 10), rand(5, 10)];
console.log(f);

const m = [];
for (let i = 0; i < 5; i++) {
    m.push(rand(5, 10)); 
}

console.log(m);