import React, { useState } from "react";

import useTable from "../../hooks/userTable";
import styles from "./Table.module.css";
// import TableFooter from "./TableFooter";
import TableFooter from "./TableFooter";
import Pagination from "./TableFooter/Pagination";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("slice", slice);
  console.log("range", range);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Country</th>
            <th className={styles.tableHeader}>Capital</th>
            <th className={styles.tableHeader}>Language</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.capital}</td>
              <td className={styles.tableCell}>{el.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <TableFooter range={range} slice={slice} setPage={setPage} page={page} /> */}
      <Pagination
        currentPage={page}
        lastPage={range[range.length - 1]}
        maxLength={7}
        setCurrentPage={setPage}
      />
    </>
  );
};

export default Table;
