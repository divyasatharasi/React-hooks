import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <span>{count}</span>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
}

