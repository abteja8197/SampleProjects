'use strict';
import React from 'react';
import TitleComponent from '../atoms/TitleComponent';
import StepperComponent from '../molecules/StepperComponent';
import ButtonComponent from '../atoms/ButtonComponent';
import SubtitleComponent from '../atoms/SubtitleComponent';
require('styles/organisms/Header.css');
class HeaderComponent extends React.Component {
  constructor() {
    super()
    this.state = { step_value: 1, path: '/' };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    switch (this.state.step_value) {
      case 1:
        document.getElementById('step1').classList.replace('in-progress', 'completed');
        document.getElementById('step2').classList.replace('inactive', 'in-progress');
        window.history.pushState('page', 'title', '/content');
        this.setState({
          path: '/content'
        })
        break;
      case 2:
        document.getElementById('step2').classList.replace('in-progress', 'completed');
        document.getElementById('step3').classList.replace('inactive', 'in-progress');
        this.setState({
          path: '/trainees'
        })
        break;
      case 3:
        document.getElementById('step3').classList.replace('in-progress', 'completed');
        document.getElementById('step4').classList.replace('inactive', 'in-progress');
        window.history.pushState('page', 'title', '/preview');
        this.setState({
          path: '/preview'
        })
        break;
      case 4:
        document.getElementById('step4').classList.replace('in-progress', 'completed');
        document.getElementById('step5').classList.replace('inactive', 'in-progress');
        window.history.pushState('page', 'title', '/export');
        this.setState({
          path: '/export'
        })
        break;
    }
    if (this.state.step_value < 5) {
      this.setState({

        step_value: this.state.step_value + 1

      });
    }
  }

  previous() {
    switch (this.state.step_value) {
      case 2:
        document.getElementById('step1').classList.replace('completed', 'in-progress');
        document.getElementById('step2').classList.replace('in-progress', 'inactive');
        window.history.pushState('page', 'title', '/');
        this.setState({
          path: '/'
        })
        break;
      case 3:
        document.getElementById('step2').classList.replace('completed', 'in-progress');
        document.getElementById('step3').classList.replace('in-progress', 'inactive');
        window.history.pushState('page', 'title', '/content');
        this.setState({
          path: '/content'
        })
        break;
      case 4:
        document.getElementById('step3').classList.replace('completed', 'in-progress');
        document.getElementById('step4').classList.replace('in-progress', 'inactive');
        window.history.pushState('page', 'title', '/trainees');
        this.setState({
          path: '/trainees'
        })
        break;
      case 5:
        document.getElementById('step4').classList.replace('completed', 'in-progress');
        document.getElementById('step5').classList.replace('in-progress', 'inactive');
        window.history.pushState('page', 'title', '/preview');
        this.setState({
          path: '/preview'
        })
        break;
    }
    if (this.state.step_value > 1) {
      this.setState({
        step_value: this.state.step_value - 1
      });
    }
  }

  render() {
    return (
      <div className="header-component">
        <div className="nav">
          <div className="brand">
            <img src="../../images/tadigitallogo_blue_dark.png" alt="logo"></img>
          </div>
          <div className="content">
            <div className="index">
              <TitleComponent name="Generate Certificates"/>
            </div>
          </div>
          <div className="profile">
            <img src="../../images/man.png" alt="User profile picture"></img>
            <img src="../../images/small-down.png" alt="Select profile button"></img>
          </div>
        </div>
        <div className="stepper-section">
          <div className="sub-header">
            <SubtitleComponent />
          </div>
          <div className="stepper">
          <StepperComponent path={this.state.path}></StepperComponent>
          <div className="navigation-buttons">
            <ButtonComponent btnLbl="previous" btnStyle="previous" sendFunction={this.previous} />
            <ButtonComponent btnLbl="next" btnStyle="next" sendFunction={this.next} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'OrganismsHeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
