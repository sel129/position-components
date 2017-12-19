import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
        {div1}
      </div>
    );
  }
}

export default App;
