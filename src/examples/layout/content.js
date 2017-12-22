import React, { Component } from 'react';

class Content extends Component {
  render() {
    const style = {
      backgroundColor: 'yellow',
      position: 'absolute',
      top: 50,
      left: 300,
      width: Number(this.props.parentWidth) - 300,
      height: Number(this.props.parentHeight) - 50
    }

    return (
      <div style={style}>
        Content
      </div>
    );
  }
}

export default Content;
