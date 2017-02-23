import React from 'react';
import ActionGlyphCheckbox from '../container/action-glyph-checkbox';
import {selectItem, unselectItem, unfocusCurrentItem} from '../../actions';
import {itemWithRequiredProps} from './proptypes';
import makeIsProp from '../../helpers/make-is-prop';

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
    />
  );

  const requiredProps = {};
  requiredProps[isProp] = 'bool';
  ItemCheckbox.propTypes = {
    item: itemWithRequiredProps(requiredProps).isRequired,
  };

  return ItemCheckbox;
};

export default makeItemCheckbox;

const SelectItemCheckbox = makeItemCheckbox({
  glyphicon: 'check',
  makeHandleChange: item => (input, dispatch) => {
    dispatch(unfocusCurrentItem());

    if (input.checked) {
      dispatch(selectItem(item));
    } else {
      dispatch(unselectItem(item));
    }
  },
});

const ScheduleItemCkeckbox = makeItemCheckbox({
  glyphicon: 'clock-o',
  makeHandleChange: item => (input, dispatch) => {
    dispatch(unfocusCurrentItem());
  },
});

export {SelectItemCheckbox, ScheduleItemCkeckbox};
