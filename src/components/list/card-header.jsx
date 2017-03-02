import React, {Component} from 'react';
import Item from './item';
import {itemPropType} from './proptypes';
import {NameSelectionInputGroup} from './item-input-groups';

class CardHeader extends Component {
  renderUiSwitches () {
    const {ui = {}} = this.props;
    const {switches} = ui;
    return switches && switches.map((Component, i) => <Component
      key={'switch-' + i}
    />);
  }

  renderNoItemUi () {
    const {item = {}, ui = {}} = this.props;
    const {noItemUi} = ui;
    return !item._id && !item.isBeingNamed && noItemUi &&
      noItemUi.map((Component, i) => <Component
        key={'button-' + i}
      />);
  }

  renderItem () {
    const {item = {}, ui = {}, addClass} = this.props;
    const {itemUi} = ui;

    return item._id && <Item
      item={item}
      ui={itemUi}
      addClass={addClass}
    />;
  }

  renderInput () {
    const {item = {}, ui = {}} = this.props;
    const {InputComponent} = ui;
    return (InputComponent && <InputComponent/>) ||
      (item.isBeingNamed && <NameSelectionInputGroup/>);
  }

  render () {
    return (
      <div className="card-header">
        {this.renderUiSwitches()}
        {this.renderItem()}
        {this.renderNoItemUi()}
        {this.renderInput()}
      </div>
    );
  }
}

CardHeader.propTypes = {
  item: itemPropType,
};

export default CardHeader;
