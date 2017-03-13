import React from 'react';
import {GlyphCheckbox} from 'wupjs-glyph-checkbox';
import {selectItem, unselectItem, unfocusCurrentItem} from '../../actions';
import {extendItemPropType} from './proptypes';
import {makeIsProp, setFuncName} from '../../helpers';
import {dispatch} from '../../server/store';

const getClassHintFromGlyph = glyphicon => {
  switch (glyphicon) {
  case 'trash-o':
    return 'deleted';

  case 'edit':
    return 'edited';

  case 'close':
    return 'removed';

  case 'clock-o':
    return 'scheduled';

  case 'check':
    return 'selected';

  case 'bomb':
    return 'shredded';

  default:
    return 'undefined';
  }
};

const makeItemCheckbox = ({glyphicon, handleCheck, handleUncheck}) => {
  const classHint = getClassHintFromGlyph(glyphicon);
  const isProp = makeIsProp(classHint);

  const ItemCheckbox = ({item}) => {
    return (
      <GlyphCheckbox
        onCheck={() => {
          handleCheck(item);
        }}
        onUncheck={() => {
          handleUncheck(item);
        }}
        glyph={glyphicon}
        checked={item[isProp]}
        itemId={item._id}
      />
    );
  };

  const requiredProps = {};
  requiredProps[isProp] = 'bool';
  ItemCheckbox.propTypes = {
    item: extendItemPropType(requiredProps).isRequired,
  };

  return ItemCheckbox;
};

export default makeItemCheckbox;

const SelectItemCheckbox = makeItemCheckbox({
  glyphicon: 'check',
  handleCheck: obj => {
    dispatch(unfocusCurrentItem());
    dispatch(selectItem(obj));
  },
  handleUncheck: obj => {
    dispatch(unfocusCurrentItem());
    dispatch(unselectItem(obj));
  },
});

const ScheduleItemCkeckbox = makeItemCheckbox({
  glyphicon: 'clock-o',
  handleCheck: () => {
    dispatch(unfocusCurrentItem());
  },
  handleUncheck: () => {
    dispatch(unfocusCurrentItem());
  },
});

setFuncName(SelectItemCheckbox, 'SelectItemCheckbox');
setFuncName(ScheduleItemCkeckbox, 'ScheduleItemCkeckbox');

export {SelectItemCheckbox, ScheduleItemCkeckbox};
