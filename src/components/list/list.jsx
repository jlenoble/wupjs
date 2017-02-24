import React from 'react';
import Item from './item';
import {itemsPropType, itemUiPropType} from './proptypes';

const List = ({items, ui}) => (
  <ul className="list-group">
    {items.map(item =>
      <Item
        key={item._id}
        item={item}
        ui={ui}
      />
    )}
  </ul>
);

List.propTypes = {
  items: itemsPropType.isRequired,
  ui: itemUiPropType.isRequired,
};

export default List;
