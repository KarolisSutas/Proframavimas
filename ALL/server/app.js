const express = require('express');
const app = express();
const port = 80;


app.use(express.static('public'));

// Router

// get yra metodas
// '/' simbolizuoja url i kuri einame be domeno vardo
// req - request tekstas paverstas i objekta ir tai ka narsykle mums atsiuncia. 
// res - response objektas. res sendina es.send('Labas, mano mielasis pasauli!')

app.get('/', (req, res) => {

  const labasX20 = 'Labas'.repeat(120);

  res.send(labasX20);
});

app.get('/mielas/barsukas', (req, res) => {

  res.send('labas Barsukai!');
});
// :col tai kintamasis kuris randasi requeste.atsiuncia narsykle
app.get('/spalva/:col', (req, res) => {

  const C = req.params.col;

  res.send(`
    <h2>${C.toUpperCase()}</h2>
    <p style="color: ${C};">
      Labas, Spalva!
    </p>`
  );

});

// 1. Einant adresu /plus-desimt/14 turi būti atsakymas 24 (14 + 10 = 24) 14 yra kintamasis, kuris gali būti bet koks skaičius

app.get('/plus-desimt/:skaicius', (req, res) => {

  const sk = parseInt(req.params.skaicius); // parseInt pavercia i stringa skaiciu

  res.send(10 + sk + '');

});

// 2. Einant adresu /daugyba/14/2 turi būti atsakymas 28 (14 * 2 = 28) 14 ir 2 yra kintamieji, kurie gali būti bet kokie skaičiai

app.get('/daugyba/:sk1/:sk2', (req, res) => {

  const a = parseInt(req.params.sk1);
  const b = parseInt(req.params.sk2);

  res.send( a * b + '');

});

// /plus-vienuolika?skaicius1=2&skaicius2=5 - perdavimas per querry

app.get('/plus-vienuolika', (req, res) => {

  const sk1 = parseInt(req.query.skaicius1 || 0);
  const sk2 = parseInt(req.query.skaicius2 || 0);

  res.send( 11 + sk1 + sk2 + '');

});
// querry laisvai informacijai o parametrai grieztai informacijai perduoti

// baigias Router

app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});
