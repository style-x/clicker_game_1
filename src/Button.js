import React from "react";

function Button(props) {
  return (
    <button onClick={props.Klicks + 1}>
      Click
    </button>
  );
}

export default Button;