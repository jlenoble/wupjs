import React from 'react';
import {itemPropType} from '../list/proptypes';
import {GlyphCheckboxGroup} from 'wupjs-glyph-checkbox';
import {selectItem, unselectItem, unfocusCurrentItem} from '../../actions';
import {dispatch} from '../../server/store';

const SelectGroup = ({item}) => {
  return (
    <GlyphCheckboxGroup
      glyphs={['check']}
      onChecks={{
        check: () => {
          dispatch(unfocusCurrentItem());
          dispatch(selectItem(item));
        },
      }}
      onUnchecks={{
        check: () => {
          dispatch(unfocusCurrentItem());
          dispatch(unselectItem(item));
        },
      }}
      checked={{
        check: item.isSelected,
      }}
    />
  );
};

SelectGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default SelectGroup;
