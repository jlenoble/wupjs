import React, {PropTypes} from 'react';
import Item from '../list/item';
import {itemPropType} from '../list/proptypes';
import AddGroup from '../groups/add-group';

const CardHeader = ({item, ui}) => {
  return (
    <div className="card-header">
      {item && <Item
        item={item}
        ui={ui.itemUi}
      />}
      {ui.add && <AddGroup/>}
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
