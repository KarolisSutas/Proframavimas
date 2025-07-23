const fs = require('node:fs');
const md5 = require('md5');

const users = [
    {name: 'Briedis', email: 'briedis@gmail.com', psw: md5('123'), token: ''},
    {name: 'Barsukas', email: 'barsukas@gmail.com', psw: md5('123'), token: ''},
    {name: 'Bebras', email: 'bebras@gmail.com', psw: md5('123'), token: ''}
];

// sukuria fake faila su useriais
fs.writeFileSync('./users.json', JSON.stringify(users));

// package.json parasyt "seed": "node seeder.js", 
// tada terminale npm run seed
// ir useriai sukeliami i faila users.json
// nereikai rankiniu budu suvesti userius