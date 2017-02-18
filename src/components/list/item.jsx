import React, {PropTypes} from 'react';

const Item = ({title}) => <li>
  {title}
</li>;

Item.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Item;
