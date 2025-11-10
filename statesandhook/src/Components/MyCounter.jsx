import { Component } from "react";
import CounterDisplayer from "./CounterDisplayer.jsx";
import EvenCounterDisplayer from "./EvenCounterDisplayer.jsx";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0, evenCount: 0 };
  }

  allClicksCounter = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        // evenCount:
        //   (prevState.count + 1) % 2 === 0
        //     ? prevState.evenCount + 2
        //     : prevState.evenCount,
      };
    });

    console.log(this.state.count);
    // console.log(this.state.evenCount);
  };

  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}> Click Here</button>
        <CounterDisplayer allCount={this.state.count} />
        <EvenCounterDisplayer count={this.state.count} />
      </div>
    );
  }
}

export default MyCounter;
