import Frame from './Frame';
import LS from './LS';


export default class Main extends LS{


    static init() {

        storageInit({
            key: 'nice Art'
    });

        if (document.querySelector('[data-create]')) {
            this.initCreate();
        }
    }



    static initCreate() {
        const f = document.querySelector('[data-create-frame]');
        const colorImput = document.querySelector('[type="color"]');

        const titleInput = document.querySelector('input[data-title]');

        const saveButton = document.querySelector('button[data-save]'); 
        const clear = document.querySelector('button[data-clear]'); 


        const frame = new Frame(10, 20, f, 'create');


        frame.addBorders('gray', 1);
        frame.setActiveColor(colorImput.value);


        colorImput.addEventListener('change', (e) => {
            frame.setActiveColor(e.target.value);
        });

        clear.addEventListener('click', _ => {
            frame.reset();
        });

        saveButton.addEventListener('click', _ => {
            this.store({
                frame,
                title: titleInput.value
            });
        });

    }
    
}