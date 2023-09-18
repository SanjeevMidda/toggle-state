import "./index.css";
import { useState } from "react";
import Toggle from "./components/Toggle";

function App() {
  const [move, setMove] = useState(true);

  let styles = {
    backgroundColor: move ? "black" : "white",
  };

  return (
    <div className="App" style={styles}>
      <Toggle move={move} setMove={setMove} />
    </div>
  );
}

export default App;
