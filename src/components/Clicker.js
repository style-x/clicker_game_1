import React, { useState } from "react";

function Clicker(props) {

  const [counter, setCounter] = useState(0);
  const hoch = () => {
    setCounter(counter + level);
    if (counter >= level * 9) {
      const button = document.getElementById('btn-lvl');
      button.removeAttribute('disabled');
    } else { 
      console.log("fehler HIER");
    };
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
        <button onClick={EnoughCoins} id="btn-lvl">LVL</button>
        <button id="btn-auto" disabled>Auto</button>
    </div>
  );

  function EnoughCoins () {
    console.log("LVL wurde geklickt.");
    if (counter >= level * 10) {
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