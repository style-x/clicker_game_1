import React from "react";
import Button from "./Button";

function Clicker(props) {
  return (
    <div className="Clicker">
        <p>
          This is Room {props.RaumNummer}
        </p>
        <h5>Klicks: {props.Klicks}</h5>
        <Button />
    </div>
  );
}

export default Clicker;