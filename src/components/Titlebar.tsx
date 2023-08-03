import "./Titlebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/dataSlice";
import { AppDispatch, RootState } from "../store/store";

const Titlebar = function () {
  const data = useSelector((state: RootState) => state.dataSlice.value);
  const dispatch: AppDispatch = useDispatch();

  console.log(data);

  const clickHandler = function () {
    document.body.className =
      document.body.className === "light" ? "dark" : "light";
  };

  return (
    <div className="titlebar" onClick={clickHandler}>
      <h1 onClick={() => dispatch(increment())}>{data}</h1>
    </div>
  );
};

export default Titlebar;
