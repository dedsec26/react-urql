import { useState } from "react";
import RenderBooks from "./RenderBooks";

const Books = () => {
  let [aname, setAname] = useState("");
  let handleChange = (e) => {
    setAname(e.target.value);
  };
  return (
    <>
      <div>Please Select an author to see author specific books.</div>
      <select name="aname" id="aname" value={aname} onChange={handleChange}>
        <option value="placeholder">Please Select an Author</option>
        <option value="placeholder2">Please Select an Author</option>
      </select>
      <RenderBooks data={aname} />
    </>
  );
};

export default Books;
