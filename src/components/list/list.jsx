import React from 'react';
import Item from './item';
import {itemsPropType} from './proptypes';

const List = ({items}) => (
  <ul className="list-group">
    {items.map(item =>
      <Item
        key={item._id}
        item={item}
      />
    )}
  </ul>
);

List.propTypes = {
  items: itemsPropType.isRequired,
};

export default List;
