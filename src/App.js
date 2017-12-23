import React, { Component } from 'react';
import './App.css';
import PositionedComponent from './PositionedComponent';
import Positionable from './Positionable';
import parentSizeProvider from './ParentSizeProvider';
import Layout from './examples/layout/layout';
import Tray from './examples/tray/tray';

class App extends Component {
  render() {
    const LayoutSizeProvider = parentSizeProvider(Tray);
    return (
      <LayoutSizeProvider/>
    );
  }
}

export default App;
