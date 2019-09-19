'use strict';

import React from 'react';
require('styles/atoms/Step.css');

class StepComponent extends React.Component {
  render() {
    return (
      <div id={this.props.id} className={this.getStepClasses()}>
        <span className="step-text">{this.props.stepNumber}</span>
        <p className="step-description">{this.props.description}</p>
      </div>
    );
  }

  // getStepClasses() is for dynamically adding classes to the step component
  getStepClasses() {
    let classes = 'step ';
    classes += this.props.stepState;
    return classes;
  }
}

StepComponent.displayName = 'CoreStepComponent';

// Uncomment properties you need
// StepComponent.propTypes = {};
// StepComponent.defaultProps = {};

export default StepComponent;