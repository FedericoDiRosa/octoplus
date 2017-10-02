import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VelocityComponent } from 'velocity-react';

import './index.scss';

class Slide extends Component {
  constructor() {
    super();
    this.state = { hover: false }
  }

  goToFont() {
    this.props.history.push(`/font/${this.props.font}`)
  }

  handleClick() {
    if (this.props.i === this.props.currentSlide) {
      this.props.fadeOut(() => this.goToFont());
    } else {
      this.props.slickGoTo(this.props.i, this.props.font.charAt(0).toLowerCase())
    }
  }

  getAnimationProps() {
    const animationProps = { translateX: '0px' };
    if (this.state.hover) {
      if (this.props.i > this.props.currentSlide) {
        animationProps.translateX = '-20px';
      } else if (this.props.i < this.props.currentSlide) {
        animationProps.translateX = '20px';
      } else {
        animationProps.translateX = '0px';
      }
    }
    return animationProps;
  }

  render() {
    const animationProps = this.getAnimationProps();
    return (
      <VelocityComponent animation={animationProps} duration='300'>
        <div className="Slide text-center" onClick={() => this.handleClick()} onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}>
          <div className="initials">Aa</div>
          <span className="font text-uppercase">{this.props.font}</span>
        </div>
      </VelocityComponent>
    );
  }
}

Slide.propTypes = {
  i: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
  slickGoTo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  fadeOut: PropTypes.func.isRequired
};

export default Slide;
