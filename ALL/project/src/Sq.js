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
        parent.appendChild(this.#el);
        if (mode == 'view') {
            return;
        }
        this.#el.addEventListener('mouseover', _ => {
            console.log('crimson');
            if (this.#gate) {
                this.#color = this.#activeColor;
                this.#el.style.backgroundColor = this.#color;

            }
        });
    }

    reset() {
        this.#color = 'transparent';
        this.#el.style.backgroundColor = this.#color;
    }

    open(gate) { // jeigu atidarytas kvadr spalva pasikeis, jei ne tai ne
        this.#gate = gate;
    }

    
    /**
     * @param {string} color
     */
    set activeColor(color) {
        this.#activeColor = color;
    }

}