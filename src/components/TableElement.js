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
        .map(
          ({
            id,
            title,
            author,
            published,
            genre,
            isbn,
            publisher,
            description,
          }) => {
            return {
              id: id,
              title: title,
              author: author,
              published: published,
              genre: genre,
              publisher: publisher,
              isbn: isbn,
              description: description,
            };
          }
        )
    );
  }, [books]);

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "title", headerName: "Titile", width: 150 },
    { field: "author", headerName: "Author", width: 150 },
    { field: "published", headerName: "Published", width: 90 },
    { field: "publisher", headerName: "Publisher", width: 150 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "isbn", headerName: "Isbn", width: 150 },
    {
      field: "description",
      headerName: "description",
      width: 1300,
    },
  ];

  return (
    <div className="">
      <h2 style={{ textAlign: "center", fontWeight: "300" }}>Book details</h2>

      {singleBook.length === 0 ? (
        <p>Element Not Founded</p>
      ) : (
        <div>
          <p>
            Breadcrumb:
            <Link to={`/`}> Main table</Link> / {`${singleBook[0].title}`}
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
