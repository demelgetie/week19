/* 4. Create a functional component called "UseEffectForTitle.js''. There will be a button and a count displayer, right below the button, with an initial click value of 0. When the button is clicked, the value should increase by one and the displayer and the document's title should display the changed count value. Basically, the change in the document’s title is a side-effect to the change in the count value due to the button’s click.
When the component is rendered for the first time (or when it is mounted),
display an alert text that says “Component is mounted”, on the screen. */

// Importing React hooks useEffect and useState from the 'react' library
import { useEffect, useState } from "react";

// Define a functional component named UseEffectForTitle
function UseEffectForTitle() {
  // Declare a state variable 'count' with initial value 0, and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // useEffect with an empty dependency array [] runs only once — when the component mounts
  useEffect(() => {
    alert("Component is Mounted"); // This alert will appear when the component is first rendered
  }, []); // Empty array no re-runs unless component re-mounts

  // useEffect with [count] as a dependency runs every time 'count' changes
  useEffect(() => {
    document.title = `count: ${count}`; // Updates the browser tab title whenever 'count' changes
  }, [count]); // Runs each time 'count' updates

  // The return statement defines the UI of the component
  return (
    <div>
      {/* Button that increases the count by 1 each time it’s clicked */}
      <button onClick={() => setCount(count + 1)}> Click Here </button>

      {/* Displays the current count value */}
      <h1>Count Displayer: {count} </h1>
    </div>
  );
}

// Export the component so it can be used in other parts of the app
export default UseEffectForTitle;
