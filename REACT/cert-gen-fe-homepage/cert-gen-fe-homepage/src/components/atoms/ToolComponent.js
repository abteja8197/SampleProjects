'use strict';

import React from 'react';
import LabelComponent from './LabelComponent';
import TextboxComponent from './TextboxComponent';
import ButtonComponent from './ButtonComponent';
require('styles/atoms/Tool.css');

class ToolComponent extends React.Component {
  render() {
    return (
      <div className="tool-component">
      <div className="row">
          <div className="col-md-7 col-md-offset-1">
          <LabelComponent label='Search and Add' for='label-component'/>
          <div className="textbox-container">
          <TextboxComponent dropdown={false} placeholder='Search'/>
          <div className="adduser">
          <ButtonComponent btnStyle='add-user'/>
          </div>
          </div>
          </div>
          <div className="btn-container col-md-4">
          <ButtonComponent btnStyle='save-list'/>
          <ButtonComponent btnStyle='import-list'/>
          </div>
      </div>
      </div>
    );
  }
}

ToolComponent.displayName = 'CoreToolComponent';

// Uncomment properties you need
// ToolComponent.propTypes = {};
// ToolComponent.defaultProps = {};

export default ToolComponent;
