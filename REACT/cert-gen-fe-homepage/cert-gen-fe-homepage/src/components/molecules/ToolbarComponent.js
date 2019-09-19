'use strict';

import React from 'react';
import ToolComponent from '../atoms/ToolComponent';
import ListSelection from '../atoms/ListSelection';
require('styles/molecules/Toolbar.css');

class ToolbarComponent extends React.Component {
  render() {
    return (
      <div>
     <ToolComponent/>
     <ListSelection list='emp_list'/></div>
    );
  }
}

ToolbarComponent.displayName = 'MoleculesToolbarComponent';

// Uncomment properties you need
// ToolbarComponent.propTypes = {};
// ToolbarComponent.defaultProps = {};

export default ToolbarComponent;
