import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Routes from './components/routes';
import './index.scss';

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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export default App;
