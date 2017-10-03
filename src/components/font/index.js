import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { VelocityComponent } from 'velocity-react';
import { Link } from 'react-router-dom';

import TextToSpeech from '../text-to-speech';
import Title from '../home/Title';
import CloseIcon from './CloseIcon';

import './index.scss';
import { text } from './text.json';

class Font extends Component {
  constructor() {
    super();
    this.state = { animate: false }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ animate: true }) }, 200);
  }

  render() {
    const animationProps = { animation: { translateY: '100px', opacity: 0 }, duration: 1000 };
    if (this.state.animate) {
      animationProps.animation.translateY = '0px';
      animationProps.animation.opacity = 1;
    }

    return (
      <div className="Font">
        <Row className="justify-content-center">
          <Col className="col-11 col-lg-2">
            <VelocityComponent {...animationProps}>
              <div>
                <Title>The type story</Title>
              </div>
            </VelocityComponent>
          </Col>
          <Col className="col-11 col-lg-6 content">
            <VelocityComponent {...animationProps}>
              <div>
                <TextToSpeech text={text}/>
                <h1 className="text-capitalize font-name">{this.props.match.params.font}</h1>
                <p>{text}</p>
              </div>
            </VelocityComponent>
          </Col>
          <Col className="col-2 col-lg-2 text-right close-icon-container">
            <VelocityComponent {...animationProps}>
              <div>
                <Link to="/">
                  <CloseIcon/>
                </Link>
              </div>
            </VelocityComponent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Font;
