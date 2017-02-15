import React, {PropTypes} from 'react';
import Item from './item';

const List = ({items, onItemClick}) => <ul>
  {items.map(item =>
    <Item
      key={item.id}
      {...item}
      onClick={() => onItemClick(item.id)}
    />
  )}
</ul>;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default List;
