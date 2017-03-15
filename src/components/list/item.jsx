import React from 'react';
import ViewItemGroup from '../groups/view-item-group';
import ModifyGroup from '../groups/modify-group';
import {itemPropType} from './proptypes';

const getGroup = (item, ui) => {
  return item.isBeingEdited ?
    <ModifyGroup item={item}/> :
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
  <li className="list-group-item">
    {getGroup(item, ui)}
  </li>
);

Item.propTypes = ListItem.propTypes = {
  item: itemPropType.isRequired,
};

export default Item;
export {ListItem};
