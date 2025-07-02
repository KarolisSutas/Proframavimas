console.log('Hello, Kitty!');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/*

Kai reikia suskaičiuoti kartus kažkieno:
for
while - kai nežinome kiek ciklų reikia prasukti
do while

specialus ir keistas ciklas:
switch

kai reikia pereiti per struktūrą:
for in
for of

ciklų valdymas:
continue - naudojamas einamosios iteracijos nutraukimui
break

*/

for (let i = 0; i < 7; i++) {
    const random = rand(10, 99);

    if (random > 50) {
        continue;
    }

    console.log(`Nr.${i + 1} - ${random}`);

}
console.log('.....................');

for (let i = 0; i < 7; i++) {
    const random = rand(10, 99);

    if (random > 70) {
        break;
    }
    
    console.log(`Nr.${i + 1} - ${random}`);

}

console.clear();

for (let i = 0; i < 30; i++) {

    const HS = rand(0, 1) ? 'H' : 'S';
    console.log(HS);

    // if (HS == 'H') { labai blogai, taip nenaudojama
    //     break;
    // }

}
console.clear();

let HS1;
let HS2;
let saugiklis = 88;

do {
    if (--saugiklis == 0) {
        console.log('BUM');
        break;
    }

     HS1 = rand(0, 1) ? 'H' : 'S';
     HS2 = rand(0, 1) ? 'H' : 'S';
    console.log(HS1, HS2);

} while(HS1 != 'H' || HS2 != 'H'); // pirma parasyti teigini o paskui pakeist i neigini

/*

== <-> !=
> <-> <=
< <-> >=
|| <-> &&

*/

// 1. Meskite monetą tol kol tris kartus iškris herbas
// 1. Meskite monetą tol kol iš eilės tris kartus iškris herbas
console.log('..................');
// 1.

let kiekis = 0;
saugiklis = 88;

do {
    if (--saugiklis == 0) {
        console.log('BUM');
        break;
    }

    const HS = rand(0, 1) ? 'H' : 'S';
    console.log(HS);
    if (HS == 'H') {
        kiekis++;
    }
 
} while(kiekis != 3);

console.log('.................')


let kiekis1 = 0;

  let saugiklis1 = 50;

 do {

    if (--saugiklis == 0) {
        console.log('BUM');
        break;
    }

        HS3 = rand(0, 1) ? 'H' : 'S';
        console.log(HS3);
        if (HS3 == 'H') {
            kiekis1++;
        } else {
            kiekis1 = 0;
        }

    } while(kiekis1 != 3);

