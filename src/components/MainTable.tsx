import "./MainTable.scss";
import { formatDate } from "../helper";
import { Bill } from "../types";
import dummy from "../data/DUMMY_DATA.json";

const columnCategories = [
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

  const day = products.map((v) => {
    return v.day;
  });

  console.log(formatDate(day[3], ["year", "month", "day"]));

  const cNameJSX = columnCategories.map((v, i) => {
    return (
      <div key={i} className={`c-name ${v.cName}`}>
        {v.content}
      </div>
    );
  });

  return (
    <div className="main-table">
      <div className="columns">{cNameJSX}</div>
    </div>
  );
};

export default MainTable;
