import Sq from "./Sq";          // Importuoja pirmąją klasę (vieno kvadrato logiką).

export default class Frame {

    #size;                  // kiekvieno kvadrato dydis px
    #mode;                  // režimas: 'view' arba 'edit'
    #frameSize;             // kiek kvadratų vienoj eilėj
    #data;                  // jei duota spalvų masyvas
    #frameHolderElement;    // DOM elementas į kurį dėti
    #sqs = [];              // masyvas visų kvadratų objektų


    constructor(size, frameSizeOrFrameData, frameHolderElement, mode = 'view') {  // new Frame(10, 100, tf, 'edit')
        this.#size = size;
        this.#mode = mode;
        this.#frameHolderElement = frameHolderElement;
        if (typeof frameSizeOrFrameData === 'number') {
            this.#frameSize = frameSizeOrFrameData;
            this.#data = null;
        } else {
            this.#frameSize = Math.sqrt(frameSizeOrFrameData.length);
            this.#data = frameSizeOrFrameData;
        }
        this.makeFrame(); // paleidziama frame'o gamyba

    }

    makeFrame() { // frame'o kodas
        let sqNumber = 0;
        for (let i = 0; i < this.#frameSize; i++) {                         // EILUTĖS (i = 0...9)
            for (let j = 0; j < this.#frameSize; j++) {                     // STULPELIAI (j = 0...9)
                const args = [this.#size * j, this.#size * i, this.#size]   // [x, y, size]
                this.#data !== null && args.push(this.#data[sqNumber]);     // jei #data !== null → args.push(data[sqNumber]); bet čia NEvyksta, nes data === null
                const sq = new Sq(...args);                                 // sukuriamas kvadratas. kviečia Sq konstruktorių, kuris sukuria <div> su style reikšmėmis
                sq.addTo(this.#frameHolderElement, this.#mode);             // Kvadratas įkeliamas į DOM, įdedamas į masyvą 
                this.#sqs.push(sq);                                         // pasidedam visa objekta, kvadratų skaičius didėja. Objektas saugomas this.#sqs masyve.
                sqNumber++;                                                 // Sukuriamas naujas Sq, pridedamas į DOM ir masyvą.
            }
        }
        if (this.#mode == 'view') {
            return;
        }

        document.addEventListener("mousedown", _ => this.openGates());
        document.addEventListener("mouseup", _ => this.closeGates());
    }


    reset() {
        this.#sqs.forEach(sq => sq.reset());
    }



    ai() {
            this.#sqs.forEach(sq => sq.custom('#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0')));
    }
    

// spalvos perkelimas ir vartu atidarimas arba uzdarymas
    openGates() {
        this.#sqs.forEach(sq => sq.open(true)); // atsidaro visi gate'ai ant kvadratuku
    }
    closeGates() {
        this.#sqs.forEach(sq => sq.open(false)); // uzsidaro visi gate'ai
    }
// settinam colora
    setActiveColor(color) {
        this.#sqs.forEach(sq => sq.activeColor = color);
    }

    export() { // surinks visu kvadr spalvas sudes i masyva ir ta masyva grazins
        const colors = [];
        this.#sqs.forEach(sq => colors.push(sq.color));
        return colors;
    }

    addBorders(color, borderSize) {         // Uždedame borderį ant elemento div class="container"
        this.#frameHolderElement.style.border = `${borderSize}px solid ${color}`;
         const elSize = this.#frameSize * this.#size + 2 * borderSize; // prideti 2 kad piesimas neuzsidetu ant borderio
         this.#frameHolderElement.style.width = elSize + 'px';
         this.#frameHolderElement.style.height = elSize + 'px';
    }
    

}