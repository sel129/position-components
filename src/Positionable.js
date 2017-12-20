import React, { Component } from 'react';

class Positionable extends Component {
  constructor() {
    super();
    this.state = {
      renderedHeight: 0,
      renderedWidth: 0
    };
  }
  componentDidMount() {
    this.setState(
      {
        renderedHeight: this.renderedElement.clientHeight,
        renderedWidth: this.renderedElement.clientWidth
      }
    );
  }

  render() {
    const style = {
      backgroundColor: 'red',
      position: 'absolute',
      top: (this.props.height - this.state.renderedHeight)/2,
      left: (this.props.width - this.state.renderedWidth)/2,
    }

    return (
      <div style={style}
        ref={ (renderedElement) => this.renderedElement = renderedElement}>
        PositionMe
      </div>
    );
  }
}

export default Positionable;
