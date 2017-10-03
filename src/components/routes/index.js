import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../home';
import Font from '../font';
// import NoMatch from '../no-match';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home}/>
        <Route path="/font/:font" component={Font}/>
        {/* <Route component={NoMatch}/> */}
      </div>
    );
  }
}

export default Routes;
