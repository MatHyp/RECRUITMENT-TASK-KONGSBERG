import Table from "./components/Table";
import TableElement from "./components/TableElement";

import React from "react";
import Store from "./store/Store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Table with datas about vatious books
      </h1>

      <Store>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Table />}
            />
            <Route
              path="/:slug"
              element={<TableElement />}
            />
          </Routes>
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
