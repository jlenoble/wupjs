import React from 'react';
import classnames from 'classnames';
import ActionGlyphCheckbox from '../container/action-glyph-checkbox';
import {selectItem, unselectItem, unfocusCurrentItem} from '../../actions';
import {itemWithRequiredProps} from './proptypes';
import makeIsProp from '../../helpers/make-is-prop';

const makeItemCheckbox = ({classHint, makeHandleChange}) => {
  const isProp = makeIsProp(classHint);

  const ItemCheckbox = ({item, addClass}) => (
    <ActionGlyphCheckbox
      handleChange={makeHandleChange(item)}
      addClass={classnames('toggle-' + classHint, addClass)}
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
  classHint: 'selected',
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
  classHint: 'scheduled',
  makeHandleChange: item => (input, dispatch) => {
    dispatch(unfocusCurrentItem());
  },
});

export {SelectItemCheckbox, ScheduleItemCkeckbox};
