import React, { useState } from "react";

function Clicker(props) {

  const [counter, setCounter] = useState(0);
  const hoch = () => {
    setCounter(counter + level);
    proofdisabled(counter);
  };

  const [level, levelup] = useState(1);
  const lvlup = () => {
    levelup(level + 1);
  };

  const [lvldisabled, setlvldisabled] = useState(true);

  //window.onclick = proofdisabled();
  
  function proofdisabled(counter) {
    if (counter >= level * 10) { 
      setlvldisabled(false);
    };
  };
  
  function EnoughCoins () {
    if (counter >= level * 10) {
      lvlup();
      let count = level * 10;
      setCounter(counter - count);
      console.log("LVL UP", count);
      setlvldisabled(true);
    } else {
      console.log("Nicht genug Coins ?!");
    };
  };

  return (
    <div className="Clicker">
        <h4>
          Room {props.RoomName}
        </h4>
        <p>Klicks: {counter} - Level: {level}</p>
        <button onClick={hoch} class="btn">Klick</button>
        { lvldisabled ? (
          <button onClick={EnoughCoins} className="btn btn-lvl disabled">LvL</button>
          ) : (
          <button onClick={EnoughCoins} className="btn btn-lvl">LvL</button>
        )} 
        <button className="btn btn-auto disabled">Auto</button>
    </div>
  )
};
  
export default Clicker;