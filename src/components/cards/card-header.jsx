import React from 'react';
import PropTypes from 'prop-types';
import Item from '../list/item';
import {itemPropType} from '../list/proptypes';
import AddItemGroup from '../groups/add-item-group';
import NameSelectionGroup from '../groups/name-selection-group';

const CardHeader = ({item, ui}) => {
  return (
    <div className="card-header">
      {ui.title && <Item
        item={item}
        ui={ui.itemUi}
      />}
      {ui.createItem && <AddItemGroup/>}
      {ui.nameSelection && <NameSelectionGroup/>}
    </div>
  );
};

CardHeader.propTypes = {
  item: itemPropType,
  ui: PropTypes.object,
};

CardHeader.defaultProps = {
  ui: {},
};

export default CardHeader;
