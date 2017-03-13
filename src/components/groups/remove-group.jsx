import React from 'react';
import {itemPropType} from '../list/proptypes';
import {GlyphButtonGroup} from 'wupjs-glyph-button';
import {editItem, unselectItem, unfocusCurrentItem} from '../../actions';
import {dispatch} from '../../server/store';

const RemoveGroup = ({item}) => {
  return (
    <GlyphButtonGroup
      glyphs={['pencil', 'close']}
      onClicks={{
        'pencil': () => {
          dispatch(unfocusCurrentItem());
          dispatch(editItem(item));
        },
        'close': () => {
          dispatch(unfocusCurrentItem());
          dispatch(unselectItem(item));
        },
      }}
    />
  );
};

RemoveGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default RemoveGroup;
