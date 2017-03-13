import React from 'react';
import {ListItem} from './item';
import {itemsPropType} from './proptypes';

const List = ({items, ui}) => (
  <ul className="list-group">
    {items.map(item =>
      <ListItem
        key={item._id}
        item={item}
        ui={ui}
      />
    )}
  </ul>
);

List.propTypes = {
  items: itemsPropType.isRequired,
};

export default List;
