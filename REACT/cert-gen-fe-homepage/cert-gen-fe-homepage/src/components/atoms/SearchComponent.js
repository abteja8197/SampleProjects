'use strict';

import React from 'react';
import axios from 'axios';
import Config from '../config';

require('styles/atoms/Search.css');
class DynamicList extends React.Component {
  render(){
    return (
      <ul>
        {
          Object.keys(this.props.listItems).map( (index) => {
            return (
              <li onClick={ () => this.props.removeItem(index) } name={index}>{this.props.listItems[index]}</li>
            );
          })
        }
      </ul>
    );
  }
}

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.responseData=[];
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  handleChange(e){
    this.setState({
    tech: this.responseData[e.target.value]
    })
  }
  handleInputChange = () => {
    this.setState({
        query: this.search.value
    })
    this.filterArray();
}
filterArray = () => {
  var searchString = this.state.query;
this.responseData = this.state.items;
  if(searchString.length > 0){
      // console.log(responseData[i].name);
      this.responseData = this.responseData.filter(l => {
      return ( l.name.toLowerCase().match(searchString));      
    })
  }
  
}
  componentDidMount() {
    axios.get(Config.buildURL('employees')).then( result => {
      this.setState({
          isLoaded: true,
          items: result.data
        });
        this.responseData=result.data;
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  formSubmit(e){
    e.preventDefault();    
    let itemToAdd = this.tech.value;
    if(itemToAdd != ''){
      this.props.addItem(itemToAdd);
    }}
  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {
      return <div>Loading...</div>;
    
    } else {
      return (
      <form ref="itemForm" onSubmit={e => this.formSubmit(e)}>
        <input type="text"  placeholder="search"ref={input => this.search = input} onChange={this.handleInputChange}/>
        <ul>
            {this.responseData.map(function(i) {
                return <li>{i.name}</li>;
            }) } 
          </ul> 
          <select onChange={this.handleChange} value={this.state.tech}>
          {this.responseData.map(function(i, index){return  <option value={index} >{i.name}</option>;})} 
        </select>
        <button type="submit" class="btn btn-primary">Add Item</button>
      </form>
    );
  }
}
}
class SearchComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dynamicList: []
    };
    this.addListItem = this.addListItem.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
  }
  addListItem(itemToAdd){
    let currentList = this.state.dynamicList;
    currentList.push(itemToAdd);
    this.setState({dynamicList : currentList});
  }
  removeListItem(itemToRemove){
    let currentList = this.state.dynamicList;
    currentList.splice(itemToRemove, 1);
    this.setState({dynamicList : currentList});
  }
  render(){
    return(
      <div class="component-wrapper">
        <DynamicList listItems={this.state.dynamicList} removeItem={this.removeListItem} />
        <InputBox addItem={this.addListItem} />
      </div>
    );
  }
 }

SearchComponent.displayName = 'CoreSearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
