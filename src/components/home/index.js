import React, { Component } from 'react';
import Slider from 'react-slick';
import { VelocityComponent } from 'velocity-react';

import Title from './Title';
import Slide from '../slide';
import Progress from '../progress';
import './index.scss';
import fonts from './fonts.json';

import { Col, Row } from 'reactstrap';

const settings = {
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

  fadeOut(fadeOutCallback) {
    this.setState({ fadeOut: true, fadeOutCallback })
  }

  fadeOutComplete() {
    if (this.state.fadeOutCallback) this.state.fadeOutCallback()
  }

  render() {
    const defaultAnimationProps = { translateY: '0', opacity: 1 };
    const animationProps = {...defaultAnimationProps};
    if (this.state.fadeOut) {
      animationProps.translateY = '100px';
      animationProps.opacity = 0;
    }
    return (
      <Row className="Home align-items-center justify-content-end">
        <Col className="col-3">
          <VelocityComponent animation={animationProps} duration='1000' complete={() => this.fadeOutComplete()}>
            <Title>The type story</Title>
          </VelocityComponent>
        </Col>

        <Col className="col-8">
          <Slider ref={c => this.slider = c} {...settings} className="Slider">
            {fonts.map((font, i) =>
              <div key={i}>
                <VelocityComponent animation={i === this.state.currentSlide ? defaultAnimationProps : animationProps} duration='1000'>
                  <Slide
                    i={i}
                    history={this.props.history}
                    font={font}
                    currentSlide={this.state.currentSlide}
                    slickGoTo={(i, letter) => this.slickGoTo(i, letter)}
                    fadeOut={(fadeOutCallback) => this.fadeOut(fadeOutCallback)}
                  />
                </VelocityComponent>
              </div>
            )}
          </Slider>
        </Col>

        <Col className="col-12 progress-container">
          <VelocityComponent animation={animationProps} duration='1000'>
            <Progress currentProgress={this.state.currentProgress}/>
          </VelocityComponent>
        </Col>
      </Row>
    );
  }
}

export default Home;
