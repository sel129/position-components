import React, { Component } from 'react';

class Header extends Component {
  render() {
    const style = {
      backgroundColor: 'red',
      position: 'absolute',
      top: 0,
      left: 300,
      width: this.props.parentWidth - 300,
      height: 50
    }

    return (
      <div style={style}>
        Header
      </div>
    );
  }
}

export default Header;
