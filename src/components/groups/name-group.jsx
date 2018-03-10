import React from 'react';
import {newItem, unfocusCurrentItem, displaySelectionName,
  stopNamingSelection, newSelection} from '../../actions';
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
      const value = e.target.value.trim();
      if (!value) {
        return;
      }
      dispatch(newItem(value))
        .then(
          item => dispatch(displaySelectionName(item)),
          () => dispatch(stopNamingSelection())
        )
        .then(
          ({item}) => dispatch(newSelection(item))
        );
    }}
  />
);

export default NameGroup;
