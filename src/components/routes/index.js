import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home';
import NoMatch from '../no-match';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}

export default Routes;
