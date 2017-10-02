import React, { Component } from 'react';
import Slider from 'react-slick';

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

  render() {
    return (
      <Row className="Home align-items-center justify-content-end">
        <Col className="col-3">
          <Title>The type story</Title>
        </Col>
        <Col className="col-8">
          <Slider ref={c => this.slider = c } {...settings} className="Slider">
            {fonts.map((font, i) =>
              <div key={i}>
                <Slide
                  history={this.props.history}
                  i={i}
                  font={font}
                  currentSlide={this.state.currentSlide}
                  slickGoTo={(i, letter) => this.slickGoTo(i, letter)}
                />
              </div>
            )}
          </Slider>
        </Col>
        <Col className="col-12 progress-container">
          <Progress currentProgress={this.state.currentProgress}/>
        </Col>
      </Row>
    );
  }
}

export default Home;
