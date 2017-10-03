import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VelocityComponent } from 'velocity-react';
import classNames from 'classnames';

import './index.scss';

class Slide extends Component {
  constructor() {
    super();
    this.state = { hover: false }
  }

  handleClick() {
    if (this.props.i === this.props.currentSlide) {
      this.props.fadeOutFunction();
    } else {
      this.props.slickGoTo(this.props.i, this.props.font.charAt(0).toLowerCase())
    }
  }

  getAnimationProps() {
    let initialsAnimationProps = { animation: { translateX: '0px' }, duration: 300 };
    let initialsCloneAnimationProps = { animation: { opacity: 0 }, duration: 300 };
    if (this.state.hover) {
      if (this.props.i > this.props.currentSlide) {
        initialsAnimationProps.animation.translateX = '-20px';
      } else if (this.props.i < this.props.currentSlide) {
        initialsAnimationProps.animation.translateX = '20px';
      } else {
        initialsAnimationProps.animation.translateX = '0px';
      }
    }

    let fontsAnimationProps = { animation: { translateY: '20px', opacity: 0 }, duration: 300 };
    if (this.props.i === this.props.currentSlide) {
      fontsAnimationProps.animation.translateY = '0px';
      fontsAnimationProps.animation.opacity = 1;
    }

    if (this.props.fadeOutState) {
      let { animationProps } = this.props;
      if (this.props.i !== this.props.currentSlide) {
        initialsAnimationProps = {...animationProps};
        initialsCloneAnimationProps = {...animationProps};
      }
      fontsAnimationProps = {...animationProps};

      if (!this.state.goToFont) {
        setTimeout(() => this.setState({ goToFont: true }, () => this.props.fadeToBlackFunction()), 1000);
      }
    }

    if (this.state.goToFont) {
      if (this.props.i === this.props.currentSlide) {
        initialsAnimationProps = { animation: { scale: 1.75, opacity: 0 }, duration: 1000 };
        initialsCloneAnimationProps = { animation: { scale: 0.8, opacity: 1 }, duration: 1000 };
        setTimeout(() => this.goToFontPage(), 1000);
      }
    }

    return { initialsAnimationProps, initialsCloneAnimationProps, fontsAnimationProps };
  }

  goToFontPage() {
    if (!this.props.history.location.pathname.includes('font') && this.props.fadeOutState) {
      this.props.history.push(`/font/${this.props.font}`);
    }
  }

  fadingComplete() {
    if (!this.props.fadeOutState) return
    if (this.props.i !== this.props.currentSlide) {
      this.setState({ goToFont: true })
    }
  }

  render() {
    const { initialsAnimationProps, initialsCloneAnimationProps, fontsAnimationProps } = this.getAnimationProps();
    return (
      <div
        className="Slide text-center"
        onClick={() => this.handleClick()}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <VelocityComponent {...initialsAnimationProps}>
          <div className={classNames({ initials: true, clip: !this.state.goToFont })} style={ { fontFamily: this.props.font } }>Aa</div>
        </VelocityComponent>

        <VelocityComponent {...initialsCloneAnimationProps}>
          <div className={classNames({ initials: true, clone: true })}/>
        </VelocityComponent>

        <VelocityComponent {...fontsAnimationProps}>
          <span className="font text-uppercase d-inline-block">{this.props.font}</span>
        </VelocityComponent>
      </div>
    );
  }
}

Slide.propTypes = {
  i: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
  slickGoTo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  fadeOutFunction: PropTypes.func.isRequired,
  animationProps: PropTypes.object.isRequired,
  fadeOutState: PropTypes.bool.isRequired,
  fadeToBlackFunction: PropTypes.func.isRequired
};

export default Slide;
