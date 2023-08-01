import "./App.scss";
import Titlebar from "./components/Titlebar";
import { getColorScheme } from "./helper";

function App() {
  document.body.className = getColorScheme();

  return (
    <div className="app">
      <Titlebar />
    </div>
  );
}

export default App;
