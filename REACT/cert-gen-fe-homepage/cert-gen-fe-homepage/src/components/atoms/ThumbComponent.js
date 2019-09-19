'use strict';
import React from 'react';
import axios from 'axios';
import ModalComponent from '../../../src/components/atoms/ModalComponent';

require('styles/atoms/Thumb.css');

class ThumbComponent extends React.Component {
  render() {
    return (<All_List />)
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
        <div>
        {items.map(item => <Thumb key={item.id} designTitle={item.designTitle} designThumb={'//localhost:1337/images/designs/'+item.designThumb} designLarge={'//localhost:1337/images/designs/'+item.designLarge} />)}
        </div>
       
      );
    }
  }
}
class Thumb extends React.Component {
  render() {
    return (
      <div className="thumb-component">
        <a className="thumb relative" href="#" target="_top">
          <ModalComponent name="Preview modal" designLarge={this.props.designLarge}/>
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

ThumbComponent.displayName = 'AtomsThumbComponent';

// Uncomment properties you need
// ThumbComponent.propTypes = {};
// ThumbComponent.defaultProps = {};

export default ThumbComponent;
