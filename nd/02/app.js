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
    if(rand % 4 == 0) { 
        span.style.color = 'red';
    }else {
    span.style.color = 'blue';
    }
    // span.style.color = (rand % 4 == 0) ? 'red' : 'blue';
    span.style.fontSize = '30px';

    uzd2.appendChild(span);
}


// 3 UŽDUOTIS


const apskritimas = document.querySelector('#uzd3');
apskritimas.style.marginTop = '30px';

for (let i = 1; i < 15; i++) {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.margin = '5px';
    span.style.width = '60px';
    span.style.height = '60px';
    span.style.borderRadius = '50%';
    span.style.backgroundColor = 'black';
    span.innerText = [i];
    span.style.color = 'white';
    span.style.textAlign = 'center';
    span.style.alignContent = 'center';

    uzd3.appendChild(span);

}

// 4 UŽDUOTIS

const zebrai = document.querySelector('#uzd4');
zebrai.style.marginTop = '30px';

for (let i = 0; i < 4; i++) {
    const span1 = document.createElement('span1');
    span1.style.display = 'inline-block';
    span1.style.margin = '5px';
    span1.style.width = '60px';
    span1.style.height = '60px';
    span1.style.borderRadius = '50%';
    if( i % 2 === 0) { 
        span1.style.backgroundColor = 'red';
    }else {
    span1.style.backgroundColor = 'blue';
    }

    uzd4.appendChild(span1);
}

// 5 UŽDUOTIS

const lentele = document.querySelector('#uzd5');
lentele.style.marginTop = '30px';

    for (let i = 4; i <= 14; i++) {
      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'white';

      const skaičius = document.createElement('td');
      skaičius.textContent = `4 x ${i} =`;
      skaičius.style.border = '2px solid black';
      skaičius.style.textAlign = 'right';
      skaičius.style.alignContent = 'center';
      skaičius.style.fontSize = '25px';
  

      const rezultatas = document.createElement('td');
      rezultatas.textContent = 4 * i;
      rezultatas.style.border = '2px solid black';
      rezultatas.style.fontSize = '25px';


      tr.appendChild(skaičius);
      tr.appendChild(rezultatas);
      lentele.appendChild(tr);
    }


// 6 UŽDUOTIS

const divas = document.querySelector('#uzd6');
divas.style.marginTop = '30px';

for(let i = 0; i < 10; i++) {
    const simbolis = document.createElement('div');
    simbolis.textContent = '*'.repeat(44);
    simbolis.style.fontSize = '40px';
    divas.appendChild(simbolis);
}

// 7 UŽDUOTIS

const matrioska = document.querySelector('#uzd7');
const kvadSum = 14;
const maxdydis = 280;
const tarpas = 20;

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

for (let i = 0; i < kvadSum; i++) {
    const kvadDydis = maxdydis - i * tarpas;
    const kvadratas = document.createElement('div');
    kvadratas.classList.add('kvadratas')
    kvadratas. style.width = `${kvadDydis}px`;
    kvadratas. style.height = `${kvadDydis}px`;
    kvadratas.style.zIndex = i + 1;
    kvadratas.style.backgroundColor = randomColor();
    (matrioska).appendChild(kvadratas);
}




















