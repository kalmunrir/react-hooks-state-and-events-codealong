import React, { useState } from "react";

function Toggle() {
  const [state, setState] = useState(false);
  
  function handleClick() {
    setState(state => !state);
    return state;
  }
  const color = state? "red" : "white";
  return (
    <div>
      <button style={{background: color}} onClick={() => handleClick()}>
        {state? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Toggle;
