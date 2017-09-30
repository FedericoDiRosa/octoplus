import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home';
import Font from '../font';
import NoMatch from '../no-match';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/font/:font" component={Font}/>
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}

export default Routes;
