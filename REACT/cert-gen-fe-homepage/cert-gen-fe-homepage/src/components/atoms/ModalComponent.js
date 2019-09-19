'use strict';

import React from 'react';
import Modal from 'react-responsive-modal';
// import Picture from '../../../src/images/elegant-preview.png';
require('styles/atoms/Modal.css');

let viewImg = require('../../images/zoom-in.svg');

class ModalComponent extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false});
  };

  render() {
    const { open } = this.state;
      return (
        <div>
          {/* <button onClick={this.onOpenModal}>Preview</button> */}
          <figure>
          <img onClick={this.onOpenModal} className="view-btn" src={viewImg} alt=" "/>
          <figcaption className="view-text">Preview</figcaption>
          </figure>
          <Modal open={open} onClose={this.onCloseModal} center >
            <img src={this.props.designLarge} className="modal-component"/>
          </Modal>
        </div>
      );
    }
    
}

ModalComponent.displayName = 'CoreModalComponent';

// Uncomment properties you need
// ModalComponent.propTypes = {};
// ModalComponent.defaultProps = {};

export default ModalComponent;
