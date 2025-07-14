console.log('5 namų darbas');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('1 užduotis....................');

// 1.
let a = rand(5, 25);
console.log('a:', a);
let b = rand(5, 25);
console.log('b:', b);
let c = rand(5, 25);
console.log('c:', c);

// 1.A
const Asuma = a + b + c;
console.log('suma: ', Asuma);

// 1.B, 1.C, 1.D
const B = a.toString() + ' ' + b.toString() + ' ' + c.toString() + ' ' + Asuma.toString();
console.log(B, typeof B, typeof Asuma.toString());


// console.clear();
// 2.
console.log('2 užduotis....................');

let d = rand(5, 10);
console.log('d:', d);

// 3.
console.log('3 užduotis....................');

let labas = 'Labas';

for (let i = 0; i < 5; i++) {
     console.log(labas);
}

// 4. 
console.log('4 užduotis....................');

for (let i = 0; i < 7; i++) {
    console.log(d);
}

// 5. 
console.log('5 užduotis....................');

for (let i = 0; i < d; i++) {
    console.log(d);
}

// 6. 
console.log('6 užduotis....................');

for (let i = 0; i < d; i++) {
    if (d > 7) {
        console.log(d);
    }
}

 console.clear();
// 7. 
console.log('7 užduotis....................');

let e;
let iteracijosSuma = 0;
let cStringas = [];


for (let i = 0; i < 5; i++) {
  f = rand(10, 20); 
  console.log(f);
  iteracijosSuma += f;
  cStringas.push(f);

}
// 7A, B
e = iteracijosSuma;
console.log('suma: ', e);

// 7C, D
let tekstas = cStringas.join(' ') + ' ' + e.toString();
console.log(tekstas, typeof tekstas);

console.log('8 užduotis....................');

let sk = rand(10, 25);
let saugiklis = 50;
let sumask = 0;
let atmestisk = 0;
let iteracija = 0;
let Lyginiai = 0;
let Nelyginiai = 0;


do {

    if (--saugiklis == 0) {
        console.log('BUM');
        break;

    }

    sk = rand(10, 25);

    if (sk <= 18 && sk >= 12) {
        sumask += sk;
    }

    if (sk > 18 && sk > 12) {
        atmestisk++;
    }

    if (sk >= 12) {
        iteracija++;
    }

    sk % 2 == 0 ? Lyginiai++ : Nelyginiai++;

    console.log(sk);

} while (sk >= 12);

console.log('Iteracija:', iteracija);
console.log('Suma: ', sumask, 'Atmesti: ', atmestisk);
console.log('Lyginiai', Lyginiai, 'Nelyginiai', Nelyginiai);


const t = 5;
 t = 7;
    console.log(t);






















