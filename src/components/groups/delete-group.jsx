import React from 'react';
import {itemPropType} from '../list/proptypes';
import {GlyphButtonGroup} from 'wupjs-glyph-button';
import {deleteItem, uiActions} from '../../actions';
import {dispatch} from '../../server/store';

const {editItem, unfocusCurrentItem} = uiActions;

const DeleteGroup = ({item}) => {
  return (
    <GlyphButtonGroup
      glyphs={['pencil', 'trash-o']}
      onClicks={{
        'pencil': () => {
          dispatch(unfocusCurrentItem());
          dispatch(editItem(item));
        },
        'trash-o': () => {
          dispatch(unfocusCurrentItem());
          dispatch(deleteItem(item));
        },
      }}
    />
  );
};

DeleteGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default DeleteGroup;
