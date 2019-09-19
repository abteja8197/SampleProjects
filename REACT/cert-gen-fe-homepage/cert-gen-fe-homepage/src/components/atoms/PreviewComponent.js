'use strict';

import React from 'react';

require('styles/core/Preview.css');

class PreviewComponent extends React.Component {
  render() {
    return (
      <div className="preview-component">
        Please edit src/components/core//PreviewComponent.js to update this component!
      </div>
    );
  }
}

PreviewComponent.displayName = 'CorePreviewComponent';

// Uncomment properties you need
// PreviewComponent.propTypes = {};
// PreviewComponent.defaultProps = {};

export default PreviewComponent;
