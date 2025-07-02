console.log('Labas, Statikai!');


class AuksoPuodas {
    
    static suma = 20200;

    static kiekLikoPinigu() {
        console.log('Aukso puode liko:', this.suma);
        console.log(this.vardas); // negalima, nes tai yra nesamone. 
    }

    constructor(vardas) {
        this.vardas = vardas;
    }

    
// klases viduj rasyti this.constructor
    isleisti(kiek) {
        console.log('Leidžia pinigus:', this.vardas)

        if (this.constructor.suma < kiek) {
            console.log('Baigėsi pinigai');
            return;
        }
        this.constructor.suma -= kiek;
        console.log('Liko', this.constructor.suma);

    }
}

AuksoPuodas.kiekLikoPinigu();

const Jonas = new AuksoPuodas('Jonas'); // cia negalima rasyti this.constructor
const Jeronimas = new AuksoPuodas('Jeronimas');
const Brigita = new AuksoPuodas('Brigita');


Jonas.isleisti(15000);

Brigita.isleisti(3000);

//.......................

console.clear();

// Map

const masyvas = new Array();
const objektas = new Object();

const mapas = new Map();

mapas.set('aukstis', '50');
mapas.set('turis', 20);

mapas.set('aukstis', '77');

mapas.set({a: 1}, 'a1 objektas 1'); // raktas objektas
mapas.set({a: 1}, 'a1 objektas 2');


console.log(mapas);

console.log(mapas.has('turis'));
console.log(mapas.has({a: 1}));

// console.log(mapas.get('turis'));

mapas.set(_ => _, _ => _); // raktas yra funkcija

mapas.set(AuksoPuodas, '');


console.clear();

mapas.size; // parodo kieki elementu

console.log(mapas.size);

mapas.forEach((value, key) => console.log(value, key));

// Set........................

const setas = new Set();

setas.add('Bebras'); 
setas.add('Barsukas');
setas.add('Bebras');// prideda pagal unikalia reiksme
setas.add(AuksoPuodas);// objektu galima prideti kiek norim
setas.add(AuksoPuodas);
setas.add({ b1: 1} );


console.log(setas);









