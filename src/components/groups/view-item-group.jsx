import React from 'react';
import PropTypes from 'prop-types';
import {itemPropType} from '../list/proptypes';
import InlineItem from '../layouts/inline-item';
import SelectGroup from './select-group';
import TitleGroup from './title-group';
import EditGroup from './edit-group';
import DeleteGroup from './delete-group';
import RemoveGroup from './remove-group';

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
