import React, {PropTypes} from 'react';
import ActionGlyphButton from '../container/action-glyph-button';
import {editItem, deleteItem, unselectItem,
  unfocusCurrentItem} from '../../actions';
import {itemPropType} from './proptypes';
import {setFuncName} from '../../helpers';

const makeItemButton = (applyToItem, glyphicon) => {
  const ItemButton = ({item, addClass}) => (
    <ActionGlyphButton
      handleClick={dispatch => {
        dispatch(unfocusCurrentItem());
        dispatch(applyToItem(item));
      }}
      glyphicon={glyphicon}
      addClass={addClass}
    />
  );

  ItemButton.propTypes = {
    item: itemPropType.isRequired,
    addClass: PropTypes.string,
  };

  return ItemButton;
};

export default makeItemButton;

const EditItemButton = makeItemButton(editItem, 'pencil');
const UnselectItemButton = makeItemButton(unselectItem, 'close');
const DeleteItemButton = makeItemButton(deleteItem, 'trash-o');
const SaveCurrentSelectionButton = makeItemButton(() => {}, 'save');

setFuncName(EditItemButton, 'EditItemButton');
setFuncName(UnselectItemButton, 'UnselectItemButton');
setFuncName(DeleteItemButton, 'DeleteItemButton');
setFuncName(SaveCurrentSelectionButton, 'SaveCurrentSelectionButton');

export {EditItemButton, UnselectItemButton, DeleteItemButton,
  SaveCurrentSelectionButton};
