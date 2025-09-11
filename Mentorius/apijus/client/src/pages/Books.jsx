import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  // useState
  const [books, setBooks] = useState([]);
  // useEffect
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:3000/api/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://127.0.0.1:3000/api/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-700">My Library</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Title</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.author}</td>
              <td>{book.title}</td>
              <td>
                <button>
                  <Link to={"/edit/" + book.id}>Edit</Link>
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
};

export default Books;