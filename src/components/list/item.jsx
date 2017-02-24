import React from 'react';
import ViewItemGroup from './view-item-group';
import {ModifyItemInputGroup} from './item-input-groups';
import {itemPropType, itemUiPropType, itemUiDefaultProps} from './proptypes';

const Item = ({item, ui}) => (
  <li className="list-group-item row">
    {
      item.isBeingEdited ?
        <ModifyItemInputGroup item={item}/> :
        <ViewItemGroup
          item={item}
          ui={ui}
        />
    }
  </li>
);

Item.propTypes = {
  item: itemPropType.isRequired,
  ui: itemUiPropType,
};

Item.defaultProps = itemUiDefaultProps;

export default Item;
