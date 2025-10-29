
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Counter = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext);

  return (

    
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={reset} style={{ margin: "0 10px" }}>
        Reset
      </button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
