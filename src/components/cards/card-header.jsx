import React from 'react';
import PropTypes from 'prop-types';
import Item from '../list/item';
import {itemPropType} from '../list/proptypes';
import AddGroup from '../groups/add-group';
// import CreateGroup from '../groups/create-group';
// import NameGroup from '../groups/name-group';

const CardHeader = ({item, ui}) => {
  // {ui.create && <CreateGroup/>}
  // {ui.name && <NameGroup/>}
  return (
    <div className="card-header">
      {ui.title && <Item
        item={item}
        ui={ui.itemUi}
      />}
      {ui.createItem && <AddGroup/>}
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
