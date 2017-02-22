import React from 'react';
import classnames from 'classnames';
import ActionGlyphCheckbox from '../container/action-glyph-checkbox';
import {unfocusCurrentItem} from '../../actions';
import {itemPropType} from './proptypes';

const makeItemCheckbox = className => {
  const ItemCheckbox = ({item, addClass}) => (
    <ActionGlyphCheckbox
      handleChange={dispatch => {
        dispatch(unfocusCurrentItem());
      }}
      addClass={classnames(className, addClass)}
    />
  );

  ItemCheckbox.propTypes = {
    item: itemPropType.isRequired,
  };

  return ItemCheckbox;
};

export default makeItemCheckbox;

const SelectItemCheckbox = makeItemCheckbox('toggle-selected');
const ScheduleItemCkeckbox = makeItemCheckbox('toggle-scheduled');

export {SelectItemCheckbox, ScheduleItemCkeckbox};
