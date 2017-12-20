import React, { Component } from 'react';
import './App.css';
import Positionable from './Positionable'

class App extends Component {
  constructor() {
    super();
    window.addEventListener('resize', function(event){
      this.setState(
        {
          height: event.srcElement.innerHeight,
          width: event.srcElement.innerWidth
        }
      );
    }.bind(this));
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    }
  }

  position(originalComponent) {
    const style1={
      position: 'absolute',
      'backgroundColor': 'red',
      top: '10px'
    }
    const style2={
      position: 'absolute',
      'backgroundColor': 'blue',
      top: '50px'
    }
    return originalComponent(style1);
  }



  render() {
    const child = (position) => {
      return (<div style={position}>component1</div>);
    }
    const div1 = this.position(child)
    return (
      <div>
        <Positionable height={this.state.height} width={this.state.width}/>
      </div>
    );
  }
}

export default App;
