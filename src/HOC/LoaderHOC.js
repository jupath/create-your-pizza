import React, { Component } from 'react';

const LoaderHOC = propName => WrappedComponent => class LoaderHOC extends Component {
  isEmpty(prop) {
    return (
      prop === null ||
      prop === undefined ||
      (prop.hasOwnProperty('length') && prop.length === 0) ||
      (prop.constructor === Object && Object.keys(prop).length === 0)
    );
  }

  render() {
    return this.isEmpty(this.props[propName]) ? <div className="loader">loading...</div> : <WrappedComponent {...this.props} />;
  }
};

export default LoaderHOC;
