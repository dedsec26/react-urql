import { useState } from "react";

const AddBook = () => {
  const [aname, setaName] = useState("placeholder");
  const [book, setBook] = useState("");
  const [isbn, setIsbn] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Author: ", aname, " Book: ", book, " ISBN: ", isbn);
  };
  let handleChange = (e) => {
    setaName(e.target.value);
  };
  return (
    <>
      <h2>Add Books</h2>
      <form>
        <label htmlFor="aname">Name: </label>
        {/* <input
          type="select"
          name="aname"
          id="aname"
          value={aname}
          onChange={(e) => setaName(e.target.value)}
        /> */}
        <select name="aname" id="aname" value={aname} onChange={handleChange}>
          <option value="placeholder">Please Select an Author</option>
          <option value="placeholder2">Please Select an Author</option>
        </select>

        <label htmlFor="book">Book Name: </label>
        <input
          type="text"
          name="book"
          id="book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <label htmlFor="isbn">ISBN: </label>
        <input
          type="text"
          name="isbn"
          id="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default AddBook;
