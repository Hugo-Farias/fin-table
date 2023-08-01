import "./Titlebar.scss";

const Titlebar = function () {
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
