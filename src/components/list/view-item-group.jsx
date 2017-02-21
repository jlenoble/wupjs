import React from 'react';
import {EditItemButton, RemoveItemButton} from './item-buttons';
import GlyphButtonGroup from '../presentational/glyph-button-group';
import {itemPropType} from './proptypes';

import GlyphCheckbox from '../presentational/glyph-checkbox';

const ViewItemGroup = ({item}) => (
  <div className="col">
    <span className="row vertical-align">
      <GlyphCheckbox
        addClass="col toggle-selected"
        onChange={() => {}}
      />
      <GlyphCheckbox
        addClass="col toggle-scheduled"
        onChange={() => {}}
      />
      <span className="col">
        {item.title}
      </span>
      <GlyphButtonGroup addClass="col justify-content-end">
        <EditItemButton item={item}/>
        <RemoveItemButton item={item}/>
      </GlyphButtonGroup>
    </span>
  </div>
);

ViewItemGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default ViewItemGroup;
