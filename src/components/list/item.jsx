import React, {PropTypes} from 'react';

const Item = ({title}) => <li>
  {title}
</li>;

Item.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
