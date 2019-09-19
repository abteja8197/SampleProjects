/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import LabelComponent from 'components/core/LabelComponent.js';

describe('LabelComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(LabelComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('label-component');
  });
});
