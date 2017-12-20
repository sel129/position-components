import React, { Component } from 'react';
import './App.css';
import PositionedComponent from './PositionedComponent';
import Positionable from './Positionable';
import parentSizeProvider from './ParentSizeProvider';

class App extends Component {
  render() {
    const ParentSizeProvider = parentSizeProvider(Positionable(PositionedComponent));
    return (
      <ParentSizeProvider/>
    );
  }
}

export default App;
