import "./MainTable.scss";
import dummy from "../data/DUMMY_DATA.json";

const MainTable = function () {
  const products: Product[] = dummy;

  // const columnsJSX = columns.map((v, i) => {
  //
  // })

  return (
    <div className="main-table">
      <div className="columns">
        <div className="c-name day">DIA</div>
        <div className="c-name name">NOME</div>
        <div className="c-name description">DESCRIÇÃO</div>
      </div>
    </div>
  );
};

export default MainTable;
