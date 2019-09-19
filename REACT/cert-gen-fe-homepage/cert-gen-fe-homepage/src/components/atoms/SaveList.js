'use strict';

import React from 'react';
import SaveListRow from './SaveListRow';

require('styles/atoms/List.css');

class SaveList extends React.Component {
  render() {
    return (
        <ul className="col-md-6 list_component">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
            <SaveListRow />
        </ul>
    );
  }
}

SaveList.displayName = 'CoreSaveListComponent';

export default SaveList;
