import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { API } from "./Source";
import { hover } from "@testing-library/user-event/dist/hover";

export function EditBook() {
  const { bookid } = useParams();
  const [book, setBook] = useState(null);
  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bkdata) => {
        setBook(bkdata);
      });
  }, []);

  return book ? <EditBookForm book={book} /> : "Loading.....";
}

function EditBookForm({ book }) {
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);
  const [author, setAuthor] = useState(book.Authors);
  const navigate = useNavigate();

  return (
    <div className="p-5 background d-flex flex-column">
      <TextField
        sx={{ backgroundColor: "white", borderRadius: "10px", margin: "10px" }}
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Enter name"
        value={name}
      />
      <TextField
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
        type="text"
        placeholder="Enter poster"
        value={poster}
        sx={{ backgroundColor: "white", borderRadius: "10px", margin: "10px" }}
      />
      <TextField
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
        type="text"
        placeholder="Enter rating"
        value={rating}
        sx={{ backgroundColor: "white", borderRadius: "10px", margin: "10px" }}
      />
      <TextField
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
        type="text"
        placeholder="Enter summary"
        value={summary}
        sx={{ backgroundColor: "white", borderRadius: "10px", margin: "10px" }}
      />
      <TextField
        label="Author"
        variant="outlined"
        onChange={(event) => setAuthor(event.target.value)}
        type="text"
        placeholder="Enter Author"
        value={author}
        sx={{ backgroundColor: "white", borderRadius: "10px", margin: "10px" }}
      />
      <div className="d-flex">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            "&:hover": {
                border: "transparent",
                color: 'black',
                backgroundColor: 'white'},
            borderRadius: "10px",
            margin: "10px",
          }}
          onClick={() => {
            const updatedBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              authors: author,
            };

            fetch(`${API}/books/${book.id}`, {
              method: "PUT",
              body: JSON.stringify(updatedBook),
              headers: { "Content-Type": "application/json" },
            })
              .then((data) => data.json())
              .then(() => navigate(-1));
          }}
        >
          SAVE
        </Button>
        <Button
          onClick={() => navigate(-1)}
          variant="outlined"
          sx={{
            color: "white",
            borderRadius: "10px",
            margin: "10px",
          }}
          startIcon={<ArrowBackIosIcon />}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
