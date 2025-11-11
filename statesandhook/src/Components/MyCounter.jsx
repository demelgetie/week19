// Importing 'Component' from React to create a class-based component
import { Component } from "react";
import CounterDisplayer from "./CounterDisplayer.jsx";
import EvenCounterDisplayer from "./EvenCounterDisplayer.jsx";

// Define a class component named 'MyCounter' that extends React's Component class
class MyCounter extends Component {
  // The constructor is used to initialize the component's state and bind methods
  constructor() {
    super(); // Calls the parent class (Component) constructor
    this.state = { count: 0, evenCount: 0 }; // Initialize state with two properties: count and evenCount
  }

  // Define an arrow function that updates the count state
  allClicksCounter = () => {
    // Use setState with a callback function to access the previous state safely
    this.setState((prevState) => {
      return {
        // Increase count by 1 whenever the button is clicked
        count: prevState.count + 1,

        // evenCount logic is commented out — it would increase evenCount by 2 whenever the updated count is even
        evenCount:
          (prevState.count + 1) % 2 === 0
            ? prevState.evenCount + 2
            : prevState.evenCount,
      };
    });
  };

  // The render() method defines what will be displayed in the browser
  render() {
    return (
      <div>
        {/* A button that triggers the allClicksCounter function when clicked */}
        <button onClick={this.allClicksCounter}> Click Here</button>

        {/* Pass the current count value as a prop named 'allCount' 
            to the CounterDisplayer component */}
        <CounterDisplayer allCount={this.state.count} />

        {/* Pass the current count value as a prop named 'count' 
        to the EvenCounterDisplayer component */}
        <EvenCounterDisplayer count={this.state.count} />
      </div>
    );
  }
}

// Export the component so it can be used in other files
export default MyCounter;
