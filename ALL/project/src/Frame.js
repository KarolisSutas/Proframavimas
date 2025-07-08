import Sq from "./Sq";

export default class Frame {

    #size;
    #mode;
    #frameSize;
    #data;
    #frameHolderElement;
    #sqs = []; // kvadraturku objektai


    constructor(size, frameSizeOrFrameData, frameHolderElement, mode = 'view') {
        this.#size = size;
        this.#mode = mode;
        this.#frameHolderElement = frameHolderElement;
        if (typeof frameSizeOrFrameData === 'number') {
            this.#frameSize = frameSizeOrFrameData;
            this.#data = null;
        } else if (frameSizeOrFrameData === 'object' && Array.isArray(frameSizeOrFrameData)) {
            this.#frameSize = Math.SQRT2(frameSizeOrFrameData.length);
            this.#data = frameSizeOrFrameData;
        } else {
            throw new Error('Invalid argument: frameSizeOrFrameData must be a number or an array');
        }
        this.makeFrame(); // paleidziama frame'o gamyba
    }

    makeFrame() { // frame'o kodas
        let sqNumber = 0;
        for (let i = 0; i < this.#frameSize; i++) {
            for (let j = 0; j < this.#frameSize; j++) {
                const args = [this.#size * j, this.#size * i, this.#size]
                this.#data !== null && args.push(this.#data[sqNumber]);
                const sq = new Sq(...args);
                sq.addTo(this.#frameHolderElement, this.#mode); // idejom 
                this.#sqs.push(sq); // pasidedam visa objekta
                sqNumber++;
            }
        }
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
// dabar galima paziuret veikia ar ne
    

}