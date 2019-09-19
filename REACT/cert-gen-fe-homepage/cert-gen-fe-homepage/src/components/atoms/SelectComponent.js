'use strict';
import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import Config from '../config';
require('styles/atoms/Select.css');
 class SelectComponent extends React.Component {
   constructor(props){
     super(props);
     this.state={
      items: [],
      selectedOption: ''
     }
   }
   componentDidMount() {
    axios.get(Config.buildURL('courses')).then( result => {
      this.setState({
          isLoaded: true,
          items: result.data
        });
        // console.log(items);
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
   handleChange = (selectedOption) => {
     this.setState({ selectedOption});
    //  console.log(`Option selected:`, selectedOption);
   }
   render() {
     
     const { selectedOption } = this.state;
     const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {
      return <div>Loading...</div>;
    
    } else {
      var datas = [] ;
      
      for (var item in items) {
        var d = {value: items[item].course_title, label: items[item].course_title};
        datas.push(d);
      }
     return (
       <Select
         value={selectedOption.course_title}
         onChange={this.handleChange}
         placeholder={this.props.placeholder}
         options={datas}
       />
     );
   }
  }
 }

SelectComponent.displayName = 'CoreSelectComponent';

// Uncomment properties you need
// SelectComponent.propTypes = {};
// SelectComponent.defaultProps = {};

export default SelectComponent;
