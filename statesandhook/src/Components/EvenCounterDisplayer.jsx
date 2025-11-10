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