import React from 'react';
import {newSelection, unfocusCurrentItem} from '../../actions';
import {GlyphInputText} from 'wupjs-glyph-input-text';
import {dispatch} from '../../server/store';

const NameGroup = () => (
  <GlyphInputText
    placeholder="Name this selection"
    glyph="save"
    autoFocus
    autoClear
    onFocus={() => dispatch(unfocusCurrentItem())}
    onSubmit={e => {
      const title = e.target.value.trim();
      if (!title) {
        return;
      }
      dispatch(newSelection({title}));
    }}
  />
);

export default NameGroup;
