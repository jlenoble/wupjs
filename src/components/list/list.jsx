import React, {PropTypes} from 'react';
import Item from './item';

const List = ({items}) => <ul className="list-group">
  {items.map(item =>
    <Item
      key={item._id}
      {...item}
    />
  )}
</ul>;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default List;
