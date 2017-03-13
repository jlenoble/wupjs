import React from 'react';
import {itemPropType, itemUiPropType, itemUiDefaultProps} from './proptypes';
import ButtonGroup from '../presentational/button-group';
import InlineItem from '../layouts/inline-item';

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
    <InlineItem>
      <span>
        {checkboxComponents}
      </span>
      <span>
        {_item.title}
      </span>
      <ButtonGroup>
        {buttonComponents}
      </ButtonGroup>
    </InlineItem>
  );
};

ViewItemGroup.propTypes = {
  item: itemPropType.isRequired,
  ui: itemUiPropType,
};

ViewItemGroup.defaultProps = itemUiDefaultProps;

export default ViewItemGroup;
