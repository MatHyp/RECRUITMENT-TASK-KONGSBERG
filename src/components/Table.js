import React, { useContext, useState, useEffect } from "react";
import { ApiContext } from "../contexts/ApiContext";
import "../styles/Table.css";
import { DataGrid } from "@mui/x-data-grid";
function Table() {
  const [books, setBooks] = useContext(ApiContext);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Titile", width: 200 },
    { field: "author", headerName: "Author", width: 200 },
    { field: "published", headerName: "Published", width: 200 },
  ];

  const rows = books.map(({ id, title, author, published }) => {
    return {
      id: id,
      title: title,
      author: author,
      published: published,
    };
  });

  console.log(rows);
  return (
    <div className="table">
      <p>Main table /</p>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={1}
      />
    </div>
  );
}

export default Table;
