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
    constructor(p) {
        this.popieriniaiPinigai = 4;
        this.metaliniaiPinigai = ;
        this.ideti(p);
    }
    ideti(p) {
        if (p <= 2) {
            this.metaliniaiPinigai = p;
        } else {
            this.popieriniaiPinigai = p;
        }
    }

        skaiciuoti() {
            return this.popieriniaiPinigai + this.metaliniaiPinigai;
        }
}

const pin01 = new Pinigine(33);

console.log(pin01, pin01.skaiciuoti());
