import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const buttonStyle = {
    margin: "10px",
    width: "150px",
    height: "40px",
    fontSize: "25px",
    fontWeight: "bold",
    
  };
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleTriple = () => {
    setCount(count * 3);
  };
  const handleRevert=()=>{
    setCount(0);
  }

  return (
    <div>
        <h1 style={{marginTop:'40px'}}>Let's Count</h1>
        
      <h1>{count}</h1>
      <button style={buttonStyle} onClick={handleClick}>Increment</button>
      <button style={buttonStyle} onClick={handleDecrement}>
        Decrement
      </button>
      <button style={buttonStyle} onClick={handleTriple}>
        3x
      </button>
      <button style={buttonStyle} onClick={handleRevert}>Revert to 0</button>
    </div>
  );
};

export default Counter;
