'use strict';

import React from 'react';

require('styles/atoms/Button.css');

class ButtonComponent extends React.Component {

  render() {

    let userclass = JSON.stringify(this.props.btnStyle);
    let noQuotes = userclass.split('"').join('');
    let classdata = 'btn1' + ' ' + noQuotes;
    return (
      <a className={classdata} onClick={this.props.sendFunction}>{this.props.btnLbl}</a>
    );

  }
}

ButtonComponent.displayName = 'CoreButtonComponent';

// Uncomment properties you need
// ButtonComponent.propTypes = {};
//ButtonComponent.defaultProps = {};

export default ButtonComponent;

