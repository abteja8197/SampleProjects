'use strict';

import React from 'react';

require('styles/atoms/Textarea.css');

class TextareaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.content
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Certificate generated: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <textarea className="textarea-component" value={this.state.value} onChange={this.handleChange} />
    );
  }
}

TextareaComponent.displayName = 'CoreTextareaComponent';

// Uncomment properties you need
// TextareaComponent.propTypes = {};
// TextareaComponent.defaultProps = {};

export default TextareaComponent;