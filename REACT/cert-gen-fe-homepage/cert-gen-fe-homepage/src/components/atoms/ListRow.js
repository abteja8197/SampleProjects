'use strict';

import React from 'react';
import ButtonComponent from './ButtonComponent';

require('styles/atoms/List.css');

class ListRow extends React.Component {
  constructor(){
    super();
    this.state = {
      showComponent: true
    }
    this._handleDelete = this._handleDelete.bind(this);
  }

  _handleDelete() {
    console.log(this);
    this.setState({
      showComponent: false
    });
     
  }
  
  render() {
    return (
      <li>
        { this.state.showComponent &&
        <span className="col-md-5 col-md-offset-1 list_element" onClick={this._handleDelete}>
        <span className="id col-md-2">{this.props.emp_id}</span>
        <span className="name col-md-9">{this.props.emp_name}</span>
         <ButtonComponent btnStyle="delete btn_container" sendFunction={this._handleDelete}/> 
      </span>}
      </li>
    );
  }
}

ListRow.displayName = 'CoreListRow';

export default ListRow;