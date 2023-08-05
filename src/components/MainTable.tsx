import "./MainTable.scss";
import { formatDate } from "../helper";
import { Bill } from "../types";
import dummy from "../data/DUMMY_DATA.json";

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

  // const day = products.map((v) => {
  //   return v.day;
  // });

  // console.log(formatDate(day[3], ["year", "month", "day"]));

  const cNameJSX = categories.map((v, i) => {
    return (
      <div key={i} className={`c-name ${v.cName}`}>
        {v.content}
      </div>
    );
  });

  const tableContentsJSX = categories.map((v, i) => {
    const out = products.map((pv, pi) => {
      const content = pv[v.cName] ? pv[v.cName] : v.content;

      return (
        <div key={pi} className={`c-name ${v.cName}`}>
          {content}
        </div>
      );
    });
    return <div className={`c-name ${v.cName}`}>{out}</div>;
  });

  return (
    <div className="main-table">
      <div className="columns">{cNameJSX}</div>
      <div className="table-contents">{tableContentsJSX}</div>
    </div>
  );
};

export default MainTable;
