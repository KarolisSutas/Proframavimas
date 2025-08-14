import express from 'express';

const app = express();

// CRUD
// create - app.post()
// read - app.get()
// update - app.put()
// delete - app.delete()

app.get('/', (req, res) => {
    res.send('Its alive! ITS ALIVE!!!');
});

app.get('/demo', (req, res) => {
    res.send([1, 2, 3]);
});

// Params
app.get('/demo/:id', (req, res) => {
    const id = req.params.id;
    res.send(id);
});

app.get('/demo/:id/:cat', (req, res) => {
    const id = req.params.id;
    const cat = req.params.cat;
    res.send([id, cat]);

});

// queries

app.get('/query', (req, res) => {
    const q = req.query
    res.send(q);
});
//...........................................

// laikina duombaze
const books = [
    {
        id: 1,
        author: "Kobo Abe",
        title: "Žmogus-dėžė",
    },
    {
        id: 2,
        author: "Iain Banks",
        title: "Tiltas",
    },
    {
        id: 3,
        author: "Italo Calvino",
        title: "Mūsų protėviai",
    },
];

// MIDDLEWARE
app.use(express.json());


//....................................
app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/api/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id === parseInt(id));
    if (!book) return res.status(404).send('Knyyga su tokiu id neegzistuoja');
    res.send(book);

});

app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        author: req.body.author,
        title: req.body.title
    };
    books.push(newBook);
    res.send(books);
});

app.put('/api/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id === parseInt(id));
    if (!book) return res.status(404).send('Knyyga su tokiu id neegzistuoja');

    book.author = req.body.author;
    book.title = req.body.title;
    res.send(books);
});

app.delete('/api/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id === parseInt(id));
    if (!book) return res.status(404).send('Knyyga su tokiu id neegzistuoja');

    const index = books.indexOf(book);
    books.splice(index, 1);
    res.send(books);
});

//............................................
app.listen(3000, () => {
    console.log('listening on port 3000...');
});
