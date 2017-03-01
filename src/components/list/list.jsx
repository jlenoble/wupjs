import React from 'react';
import {ListItem} from './item';
import {itemsPropType, itemUiPropType, itemUiDefaultProps} from './proptypes';

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
  ui: itemUiPropType,
};

List.defaultProps = itemUiDefaultProps;

export default List;
