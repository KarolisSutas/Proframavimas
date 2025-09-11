import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Edit = () => {
  const [book, setBook] = useState({
    author: "",
    title: "",
  });

  const navigate = useNavigate();
  const location= useLocation();

  const id = location.pathname.split('/')[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://127.0.0.1:3000/api/books/" + id, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Edit book</h1>
      <form action="#">
        <input type="text" name="author" placeholder="author" onChange={handleChange} minLength="5" required />
        <input type="text" name="title" placeholder="title" onChange={handleChange} minLength="1" required />
        <button onClick={handleClick}>Update</button>
      </form>
    </div>
  );
};

export default Edit;
 