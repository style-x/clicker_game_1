import React from "react";
import Data from "./data";
import "./style.css";

function App() {
  
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <button>Hochzählen</button>
      <Data />
    </div>
  );
};

export default App;