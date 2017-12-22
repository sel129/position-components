import React, { Component } from 'react';

class LeftNav extends Component {
  render() {
    const style = {
      backgroundColor: 'blue',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 300,
      height: this.props.parentHeight
    }

    return (
      <div style={style}>
        Left Nav
      </div>
    );
  }
}

export default LeftNav;
