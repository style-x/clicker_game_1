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

  function EnoughCoins () {
    console.log("LVL wurde geklickt.");
    if (counter >= level * 10) {
      lvlup();
      let count = level * 10;
      setCounter(counter - count);
      console.log("LVL UP", count);
    } else {
      console.log("Nicht genug Coins ?!");
    };
  };

  if (counter >= level * 9) {
    const btn = document.getElementsByClassName('btn-lvl');
    //btn.classList.add('disabled');
  } else { 
    const btn = document.getElementsByClassName('btn-lvl');
    //btn.classList.remove('disabled');
  };

  return (
    <div className="Clicker">
        <h4>
          Room {props.RoomName}
        </h4>
        <p>Klicks: {counter} - Level: {level}</p>
        <button onClick={hoch} class="btn">Klick</button>
        <button onClick={EnoughCoins} class="btn btn-lvl">LVL</button>
        <button class="btn btn-auto" disabled>Auto</button>
    </div>
  );
};

export default Clicker;