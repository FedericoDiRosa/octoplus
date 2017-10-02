import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VelocityComponent } from 'velocity-react';

import './index.scss';

class Slide extends Component {
  constructor() {
    super();
    this.state = { hover: false }
  }

  handleClick() {
    if (this.props.i === this.props.currentSlide) {
      this.props.history.push(`/font/${this.props.font}`)
    } else {
      this.props.slickGoTo(this.props.i, this.props.font.charAt(0).toLowerCase())
    }
  }

  getAnimationProps() {
    const animationProps = {
      animation: {
        translateX: '0px'
      },
      duration: 300
    };
    if (this.state.hover) {
      if (this.props.i > this.props.currentSlide) {
        animationProps.animation.translateX = '-20px';
      } else if (this.props.i < this.props.currentSlide) {
        animationProps.animation.translateX = '20px';
      } else {
        animationProps.animation.translateX = '0px';
      }
    }
    return animationProps;
  }

  render() {
    const animationProps = this.getAnimationProps();
    return (
      <VelocityComponent {...animationProps}>
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
  history: PropTypes.object.isRequired
};

export default Slide;
