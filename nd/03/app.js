
// 1 UŽDUOTIS

const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];
const abc = A.toSorted();
console.log(abc);

let htmlLis = '1 užduotis:';

for (let i = 0; i < A.length; i++) {
    htmlLis += `<li>${A[i]}</li>`;
}

const ul = document.querySelector('#uzd1');
ul.innerHTML = htmlLis;




// 2 UŽDUOTIS

let htmlLis1 = '2 užduotis:';

for (let i = 0; i < abc.length; i++) {
    htmlLis1 += `<li>${abc[i]}</li>`; // const abc = A.toSorted(); po A masyvu. Sukuria atskirą masyvą.
}


const ul1 = document.querySelector('#uzd2');
ul1.innerHTML = htmlLis1;




// 3 UŽDUOTIS

const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis',
]


const Bendras = A.concat(B);
Bendras.sort();
let htmlLis2 = '3 užduotis:';

for (let i = 0; i < Bendras.length; i++) {
    htmlLis2 += `<li>${Bendras[i]}</li>`;
}

const ul2 = document.querySelector('#uzd3');
ul2.innerHTML = htmlLis2;




// 4 UŽDUOTIS
const apskritimas = document.querySelector('#uzd4');

for (let i = 0; i < A.length; i++) {
    const div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.width =  '120px';
    div.style.height = '120px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = 'rosybrown';
    div.style.margin = '10px 5px';
    div.style.border = '2px solid green';
    div.innerText = A[i];
    div.style.color = 'floralwhite';
    div.style.textAlign = 'center';
    div.style.alignContent = 'center';

    uzd4.appendChild(div);
}




// 5 UŽDUOTIS

const apskritimas2 = document.querySelector('#uzd5');   

for (let i = 0; i < B.length; i++) {

    const tikRaidės = B[i].match(/[a-z, ą, č, ę, ė, į, š, ų, ū, ž]/gi) || [];
    const raidžiųSkaičius = tikRaidės.length;

    const div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.width =  '120px';
    div.style.height = '120px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = 'firebrick';
    div.style.margin = '10px 5px';
    div.innerText = `${B[i]} ( ${raidžiųSkaičius} )`;
    div.style.color = 'greenyellow';
    div.style.textAlign = 'center';
    div.style.alignContent = 'center';

    uzd5.appendChild(div);
}


// 6 užduotis

const apskritimas3 = document.querySelector('#uzd6');
    apskritimas3.style.padding = '10px';

const vienoZodzio = A.filter(pavadinimas => {
    const zodziuKiekis = pavadinimas.trim().split(/\s+/).length;
    return zodziuKiekis == 1;
})

for (let i = 0; i < vienoZodzio.length; i++) {
     const div = document.createElement('div');
     div.style.display = 'inline-block';
     div.style.width =  '70px';
     div.style.height = '70px';
     div.style.borderRadius = '50%';
     div.style.backgroundColor = 'olive';
     div.style.margin = '10px 5px';
     div.innerText = vienoZodzio[i];
     div.style.color = 'floralwhite';
     div.style.textAlign = 'center';
     div.style.alignContent = 'center';

     uzd6.appendChild(div);
 }


 // 7  UŽDUOTIS

const apskritimas4 = document.querySelector('#uzd7');
apskritimas4.style.padding = '10px';


for (let i = 0; i < B.length; i++) {
    const divas = document.createElement('div');
    divas.style.display = 'block';
    const zodis = B[i];
  
    for (let j = 0; j < zodis.length; j++) {
        const raide = zodis[j];
        const span = document.createElement('span');

        span.style.display = 'inline-block';
        span.style.width = '70px';
        span.style.height = '70px';
        span.style.borderRadius = '50%';
        span.style.backgroundColor = 'goldenrod';
        span.style.margin = '10px 5px';
        span.textContent = raide.toUpperCase();
        span.style.fontWeight = '800';
        span.style.fo = '800';
        span.style.color = 'darkblue';
        span.style.textAlign = 'center';
        span.style.alignContent = 'center';

        divas.appendChild(span);
    }
    uzd7.appendChild(divas);
}


// 8 UŽDUOTIS

const C = [
    'Višta',
    'Gaidys',
    'Šernas',
    'Lapė',
    'Vilkas',
    'Šuo dingo',
    'Barsukas',
    'Voverė',
    'Šuo',
    'Naminis katinas',
    'Laukinis katinas',
    'Šuo atsirado',
    'Bebras',
    'Ožys'
];

console.log(C);

const ulTrump = document.querySelector('#trumpi'); 
const ulIlg =document.querySelector('#ilgi'); 

for (let i = 0; i < C.length; i++) {
    const gyvunas = C[i];
    const li = document.createElement('li');
    li.textContent = gyvunas;

    if (gyvunas.length <= 6) {
        ulTrump.appendChild(li);
    } else {
        ulIlg.appendChild(li);
    }
}


// 9 UŽDUOTIS

const beŠuns = document.querySelector('#nodog');

const šunsFiltras = C.filter(pavadinimas => {
    const zodziai = pavadinimas.trim().toLowerCase().split(/\s+/);
    return !zodziai.includes('šuo');
  });


for (let i = 0; i < šunsFiltras.length; i++) {
    const li = document.createElement('li');
    li.textContent = šunsFiltras[i];
    beŠuns.appendChild(li);

}















