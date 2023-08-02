import "./Titlebar.scss";
import { useSelector } from "react-redux";
import { dataSliceState } from "../types";

const Titlebar = function () {
  const data = useSelector((state: dataSliceState) => state.dataSlice.value);

  console.log(data);

  const clickHandler = function () {
    document.body.className =
      document.body.className === "light" ? "dark" : "light";
  };

  return (
    <div className="titlebar" onClick={clickHandler}>
      <h1>TitleBar</h1>
    </div>
  );
};

export default Titlebar;
