/* 3. Create a functional component called "IncreaseDecreaseCount.js''. There will be three buttons; a button to increase, a button to decrease, and a button to reset the click count values, and you will need to implement the useState() Hook to update the clicks.
 */


import { useState } from "react";

// Define a functional component named IncreaseDecreaseCount
function IncreaseDecreaseCount() {
  // Declare a state variable 'count' with an initial value of 0
  // 'setCout' is the function used to update the state
  const [count, setCout] = useState(0);

  // Define a function to increase the count by 1
  // The callback form of setCout ensures we always get the latest count value
  const increment = () => setCout((count) => count + 1);

  // Define a function to decrease the count by 1
  const decrement = () => setCout((count) => count - 1);

  // Define a function to reset the count back to 0
  const reset = () => setCout(0);

  // Return JSX to render the UI
  return (
    <div>
      {/* Display the current count value */}
      <h1> Click Count: {count} </h1>

      {/* Button that increases the count when clicked */}
      <button onClick={increment}>Increasing</button>

      {/* Button that decreases the count when clicked */}
      <button onClick={decrement}>Decreasing</button>

      {/* Button that resets the count to zero when clicked */}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Export the component so it can be used in other files
export default IncreaseDecreaseCount;

