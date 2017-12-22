import React, { Component } from 'react';

class PositionedComponent extends Component {
  render() {
    const style = {
      backgroundColor: 'blue',
      position: 'absolute',
      top: (this.props.parentHeight - this.props.renderedHeight)/2,
      left: (this.props.parentWidth - this.props.renderedWidth)/2,
      width: '10px',
      height: '10px'
    }

    return (
      <div style={style}>
        Child
      </div>
    );
  }
}

export default PositionedComponent;
