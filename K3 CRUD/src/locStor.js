import { v4 } from 'uuid';

export default class locStor {

    static key;
    
    static storageInit(settings) {
        this.key = settings.key;
    }

    static read() {
        const storedData = localStorage.getItem(this.key);
        if (null === storedData) {
            return [];
        }
        return JSON.parse(storedData);
    }

    static write(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
 // CRUD
    static store(data) {
        this.write([...this.read(), {...data, id: v4()}]);
    }

    static destroy(id) {
        this.write(this.read().filter(inv => inv.id != id));
    }

    static update(id, updatedInvoice) {
        const data = this.read();
        const index = data.findIndex(inv => inv.id === id);
        if (index !== -1) {
            data[index] = updatedInvoice;
            localStorage.setItem(this.key, JSON.stringify(data));
        }
    }

}