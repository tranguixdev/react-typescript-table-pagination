import { useState } from "react";
import Pagination from "./components/Table/TableFooter/Pagination";
import "./App.css";
import countriesData from "./data/countries";
import Table from "./components/Table";

export default function App() {
  const lastPage = 20;
  const [countries] = useState([...countriesData]);

  return (
    <div className="container">
      <h1>React TypeScript Pagination</h1>
      <Table data={countries} rowsPerPage={4} />
      {/* <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={7}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  );
}
