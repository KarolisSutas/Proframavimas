console.log('Kibiras!');

// 1.	Sukurti klasę Kibiras1. 
// Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
// Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;
        this.kiekPririnktaAkmenu();
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('kibire jau yra:', this.akmenuKiekis);
    }

    gautiAkmenuKieki() {
        return this.akmenuKiekis;
    }

}

const k1 = new Kibiras1(); // setter
const k2 = new Kibiras1();

k1.prideti1Akmeni();
k1.prideti1Akmeni();
k1.pridetiDaugAkmenu(5);

k2.pridetiDaugAkmenu(10);
k2.prideti1Akmeni();

k1.kiekPririnktaAkmenu();
k2.kiekPririnktaAkmenu();

const k2Kiekis = k2.gautiAkmenuKieki(); // getter
console.log(k2Kiekis);

// 2.	Sukurti klasę Pinigine. 
// Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. 
// Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
// Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }
    ideti(p) {
        if (p <= 2) {
            this.metaliniaiPinigai += p;
        } else {
            this.popieriniaiPinigai += p;
        }
    }

        skaiciuoti() {
            return this.popieriniaiPinigai + this.metaliniaiPinigai;
        }
}

const pin01 = new Pinigine();

pin01.ideti(2);
pin01.ideti(2);
pin01.ideti(1);
pin01.ideti(12);
pin01.ideti(30);

console.log(pin01);
console.log('Pinigineje yra', pin01.skaiciuoti(), 'pinigu.');

// 3. Sukurti klasę Troleibusas. 
// Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
// Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
// O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 
// Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }
    
    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius; 
    }

    islipa(keleiviuSkaicius) {
        this.keleiviuSkaicius -= keleiviuSkaicius;
        // (2) const liko = this.keleiviuSkaicius - keleiviuSkaicius;
        // (2) this.keleiviuSkaicius = Math.max(0, liko);
        // (3) this,keleiviuSkaicius = Math.nax(0, this.keleiviuSkaicius - keleiviuSkaicius);

    }

    vaziuoja() {
        // console.log(`Vaziuoja ${this.keleiviuSkaicius} keleiviai su troleibusu`)

        if (this.keleiviuSkaicius >= 0) {
            return this.keleiviuSkaicius;
        } else {
            return 0;
        }
    }
}

const vnt = new Troleibusas();

vnt.ilipa(15);
vnt.islipa(17);
vnt.ilipa(5);

console.log(vnt);
console.log('Dabar vaziuoja: ', vnt.vaziuoja());

// (2) vnt.vaziuoja();


console.clear();

// 8 UŽDUOTIS STIKLINE

class Stikline {

    #turis;

    constructor(turis) {
    this.#turis = turis;
    this.kiekis = 0;
    }

    ipilti(kiekis) {
        this.kiekis += kiekis;
        this.kiekis = Math.min(this.#turis, this.kiekis);
        return this;
    }

    ispilti() {
        const kiekis = this.kiekis;
        this.kiekis = 0;
        return kiekis;
    }

}

const s200 = new Stikline(200);
const s150 = new Stikline(150);
const s100 = new Stikline(100);

s100.ipilti(s150.ipilti(s200.ipilti(320).ispilti()).ispilti());

console.log(s200, s150, s100);



