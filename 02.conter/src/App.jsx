import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //incremetn by 1
  const incrementCount = () => {
    if (count < 20) setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Number: {count}</h2>
      <button onClick={incrementCount}> Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
}

export default App;
