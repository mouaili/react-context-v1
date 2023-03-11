import React, { Component } from 'react';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Lisa',
        age: 8,
      },
    };
  }

  render() {
    return (
      <div className="container text-center">
        <Profile info={this.state.user} />
      </div>
    );
  }
}

export default App;
