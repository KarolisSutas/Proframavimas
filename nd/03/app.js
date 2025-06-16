
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
    div.style.width =  '200px';
    div.style.height = '100px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = 'rosybrown';
    div.style.margin = '10px auto';
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
    div.style.width =  '200px';
    div.style.height = '100px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = 'firebrick';
    div.style.margin = '10px auto';
    div.style.border = '2px solid black';
    div.innerText = `${B[i]} ( ${raidžiųSkaičius} )`;
    div.style.color = 'greenyellow';
    div.style.textAlign = 'center';
    div.style.alignContent = 'center';

    uzd5.appendChild(div);
}




// 6 užduotis

// const apskritimas3 = document.querySelector('#uzd6');


// for (let i = 0; i < vienatiniai.length; i++) {
//     const div = document.createElement('div');
//     div.style.display = 'inline-block';
//     div.style.width =  '200px';
//     div.style.height = '100px';
//     div.style.borderRadius = '50%';
//     div.style.backgroundColor = 'green';
//     div.style.margin = '10px auto';
//     div.style.border = '2px solid green';
//     div.innerText = vienatiniai[i];
//     div.style.color = 'floralwhite';
//     div.style.textAlign = 'center';
//     div.style.alignContent = 'center';

//     uzd6.appendChild(div);
// }















