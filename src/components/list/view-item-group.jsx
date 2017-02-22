import React from 'react';
import {itemPropType} from './proptypes';
import GlyphButtonGroup from '../presentational/glyph-button-group';
import {EditItemButton, RemoveItemButton} from './item-buttons';
import {SelectItemCheckbox, ScheduleItemCkeckbox} from './item-checkboxes';

const ViewItemGroup = ({item}) => {
  const _item = Object.assign({
    isSelected: false,
    isScheduled: false,
  }, item);

  return (
    <div className="col">
      <span className="row vertical-align">
        <SelectItemCheckbox
          addClass="col"
          item={_item}
        />
        <ScheduleItemCkeckbox
          addClass="col"
          item={_item}
        />
        <span className="col">
          {_item.title}
        </span>
        <GlyphButtonGroup addClass="col justify-content-end">
          <EditItemButton item={_item}/>
          <RemoveItemButton item={_item}/>
        </GlyphButtonGroup>
      </span>
    </div>
  );
};

ViewItemGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default ViewItemGroup;
