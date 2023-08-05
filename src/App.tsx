import "./App.scss";
import Titlebar from "./components/Titlebar";
import { getTheme } from "./helper";
import MainTable from "./components/MainTable";

function App() {
  document.body.className = getTheme() ? "light" : "dark";
  // document.body.className = "light";

  return (
    <div className="app">
      <Titlebar />
      <MainTable />
    </div>
  );
}

export default App;
