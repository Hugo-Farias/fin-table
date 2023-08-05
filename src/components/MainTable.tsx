import "./MainTable.scss";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
import { Bill } from "../types";
import dummy from "../data/DUMMY_DATA.json";
import "primereact/resources/themes/md-dark-indigo/theme.css";

const categories = [
  { cName: "select", content: <input type="checkbox" /> },
  { cName: "day", content: "DIA" },
  { cName: "name", content: "NOME" },
  { cName: "description", content: "DESCRIÇÃO" },
  { cName: "installmentPrice", content: "PREÇO" },
  { cName: "totalPrice", content: "TOTAL" },
  { cName: "status", content: "ESTADO" },
  { cName: "rating", content: "⭐".repeat(5) },
];

const MainTable = function () {
  const products: Bill[] = dummy;

  // const cNameJSX = categories.map((v, i) => {
  //   return (
  //     <div key={i} className={`c-name ${v.cName}`}>
  //       {v.content}
  //     </div>
  //   );
  // });

  // const header = <div className="columns">{cNameJSX}</div>;

  // const columns = categories.map((v, i) => {
  //   return <Column></Column>
  // });

  return (
    <div className="main-table">
      {/*<div className="columns">{cNameJSX}</div>*/}
    </div>
  );
};

export default MainTable;
