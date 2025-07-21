console.log('1 užduotis...............')


const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

// bitGirls[0] = 'Nausėda';

bitGirls.unshift('Nausėda');

console.log(bitGirls);

console.log('2 užduotis...............')

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitCats = cats.map(vardas => {
    const svoris = rand(0, 1) ? 'storas' : 'normalus';
    return [vardas, svoris];
});

    console.log(bitCats);

console.log('3 užduotis...............');

let stori = 0;
let normalus = 0;

bitCats.forEach(cat => {
  const mase = cat[1];
  (mase == 'storas') ? stori++ : normalus++; 
});

// const catsStats = bitCats.reduce((accumulator, currentValue) => {
//         if (currentValue[1] == 'storas') {
//             accumulator.storu++;
//         } else {
//             accumulator.normaliu++;
//         } 
//         return accumulator
//     }, 
// {storu: 0, normaliu: 0}
// );

// console.log(catsStats);

console.log("Storų katinukų:", stori);
console.log("Normalių katinukų:", normalus);



console.log('4 užduotis...............');

bitCats.sort((a, b) => {
    const pirmas = a[0][1].toLowerCase(); 
    const antras = b[0][1].toLowerCase();
    return pirmas.localeCompare(antras);
  });
  
  console.log(bitCats);

  console.log('5 užduotis...............');

  const happyCats = bitGirls.map((girls, index) => {
    const cat = cats[index - 1] || 'Barsukas';
    return [girls, cat];
  });

  console.log(happyCats);

  
