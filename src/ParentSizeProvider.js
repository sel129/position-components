import React from 'react';

function parentSizeProvider(WrappedComponent) {
  return class extends React.Component {
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
    render() {
      return <WrappedComponent {...this.props} parentHeight={this.state.height} parentWidth={this.state.width} />;
    }
  }
}

export default parentSizeProvider;
