import React from 'react';
import ViewItemGroup from './view-item-group';
import {ModifyItemInputGroup} from './item-input-groups';
import {itemPropType} from './proptypes';
import {EditItemButton, RemoveItemButton} from './item-buttons';
import {SelectItemCheckbox, ScheduleItemCkeckbox} from './item-checkboxes';

const Item = ({item}) => (
  <li className="list-group-item row">
    {
      item.isBeingEdited ?
        <ModifyItemInputGroup item={item}/> :
        <ViewItemGroup
          item={item}
          ui={{
            buttons: [EditItemButton, RemoveItemButton],
            checkboxes: [SelectItemCheckbox, ScheduleItemCkeckbox],
          }}
        />
    }
  </li>
);

Item.propTypes = {
  item: itemPropType.isRequired,
};

export default Item;
