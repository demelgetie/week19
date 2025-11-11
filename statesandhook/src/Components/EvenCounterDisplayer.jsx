/*2. Create another class component called "EvenCounterDisplayer.js", on
which the “MyCounter.js” component depends. This component keeps track of and displays ONLY the number of even click counts when the
button inside “MyCounter.js” is clicked.
 */



import { Component } from 'react'

 class EvenCounterDisplayer extends Component {
  render() {
    // return (
    //   <div>
    //     <h3>Even Counter: {this.props.evenCount}</h3>
    //   </div>
    // );

     const { count } = this.props;
     const evenCount = count % 2 === 0 ? count : count - 1; // only even
     return <h2>Even clicks counter: {evenCount}</h2>;
  }
}

export default EvenCounterDisplayer;