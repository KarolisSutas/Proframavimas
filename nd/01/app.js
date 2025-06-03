// 1 uzduotis

const h1 = document.querySelector('h1');
h1.innerText = 1;

const h2 = document.querySelector('h2');
h2.innerText = 2;

const h3 = document.querySelector('h3');
h3.innerText = 3;

const h4 = document.querySelector('h4');
h4.innerText = 4;

console.log(typeof h4.innerText);

// 2 uzduotis

const div1 = document.querySelector('div');
const div2 = document.querySelector('div + div');

div1.style.backgroundColor = 'blue';
div1.style.width = '100px';
div1.style.height = '100px';

div2.style.backgroundColor = 'crimson';
div2.style.width = '100px';
div2.style.height = '100px';
div2.style.borderRadius = '50%';


// 3 uzduotis



function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let a = rand(0, 4);
let b = rand(0, 4);

while (a === 0 || b === 0) {
    a = rand(0, 4);
    b = rand(0, 4);
}

const didesnis = a > b ? a : b;
const mazesnis = a < b ? a : b;

const result = (didesnis / mazesnis).toFixed(2);

const spans = document.querySelectorAll('#go3 span');
spans[0].textContent = didesnis;
spans[1].textContent = mazesnis;
spans[2].textContent = result;


// 4 uzduotis. 

// function rand(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
// }

// let c = rand(50 , 200);
// let d = rand(50 , 200);

// const circle1 = rand(c * d);
// const circle2 = rand(c * d);
// const circle3 = rand(c * d);

// if ((circle1 > circle2) && (circle1 > circle3)) {
//     circle1 = didziausias;
// }else if ((circle2 > circle1) && (circle2 > circle3)) {
//     circle2 = didziausias;
// }else  {
//     circle3 = didziausias;
// }

// if ((circle1 > circle2) && (circle1 < circle3) || (circle1 > circle3) && (circle1 < circle2)) {
//     circle1 = vidurinis;
// }else if ((circle2 > circle3) && (circle2 < circle1) || (circle2 > circle1) && (circle2 < circle3)){
//     circle2 = vidurinis;
// }else  {
//     circle3 = vidurinis;
// }

// if ((circle1 < circle2) && (circle1 < circle3)) {
//     circle1 = maziausias;
// }else if ((circle2 > circle1) && (circle2 > circle3)) {
//     circle2 = didziausias;
// }else  {
//     circle3 = didziausias;
// }


// 5 UŽDUOTIS.

let vienas = rand(-10, 10);
let atsakymas;

if (vienas > 0) {
    atsakymas = ('red');
}

console.log(atsakymas);





