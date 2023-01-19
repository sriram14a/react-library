import { useEffect, useState } from "react";
import { Book } from "./Book";
import { API } from "./Source";
import { useNavigate } from "react-router-dom";

export function BookList() {
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();
  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bkl) => {
        setBookList(bkl);
        console.log(bkl);
      });
  };

  useEffect(() => getBooks(), []);

  return (
    <div className="background scroller">
      <div className="d-flex justify-content-around">
        <h1 data-text="WELCOME TO LIBRARY" className="text-light text-center">
          WELCOME TO LIBRARY
        </h1>
        <div className="addbook">
        <button className="button" onClick={() => navigate("/book/add")}>
          ADD BOOK
        </button>
        </div>
      </div>
      <div className="d-flex scroller">
        {bookList.map((bk) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
          />
        ))}
      </div>
    </div>
  );
}
