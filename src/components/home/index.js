import React, { Component } from 'react';
import Slider from 'react-slick';

import Title from './Title';
import Slide from './Slide';
import './index.scss';
import fonts from './fonts.json';

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
  render() {
    return (
      <div className="Home d-flex justify-content-between">
        <Title>The type story</Title>
        <Slider {...settings} className="Slider">
          {fonts.map((font, i) => <div key={i}><Slide font={font}/></div>)}
        </Slider>
      </div>
    );
  }
}

export default Home;
