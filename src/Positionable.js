import React from 'react';
import ReactDOM from 'react-dom'

function parentSizeProvider(WrappedComponent) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        renderedHeight: 0,
        renderedWidth: 0
      };
    }

    componentDidMount() {
      // check for composite element
      // if(React.isValidElement(this.renderedElement)) {
      //   console.log("composite");
      // }
      const domNode = ReactDOM.findDOMNode(this.renderedElement);
      this.setState(
        {
          renderedHeight: domNode.clientHeight,
          renderedWidth: domNode.clientWidth
        }
      );
    }

    render() {
      return <WrappedComponent
        {...this.props}
        renderedHeight={this.state.renderedHeight || 0}
        renderedWidth={this.state.renderedWidth || 0}
        ref={ (renderedElement) => this.renderedElement = renderedElement}/>;
    }
  }
}

export default parentSizeProvider;
