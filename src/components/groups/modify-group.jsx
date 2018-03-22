import React from 'react';
import {updateItem, uiActions} from '../../actions';
import {GlyphInputText} from 'wupjs-glyph-input-text';
import {dispatch} from '../../server/store';

const {unfocusCurrentItem} = uiActions;

const ModifyGroup = ({item}) => (
  <GlyphInputText
    glyph="save"
    autoFocus
    inhibitBlurOnSubmit
    defaultValue={item.title}
    onBlur={() => dispatch(unfocusCurrentItem())}
    onSubmit={e => {
      const title = e.target.value.trim();
      if (!title) {
        return;
      }
      dispatch(unfocusCurrentItem());
      dispatch(updateItem({
        title,
        _id: item._id,
      }, item));
    }}
  />
);

export default ModifyGroup;
