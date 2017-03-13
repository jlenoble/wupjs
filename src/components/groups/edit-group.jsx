import React from 'react';
import {itemPropType} from '../list/proptypes';
import {GlyphButtonGroup} from 'wupjs-glyph-button';
import {editItem, unfocusCurrentItem} from '../../actions';
import {dispatch} from '../../server/store';

const EditGroup = ({item}) => {
  return (
    <GlyphButtonGroup
      glyphs={['pencil']}
      onClicks={{
        'pencil': () => {
          dispatch(unfocusCurrentItem());
          dispatch(editItem(item));
        },
      }}
    />
  );
};

EditGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default EditGroup;
