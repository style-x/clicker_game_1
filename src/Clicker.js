import React from "react";
import Button from "./Button";

function Clicker(props) {
  return (
    <div className="Clicker">
        <p>
          This is Room {props.RaumNummer}
        </p>
        <Button />
    </div>
  );
}

export default Clicker;