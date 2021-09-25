import React, { useState } from "react";

function Clicker(props) {

  const [counter, setCounter] = useState(0);

  const hoch = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="Clicker">
        <h4>
          Room {props.RoomCount}
        </h4>
        <p>Klicks: {counter}</p>
        <button onClick={hoch}>Klick</button>
        <button disabled="true">LVL</button>
        <button disabled="true">Auto</button>
    </div>
  );
}

export default Clicker;