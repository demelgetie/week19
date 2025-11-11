/*2. Create another class component called "EvenCounterDisplayer.js", on
which the “MyCounter.js” component depends. This component keeps track of and displays ONLY the number of even click counts when the
button inside “MyCounter.js” is clicked.
 */



// Import 'Component' from React to create a class-based component
import { Component } from 'react'

// Define a class component named 'EvenCounterDisplayer' that extends React's Component class
class EvenCounterDisplayer extends Component {
  
  // Every class component must have a render() method that returns JSX
  render() {

    // The following commented-out code is an older version of the component
    // It would have displayed 'evenCount' directly from props if passed by the parent
    // return (
    //   <div>
    //     <h3>Even Counter: {this.props.evenCount}</h3>
    //   </div>
    // );

    // Destructure 'count' from props (value passed from the parent component)
    const { count } = this.props;

    // Calculate an even number from the count:
    // If count is even → keep it as is;
    // If count is odd → subtract 1 to get the nearest even number
    const evenCount = count % 2 === 0 ? count : count - 1; // only even numbers

    // Return JSX that displays the calculated even count
    return <h2>Even clicks counter: {evenCount}</h2>;
  }
}

// Export the component so it can be imported and used elsewhere
export default EvenCounterDisplayer;
