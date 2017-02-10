import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import Wupjs from '../src/wupjs';

describe('Testing <Wupjs/>', function () {
  it(`Component <Wupjs/> says 'Hello!'`, function () {
    const component = TestUtils.renderIntoDocument(<Wupjs/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h1');
    expect(h1.textContent).to.equal('Hello!');
  });
});
