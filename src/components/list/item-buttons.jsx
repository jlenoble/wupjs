import React from 'react';
import ActionGlyphButton from '../container/action-glyph-button';
import {editItem, deleteItem, unfocusCurrentItem} from '../../actions';
import {itemPropType} from './proptypes';

const makeItemButton = (applyToItem, glyphicon) => {
  const ItemButton = ({item}) => (
    <ActionGlyphButton
      handleClick={dispatch => {
        dispatch(unfocusCurrentItem());
        dispatch(applyToItem(item));
      }}
      glyphicon={glyphicon}
    />
  );

  ItemButton.propTypes = {
    item: itemPropType.isRequired,
  };

  return ItemButton;
};

export default makeItemButton;

const EditItemButton = makeItemButton(editItem, 'pencil');
const RemoveItemButton = makeItemButton(deleteItem, 'trash');

export {EditItemButton, RemoveItemButton};
