/* 1. Create a class component called "MyCounter.js" that depends on another
class component, "CounterDisplayer.js". "MyCounter.js" keeps track of the
click count value in the state, and this is where you initialize your state, which holds the click counts.
Create a function named "allClicksCounter()" in "MyCounter.js" that will update or increase your state by one anytime the button in the
"MyCounter.js" component is clicked.
*/

import { Component } from "react";

// Define a class component named 'CounterDisplayer' that extends React's Component class
class CounterDisplayer extends Component {

  // Every class component must have a render() method that returns JSX
  render() {
    return (
      <div>
        {/* Display the total number of clicks received from the parent component as a prop */}
        <h3>All Clicks Counter: {this.props.allCount}</h3>
      </div>
    );
  }
}

// Export the component so it can be imported and used in other files
export default CounterDisplayer;
