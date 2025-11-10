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
