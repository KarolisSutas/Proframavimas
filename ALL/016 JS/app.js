console.log('Labas, Briedi');


const zodis1 = 'zuikis';

const antraRaide = zodis1[1];

console.log(antraRaide);

// Žodį "Didžiulis" naudojant ciklą for konsolėje atspausdinti po vieną raidę eilutėje

// const zodis2 = 'Didžiulis';

// for (i = 0; i < zodis2.lentgh; i++){
//     console.log(zodis2[i]);
// }

const D = 'Didžiulis';

for (let i = 0; i < D.length; i++) {
    console.log(D[i]);
}

// sudeda po raide i atskirus rutuliukus kiekvienai raidei sukuria span. 
// spano stilius aprasytas css

let dhtml = '';

for (let i = 0; i < D.length; i++) {
    dhtml += '<span>' + D[i] + '</span>';
}

document.querySelector('#d1').innerHTML = dhtml; // labai letas budas prideti i html

// greitas budas sukurti elemneta.
const sekcija2 = document.querySelector('#d2');
for (let i = 0; i < D.length; i++) {
    const span = document.createElement('span');
    span.innerText = D[i]; 
    sekcija2.appendChild(span);
}

const sekcija3 = document.querySelector('#d3');
const sekcija4 = document.querySelector('#d4');
const sekcija31 = document.querySelector('#d31');
const sekcija41 = document.querySelector('#d41');

const melynas1 = '<h1 style="color:skyblue";>Barsukas</h1>'; // cia stringas

sekcija3.innerHTML = melynas1; 
sekcija31.innerHTML = melynas1; 

const melynas2 = document.createElement('h1'); // cia objektas
// objektas negali innerHtml'int
melynas2.style.color = 'skyblue'; // objektui duodam savybe 
melynas2.innerText = 'Barsukas'; // idedamas tekstas
sekcija4.appendChild(melynas2); // objekta iterpaim i html
sekcija41.appendChild(melynas2); 

//innerHtml turim tik tai ka dedam ir isvalo viska elemente, 
// o su append tik pridedam bet neisvalom


// ASCII table-raidziu lentele skaiciais
if ('A' > 'a') {
    console.log('Jo');
} else {
    console.log('Ne');
}

// stringo tkslu skaiciu paziuret
const zodis2 = 'An-tan-as';

console.log(zodis2.charCodeAt(0)); 

console.log(zodis2.repeat(200));

console.log(zodis2.split('- -')); 

const two = zodis2.split('- -');

console.log(two);

const all = [];

for(let i = 0; i < two.length; i++) {
    all.push(...two[i].split('-'));
}

console.log(all.flat());

// ... - spreado opertorius

// yra zodis "Ananasas". Reikia su for ciklu pereiti kiekviena raide ir konsoleje spausdinti tik tada jeigu raide yra "a"

const zodis = "Ananasas";

for (let i = 0; i < zodis.length; i++) {
  if (zodis[i] === "a") {
    console.log(zodis[i]);
  }
}
