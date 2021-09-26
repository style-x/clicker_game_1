import React, { useState } from "react";

function Clicker(props) {

  const [counter, setCounter] = useState(0);
  const hoch = () => {
    setCounter(counter + level);
  };

  const [level, levelup] = useState(1);
  const lvlup = () => {
    levelup(level + 1);
  };

  return (
    <div className="Clicker">
        <h4>
          Room {props.RoomName}
        </h4>
        <p>Klicks: {counter} - Level: {level}</p>
        <button onClick={hoch}>Klick</button>
        <button onClick={EnoughCoins} class="btn-lvl">LVL</button>
        <button class="btn-auto" disabled="true">Auto</button>
    </div>
  );

  function EnoughCoins () {
    if (counter >= level * 10) {
      //const button = document.querySelector('btn-lvl');
      //button.disabled = false;
      lvlup();
      let count = level * 10;
      setCounter(counter - count);
      console.log("LVL UP", count);
    } else {
      console.log("Nicht genug Coins ?!");
    }
  }


}



export default Clicker;