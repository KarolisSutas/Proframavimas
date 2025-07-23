const cookieParser = require('cookie-parser');
const express = require('express');
const app = express()
const port = 3000

app.use(cookieParser());

app.get('/', (req, res) => {

  let counter;

  const minute = 60 * 1000;
  const hour = 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;

  if (req.cookies.kartai) {
    counter = parseInt(req.cookies.kartai); // nuskaitom kuki
  } else {
    counter = 0;
  }

  counter++;

  res.cookie('kartai', counter, { maxAge: day }); // irasome kuki

  // res.clearCookie('kartai'); istrina cookie uzdedant praeities laika

  res.send(`
    Hello ${counter} Cookie!
    <a href="http://localhost:3000/reset/">TRINTI</a>
    `);
});

app.get('/reset', (req, res) => {

  res.clearCookie('kartai'); // istrina cookie uzdedant praeities laika

  res.redirect('http://localhost:3000');

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});