import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      <IconButton
        aria-label="like-btn"
        color="primary"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <Badge badgeContent={like} color="primary">
        <ThumbUpIcon/>
        </Badge>
      </IconButton>
      <IconButton
        aria-label="like-btn"
        color="error"
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        <Badge badgeContent={dislike} color="error">
        <ThumbDownAltIcon/>  
        </Badge>
      </IconButton>
    </div>
  );
}
