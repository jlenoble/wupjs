import React from 'react';
import {itemPropType, itemUiPropType, itemUiDefaultProps} from './proptypes';
import ButtonGroup from '../presentational/button-group';

const makeButtonComponent = (Component, item, key) => (
  <Component
    item={item}
    key={key}
  />
);

const makeCheckboxComponent = (Component, item, key) => (
  <Component
    item={item}
    key={key}
  />
);

const makeButtonComponents = (Components, item) => Components
  .map((Component, i) => makeButtonComponent(Component, item, i));

const makeCheckboxComponents = (Components, item) => Components
  .map((Component, i) => makeCheckboxComponent(Component, item, i));

const ViewItemGroup = ({item, ui: {buttons, checkboxes}}) => {
  const _item = Object.assign({
    isSelected: false,
    isScheduled: false,
  }, item);

  const buttonComponents = makeButtonComponents(buttons, _item);
  const checkboxComponents = makeCheckboxComponents(checkboxes, _item);

  return (
    <div className="col">
      <span className="row vertical-align">
        {checkboxComponents}
        <span className="col">
          {_item.title}
        </span>
        <ButtonGroup addClass="col justify-content-end">
          {buttonComponents}
        </ButtonGroup>
      </span>
    </div>
  );
};

ViewItemGroup.propTypes = {
  item: itemPropType.isRequired,
  ui: itemUiPropType,
};

ViewItemGroup.defaultProps = itemUiDefaultProps;

export default ViewItemGroup;
