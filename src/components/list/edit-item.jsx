import React, {PropTypes} from 'react';
import ActionGlyphButton from '../container/action-glyph-button';
import {editItem, unfocusCurrentItem} from '../../actions';

const EditItem = ({item}) => (
  <ActionGlyphButton
    handleClick={dispatch => {
      dispatch(unfocusCurrentItem());
      dispatch(editItem(item._id));
    }}
    glyphiconType="pencil"
  />
);

EditItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default EditItem;
