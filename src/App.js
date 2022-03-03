import AddAuthor from "./AddAuthor";
import AddBook from "./AddBook";
import Books from "./Books";
import { createClient } from "urql";
const client = createClient({});

function App() {
  return (
    <>
      {/* <AddAuthor /> */}
      <AddBook />
      {/* <Books /> */}
    </>
  );
}

export default App;
