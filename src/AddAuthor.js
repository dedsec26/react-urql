import { useState } from "react";

const AddAuthor = () => {
  const [aname, setaName] = useState("");
  const [contact, setContact] = useState("");
  const [book, setBook] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Author: ", aname, " Contact: ", contact, " Book: ", book);
  };
  return (
    <>
      <h2>Add an author</h2>
      <form>
        <label htmlFor="aname">Name: </label>
        <input
          type="text"
          name="aname"
          id="aname"
          value={aname}
          onChange={(e) => setaName(e.target.value)}
        />
        <label htmlFor="contact">Contact: </label>
        <input
          type="text"
          name="contact"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <label htmlFor="book">Book Name: </label>
        <input
          type="text"
          name="book"
          id="book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default AddAuthor;
