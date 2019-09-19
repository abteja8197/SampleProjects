'use strict';

import React from 'react';
import DropdownMenuComponent from './DropdownMenuComponent';

require('styles/atoms/Textbox.css');

class TextboxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownClicked: false
    };
  }
  dropdownClick = () => {
    if (this.props.dropdown === true) {
      this.setState({
        dropdownClicked: true
      });
    }
  };
  render() {
    let dropdownClicked = false;
    let dropdownCheck = this.props.dropdown;
    let placeholder = this.props.placeholder;
    let arrow = '';
    let dropdownmenu = '';

    if (dropdownCheck === true) {
      arrow = <i className="down-arrow" onClick={e => this.dropdownClick(e)} />;
    }
    if (this.state.dropdownClicked === true) {
      dropdownmenu = <DropdownMenuComponent datacategory={this.props.datacategory} />;
    }
    return (
      <div className="textbox-component">
        <input type="text" className="input-textbox" placeholder={placeholder} onClick={e => this.dropdownClick(e)} />
        {arrow}
        {dropdownmenu}
      </div>
    );
  }
}

TextboxComponent.displayName = 'CoreTextboxComponent';

// Uncomment properties you need
// TextboxComponent.propTypes = {};
// TextboxComponent.defaultProps = {};

export default TextboxComponent;
