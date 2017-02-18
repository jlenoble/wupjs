import React, {PropTypes} from 'react';
import RemoveItem from './remove-item';
import {deleteItem} from '../../actions';

const Item = ({title, _id}) => <li>
  {title}
  <RemoveItem doDelete={dispatch => {
    dispatch(deleteItem({title, _id}));
  }}/>
</li>;

Item.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
