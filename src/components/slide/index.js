import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Slide extends Component {
  handleClick() {
    if (this.props.i === this.props.currentSlide) {
      this.props.history.push(`/font/${this.props.font}`)
    } else {
      this.props.slickGoTo(this.props.i, this.props.font.charAt(0).toLowerCase())
    }
  }

  render() {
    return (
      <div className="Slide" onClick={() => this.handleClick()}>
        <div className="initials">Aa</div>
        <span className="font text-uppercase">{this.props.font}</span>
      </div>
    );
  }
}

Slide.propTypes = {
  i: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
  slickGoTo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Slide;
