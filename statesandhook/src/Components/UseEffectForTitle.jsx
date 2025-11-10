import { useEffect, useState } from "react";

function UseEffectForTitle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Component is Mounted");
  }, []);

  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Click Hear </button>
      <h1>Count Displayer: {count} </h1>
    </div>
  );
}

export default UseEffectForTitle;
