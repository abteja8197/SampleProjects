'use strict';

import React from 'react';
require('styles/atoms/Upload.css');

class UploadComponent extends React.Component {
  dragOverHandler = (ev) => {
    ev.preventDefault();
  }
  dropHandler = (ev) => {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          document.getElementById('selected-file-name').innerHTML =
            'File Selected:' + file.name;
        }
      }
    } else {
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        document.getElementById('selected-file-name').innerHTML =
          'File Selected:' + file.name;
      }
    }
  }

  displayName = () => {
    var x = document.getElementById('browse').value;
    document.getElementById('selected-file-name').innerHTML =
      'Selected File: ' + x;
  }
  render() {
    return (
      <div
        className='upload-component'
        onDrop={this.dropHandler}
        onDragOver={this.dragOverHandler}
      >
        <p className='upload-text'>{this.props.UploadText}</p>
        <div className='upload-image-container'>
          <img src='./images/photos.svg' className='upload-photo' />
          <img src='./images/icon_upload.svg' className='upload-icon' />
          <p className='drag-drop'>Drag &amp; Drop</p>
          <span className='logo-file-text'>
            your logo file or{' '}
            <input
              type='file'
              className='custom-file-input'
              id='browse'
              accept='image/svg+xml'
              onChange={this.displayName}
            />
          </span>
          <p id='selected-file-name' className='selected-file-name' />
        </div>
      </div>
    );
  }
}

UploadComponent.displayName = 'CoreUploadComponent';

// Uncomment properties you need
// UploadComponent.propTypes = {};
// UploadComponent.defaultProps = {};

export default UploadComponent;
