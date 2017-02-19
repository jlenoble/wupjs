import React, {PropTypes} from 'react';
import ActionGlyphButton from '../container/action-glyph-button';
import {deleteItem, unfocusCurrentItem} from '../../actions';

const RemoveItem = ({item}) => (
  <ActionGlyphButton
    handleClick={dispatch => {
      dispatch(unfocusCurrentItem());
      dispatch(deleteItem(item));
    }}
    glyphiconType="trash"
  />
);

RemoveItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RemoveItem;
