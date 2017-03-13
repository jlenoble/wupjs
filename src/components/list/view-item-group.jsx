import React, {PropTypes} from 'react';
import {itemPropType} from './proptypes';
import InlineItem from '../layouts/inline-item';
import SelectGroup from '../groups/select-group';
import TitleGroup from '../groups/title-group';
import EditGroup from '../groups/edit-group';
import DeleteGroup from '../groups/delete-group';
import RemoveGroup from '../groups/remove-group';

const ViewItemGroup = ({item, ui = {}}) => {
  return (
    <InlineItem>
      {ui.select && <SelectGroup item={item}/>}
      <TitleGroup item={item}/>
      {
        ui.edit && <EditGroup item={item}/> ||
        ui.delete && <DeleteGroup item={item}/> ||
        ui.remove && <RemoveGroup item={item}/>
      }
    </InlineItem>
  );
};

ViewItemGroup.propTypes = {
  item: itemPropType.isRequired,
  ui: PropTypes.object,
};

export default ViewItemGroup;
