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
    if (counter >= level * 10) {
      lvlup();
      let count = level * 10;
      setCounter(counter - count);
      console.log("LVL UP", count);
    } else {
      console.log("Nicht genug Coins ?!");
    };
  };

  //const btn = document.getElementsByClassName('btn-lvl');
  const btn = document.querySelector('.btn-lvl');

  if (counter >= level * 9) {
    //console.log(btn.classList.contains("disabled");
    if (btn.classList.contains("disabled")) {
      btn.classList.remove("disabled");
  } else { 
      btn.classList.add("disabled");
    };
  };

  return (
    <div className="Clicker">
        <h4>
          Room {props.RoomName}
        </h4>
        <p>Klicks: {counter} - Level: {level}</p>
        <button onClick={hoch} class="btn">Klick</button>
        <button onClick={EnoughCoins} class="btn btn-lvl disabled">LVL</button>
        <button class="btn btn-auto disabled">Auto</button>
    </div>
  )
};

export default Clicker;