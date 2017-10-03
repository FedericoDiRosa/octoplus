import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { VelocityComponent } from 'velocity-react';
import { Link } from 'react-router-dom';

import Title from '../home/Title';
import CloseIcon from './CloseIcon';

import './index.scss';

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
          <Col className="col-2">
            <VelocityComponent {...animationProps}>
              <div>
                <Title>The type story</Title>
              </div>
            </VelocityComponent>
          </Col>
          <Col className="col-6 content">
            <VelocityComponent {...animationProps}>
              <div>
                <h1 className="text-capitalize font-name">{this.props.match.params.font}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque aliquam congue risus, pharetra vulputate mauris laoreet ut.
                  Integer faucibus mauris nec nibh bibendum auctor.
                  Maecenas lacinia aliquet eros sed condimentum.
                  Etiam congue non magna ultrices mattis.
                  Phasellus tincidunt gravida nulla, nec aliquam felis.
                  Vestibulum sed diam eget velit facilisis sollicitudin.
                  Nam sem massa, convallis condimentum finibus consectetur, auctor sit amet quam.
                  Maecenas eleifend blandit dolor, ut aliquet mauris scelerisque sed.
                  Integer consequat, magna eget gravida interdum, magna nisi bibendum ante, eu molestie ipsum ligula et elit.
                  Quisque molestie ullamcorper odio, at fringilla quam.
                  Etiam maximus lorem lectus, et commodo odio sollicitudin ac.
                  Donec rutrum sem eget iaculis egestas.

                  Aliquam nisl ante, pulvinar id risus ac, volutpat mattis erat.
                  In aliquam aliquet accumsan.
                  Etiam a mi sit amet dolor pellentesque ullamcorper id ut ipsum.
                  Praesent at magna efficitur lorem pulvinar ornare.
                  Nunc ut est eu neque tempus vestibulum.
                  Suspendisse potenti.
                  Fusce sodales, sem pharetra efficitur tincidunt, ligula erat gravida tortor, nec porta purus leo sit amet lorem.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed risus turpis.
                  Ut vel urna ut lacus porta bibendum.

                  Sed iaculis blandit rhoncus.
                  Mauris consectetur purus nec pellentesque porta.
                  Fusce ac porta diam.
                  Nullam malesuada, nisi sit amet commodo pellentesque, felis metus scelerisque dolor, ac vulputate nisl lacus congue purus.
                  Ut rhoncus augue pharetra hendrerit ullamcorper.
                  Sed sodales elit ut enim imperdiet posuere sit amet eu lacus.
                  Maecenas rhoncus dolor sit amet lorem sagittis cursus id et diam.
                  Praesent egestas, est sagittis viverra auctor, ante nunc maximus elit, at imperdiet elit enim quis eros.
                  Maecenas id nisi quis mauris aliquam sollicitudin vel vel lorem.
                  In pretium lacinia dapibus.
                  Maecenas consequat enim eget mi pharetra, et scelerisque nibh dapibus.
                  Vestibulum vehicula elit eu ante scelerisque euismod.
                  Nulla a tellus in sem vehicula gravida.
                  Mauris tempus sollicitudin gravida.
                  Vestibulum eu ornare leo, vel tempor ipsum.
                </p>
              </div>
            </VelocityComponent>
          </Col>
          <Col className="col-2 text-right">
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
