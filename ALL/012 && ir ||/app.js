const b1 = 3;
const b2 = 5;
const b3 = 3 + 5;
console.log(b3);

const a1 = document.querySelector('.a1').innerText;
const a2 = document.querySelector('.a2').innerText;

const suma = +a1 + +a2;

const a3 = document.querySelector('.a3');

a3.innerText = suma;

//taisykle 1: automatiskai suvienodina tipus. turi buti vienodi

const skaicius = 55;
const stringas = '411a455';

const skaiciusIsStringo1 = Number(stringas); //labai teisingas
const skaiciusIsStringo2 = parseInt(stringas); // specializuotai teisingas
const skaiciusIsStringo3 = +stringas; // sutrumpinintas hackas

console.log(skaiciusIsStringo1, skaiciusIsStringo2, skaiciusIsStringo3);

console.log(skaicius + stringas);
console.log(stringas + skaicius);

// dalyba su liekana %. Tas kas neissidalina su sveiku skaicium
console.log( 9 % 3);

const A = 0.2 + 0.4

const B = 5.25822

console.log(B.toFixed(2)); //fixuotas stringas (2 skaiciai, po kablelio) ir suapvalina. 

console.log(78/0); //Infinity begalybe

//didina skaiciu vienetu c++

let C = 20;

console.log(C++); // 20
console.log(C); // 21

console.log(++C); // 22
console.log(C); // 22

let V1 = 2;

const R1 = ++V1 * V1++;

console.log(R1);

// V2 = V2 + 5;
let V2 = 4;
 
V2 += 5; // patrumpintas uzrasymas.

console.log(V2); 

// BOLEAN kintamasis

let B1 = true;
let B2 = false;

let tusciasStringas = ''; //tuscias stringas tik tada kai nera tarpu ir tuscias
// true -1 false-0

console.log(typeof B1, typeof B2);

// ARBA OR ||
// IR AND &&
// NE NOT !

console.clear()

console.log('true || true', 'true || true');      // TRUE
console.log('true || flase', 'true || false');    // TRUE
console.log('flase || true', 'false || true');    // TRUE
console.log('flase || flase', 'false || false');  // FALSE
console.log('------------------');
console.log('true && true', 'true && true');      // TRUE
console.log('true && flase', 'true && false');    // FALSE
console.log('flase && true', 'false && true');    // FALSE
console.log('flase && flase', 'false && false');  // FALSE
console.log('------------------');
console.log('!true', '!false');                   // FALSE
console.log('!false', '!true');                   // TRUE     


