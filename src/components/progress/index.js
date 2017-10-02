import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fillRange from 'fill-range';
import classNames from 'classnames';
import { Col, Row } from 'reactstrap';

import Bar from './Bar';
import './index.scss';

class Progress extends Component {
  render() {
    const letters = fillRange('a', 'z');
    return (
      <Row className="Progress justify-content-end">
        <Col className="col-11 pl-0">
          <div className="d-flex text-uppercase">
            {letters.map(v => {
              const highlighted = fillRange('a', this.props.currentProgress).includes(v);
              return <span className={classNames({ letter: true, highlighted })} key={v}>{v}</span>
            })}
          </div>
        </Col>
        <Col className="col-12">
          <Row>
            <Col className="col-1 pr-0">
              <Bar black={true}/>
            </Col>
            <Col className="col-11 pl-0">
              <Bar letters={letters} currentPosition={letters.indexOf(this.props.currentProgress)}/>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

Progress.propTypes = {
  currentProgress: PropTypes.string.isRequired
};

export default Progress;
