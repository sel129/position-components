import React, { Component } from 'react';
//import Positionable from '../../Positionable';

class Layout extends Component {
  constructor() {
    super();
    this.openCloseTray = this.openCloseTray.bind(this);
    this.state = {
      trayWidth: 300,
      open: true
    }
  }

  openCloseTray(evt) {
    if(this.state.open) {
      this.setState({
        trayWidth: 50,
        open: false
      })
    } else {
      this.setState({
        trayWidth: 300,
        open: true
      })
    }
  }

  render() {
    const style = {
      backgroundColor: 'grey',
      position: 'absolute',
      animationDuration: '3s',
      animationName: 'slidein',
      animationIterationCount: 1,
      top: 0,
      left: 0,
      width: this.state.trayWidth,
      height: this.props.parentHeight
    }
    //const PositionableLeftNav = Positionable(LeftNav, style.width, style.height);
    //const PositionableHeader = Positionable(Header, style.width, style.height);
    //const PositionableContent = Positionable(Content, style.width, style.height);
    return (
      <div style={style} onClick={this.openCloseTray}>
        tray
      </div>
    );
  }
}

export default Layout;
