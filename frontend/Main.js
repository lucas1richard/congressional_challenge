import React from 'react';
import PropTypes from 'prop-types';

class Main extends React.Component { // eslint-disable-line
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Main;

