import React, { Fragment, Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
  }

  onSearchChange = event => this.setState({ searchfield: event.target.value });

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <Fragment>
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots}></CardList>
        </div>
      </Fragment>
    );
  }
}

// const App = () => {
//   return (
//     <Fragment>
//       <div className="tc">
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <CardList robots={robots}></CardList>
//       </div>
//     </Fragment>
//   );
// };

export default App;
