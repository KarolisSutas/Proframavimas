console.log('Labas, Karoli');

// 1 UZDUOTIS

let htmlLis = '';

for (let i = 0; i < 14; i++) {
    htmlLis += `<h1>${'4'}</h1>`;
}
for (let i = 0; i < 14; i++) {
    htmlLis += `<h1>${'1'}</h1>`;
}

const div = document.querySelector('div');
div.style.display = 'flex';     
div.style.flexWrap = 'nowrap';   
div.innerHTML = htmlLis;


const allLis = document.querySelectorAll('h1');

for (let i = 0; i < allLis.length; i++) {
    const h1 = allLis[i];
    if( i < 14) { 
        h1.style.color = 'darkgreen';
    }else {
    h1.style.color = 'crimson';
    }
}

// 2 UZDUOTIS

const uzd2 = document.querySelector('#uzd2');

for (let i = 0; i < 44; i++) {
    const rand = Math.floor(Math.random() * (44 - 14 + 1)) + 14;

    const span = document.createElement('span');
    span.innerText = rand + ' ';
    if(rand % 4 === 0) { 
        span.style.color = 'red';
    }else {
    span.style.color = 'blue';
    }
    // span.style.color = (rand % 4 === 0) ? 'red' : 'blue';
    span.style.fontSize = '30px';

    uzd2.appendChild(span);
}


// 3 UŽDUOTIS








