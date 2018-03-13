import React from 'react';
import {newItem, uiActions} from '../../actions';
import {GlyphInputText} from 'wupjs-glyph-input-text';
import {dispatch} from '../../server/store';

const {unfocusCurrentItem} = uiActions;

const AddItemGroup = () => (
  <GlyphInputText
    placeholder="Enter an item"
    glyph="plus"
    autoFocus
    autoClear
    onFocus={() => dispatch(unfocusCurrentItem())}
    onSubmit={e => {
      const title = e.target.value.trim();
      if (!title) {
        return;
      }
      dispatch(newItem({title}));
    }}
  />
);

export default AddItemGroup;
