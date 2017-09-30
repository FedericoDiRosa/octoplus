import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../routes';
import './index.scss';

class App extends Component {
  render() {
    return (
      <main className="App d-flex flex-column justify-content-center">
        <Router>
          <Routes />
        </Router>
      </main>
    );
  }
}

export default App;
