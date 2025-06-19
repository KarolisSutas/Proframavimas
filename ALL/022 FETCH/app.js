function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

console.log('Hello, Json');

// JSON JavaScript Object Notation 

const obj = [
    {a: 2},
    {a: 2},
    {a: [4, 5]},
];

// ka siusti

console.log(obj, typeof obj);

const objString = JSON.stringify(obj); // is objekto gauti stringa

console.log(objString, typeof objString);


const objBack = JSON.parse(objString); // atgal is stringo i objekta

console.log(objBack, typeof objBack);

// kaip siusti
// API puslapis kuriame ne html, o duomenys pateikti.

console.clear();

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // kai sulaukiam atsakyma paverciam objektu
    .then(json => {
        console.log(json);
        prinTitles(json);
    }) // atspausdinam konsoleje

console.log('kodas PO fetch'); // sitas kodas ivyksta anksciau nei fetch

const prinTitles = obj => {
    const ul = document.querySelector('ul');
    obj.forEach(p => { // p tai postas is API
        const li = document.createElement('li');
        li.innerText = p.title; // title is post 
        ul.appendChild(li);
    });

}

const cart = [
    { id: 877, title: 'Pienisko desros', price: 2.45, count: 2 },
    { id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
    { id: 16548, title: 'Batonas studentu', price: 1.22, count: 1 },
    { id: 974, title: 'Bulves 4kl', price: 0.88, count: 2 }
];

// prie kiekvieno produkto prideti savybe total ir joje paskaiciuoti atitinkamo produkto bendra suma
const cartWithTotal = cart.map(obj => ({ ...obj, total: obj.count * obj.price}));

console.log(cartWithTotal);

const newProduct = { id: 7892, title: 'Morkos beveik plautos', price: 0.35, count: 1 };

// prideti i kart masyva

cart.push(newProduct);
// cart.unshift(newProduct);  ideda i masyvo pradzia
console.log(cart);


const batonas = cart.find(p => p.title == 'Batonas studentu');

console.log(batonas);



const newProduct2 = { id: 974, title: 'Bulves 4kl', price: 0.88, count: 2 };
const newProduct3 = { id: 9320, title: 'Bulves 4kl', price: 0.98, count: 2 };
const deti = rand(0, 1) ? newProduct2 : newProduct3;
// prideti produkta deti i krepseli


const cartProduct = cart.find(p => p.id == deti.id);

if (cartProduct) {
    cartProduct.count = cartProduct.count + deti.count;
} else {
    cart.push(deti);
}
console.log(cart);



