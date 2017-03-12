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

const makeItemCheckbox = ({glyphicon, handleChange}) => {
  const classHint = getClassHintFromGlyph(glyphicon);
  const isProp = makeIsProp(classHint);

  const ItemCheckbox = ({item}) => {
    let inputNode;

    return (
      <GlyphCheckbox
        onChange={e => {
          handleChange(item, inputNode);
        }}
        glyph={glyphicon}
        exposeInputNode={node => {
          inputNode = node;
        }}
        defaultChecked={item[isProp]}
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
  handleChange: (obj, input) => {
    dispatch(unfocusCurrentItem());

    if (input.checked) {
      dispatch(selectItem(obj));
    } else {
      dispatch(unselectItem(obj));
    }
  },
});

const ScheduleItemCkeckbox = makeItemCheckbox({
  glyphicon: 'clock-o',
  handleChange: (item, input) => {
    dispatch(unfocusCurrentItem());
  },
});

setFuncName(SelectItemCheckbox, 'SelectItemCheckbox');
setFuncName(ScheduleItemCkeckbox, 'ScheduleItemCkeckbox');

export {SelectItemCheckbox, ScheduleItemCkeckbox};
