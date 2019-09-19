'use strict';

import React from 'react';

require('styles/atoms/Subtitle.css');

import axios from 'axios';

class SubtitleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get('//localhost:1337/steps').then( result => {
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
          <h2 className="subtitle-component">{items[1].stepTitle}</h2>
        );
    }

  }
}

SubtitleComponent.displayName = 'CoreTitleComponent';

// Uncomment properties you need
// TitleComponent.propTypes = {};
// TitleComponent.defaultProps = {};

export default SubtitleComponent;
