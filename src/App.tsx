import "./App.scss";
import Titlebar from "./components/Titlebar";
import { getLightTheme } from "./helper";
import MainTable from "./components/MainTable";

function App() {
  document.body.className = getLightTheme() ? "light" : "dark";
  // document.body.className = "light";

  return (
    <div className="app">
      <Titlebar />
      <MainTable />
    </div>
  );
}

export default App;
