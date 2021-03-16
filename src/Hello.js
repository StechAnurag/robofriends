import React, { Component } from 'react';

/**
 * CLASS BASED COMPONENT
 */

class Hello extends Component {
  render() {
    return (
      <div>
        <h1 className="tc red">Hello World!</h1>
        <p className="tc bg-gold">{this.props.greetings}!!!</p>
      </div>
    );
  }
}

/**
 * FUNCTION BASED COMPONENT
 */

// const Hello = (props) => {
//   return (
//     <div>
//       <h1>Hello INDIA!</h1>
//       <p>{props.greetings}!!!</p>
//     </div>
//   );
// };

export default Hello;
