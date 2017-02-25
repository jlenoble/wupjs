import React from 'react';
import Item from './item';
import {itemPropType} from './proptypes';

const CardHeader = ({item, ui = {}, addClass}) => {
  const {switches, input, itemUi, noItemUi} = ui;

  return (
    <div className="card-header">
      {switches && switches.map((Component, i) => <Component
        key={'switch-' + i}
      />)}
      {item && <Item
        item={item}
        ui={itemUi}
        addClass={addClass}
      />}
      {!item && noItemUi && noItemUi.map((Component, i) => <Component
        key={'button-' + i}
      />)}
      {input && <input/>}
    </div>
  );
};

CardHeader.propTypes = {
  item: itemPropType,
};

export default CardHeader;
