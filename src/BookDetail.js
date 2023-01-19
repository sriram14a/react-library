import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "./Source";

export function BookDetail() {
  const { bookid } = useParams();
  const [book, setBook] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bk) => {
        setBook(bk);
        console.log(bookid);
      });
  }, []);

  return (
    <div>
      <div className="background text-light p-5">
        <h1 className="text-center p-sm-2 p-sm-0 pb-5">{book.name}</h1>
        <div className="d-sm-flex p-sm-0 pt-5 mt-sm-0 mt-5 text-center text-sm-left justify-content-around">
          <img className="cover-poster" src={book.poster} />
          <div className="pl-sm-5 pl-0 pt-1">
            <h3>Summary : </h3>
            <p className="p-3">{book.summary}</p>
            <Button
              onClick={() => navigate(-1)}
              variant="outlined"
              sx={{color:"white"}}
              startIcon={<ArrowBackIosIcon />}
            >
              BACK
            </Button>
            <IconButton
              color="error"
              aria-label="deleteButton"
              onClick={() => {
                fetch(`${API}/books/${book.id}`, {
                  method: "DELETE",
                }).then(() => navigate("/"));
              }}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              color="secondary"
              aria-label="editButton"
              onClick={() => navigate(`/book/edit/${book.id}`)}
            >
              <EditIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
