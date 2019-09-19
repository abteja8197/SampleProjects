'use strict';

import React from 'react';
import ButtonComponent from './ButtonComponent';

require('styles/atoms/List.css');
require('styles/atoms/Button.css');


class SaveListRow extends React.Component {
  render() {
    return (
      <li className="list_element">
        <span className="col-md-8">A very large list</span>
        <time datetime="2018-15-12" className="col-md-2">15/12/2018</time>
        <span className="col-md-2 btn_container">
          <ButtonComponent btnStyle="delete" />
          <ButtonComponent btnStyle="import" />
        </span>
      </li>
        
    );
  }
}

SaveListRow.displayName = 'CoreSaveListRowComponent';

export default SaveListRow;