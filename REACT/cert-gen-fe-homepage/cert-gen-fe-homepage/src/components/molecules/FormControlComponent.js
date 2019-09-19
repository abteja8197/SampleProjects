'use strict';

import React from 'react';
import TextboxComponent from '../atoms/TextboxComponent';
import UploadComponent from '../atoms/UploadComponent';
import CalendarComponent from '../atoms/CalendarComponent';
import TextareaComponent from '../atoms/TextareaComponent';
import SelectComponent from '../atoms/SelectComponent';

require('styles/molecules/FormControl.css');

class FormControlComponent extends React.Component {
  render() {
    return (
      <div className="formcontrol-component">
        <div className="col-xs-6">
          <label className="margin-top-small">Select a course</label>
          <SelectComponent placeholder="Please select the below course" datacategory='courses'/>
          {/* <TextboxComponent dropdown={true} placeholder="Please select the below course" datacategory='courses' /> */}
          
          <label className="margin-top-small">Select a course logo</label>
          <TextboxComponent dropdown={true} placeholder="Upload a logo (SVG Preferred)..." datacategory='courses'/>
          
          <UploadComponent UploadText="Upload a logo image (svg, png)"/>
          <label className="margin-top-small">Select an Authorized Signature</label>
          
          <TextboxComponent dropdown={true} placeholder="Authorized Signature" datacategory='employees'/>
          <label className="margin-top-small">Pick a certificate issue date</label>
          
          <CalendarComponent />
        </div>

        <div className="col-xs-6">
          <label className="margin-top-small">Enter the opening line</label>
            <TextareaComponent content="This certificate is proudly presented to"/>
          <label className="margin-top-small">Enter the description</label>
            <TextareaComponent content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." />
          <label className="margin-top-small">Enter the footer line</label>
            <TextareaComponent content="This is a TA Digital Internal Certification."/>
        </div>
      </div>
    );
  }
}

FormControlComponent.displayName = 'MoleculesFormControlComponent';

// Uncomment properties you need
// FormControlComponent.propTypes = {};
// FormControlComponent.defaultProps = {};

export default FormControlComponent;
