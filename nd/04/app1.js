// 7 UZDAVINYS

class Kibiras1 {

    static visiAkmenys = 0;

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
        this.constructor.visiAkmenys++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.visiAkmenys += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('kibire jau yra:', this.akmenuKiekis);
    }

    akmenuSkaiciusVisuoseKibiruose() {
        console.log('Visuose kibiruose jau yra:', this.constructor.visiAkmenys);
    }

}

const k1 = new Kibiras1(); 
const k2 = new Kibiras1();


k1.prideti1Akmeni();
k1.prideti1Akmeni();
k1.pridetiDaugAkmenu(5);

k2.pridetiDaugAkmenu(10);
k2.prideti1Akmeni();

k1.kiekPririnktaAkmenu();
k2.kiekPririnktaAkmenu();

k1.akmenuSkaiciusVisuoseKibiruose();

console.log('/*************************/');
// 5 uzdavinys

class PirkiniuKrepselis {

    constructor() {
        this.turinys = new Map();
    }


    idetiSureli(kiekis) {
        this.ideti(kiekis, 'sūrelis');
    }
    idetiPieno(kiekis) {
        this.ideti(kiekis, 'pienukas');
    }
    idetiDuonos(kiekis) {
        this.ideti(kiekis, 'batonas');
    }

    ideti(kiekis, kas) {
        if (this.turinys.has(kas)) {
            this.turinys.set(kas, this.turinys.get(kas) + kiekis);
        } else {
            this.turinys.set(kas, kiekis);
        }
    }

    krepselioTurinys() {
        this.turinys.forEach((kiek, kas) => console.log(`Turime ${kas} ${kiek} vienetus`));
    }

}

const norfa = new PirkiniuKrepselis();

norfa.idetiSureli(4);
norfa.idetiPieno(3);
norfa.idetiPieno(3);
norfa.idetiDuonos(2);
norfa.ideti(3, 'Sūris baltas');
norfa.ideti(45, 'Pomidoras raudonas');
norfa.ideti(5, 'Pomidoras raudonas');

norfa.krepselioTurinys();

// 9 uzdavinys GRYBAS

class Grybas {

    #valgomas;
    #sukirmijes;
    #svoris;

    constructor() {
        this.#valgomas = this.#rand(0, 1);
        this.#sukirmijes = this.#rand(0, 1);
        this.#svoris = this.#rand(5, 45);
    }

    get valgomas() {
        return this.#valgomas;
    }

    get sukirmijes() {
        return this.#sukirmijes;
    }

    get svoris() {
        return this.#svoris;
    }

    #rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
}

class Krepsys {

    #dydis;
    #prikrauta;

    constructor() {
        this.#dydis = 500;
        this.#prikrauta = 0;
    }

    deti(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.#prikrauta += grybas.svoris
            console.log(this.#prikrauta);
        } 
        return this.#prikrauta < this.#dydis;
    }
}

const K = new Krepsys();

do { } while (K.deti(new Grybas));

console.log(K);