console.log('Atsiskaitymas');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('1 uzd.............');

let kauliukas1 = rand(1, 6);
let kauliukas2 = rand(1, 6);

const rez = kauliukas1 + kauliukas2;

    if (rez > 8) {
        console.log('kaul1', kauliukas1, 'kaul2', kauliukas2, 'suma', rez, 'Laimėjote');
    } else { 
        console.log('kaul1', kauliukas1, 'kaul2', kauliukas2, 'suma', rez, 'Pralaimėjote');
    }
 
console.log('2 uzd.............');

let Pilkis = rand(3, 6);
let Murklys = rand(3, 6);

if (Pilkis > Murklys) {
  console.log('Sunkesnis Pilkis:', Pilkis, 'Lengvesnis Murklys:', Murklys);
} else if (Pilkis < Murklys) {
  console.log('Sunkesnis Murklys:', Murklys, 'Lengvesnis Pilkis:', Pilkis, );
} else {
  console.log('katinukų svoriai vienodi');
}

console.log('4 uzd.............');

let loterija = rand(1, 6);

if (loterija == 1 || loterija == 5) {
    console.log(loterija, 'Antanas pirks TV');
} else if (loterija == 3 || loterija == 4) {
    console.log(loterija, 'Antanas pirks skalbimo mašiną');
} else {
    console.log(loterija, 'Antanas pirks šaldytuvą');
}

console.log('5 uzd.............');

let sk1 = rand(1, 7);
let sk2 = rand(1, 7);
let sk3 = rand(1, 7);


if (sk1 <= sk2 && sk2 <= sk3) {
    console.log('sk1', sk1, 'sk2', sk2, 'sk3', sk3);
} else if (sk1 <= sk3 && sk3 <= sk2) {
    console.log('sk1', sk1, 'sk3', sk3, 'sk2', sk2);
} else if (sk2 <= sk1 && sk1 <= sk3) {
    console.log('sk2',sk2, 'sk1',sk1, 'sk3',sk3);
} else if (sk2 <= sk3 && sk3 <= sk1) {
    console.log('sk2',sk2, 'sk3',sk3, 'sk1',sk1);
} else if (sk3 <= sk1 && sk1 <= sk2) {
    console.log('sk3', sk3, 'sk1', sk1, 'sk2', sk2);
} else {
    console.log('sk3', sk3, 'sk2', sk2, 'sk1',sk1);
}

// su masyvu:
// const arr = [num1, num2, num3];
// arr.sort((a, b) => a - b);
// console.log(`(Su masyvu ir sort) ${arr.join(' ')}`);

console.log('3 uzd.............');

let kates = rand(0, 30);
let karves = rand(0, 30);

const Talpa = (kates <= 15 && karves <= 15) ? console.log('kates:', kates, 'karves:', karves, ', telpa') : console.log('kates:', kates, 'karves:', karves, ', netelpa'); 







