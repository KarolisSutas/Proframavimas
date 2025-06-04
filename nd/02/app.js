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


const apskritimas = document.querySelector('#uzd3');

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

for (let i = 0; i < 4; i++) {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.margin = '5px';
    span.style.width = '60px';
    span.style.height = '60px';
    span.style.borderRadius = '50%';
    if( i % 2 === 0) { 
        span.style.backgroundColor = 'red';
    }else {
    span.style.backgroundColor = 'blue';
    }

    uzd3.appendChild(span);
}

// 5 UŽDUOTIS

const lentele = document.querySelector('#uzd5');
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







