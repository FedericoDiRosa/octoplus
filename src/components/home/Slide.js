import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Slide.scss';

class Slide extends Component {
  render() {
    return (
      <div className="Slide">
        <Link to={`/font/${this.props.font}`} className="text">{this.props.font}</Link>
      </div>
    );
  }
}

Slide.propTypes = {
  font: PropTypes.string.isRequired
};

export default Slide;
