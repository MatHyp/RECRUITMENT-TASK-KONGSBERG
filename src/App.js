import Table from "./components/Table";
import React from "react";
import Store from "./store/Store.js";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Table with datas about vatious books
      </h1>

      <Store>
        <Table />
      </Store>
    </div>
  );
}

export default App;
