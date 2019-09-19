'use strict';

import React from 'react';

require('styles/core/Overlay.css');

class OverlayComponent extends React.Component {
  render() {
    return (
      <div className="overlay-component">
        Please edit src/components/core//OverlayComponent.js to update this component!
      </div>
    );
  }
}

OverlayComponent.displayName = 'CoreOverlayComponent';

// Uncomment properties you need
// OverlayComponent.propTypes = {};
// OverlayComponent.defaultProps = {};

export default OverlayComponent;
