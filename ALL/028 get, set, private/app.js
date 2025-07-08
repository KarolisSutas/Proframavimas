console.log('Hello, little one!');

// Private properties
// raso koda Janina
class Cart {

    #max = 14; // nes taip sugalvojo Antanas. Tai yra PRIVATU

    constructor() {
        this.count = 0;
    }

    // max() { // getter. Leidzia pamatyti kiek yra private #max. Viesas metodas (public)
    //     return this.#max;
    // }

    get max() { // funkcija metodas
        return this.#max;
    }

    set max(val) {
        // console.error(`Tu negali ${val} pridėti, nes tu ne Janina`);
        this.#max = val - 50; // leidzia irasyti reiksme ir valdyti kintamaji. galima if deti, galima neleist, kontroliuot, modifikuot
    }

    #toServer() {
        // žinome, kad serveris krepšelį skaičiuoja kaip kažkokį skaičių; Koduoja Antanas.
        console.log('Liko įdėti:', this.#max - this.count);
    }

    putToCart(amount) {
        if (amount + this.count > this.#max) {
            console.log(`Daugiau nei ${this.#max}. Blogai. Netelpa`);
        } else {
            this.count += amount;
            console.log('Pridėta. Dabar yra:', this.count);
            this.#toServer();
        }
    }
}

// Ieva kodina

const c = new Cart();


console.log(c.max); // grąžina max kai max savybė, o get max funkcija. c.max - propsas

c.max = 60;

c.putToCart(4);
c.putToCart(6);
c.putToCart(2);

// viesa property kiemas
// protected property nera JavaScripte butas
// privati private property stalcius uzrakintas

// 1. susikurti klasę Color, kostruktoriuje nustatykite savybę color (kokią norite)
// 2. Sukurkite metodą fullBody(), kuris html body tagą padaro 100% aukščio ir pločio
// 3. metodą fullBody() padarykite privačiu ir kad jis pasileistų automatiškai sukuriant color objektą
// 4. Savybę color padaryti privačią
// 5. Padarius objektą, fonas nusidažyti ta spalva 
// 6. Padaryti saplvos setterį bodyColor(), kuriam priskyrus spalvą ta spalva nusidažytų ir fonas

class Color {
    #color = 'crimson';

    constructor() {
        this.#fullBody();
        const body = document.querySelector('body');
        body.style.backgroundColor = this.#color;
        
    }

    #fullBody() {
        const body = document.querySelector('body');
        body.style.margin = 0;
        body.style.height = '100vh';
    }


    set bodyColor(c) {
        this.#color = c;
        const body = document.querySelector('body');
        body.style.backgroundColor = this.#color;
    }

} 


const color = new Color();

color.bodyColor = 'goldenrod';

