import React from 'react';
import {newItem, unfocusCurrentItem} from '../../actions';
import {GlyphInputText} from 'wupjs-glyph-input-text';
import {dispatch} from '../../server/store';

const AddGroup = () => (
  <GlyphInputText
    placeholder="Enter an item"
    glyph="plus"
    autoFocus
    autoClear
    onFocus={() => dispatch(unfocusCurrentItem())}
    onSubmit={e => {
      const value = e.target.value.trim();
      if (!value) {
        return;
      }
      dispatch(newItem(value));
    }}
  />
);

export default AddGroup;
