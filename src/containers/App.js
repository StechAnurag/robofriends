import React, { Fragment, Component } from 'react';
import { robots } from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ''
    };
  }

  onSearchChange = event => this.setState({ searchField: event.target.value });

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    this.setState({ robots: users });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    if (this.state.robots.length > 0) {
      return (
        <Fragment>
          <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots}></CardList>
            </Scroll>
          </div>
        </Fragment>
      );
    } else {
      return <h1>Loading ...</h1>;
    }
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
