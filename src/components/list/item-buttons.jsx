import React, {PropTypes} from 'react';
import {GlyphButton} from 'wupjs-glyph-button';
import {editItem, deleteItem, unselectItem, startNamingSelection,
  unfocusCurrentItem} from '../../actions';
import {itemPropType} from './proptypes';
import {setFuncName} from '../../helpers';
import {dispatch} from '../../server/store';

const makeItemButton = (applyToItem, glyphicon, propTypes) => {
  const ItemButton = ({item}) => (
    <GlyphButton
      onClick={() => {
        dispatch(unfocusCurrentItem());
        dispatch(applyToItem(item));
      }}
      glyph={glyphicon}
    />
  );

  ItemButton.propTypes = propTypes || {
    item: itemPropType.isRequired,
    addClass: PropTypes.string,
  };

  return ItemButton;
};

export default makeItemButton;

const EditItemButton = makeItemButton(editItem, 'pencil');
const UnselectItemButton = makeItemButton(unselectItem, 'close');
const DeleteItemButton = makeItemButton(deleteItem, 'trash-o');
const SaveCurrentSelectionButton = makeItemButton(startNamingSelection, 'save',
  {item: itemPropType});

setFuncName(EditItemButton, 'EditItemButton');
setFuncName(UnselectItemButton, 'UnselectItemButton');
setFuncName(DeleteItemButton, 'DeleteItemButton');
setFuncName(SaveCurrentSelectionButton, 'SaveCurrentSelectionButton');

export {EditItemButton, UnselectItemButton, DeleteItemButton,
  SaveCurrentSelectionButton};
