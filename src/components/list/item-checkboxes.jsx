import React from 'react';
import classnames from 'classnames';
import ActionGlyphCheckbox from '../container/action-glyph-checkbox';
import {unfocusCurrentItem} from '../../actions';
import {itemPropType} from './proptypes';

const makeItemCheckbox = ({className, makeHandleChange}) => {
  const ItemCheckbox = ({item, addClass}) => (
    <ActionGlyphCheckbox
      handleChange={makeHandleChange(item)}
      addClass={classnames(className, addClass)}
    />
  );

  ItemCheckbox.propTypes = {
    item: itemPropType.isRequired,
  };

  return ItemCheckbox;
};

export default makeItemCheckbox;

const SelectItemCheckbox = makeItemCheckbox({
  className: 'toggle-selected',
  makeHandleChange: item => (input, dispatch) => {
    dispatch(unfocusCurrentItem());
  },
});
const ScheduleItemCkeckbox = makeItemCheckbox({
  className: 'toggle-scheduled',
  makeHandleChange: item => (input, dispatch) => {
    dispatch(unfocusCurrentItem());
  },
});

export {SelectItemCheckbox, ScheduleItemCkeckbox};
