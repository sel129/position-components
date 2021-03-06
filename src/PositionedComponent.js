import React, { Component } from 'react';
import Positionable from './Positionable';
import ChildComponent from './ChildComponent';

class PositionedComponent extends Component {
  render() {
    const style = {
      backgroundColor: 'red',
      position: 'absolute',
      top: (this.props.parentHeight - this.props.renderedHeight)/2,
      left: (this.props.parentWidth - this.props.renderedWidth)/2,
      width: '400px',
      height: '100px'
    }
    const PositionableChild = Positionable(ChildComponent, this.props);
    return (
      <div style={style}>
        <PositionableChild/>
      </div>
    );
  }
}

export default PositionedComponent;
