import React from 'react';
import {itemPropType} from './proptypes';
import GlyphButtonGroup from '../presentational/glyph-button-group';
import {EditItemButton, RemoveItemButton} from './item-buttons';
import {SelectItemCheckbox, ScheduleItemCkeckbox} from './item-checkboxes';

const ViewItemGroup = ({item}) => (
  <div className="col">
    <span className="row vertical-align">
      <SelectItemCheckbox
        addClass="col toggle-selected"
        item={item}
      />
      <ScheduleItemCkeckbox
        addClass="col toggle-scheduled"
        item={item}
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
