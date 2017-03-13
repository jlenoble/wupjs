import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import {GlyphButton} from 'wupjs-glyph-button';

describe('Testing GlyphButton component', function () {
  it('contains a <button> and an <i>', function () {
    const wrapper = shallow(
      <GlyphButton/>
    );
    expect(wrapper.find('button')).to.have.length(1);
    expect(wrapper.find('i')).to.have.length(1);
  });

  it('can be clicked', function () {
    let isClicked = false;

    const wrapper = mount(
      <GlyphButton
        glyph="save"
        onClick={() => {
          isClicked = true;
        }}
      />
    );

    expect(isClicked).to.be.false;
    wrapper.find('button').simulate('click');
    expect(isClicked).to.be.true;
  });
});
