'use strict';

import React from 'react';

require('styles/atoms/Title.css');

class TitleComponent extends React.Component {
  render() {
    return (
      <h1 className="title-component">{this.props.name}</h1>
    );
  }
}

TitleComponent.displayName = 'CoreTitleComponent';

// Uncomment properties you need
// TitleComponent.propTypes = {};
// TitleComponent.defaultProps = {};

export default TitleComponent;
