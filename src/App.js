import Table from "./components/Table";
import TableElement from "./components/TableElement";

import React from "react";
import Store from "./store/Store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/fonts.css";

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "center", fontWeight: "500" }}>
        RECRUITMENT-TASK-KONGSBERG
      </h2>

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
