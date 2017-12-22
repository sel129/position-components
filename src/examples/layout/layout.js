import React, { Component } from 'react';
import LeftNav from './leftNav';
import Header from './header';
import Content from './content'
//import Positionable from '../../Positionable';

class Layout extends Component {
  render() {
    const style = {
      backgroundColor: 'grey',
      position: 'absolute',
      top: 0,
      left: 0,
      width: this.props.parentWidth,
      height: this.props.parentHeight
    }
    //const PositionableLeftNav = Positionable(LeftNav, style.width, style.height);
    //const PositionableHeader = Positionable(Header, style.width, style.height);
    //const PositionableContent = Positionable(Content, style.width, style.height);
    return (
      <div style={style}>
        <LeftNav parentHeight={style.height} parentWidth={style.width}/>
        <Header parentHeight={style.height} parentWidth={style.width}/>
        <Content parentHeight={style.height} parentWidth={style.width}/>
      </div>
    );
  }
}

export default Layout;
