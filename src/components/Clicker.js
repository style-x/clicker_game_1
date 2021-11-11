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
    if (counter >= (level * 10)) {
      lvlup();
      let count = level * 10;
      setCounter(counter - count);
    } else {
      console.log("Nicht genug Coins ?!");
    };
  };
  
  return (
    <div className="Clicker">
        <h4>
          Raum {props.RoomName}
        </h4>
        <p>Klicks:<span> {counter} </span>- Level:<span> {level} </span></p>
        <button onClick={hoch} class="btn btn-click">Klick</button>
        { (counter >= (level * 10)) ? (
          <button onClick={EnoughCoins} className="btn btn-lvl">LVL</button>
          ) : (
          <button onClick={EnoughCoins} className="btn btn-lvl disabled">LVL</button>
        )} 
        <button className="btn btn-auto disabled">Auto</button>
    </div>
  )
};
  
export default Clicker;