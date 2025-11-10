import { useState } from "react";

function IncreaseDecreaseCount() {
  const [count, setCout] = useState(0);
  const increment = () => setCout((count) => count + 1);

  const decrement = () => setCout((count) => count - 1);

  const reset = () => setCout(0);

  return (
    <div>
      <h1> Click Count: {count} </h1>
      <button onClick={increment}>Increasing </button>
      <button onClick={decrement}>Decresing </button>
      <button onClick={reset}> Reset </button>
    </div>
  );
}

export default IncreaseDecreaseCount;
