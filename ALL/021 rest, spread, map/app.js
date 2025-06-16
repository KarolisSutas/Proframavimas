console.log ('Labas, 3taški!');


const skaiciai = [5, 8, 7];

const skaiciai1 = skaiciai; // perdavimas by refference pagal nuoroda


const skaiciai2 = [88, ...skaiciai, 44]; // paimam => [5, 8, 7]

const skaiciai3 = {obuolys1: 'pradzia', ...skaiciai, obuolys2: 'pabaiga'}; // => {5, 8, 7}

skaiciai1[0] = 88;


console.log(skaiciai, skaiciai1, skaiciai2, skaiciai3);

const medis = {sakos: 10, obuoliai: 22, aukstis: 15};

const medis2 = {obuoliai: 200, ...medis, sakos: 15}; // gale perrasymas overaidina savybes

console.log(medis, medis2);


const funSpread = function(a, b) {
    console.log(a - b);
}

const manoSk = [7, 10];

funSpread(...manoSk);


const funRest = function(ab, bc, ...argumentai) {
    let suma = 0;
    argumentai.forEach(el => suma += el);
    console.log('suma iš: ', argumentai.length, 'lygi: ', suma);
}

funRest(100, 4, 7, 9, 21);
funRest(4, 21);
funRest(4, 7, 9, 21, 84, 7, 9, 7);

console.clear();

const stebuklas = [
    4,
    [88, 77],
    5,
    8
];

const kitasStebuklas = [...stebuklas]; // seklus kopijavimas (shallow copy)
const deepStebuklas = structuredClone(stebuklas) // gilus kopijavimas (deep copy)

stebuklas[0] = 100;
stebuklas[1][1] = 200;


console.log(stebuklas, kitasStebuklas, deepStebuklas);

const skaiciaiPaprasti = [7, 9, 7, 9];
// sukurti nauja masyva, kuriame kiekvienas skaicius yra padaugintas is 5

const padaugintiSkaiciai = skaiciaiPaprasti.map(sk => sk * 5);

console.log(padaugintiSkaiciai);

const skaiciaiObjekte = [
    {skaicius: 4},
    {skaicius: 7},
    {skaicius: 56},
    {skaicius: 14},
    {skaicius: 11},
];

// sukurti nauja masyva, kuriame kiekvienas skaicius yra padaugintas is 5, skaicius turi likti duotam objekte, objekto savybes vardas turi likti toks pat

// const skaiciaiObjekte2 = skaiciaiObjekte.map(sk => {
//     return { skaicius: sk.skaicius * 5 };
// });

const skaiciaiObjekte2 = skaiciaiObjekte.map(obj => ({ skaicius: obj.skaicius * 5 }));

console.log(skaiciaiObjekte2);

//.....................

const cart = [
    {id: 877, title: 'Pienisko desros', price: 2.45, count: 2},
    {id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1},
    {id: 16548, title: 'Batonas studentu', price: 1.22, count: 1},
    {id: 974, title: 'Bulves 4kl', price: 0.88, count: 2}
];
// padidinti visu produktu kiekius 1

const cartPlus1 = cart.map(obj => ({ ...obj, count: obj.count + 1 }));

console.log(cartPlus1);

// padidinti 8974 produktu kieki 2

const cartPlus2Sviestukai = cart.map(obj => obj.id == 8974 ? { ...obj, count: obj.count + 2 } : obj);

console.log(cartPlus2Sviestukai);

