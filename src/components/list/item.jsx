import React from 'react';
import ViewItemGroup from './view-item-group';
import {ModifyItemInputGroup} from './item-input-groups';
import {itemPropType} from './proptypes';

const Item = ({item, isBeingEdited}) => (
  <li className="list-group-item row">
    {
      isBeingEdited ?
        <ModifyItemInputGroup item={item}/> :
        <ViewItemGroup item={item}/>
    }
  </li>
);

Item.propTypes = {
  item: itemPropType.isRequired,
};

export default Item;
