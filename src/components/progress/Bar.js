import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';

import './Bar.scss';

class Bar extends Component {
  getWidth() {
    if (this.props.black) return 100;
    return (this.props.currentPosition / this.props.letters.length) * 100;
  }

  render() {
    return (
      <div className="Bar">
        <Progress value={this.getWidth()}/>
      </div>
    );
  }
}

Bar.propTypes = {
  black: PropTypes.bool,
  currentPosition: PropTypes.number,
  letters: PropTypes.array
};

Bar.defaultProps = {
  black: false
};

export default Bar;
