// Įtraukiame reikalingas Node.js ir trečiųjų šalių bibliotekas
const express = require('express');            // Express framework'ą – pagrindinė serverio biblioteka
const app = express();                         // Sukuriame Express aplikacijos objektą (serverį)
const cookieParser = require('cookie-parser'); // Middleware cookies nuskaitymui ir rašymui
const bodyParser = require('body-parser');     // Middleware JSON body nuskaitymui
const md5 = require('md5');                    // Biblioteka MD5 hash'ams generuoti
const fs = require('node:fs');                 // Node.js failu sistema
const port = 3000;                             // serverio portas


// Registruojame middleware, kurie bus naudojami visoms užklausoms
app.use(cookieParser());           // Leidžia naudoti res.cookies ir req.cookies
app.use(bodyParser.json());        // Leidžia naudoti JSON duomenis iš POST užklausų
app.use(express.static('public')); // Paduoda 'public' aplanko statinius failus (pvz. CSS, JS, img)

// Custom middleware, kuris tikrina vartotojo sesiją prieš kiekvieną užklausą
app.use((req, res, next) => {


  // Nuskaitome session token'ą iš cookies (jeigu yra)
  const token = req.cookies.session || '';
  if (token) {

    // Jeigu yra token, nuskaitome vartotojų sąrašą iš users.json
    let users = fs.readFileSync('./users.json', 'utf8');
    users = JSON.parse(users);

    // Ieškome vartotojo, kurio token atitinka cookie
    const user = users.find(u => u.token === token);

    if (user) {
      // Jei radome, prijungiame vartotojo duomenis prie req.user
      req.user = {
        name: user.name,
        email: user.email
      }
    } else {
      // Jei neradome tokio tokeno, laikome neprisijungusiu
      req.user = null;
    }
  } else {
    // Jei nėra tokeno, vartotojas neprisijungęs
    req.user = null;
  }

  const url = req.originalUrl; // Dabartinės užklausos URL

// Jei norima pasiekti /profile, bet vartotojas neprisijungęs → grąžiname 401 Unauthorized
  if (url === '/profile' && !req.user) {
    res.status(401).send('Unauthorized');
    // Stabdome tolimesnį vykdymą
    return;
  }
// Pereiname prie kito middleware arba route
  next();
});


// GET maršrutas pagrindiniam puslapiui
app.get('/', (req, res) => {

  let counter; // Sukuriame kintamąjį, saugosiantį apsilankymų skaičių
// Laiko konstantos cookies galiojimui
  const minute = 60 * 1000;
  const hour = 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;

// Tikriname, ar yra cookie su pavadinimu "kartai"
  if (req.cookies.kartai) {
    counter = parseInt(req.cookies.kartai); // Jei yra, nuskaitome ir paverčiame į skaičių
  } else {
    counter = 0; // Jei nėra – pradedame nuo 0
  }

  counter++; // Didiname skaičių vienetu

  // Įrašome atnaujintą skaičių atgal į cookie, galioja vieną dieną
  res.cookie('kartai', counter, { maxAge: day }); // irasome kuki

  // Grąžiname paprastą HTML atsakymą su apsilankymų skaičiumi ir nuoroda "TRINTI"
  res.send(`
        Hello ${counter} Cookie!
        <a href="http://localhost:3000/reset/">TRINTI</a>
    `);
});


// GET maršrutas /reset – skirtas išvalyti cookies
app.get('/reset', (req, res) => {

  setTimeout(_ => {  // Po 5 sekundžių...

    res.clearCookie('kartai'); //istrina cookie uzdedant praeities laika

    // Peradresuojame atgal į pagrindinį puslapį
    res.redirect('http://localhost:3000/');

  }, 5000);


});

// GET maršrutas /login – rodo prisijungimo puslapį
app.get('/login', (req, res) => {

  if (req.user) {
    // Jei jau prisijungęs, peradresuojame į /reset/
    res.redirect('http://localhost:3000/reset/');
    return;
  }

  // Jei neprisijungęs – nuskaitome login.html šabloną iš failų sistemos
  const file = fs.readFileSync('./templates/login.html', 'utf8');
  res.send(file); // Grąžiname prisijungimo formą
});

// POST maršrutas /logout – atsijungimas
app.post('/logout', (req, res) => {

  res.clearCookie('session'); // Išvalome sesijos cookie
  res.json({
    success: true // Grąžiname JSON atsakymą, kad atsijungimas pavyko
  });
  
});

// POST maršrutas /login – apdoroja prisijungimo duomenis
app.post('/login', (req, res) => {

  // Ištraukiame el. paštą ir slaptažodį iš užklausos kūno (req.body)
  const email = req.body.email;
  const psw = md5(req.body.psw); // Slaptažodį hash'iname su MD5

  // Nuskaitome vartotojų sąrašą iš failo
  let users = fs.readFileSync('./users.json', 'utf8');
  users = JSON.parse(users);

  // Tikriname, ar yra vartotojas su tokiu email ir hash'u
  const user = users.find(u => u.email === email && u.psw === psw);

  if (!user) {
    // Jei neradome, grąžiname klaidą JSON formatu
    res.json({
      success: false,
      message: 'User email or password invalid'
    });
  } else {

    // Jei radome vartotoją, sugeneruojame pseudo-atsitiktinį token
    const token = md5(Math.random() + 'SALT 2587415468'); // psuedo atsitiktinis stringas

    // Įrašome token'ą vartotojo objekte
    user.token = token;
    // Iš naujo įrašome atnaujintą users.json failą
    users = JSON.stringify(users);
    fs.writeFileSync('./users.json', users);

    // Įrašome token'ą į cookies
    res.cookie('session', token);

    // Grąžiname sėkmės atsakymą JSON formatu
    res.json({
      success: true,
      message: 'Welcome!',
    });
  }

});

// GET maršrutas /profile – rodo vartotojo profilį
app.get('/profile', (req, res) => {

  const userName = req.user.name; // Imame vartotojo vardą iš req.user (middleware užpildo)

  // Nuskaitome HTML šabloną iš failų sistemos
  let file = fs.readFileSync('./templates/profile.html', 'utf8');

  // Pakeičiame {{userName}} žymę į tikrą vartotojo vardą
  file = file.replace('{{userName}}', userName);
  // Išsiunčiame atnaujintą HTML puslapį
  res.send(file);

  // Alternatyva būtų paprastas HTML atsakymas:
  // res.send(`<h1>Profile</h1><h2>Hello, ${userName} </h2>`);


});


// Galiausiai paleidžiame serverį ant nurodyto porto
app.listen(port, () => {
  console.log(`Cookie app listening on port ${port}`)
});