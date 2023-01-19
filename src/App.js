import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import Button from "@mui/material/Button";
import { BookDetail } from "./BookDetail";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { BookList } from "./BookList";
import { AddBook } from "./AddBook";
import { EditBook } from "./EditBook";

export default function App() {
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        setBookList(data);
      });
  }, []);

  return (
    
      <div className="appbar">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:bookid" element={<BookDetail />} />
          <Route
            path="/book/add"
            element={<AddBook bookList={bookList} setBookList={setBookList} />}
          />
          <Route path="/book/edit/:bookid" element={<EditBook />} />
        </Routes>
      </div>
  );
}
