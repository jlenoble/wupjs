import React, {PropTypes} from 'react';
import {GlyphButton} from 'wupjs-glyph-button';
import {startNamingSelection, unfocusCurrentItem} from '../../actions';
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

const SaveCurrentSelectionButton = makeItemButton(startNamingSelection, 'save',
  {item: itemPropType});

setFuncName(SaveCurrentSelectionButton, 'SaveCurrentSelectionButton');

export {SaveCurrentSelectionButton};
