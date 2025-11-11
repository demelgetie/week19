/* 4. Create a functional component called "UseEffectForTitle.js''. There will be a button and a count displayer, right below the button, with an initial click value of 0. When the button is clicked, the value should increase by one and the displayer and the document's title should display the changed count value. Basically, the change in the document’s title is a side-effect to the change in the count value due to the button’s click.
When the component is rendered for the first time (or when it is mounted),
display an alert text that says “Component is mounted”, on the screen. */


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
