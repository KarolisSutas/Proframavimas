export default class Sq {


    #color;
    #gate = false;
    #activeColor;
    #el;

    constructor(x, y, size, color = 'transparent') { // pagrindiniai dalykai konstruktoriuje
        this.#color = color;
        this.#el = document.createElement('div');
        this.#el.style.left = x + 'px';
        this.#el.style.top = y + 'px';
        this.#el.style.width = size + 'px';
        this.#el.style.height = size + 'px';
        this.#el.style.backgroundColor = this.#color;
        this.#el.style.position = 'absolute';
    }
// metodai kurie priskiria savybes, gate kuris setina arba ne ir colora
    addTo(parent, mode = 'view') {      
        parent.appendChild(this.#el);   // Kvadratas įdedamas į tėvinį DOM elementą (parent), pvz., div.test-frame.
        if (mode == 'view') {           // Jei rėžimas view, nieko daugiau nedarom (kvadratas tik rodomas).
            return;
        }
        this.#el.addEventListener('mouseover', _ => {           // Jei režimas ne view, uždedamas mouseover event'as:

            if (this.#gate) {                                   
                this.#color = this.#activeColor;
                this.#el.style.backgroundColor = this.#color;   // Jei #gate === true, kvadrato spalva pasikeičia į aktyvią (#activeColor), ir tai atsispindi DOM'e.

            }
        });
    }

    reset() {                                           // Grąžina kvadratą į „skaidrų“ foną – išvalo spalvą.
        this.#color = 'transparent';
        this.#el.style.backgroundColor = this.#color;
    }

    custom(color) {                                           // Grąžina kvadratą į „skaidrų“ foną – išvalo spalvą.
        this.#color = color;
        this.#el.style.backgroundColor = this.#color;
    }

    open(gate) {          // Atidaro arba uždaro kvadrato „vartus“ – leidžia arba neleidžia keisti spalvą mouseover metu.
        this.#gate = gate;
    }
    
    get color() {
        return this.#color;
    }


    /**
     * @param {string} color
     */
    set activeColor(color) {        // Leidžia iš išorės nustatyti spalvą, kuri pasikeis per mouseover. Pvz., naudota Frame klasėje.
        this.#activeColor = color;
    }

}