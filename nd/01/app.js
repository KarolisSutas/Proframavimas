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

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let apskritimas1 = { width: rand(50, 200), height: rand(50, 200) };
let apskritimas2 = { width: rand(50, 200), height: rand(50, 200) };
let apskritimas3 = { width: rand(50, 200), height: rand(50, 200) };

// Apskaičiu plotus
let plotas1 = Math.PI * (apskritimas1.width / 2) * (apskritimas1.height / 2);
let plotas2 = Math.PI * (apskritimas2.width / 2) * (apskritimas2.height / 2);
let plotas3 = Math.PI * (apskritimas3.width / 2) * (apskritimas3.height / 2);

// Sukuriu tuščią masyvą rūšiavimui
let lygiavimas = [];

if (plotas1 > plotas2 && plotas1 > plotas3) {
    lygiavimas[0] = apskritimas1;
} else if (plotas2 > plotas1 && plotas2 > plotas3) {
    lygiavimas[0] = apskritimas2;
} else {
    lygiavimas[0] = apskritimas3;
}

if ((plotas1 < plotas2 && plotas1 > plotas3) && (plotas1 < plotas3 && plotas1 > plotas2)) {
    lygiavimas[1] = apskritimas1;
} else if ((plotas2 < plotas1 && plotas2 > plotas3) && (plotas2 < plotas3 && plotas2 > plotas1)) {
    lygiavimas[1] = apskritimas2;
} else {
    lygiavimas[1] = apskritimas3;
}

if (plotas1 < plotas2 && plotas1 < plotas3) {
    lygiavimas[2] = apskritimas1;
} else if (plotas2 < plotas1 && plotas2 < plotas3) {
    lygiavimas[2] = apskritimas2;
} else {
    lygiavimas[2] = apskritimas3;
}

const divs = document.querySelectorAll('#go4 div');

divs.forEach((div, i) => {
    const apskritimas = lygiavimas[i];
    div.style.width = apskritimas.width + 'px';
    div.style.height = apskritimas.height + 'px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = 'lightgreen';
    div.style.margin = '10px auto';
    div.style.border = '2px solid green';
    div.style.textAlign = 'center';
    div.style.alignContent = 'center';
    div.textContent = `W:${apskritimas.width}, H:${apskritimas.height}`;
});

// 5 UŽDUOTIS
//Naudokite funkcija rand(). Į section tage su id=go5 esančius span įrašykite 
// 3 skaičius nuo -10 iki 10. Skaičius mažesnių už 0 spausdinkite raudonai,  
// didesnius už 0 mėlynai, o 0 žaliai.

let g = rand(-10, 10);
let h = rand(-10, 10);
let i = rand(-10, 10);


const span = document.querySelectorAll('#go5 span');

span[0].innerText = g;
if (g > 0) {
  span[0].style.color = 'blue';
} else if (g < 0) {
  span[0].style.color = 'red';
} else {
  span[0].style.color = 'green';
}

span[1].innerText = h;
if (h > 0) {
  span[1].style.color = 'blue';
} else if (h < 0) {
  span[1].style.color = 'red';
} else {
  span[1].style.color = 'green';
}

span[2].innerText = i;
if (i > 0) {
  span[2].style.color = 'blue';
} else if (i < 0) {
  span[2].style.color = 'red';
} else {
  span[2].style.color = 'green';
}


// 6 UŽDUOTIS

let Ž = rand(5, 3000);
let K = Ž * 1;

let nuolaida;

if (K > 2000) {
    nuolaida = 4;
} else if (K > 1000) {
     nuolaida= 3;
} else {
    nuolaida = 0;
}

const GK = function(K, N) {
    return K - (K * N / 100);
}

let N = nuolaida;

const forma = document.querySelectorAll ('#go6 span');
forma[0].innerText = Ž;
forma[1].innerText = K;
forma[2].innerText = N;
forma[3].innerText = GK(K, N).toFixed(2);


// 7 UŽDUOTIS

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const figūra = document.querySelector('#go7 div');

// // Išvalome visus stilius
figūra.style = '';

// // Atsitiktinė forma: 1 - apskritimas, 2 - keturkampis, 3 - trikampis
const maišas = rand(1, 3);

if (maišas == 1) {
    //     // APSKRITIMAS
    const dydis = rand(50, 150); // tiek plotis, tiek aukštis vienodi
    figūra.style.width = dydis + 'px';
    figūra.style.height = dydis + 'px';
    figūra.style.borderRadius = '50%';
    figūra.style.backgroundColor = 'teal';
    figūra.style.margin = '20px auto';

} else if (maišas == 2) {
    //     // KETURKAMPIS
    const plotis = rand(50, 150);
    const aukštis = rand(50, 150);
    figūra.style.width = plotis + 'px';
    figūra.style.height = aukštis + 'px';
    figūra.style.borderRadius = '0';
    figūra.style.backgroundColor = 'orange';
    figūra.style.margin = '20px auto';

} else {
    //     // TRIKAMPIS
    const pagrindas = rand(50, 150);
    const aukštis = rand(50, 150);
    figūra.style.width = '0';
    figūra.style.height = '0';
    figūra.style.borderLeft = (pagrindas / 2) + 'px solid transparent';
    figūra.style.borderRight = (pagrindas / 2) + 'px solid transparent';
    figūra.style.borderBottom = aukštis + 'px solid crimson';
    figūra.style.backgroundColor = 'transparent';
    figūra.style.margin = '20px auto';
}





