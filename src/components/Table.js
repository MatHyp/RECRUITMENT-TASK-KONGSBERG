import React, { useContext, useState, useEffect } from "react";
import { ApiContext } from "../contexts/ApiContext";
import "../styles/Table.css";
// import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";

function Table() {
  const [books, setBooks] = useContext(ApiContext);

  // Columns for MUI table
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Titile", width: 200 },
    { field: "author", headerName: "Author", width: 200 },
    { field: "published", headerName: "Published", width: 200 },
    {
      field: "More About Book",
      width: 150,
      renderCell: (cellValues) => {
        console.log(cellValues);
        return <Link href={cellValues.id}>Click for more</Link>;
      },
    },
  ];

  // Map rows for MUI table
  const rows = books.map(({ id, title, author, published }) => {
    return {
      id: id,
      title: title,
      author: author,
      published: published,
    };
  });

  return (
    <div className="table">
      <h2 style={{ textAlign: "center", fontWeight: "300" }}>Main Table</h2>
      <p>Breadcrumb: /</p>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}

export default Table;
