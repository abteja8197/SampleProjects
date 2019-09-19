'use strict'

import React from 'react';
import ListComponent from './ListComponent'
import SaveList from './SaveList';


class ListSelection extends React.Component {
  render() {
    if(this.props.list==='emp_list'){
        return (
          <ListComponent />
        );
    } else if(this.props.list==='emp_save'){
        return (
          <SaveList/>
        );
    } else { 
      return ( 
        <div>not seleted any type</div>
      );
    }
  }
}

ListSelection.displayName = 'CoreListSelectionComponent';

export default ListSelection;