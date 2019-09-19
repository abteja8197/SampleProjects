'use strict';

import React from 'react';

require('styles/atoms/Label.css');

class LabelComponent extends React.Component {
  render() {
    return (
      <div className="label-component">
        <label htmlFor={this.props.for}>{this.props.label}</label>
      </div>
    );
  }
}

LabelComponent.displayName = 'CoreLabelComponent';

// Uncomment properties you need
// LabelComponent.propTypes = {};
// LabelComponent.defaultProps = {};

export default LabelComponent;
