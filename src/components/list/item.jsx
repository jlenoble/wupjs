import React from 'react';
import ViewItemGroup from './view-item-group';
import {ModifyItemInputGroup} from './item-input-groups';
import {itemPropType, itemUiPropType, itemUiDefaultProps} from './proptypes';

const getGroup = (item, ui) => {
  return item.isBeingEdited ?
    <ModifyItemInputGroup item={item}/> :
    <ViewItemGroup
      item={item}
      ui={ui}
    />;
};

const Item = ({item, ui, addClass}) => (
  <span className={addClass}>
    {getGroup(item, ui)}
  </span>
);

const ListItem = ({item, ui}) => (
  <li className="list-group-item row">
    {getGroup(item, ui)}
  </li>
);

Item.propTypes = ListItem.propTypes = {
  item: itemPropType.isRequired,
  ui: itemUiPropType,
};

Item.defaultProps = ListItem.defaultProps = itemUiDefaultProps;

export default Item;
export {ListItem};
