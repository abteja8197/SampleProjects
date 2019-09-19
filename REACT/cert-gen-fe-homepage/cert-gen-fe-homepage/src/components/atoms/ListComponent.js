'use strict';

import React from 'react';
import ListRow from './ListRow';
import ButtonComponent from './ButtonComponent'; // ButtonComponent for button getting save button
import Config from '../../config'; // config.js file for getting api related information
import axios from 'axios';  // axios for api call

require('styles/atoms/List.css'); // css for list

class ListComponent extends React.Component {
  render() {
    return (
      <All_List /> 
      // Functionality being implemented in <All_List>
    );
  }
}

class All_List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.removeList = this.removeList.bind(this); 
  }

  removeList(index) {   // Removing a row from the list on click of delete button
    let items = this.state.items;
    if(items && items.length){
      items.splice(index, 1);   // For deleting the particular row
      this.setState({items: items});    // Reinitialising the items
    }
  }

  componentDidMount() {
    axios.get(Config.buildURL('employees')).then( result => {   // Refer '../../config.js' for buildURL function information 
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {
      return <div>Loading...</div>;
    
    } else {
      return (
        //Remove the bootstrap link when it is included in main
        <ul className="col-md-11 list_component" >
          {
            items.map((item, index) => <ListRow key={item.id} removeItem={()=>this.removeList(index)} emp_id={item.empId} emp_name={item.name} />)
            //Calling <ListRow> using map function to print all the elements of the api.
            //index is used for marking the element which has to be deleted.
            //removeItem function is being sent from <ListRow>
            //key, emp_id, emp_name is sent as props to <ListRow>
          }
         
        </ul>
      );
    }
  }
}

ListComponent.displayName = 'CoreListComponent';

export default ListComponent;
