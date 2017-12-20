import React, { Component } from 'react';

class Positionable extends Component {
  render() {
    const style = {
      backgroundColor: 'red',
      position: 'absolute',
      top: (this.props.height - this.props.renderedHeight)/2,
      left: (this.props.width - this.props.renderedWidth)/2,
    }

    return (
      <div style={style}>
        PositionMe
      </div>
    );
  }
}

export default Positionable;
