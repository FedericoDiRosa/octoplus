import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../routes';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Router>
          <Routes />
        </Router>
      </main>
    );
  }
}

export default App;
