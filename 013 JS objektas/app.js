console.log('Labas, Bebrai!');

const stringas1 = 'Bebras'; // true
const stringas2 = ' '; //true
const stringas3 = ''; //false

// konvertavimas

const log1 = !!stringas1; // ! pakeiciamas i logini kintamaji true ir tada paneigiamaas ir gauna false antras ! atvercia atgal i true
const log2 = !!stringas2;
const log3 = !!stringas3;

console.log(log1, log2, log3);

const skaicius4 = 55; // true
const skaicius5 = -4.55; //true
const skaicius6 = 0; //false

const log4 = !!skaicius4;
const log5 = !!skaicius5;
const log6 = !!skaicius6;

console.log(log4, log5, log6);

/*
>   
<
>=
<=
!= nelygu
== lygina tik reiksmes
!==
=== lygina reiksme ir tipa
|| arba. Grazina 1 true reikdme
&& ir. Grazina 1 false reiksme
*/

if (5 > 4 && 7 > 2) {
    // saka true
    console.log('O taip');
} 
else {
    // saka false
    console.log('Hmm... ne!');
}


const A = 1 && 0;
console.log(A);

// OPERATORIAI

const B = (5 || 8) + (7 || 2);
console.log(B);


const C = 9;

if (C > 9) {
    console.log('C daugiau uz 9');
}
else if (C == 9) {
    console.log('C lygu 9');
} 
else {
    console.log('C maziau uz 9');
}

// Ternary - priskiriamoji salyga


const D = 1;
let atsakymas;

if (D == 1) {
    atsakymas = 'D yra vienas';
} else {
    atsakymas = 'D nera vienas';
}

console.log(atsakymas);

const atsakymas2 = D == 1 ? 'D yra vienas' : 'D nera vienas'; // ternaris, po ? true po : flase

// {} - blokas let - taip pat blokinis kintamasis ir is savo bloko neiseina
// savo bloke gali patekt i kitus blokus, bet i isore ne

// let KI // kai blokinis kintamasis cia

// {
//     KI = 'kazkas';
//     // galima cia console
//     {
//     console.log(KI); // ir cia console
//     }
// }
// // galima cia console


let KI = 'virsus';
{
    {
      let  KI = 'vidus';
      console.log(KI); 
    }
    
}

const s = 'black';

const turiu = s === 'green' ? 'zailias' : s =='red' ? 'Raudonas' : 'kitas';

console.log(turiu);

