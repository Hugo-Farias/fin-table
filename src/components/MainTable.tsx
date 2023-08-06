import "./MainTable.scss";
import React from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
import { Bill } from "../types";
import dummy from "../data/DUMMY_DATA.json";
import "primereact/resources/themes/md-dark-indigo/theme.css";

interface TableRow {
  id: number;
  name: string;
  age: number;
  email: string;
}

type Category = {
  header: string;
  accessor: string | React.ReactNode;
};

const categories: Category[] = [
  { header: "select", accessor: <input type="checkbox" /> },
  { header: "day", accessor: "DIA" },
  { header: "name", accessor: "NOME" },
  { header: "description", accessor: "DESCRIÇÃO" },
  { header: "installmentPrice", accessor: "PREÇO" },
  { header: "totalPrice", accessor: "TOTAL" },
  { header: "status", accessor: "ESTADO" },
  { header: "rating", accessor: "⭐".repeat(5) },
];

const MainTable = function () {
  const products: Bill[] = dummy;

  const tbodyJSX = products.map((v, i) => {
    const out = categories.map((cv, ci) => {
      const val = v[cv.header];
      const content = val ? val : cv.accessor;

      return (
        <td key={ci} className={cv.header}>
          {content}
        </td>
      );
    });

    return <tr key={i}>{out}</tr>;
  });

  return (
    <table className="main-table">
      <thead className="head">
        <tr>
          {categories.map((v, i) => (
            <th key={i} className={`c-name ${v.header}`}>
              {v.accessor}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{tbodyJSX}</tbody>
    </table>
  );
};

export default MainTable;
