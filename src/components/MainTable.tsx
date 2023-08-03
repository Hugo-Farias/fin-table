import "./MainTable.scss";
import dummy from "../data/DUMMY_DATA.json";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import "primereact/resources/themes/mdc-dark-indigo/theme.css";
// import "primereact/resources/themes/mdc-light-indigo/theme.css";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

const MainTable = function () {
  const products: Product = dummy;

  console.log(products);

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const priceBodyTemplate = (product: Product) => {
    return formatCurrency(product.price);
  };

  const statusBodyTemplate = (product: Product) => {
    return (
      <Tag
        value={product.inventoryStatus}
        severity={getSeverity(product)}
      ></Tag>
    );
  };

  const footer = `In total there are ${
    products ? products.length : 0
  } products.`;

  return (
    <div className="main-table">
      <DataTable
        value={2}
        footer={footer}
        tableStyle={{ minWidth: "10rem" }}
        columnResizeMode="expand"
        // resizableColumns
        // showGridlines
      >
        <Column field="name" header="Name"></Column>
        <Column field="price" header="Price" body={priceBodyTemplate}></Column>
        <Column field="category" header="Category"></Column>
        <Column header="Status" body={statusBodyTemplate}></Column>
      </DataTable>
    </div>
  );
};

export default MainTable;
