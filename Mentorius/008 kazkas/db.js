import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}).promise()

export async function getBooks() {
    const books = await db.query('SELECT * FROM books');
    return books[0];
}

export async function getBook(id) {
    const book = await db.query('SELECT * FROM books WHERE id = ?', [id]);
    return book[0];
}

export async function addBook(author, title) {
    await db.query('INSERT INTO books (author, title) VALUES (?,?)', [author, title]);
    const books = await getBooks();
    return books;
}




