import React, {PropTypes} from 'react';
import {EditItemButton, RemoveItemButton} from './item-buttons';
import GlyphButtonGroup from '../presentational/glyph-button-group';
import {itemPropType} from './proptypes';

const ViewItemGroup = ({item}) => (
  <span>
    {item.title}
    <GlyphButtonGroup>
      <EditItemButton item={item}/>
      <RemoveItemButton item={item}/>
    </GlyphButtonGroup>
  </span>
);

ViewItemGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default ViewItemGroup;
