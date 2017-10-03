import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fillRange from 'fill-range';
import classNames from 'classnames';
import { Col, Row, Button } from 'reactstrap';

import Bar from './Bar';
import './index.scss';

class Progress extends Component {
  handleClick(letter){
    const index = this.props.fonts.findIndex((v) => v.charAt(0).toLowerCase() === letter);
    this.props.slickGoTo(index, letter)
  }

  render() {
    const letters = fillRange('a', 'z');
    const lettersInFonts = this.props.fonts.map(font => font.charAt(0).toLowerCase());
    return (
      <Row className="Progress justify-content-end">
        <Col className="col-11 pl-0">
          <div className="d-flex">
            {letters.map(v => {
              const highlighted = fillRange('a', this.props.currentProgress).includes(v);
              return (
                <Button
                  role="button"
                  disabled={!lettersInFonts.includes(v)}
                  onClick={() => this.handleClick(v)}
                  className={classNames({ letter: true, highlighted, 'text-uppercase': true, 'text-left': true })}
                  key={v}
                >{v}</Button>
              )
            })}
          </div>
        </Col>
        <Col className="col-12">
          <Row>
            <Col className="col-1 p-0">
              <Bar black={true}/>
            </Col>
            <Col className="col-11 p-0">
              <Bar letters={letters} currentPosition={letters.indexOf(this.props.currentProgress)}/>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

Progress.propTypes = {
  currentProgress: PropTypes.string.isRequired,
  slickGoTo: PropTypes.func.isRequired,
  fonts: PropTypes.array.isRequired
};

export default Progress;
