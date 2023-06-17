import React, { useState, useEffect } from "react";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
function Store({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/books?_quantity=10")
      .then(({ data }) => {
        setBooks(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ApiContext.Provider value={[books, setBooks]}>
      {children}
    </ApiContext.Provider>
  );
}
export default Store;
