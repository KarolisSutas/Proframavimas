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
console.log(Asuma);

// 1.B, 1.C, 1.D
const B = a.toString() + ' ' + b.toString() + ' ' + c.toString() + ' ' + Asuma.toString();
console.log(B, typeof B, typeof Asuma.toString());


console.clear();
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

for (let i = 0; i < 5; i++) {
  f = rand(10, 20); 
  console.log(f);
}
// 7A
e = f;
console.log('e: ', e);





















