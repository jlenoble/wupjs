import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../../actions';
import CardBlock from './card-block';
import {AddItemInputGroup} from './item-input-groups';
import ButtonGroup from '../presentational/button-group';
import {EditItemButton, DeleteItemButton} from './item-buttons';
import {SelectItemCheckbox, ScheduleItemCkeckbox} from './item-checkboxes';
import {EditSwitchButton, DeleteSwitchButton, SelectSwitchButton,
  ScheduleSwitchButton} from './switch-buttons';

class Card extends Component {
  componentDidMount () {
    this.props.dispatch(fetchItemsIfNeeded());
  }

  render () {
    const {items, isFetching} = this.props;

    return (
      <div className="card">
        <div className="card-header">
          <ButtonGroup>
            <SelectSwitchButton/>
            <ScheduleSwitchButton/>
            <EditSwitchButton/>
            <DeleteSwitchButton/>
          </ButtonGroup>
          <AddItemInputGroup/>
        </div>
        <CardBlock
          items={items}
          isFetching={isFetching}
          ui={{
            buttons: [EditItemButton, DeleteItemButton],
            checkboxes: [SelectItemCheckbox, ScheduleItemCkeckbox],
          }}
        />
      </div>
    );
  }
}

Card.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps (state) {
  const props = Object.assign({}, state.items);
  const items = props.items;

  const {_id, isBeingEdited} = state.currentItem;
  const selection = state.currentSelection.items;

  props.items = Object.keys(items).map(key => {
    const item = items[key];
    return Object.assign({
      isBeingEdited: isBeingEdited && item._id === _id,
      isSelected: selection[item._id] ? true : false,
    }, item);
  });

  return props;
}

export default connect(mapStateToProps)(Card);
