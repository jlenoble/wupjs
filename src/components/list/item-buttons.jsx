import React, {PropTypes} from 'react';
import ActionGlyphButton from '../container/action-glyph-button';
import {editItem, deleteItem, unfocusCurrentItem} from '../../actions';

const makeItemButton = (applyToItem, glyphiconType) => {
  const ItemButton = ({item}) => (
    <ActionGlyphButton
      handleClick={dispatch => {
        dispatch(unfocusCurrentItem());
        dispatch(applyToItem(item));
      }}
      glyphiconType={glyphiconType}
    />
  );

  ItemButton.propTypes = {
    item: PropTypes.object.isRequired,
  };

  return ItemButton;
};

export default makeItemButton;

const EditItemButton = makeItemButton(editItem, 'pencil');
const RemoveItemButton = makeItemButton(deleteItem, 'trash');

export {EditItemButton, RemoveItemButton};
