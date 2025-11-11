/* 1. Create a class component called "MyCounter.js" that depends on another
class component, "CounterDisplayer.js". "MyCounter.js" keeps track of the
click count value in the state, and this is where you initialize your state, which holds the click counts.
Create a function named "allClicksCounter()" in "MyCounter.js" that will update or increase your state by one anytime the button in the
"MyCounter.js" component is clicked.
*/


import { Component } from "react";

class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h3>All Clicks Counter: {this.props.allCount}</h3>
      </div>
    );
  }
}

export default CounterDisplayer;
