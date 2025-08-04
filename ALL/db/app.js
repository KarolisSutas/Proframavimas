const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(express.static('public'));

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'forest' // db pavadinimas kuriame yra lenteles
});

  con.connect(err => { // prisijungiam prie db
    if (err) throw err;
    console.log("Connected!");
  });

  app.get('/all-clients', (req, res) => {
    // SELECT column_name(s)
    // FROM table1
    // INNER JOIN table2
    // ON table1.column_name = table2.column_name;

    // -- SELECT id, name, number, client_id vietoj to * (visus is visur)
    // AS pervadina lenteled
    const sql = `
    SELECT c.id, name, t.id AS tid, number, client_id 
    FROM clients AS c
    INNER JOIN telephones AS t
    ON c.id = t.client_id
    `;

    con.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });

  });

  app.get('/all-clients-left', (req, res) => {
    // SELECT column_name(s)
    // FROM table1
    // LeFT JOIN table2
    // ON table1.column_name = table2.column_name;

    const sql = `
    SELECT c.id, name, t.id AS tid, number, client_id 
    FROM clients AS c
    LEFT JOIN telephones AS t
    ON c.id = t.client_id
    `;

    con.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });

  });

  app.get('/all-clients-right', (req, res) => {
    // SELECT column_name(s)
    // FROM table1
    // RIGHT JOIN table2
    // ON table1.column_name = table2.column_name;

    const sql = `
    SELECT c.id, name, t.id AS tid, number, client_id 
    FROM clients AS c
    RIGHT JOIN telephones AS t
    ON c.id = t.client_id
    `;

    con.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });

  });

// Router
// serverio kodas kuris kreipias i db ir su ja bendrauja
app.get('/all-trees', (req, res) => {

  // SELECT column1, column2, ...
  // FROM table_name;

  const sortBy = req.query.sort || 'height'; // Default sort by height

  let sql;

  if (sortBy === 'name') {
    sql = `
      SELECT id, name, height, type
      FROM trees
      ORDER BY name
    `;
  } else if (sortBy === 'height') {
    sql = `
      SELECT id, name, height, type
      FROM trees
      ORDER BY height
    `;
  } else if (sortBy === 'type') {
    sql = `
      SELECT id, name, height, type
      FROM trees
      ORDER BY type
    `;
  }


  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
  
});

app.post('/tree', (req, res) => {

  const name = req.body.name;
  const type = req.body.type;
  const height = req.body.height;

  // INSERT INTO table_name (column1, column2, column3, ...)
  // VALUES (value1, value2, value3, ...);

  const sql = `
    INSERT INTO trees (name, type, height)
    VALUES (?, ?, ?)
  `;

  con.query(sql, [name, type, height], (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});

app.delete('/tree/:id', (req, res) => {

    const id = req.params.id;
    // paruosimas su ? ir paskui po sql sukuriamas masyvas [id]
    const sql = `
    DELETE FROM trees
    -- WHERE id = ${id}
    WHERE id = ?
    `;

    // paruosimas su ? ir paskui po sql sukuriamas masyvas [id]
    con.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.json(result);
    });

});

// kai visus duomenis keiciam patch kai viena keiciam
app.put('/tree/:id', (req, res) => {
    const id = req.params.id
    const height = req.body.height

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

    const sql = `
      UPDATE trees
      SET height = ?
      WHERE id = ?
    `;

    con.query(sql, [height, id], (err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});


