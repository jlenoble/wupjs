import React from 'react';
import {itemPropType} from '../list/proptypes';
import {GlyphButtonGroup} from 'wupjs-glyph-button';
import {deleteItem, uiActions} from '../../actions';
import {dispatch} from '../../server/store';
import {getSelectionFromItem, getItemMapFromSelection} from '../cards/helpers';

const {editSelection, unfocusCurrentItem} = uiActions;

const UpdateGroup = ({item}) => {
  return (
    <GlyphButtonGroup
      glyphs={['pencil', 'trash-o']}
      onClicks={{
        'pencil': () => {
          dispatch(unfocusCurrentItem());

          const selection = getSelectionFromItem(item);
          const items = getItemMapFromSelection(selection);
          dispatch(editSelection({...selection, item, items}));
        },
        'trash-o': () => {
          dispatch(unfocusCurrentItem());
          dispatch(deleteItem(item));
        },
      }}
    />
  );
};

UpdateGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default UpdateGroup;
