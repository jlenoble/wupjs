import React from 'react';
import ActionGlyphCheckbox from '../container/action-glyph-checkbox';
import {selectItem, unselectItem} from '../../actions';
import {extendItemPropType} from './proptypes';
import {makeHandleChange, makeIsProp, setFuncName} from '../../helpers';

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

const makeItemCheckbox = ({glyphicon, makeHandleChange}) => {
  const classHint = getClassHintFromGlyph(glyphicon);
  const isProp = makeIsProp(classHint);

  const ItemCheckbox = ({item, addClass}) => (
    <ActionGlyphCheckbox
      handleChange={makeHandleChange(item)}
      addClass={addClass}
      glyphicon={glyphicon}
      checked={item[isProp]}
      itemId={item._id}
    />
  );

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
  makeHandleChange: makeHandleChange(selectItem, unselectItem),
});

const ScheduleItemCkeckbox = makeItemCheckbox({
  glyphicon: 'clock-o',
  makeHandleChange: item => (input, dispatch) => {
    dispatch(unfocusCurrentItem());
  },
});

setFuncName(SelectItemCheckbox, 'SelectItemCheckbox');
setFuncName(ScheduleItemCkeckbox, 'ScheduleItemCkeckbox');

export {SelectItemCheckbox, ScheduleItemCkeckbox};
