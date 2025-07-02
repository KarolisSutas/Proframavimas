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

    ideti(kiekis, ka) {
        if (this.turinys.has(ka)) {
            this.turinys.set(ka, this.turinys.get(ka) + kiekis);
        } else {
            this.turinys.set(ka, kiekis);
        }
    }

    krepselioTurinys() {
        this.turinys.forEach((kiek, kas) => console.log(`Turime ${kas} ${kiek} vienetus`));
    }

}

const norfa = new PirkiniuKrepselis();

norfa.idetiPieno(3);
norfa.idetiPieno(3);
norfa.idetiDuonos(2);
norfa.ideti(3, 'Sūris baltas');

norfa.krepselioTurinys();