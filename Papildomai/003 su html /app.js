console.log('labas html!');


// let p = document.querySelector('body');
// p.textContent = 'Sveikas atvykęs!';

// const p2 = p;
// p2.innerText = 'Sveikas sugrįžęs!';

const tekstas = document.querySelector('#container');
const h2 = document.createElement('h2');
const p3 = document.createElement('p');

h2.textContent = 'Mano naujas antraštės tekstas';
p3.textContent = 'Čia yra naujas paragrafas';

tekstas.appendChild(h2);
tekstas.appendChild(p3);



  // Gauname reikalingus elementus
  const input = document.querySelector('#ivestis');
  const button = document.querySelector('#rodyti');
  const result = document.querySelector('#rezultatas');

  // Paspaudus mygtuką
  button.addEventListener('click', _ => {
    const ivestasTekstas = input.value; // Paimame įvestą tekstą
    
    // Parodome tekstą p elemente
    // Pabandyk pakeisti tarp textContent ir innerHTML ir pamatysi skirtumą
    result.textContent = ivestasTekstas;
    
    // Jei naudotum innerHTML, HTML žymės būtų interpretuojamos:
    // result.innerHTML = ivestasTekstas;
  });










