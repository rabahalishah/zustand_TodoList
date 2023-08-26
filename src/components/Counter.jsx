import React from "react";
import useCounterStore  from "../app/counterStore.js";

const Counter = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const counter = useCounterStore((state) => state.counter);

  return (
    <div>
      <h1>Zustand Counter</h1>
      <React.Fragment>{counter}</React.Fragment>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
