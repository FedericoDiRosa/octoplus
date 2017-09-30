import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Font extends Component {
  render() {
    return (
      <div className="Font">
        {this.props.match.params.font}
      </div>
    );
  }
}

// Font.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       font: PropTypes.string.isRequired
//     })
//   })
// };

export default Font;
