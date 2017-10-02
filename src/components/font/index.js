import React, { Component } from 'react';

class Font extends Component {
  render() {
    return (
      <div className="Font">
        {this.props.match.params.font}
      </div>
    );
  }
}

export default Font;
