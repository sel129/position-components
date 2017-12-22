import React from 'react';
import ReactDOM from 'react-dom'

function parentSizeProvider(WrappedComponent, parentWidth, parentHeight) {
  return class extends React.Component {
    // constructor() {
    //   super();
    //   this.state = {
    //     renderedHeight: 0,
    //     renderedWidth: 0
    //   };
    // }

    // componentDidMount() {
    //   // check for composite element
    //   // if(React.isValidElement(this.renderedElement)) {
    //   //   console.log("composite");
    //   // }
    //   const domNode = ReactDOM.findDOMNode(this.renderedElement);
    //   this.setState(
    //     {
    //       renderedHeight: domNode.clientHeight,
    //       renderedWidth: domNode.clientWidth
    //     }
    //   );
    // }

    render() {
      return <WrappedComponent
        {...this.props}
        parentHeight={this.props.parentHeight || parentHeight}
        parentWidth={this.props.parentWidth || parentWidth}/>;
    }
  }
}

export default parentSizeProvider;
