'use strict';

import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import StepComponent from '../atoms/StepComponent';
import FormControlComponent from '../molecules/FormControlComponent'
import ThumbComponent from '../atoms/ThumbComponent';
import ToolbarComponent from '../molecules/ToolbarComponent';
import SelectComponent from '../atoms/SelectComponent';
require('styles/molecules/Stepper.css');

class StepperComponent extends React.Component {

  constructor() {
    super();
    this.props = {
      path: '/'
    }
    this.state = {
      rdr: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.path !== nextProps.path) {
      this.setState({ rdr: true });
    }
  }

  render() {
    if (this.props.path !== '' && this.state.rdr) {
      this.setState({ rdr: false });
      return (
        <Router>
          <Switch>
            <Redirect to={this.props.path} />;
          </Switch>
        </Router>
      );
    }

    return (
      <Router>
        <div>
          <div className="stepper-component">
            <StepComponent id="step1" stepNumber="1" stepState="in-progress" description="Design" />
            <StepComponent id="step2" stepNumber="2" stepState="inactive" description="Content"/>
            <StepComponent id="step3" stepNumber="3" stepState="inactive" description="Trainees"/>
            <StepComponent id="step4" stepNumber="4" stepState="inactive" description="Preview"/>
            <StepComponent id="step5" stepNumber="5" stepState="inactive" description="Export"/>
          </div>
            <div>
            <Switch>
              <Route path="/" exact render={
                () => {
                  return (<div className="gallery-component"><ThumbComponent /></div>);
                }
              } />
              <Route path="/content" exact render={
                () => {
                  return (<div><FormControlComponent/></div>);
                }
              } />
              <Route path="/trainees" exact render={
                () => {
                  return (<div><ToolbarComponent /></div>);
                }
              } />
              <Route path="/preview" exact render={
                () => {
                  return (<div><SelectComponent/></div>);
                }
              } />
              <Route path="/export" exact render={
                () => {
                  return (<h1>export page</h1>);
                }
              } />
            </Switch>
        </div>
        </div>
        
      </Router>
    );
  }

}

StepperComponent.displayName = 'MoleculesStepperComponent';

// Uncomment properties you need
// StepperComponent.propTypes = {};
// StepperComponent.defaultProps = {};

export default StepperComponent;
