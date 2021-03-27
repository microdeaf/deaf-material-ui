/* eslint-disable react/display-name */
import React, { Component } from 'react';

const AsyncComponent = (importComponent) => {
  return class extends Component {
        state = {
          component: null
        }

        componentDidMount () {
          importComponent()
            .then(cmp => {
              // eslint-disable-next-line react/prop-types
              this.setState({ component: cmp[this.props.name] });
            });
        }

        render () {
          const C = this.state.component;
          return C ? <C {...this.props} /> : null;
        }
  }
};

export default AsyncComponent;
