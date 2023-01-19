import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";

export function Book({ book, id }) {
  const styles = {
    color: book.rating >= 8 ? "green" : "red",
  };
  const navigate = useNavigate();

  return (
    <div className="p-3 book-container">
      <div className="cardbody">
        <img className="image" src={book.poster} alt={book.name} />
        <div className="padding text-center">
          <h6 className="book-name">{book.name}</h6>
        </div>

        <div className="text-center">
          <p>Author:{book.authors}</p>
          <div className="d-flex justify-content-around">
          <p style={styles}>Rating:⭐{book.rating}</p>
          <div>
          <IconButton sx={{marginTop:"-6px"}} color="inherit" onClick={() => navigate("/book/" + id)}>
           <InfoIcon/>
          </IconButton>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
