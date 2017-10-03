import React, { Component } from 'react';
import Slider from 'react-slick';
import { VelocityComponent } from 'velocity-react';

import Title from './Title';
import Slide from '../slide';
import Progress from '../progress';
import './index.scss';
import fonts from './fonts.json';

import { Col, Row } from 'reactstrap';

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
      currentProgress: 'a',
      fadeOut: false
    };
  }

  slickGoTo(i, letter) {
    this.setState({
      currentSlide: i,
      currentProgress: letter
    }, () => {
      this.slider.slickGoTo(i);
    });
  }

  fadeOut() {
    this.setState({ fadeOut: true })
  }

  fadeToBlack() {
    this.setState({ fadeToBlack: true })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === '/' && this.props.location.pathname.includes('font')) {
      this.setState({
        fadeOut: false,
        fadeToBlack: false,
        refreshSlider: true
      }, () => {
        // set
        this.setState({
          refreshSlider: false
        })
      })
    }
  }

  render() {
    const fadeOut = this.state.fadeOut || this.props.location.pathname.includes('font');
    const fadeToBlack = this.state.fadeToBlack || this.props.location.pathname.includes('font');

    const animationProps = { animation: { translateY: '0px', opacity: 1 }, duration: 1000 };
    if (fadeOut) {
      animationProps.animation.translateY = '100px';
      animationProps.animation.opacity = 0;
    }

    const classNames = ['Home', 'align-items-center', 'justify-content-end', 'm-0'];
    if (fadeToBlack) classNames.push('fadeToBlack')

    return (
      <Row className={classNames.join(' ')}>
        <Col className="col-3 translateY-30">
          <VelocityComponent {...animationProps}>
            <Title>The type story</Title>
          </VelocityComponent>
        </Col>

        <Col className="col-8 translateY-30">
          {!this.state.refreshSlider ?
            <Slider ref={c => this.slider = c} {...sliderSettings} className="Slider">
              {fonts.map((font, i) =>
                <div key={i}>
                  <Slide
                    i={i}
                    history={this.props.history}
                    font={font}
                    currentSlide={this.state.currentSlide}
                    slickGoTo={(i, letter) => this.slickGoTo(i, letter)}
                    fadeOutFunction={() => this.fadeOut()}
                    fadeToBlackFunction={() => this.fadeToBlack()}
                    animationProps={animationProps}
                    fadeOutState={fadeOut}
                  />
                </div>
              )}
            </Slider>
            : undefined
          }
        </Col>

        <Col className="col-12 progress-container">
          <VelocityComponent {...animationProps}>
            <Progress
              currentProgress={this.state.currentProgress}
              slickGoTo={(i, letter) => this.slickGoTo(i, letter)}
              fonts={fonts}
            />
          </VelocityComponent>
        </Col>
      </Row>
    );
  }
}

export default Home;
