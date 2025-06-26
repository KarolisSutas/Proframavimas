console.log('Kibiras!');

// 1.	Sukurti klasę Kibiras1. 
// Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
// Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
    constructor(k) {
        this.akmenuKiekis = 0;
        this.kiekPririnktaAkmenu(k);
    }

        prideti1Akmeni() {
         return this.akmenuKiekis + 1;
        
    }

        pridetiDaugAkmenu(kiekis) {
         return this.akmenuKiekis + kiekis;
    }

        kiekPririnktaAkmenu(k) {
            if (k > 0) {
                return this.akmenuKiekis = k;
            }
    }
}

const akm = new Kibiras1(33);

console.log(akm, akm.prideti1Akmeni(), akm.pridetiDaugAkmenu(35));

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
