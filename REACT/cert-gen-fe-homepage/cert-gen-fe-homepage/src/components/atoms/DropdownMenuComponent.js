'use strict';

import React from 'react';
import Config from '../../config';
import axios from 'axios';

require('styles/atoms/DropdownMenu.css');

class DropDownData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    axios.get('//localhost:1337/designs').then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <tbody className="dropdown-tbody" id="dropdown-tbody">
          {items.map(item => <Thumb key={item.id} designTitle={item.designTitle} designThumb={'//localhost:1337/images/designs/'+item.designThumb} designLarge={'//localhost:1337/images/designs/'+item.designLarge} />)}
        </tbody>
      );
    }
  }
}
class Thumb extends React.Component {
  render() {
    return (
      <div className="thumb-component">
        <a className="thumb relative" href="#" target="_top">
          <figure>
            <img className="thumb-img" src={this.props.designThumb} alt=" " />
            <figcaption className="thumb-text">{this.props.designTitle}</figcaption>
          </figure>
          <input
            className="check-box"
            type="checkbox"
            value="elegant"
            id="checkbox1"
          />
        </a>
      </div>
    );
  }
}

class DynamicRow extends React.Component {
  
  render() {
    let temp = this.props.title;
    return (
      <tr className="dropdown-table--row" onClick="displayText">
          <img src={this.props.designThumb}></img>
        <hr className="horiz-line" />
      </tr>
    );
  }
}
class DropdownMenuComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="dropdownmenu-component">
          <table className="dropdown-table" rules="all" border="1px solid">
            <DropDownData />
          </table>
        </div>
      </div>
    );
  }
}

DropdownMenuComponent.displayName = 'AtomsDropdownMenuComponent';

// Uncomment properties you need
// DropdownMenuComponent.propTypes = {};
// DropdownMenuComponent.defaultProps = {};

export default DropdownMenuComponent;
