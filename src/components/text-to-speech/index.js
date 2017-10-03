import React, { Component } from 'react';
import PropTypes from 'prop-types';

import muteIcon from '../../images/Mute_Icon.svg';
import speakerIcon from '../../images/Speaker_Icon.svg';

import './index.scss';

class TextToSpeech extends Component {
  constructor() {
    super();
    this.state = { isPlaying: false }
  }

  componentWillUnmount() {
    window.speechSynthesis.cancel();
    this.utterance = null;
  }

  toggleSpeech() {
    if (!this.utterance) {
      this.utterance = new SpeechSynthesisUtterance(this.props.text);
      window.speechSynthesis.speak(this.utterance);
      this.setState({ isPlaying: true });
    } else {
      window.speechSynthesis.cancel();
      this.utterance = null;
      this.setState({ isPlaying: false });
    }
  }

  render() {
    return (
      <div className="TextToSpeech text-uppercase">
        <div onClick={() => this.toggleSpeech()}>
          { this.state.isPlaying ? <img src={muteIcon} alt="Stop"/> : <img src={speakerIcon} alt="Play"/> }
          { this.state.isPlaying ? 'Stop reading' : 'Start reading' }
        </div>
      </div>
    );
  }
}

TextToSpeech.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextToSpeech;
