console.log('Labas, mygtukai!');

const funClick1 = function() {
    console.log('Mygtuką 1 kažkas paspaudė')
}

// 1. susirasti stebetoja
const btn1 = document.querySelector('#btn1');

// 2. patubdyti stebetoja
// btn1.addEventListener


// 3. ka jis turi stebeti
btn1.addEventListener('click', funClick1);

// uzd. paspaudus "Bebro mygtuka" h2 turi nusidažyti kažkokia spalva (ne juoda)

const funClick2 = function() {
    const h2 = document.querySelector('h2');
    h2.style.color = h2.style.color === 'crimson'? 'black' : 'crimson';
}

const btn2 = document.querySelector('#btn2');

// const funClick3 = function() {
//     btn2.style.color = 'skyblue';
// }

// const funClick4 = function() {
//     btn2.style.color = 'black';
// }


btn2.addEventListener('click', funClick2);

btn2.addEventListener('mouseover', function(e) {
    e.target.style.color = 'skyblue';
});

btn2.addEventListener('mouseleave', function() {
    btn2.style.color = 'black';
});

const vz = document.querySelector('a');

vz.addEventListener('click', function(e){
    e.preventDefault(); //neleidzia eiti i nuoroda
    console.log('Tu paspaudei ant VZLinko');
});

// bublinimas'as

const vaikas = document.querySelector('.vaikas');
const tevas = document.querySelector('.tevas');


vaikas.addEventListener('click', function(e){
    e.stopPropagation(); // bublinimo stopas
    vaikas.style.backgroundColor = 'darkblue';
    // e.target.style.backgroundColor = 'darkblue';
});

tevas.addEventListener('click', function(e){
    tevas.style.backgroundColor = 'orangered';
    // e.target.style.backgroundColor = 'orangered';
});

// norint nuskaityt ivesta reiksme reikia pasinaudot savybe "value"
const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function () {
    const input = document.querySelector('input');
    const reiksme = +input.value;
    console.log(reiksme);
});