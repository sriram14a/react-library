import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { API } from "./Source";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";



const bookValidationSchema = yup.object({
  name: yup.string().required("Enter name"),
  poster: yup
    .string()
    .min(4, "Need longer poster")
    .required("Enter poster URL"),
  rating: yup
    .number()
    .min(0, "Need a higher rating")
    .max(10, "To much rating")
    .required("Enter rating "),
  summary: yup
    .string()
    .min(20, "Need longer Summary")
    .required("Enter summary details"),
    authors: yup
    .string()
    .min(3, "Need longer Summary")
    .required("Enter author name"),
});

export function AddBook() {

    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      authors:"",
      poster: "",
      rating: "",
      summary: "",
    },
    validationSchema: bookValidationSchema,
    onSubmit: (newBook) => {
      createBook(newBook);
    },
   
  });

  const createBook = (newBook) => {
    console.log("createBook", newBook);
    fetch(`${API}/books`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate("/"));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column p-5 background">
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        sx={{ backgroundColor:"white",color:"white",borderRadius: "10px", margin: "10px" }}
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

      <TextField
        id="poster"
        name="poster"
        label="Poster"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.poster}
        sx={{ backgroundColor:"white",borderRadius: "10px", margin: "10px" }}
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}

      <TextField
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rating}
        sx={{backgroundColor:"white", borderRadius: "10px", margin: "10px" }}
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}
      <TextField
        id="summary"
        name="summary"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary}
        label="Summary"
        sx={{backgroundColor:"white", borderRadius: "10px", margin: "10px" }}
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}
        <TextField
        id="authors"
        name="authors"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.authors}
        label="author"
        sx={{ backgroundColor:"white",borderRadius: "10px", margin: "10px" }}
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}


   <div className="d-flex">
   <Button
        type="submit"
        variant="contained"
        onClick={createBook}
        sx={{ backgroundColor:"black", borderRadius: "10px", margin: "10px","&:hover": {
            border: "transparant",
            color: 'black',
            backgroundColor: 'white'
          } }}
      >
        Add Book
      </Button>
      <Button
              onClick={() => navigate(-1)}
              variant="outlined"
              sx={{color:"white"}}
              startIcon={<ArrowBackIosIcon />}
            >
              BACK
            </Button>
   </div>
    </form>
  );
}
