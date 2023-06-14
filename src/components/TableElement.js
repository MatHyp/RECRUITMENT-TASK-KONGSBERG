import React, { useContext, useState, useEffect } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { useParams } from "react-router";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
function TableElement() {
  const { slug } = useParams();
  const [books, setBooks] = useContext(ApiContext);
  const [singleBook, setSingleBook] = useState([]);

  useEffect(() => {
    setSingleBook(
      books
        .filter((book) => book.id.toString() === slug)
        .map(({ id, title, author, published }) => {
          return {
            id: id,
            title: title,
            author: author,
            published: published,
          };
        })
    );
  }, [books]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Titile", width: 200 },
    { field: "author", headerName: "Author", width: 200 },
    { field: "published", headerName: "Published", width: 200 },
  ];

  return (
    <div className="">
      {singleBook.length === 0 ? (
        <p>Element Not Founded</p>
      ) : (
        <div>
          <p>
            <Link to={`/`}>Main table</Link> /{" "}
            {`Current book:${singleBook[0].title}`}
          </p>

          <DataGrid
            rows={singleBook}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
}

export default TableElement;
