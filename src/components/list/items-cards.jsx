import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../../actions';
import CardBlock from './card-block';
import {AddItemInputGroup} from './item-input-groups';
import {EditItemButton, DeleteItemButton, UnselectItemButton,
  SaveCurrentSelectionButton} from './item-buttons';
import {SelectItemCheckbox, ScheduleItemCkeckbox} from './item-checkboxes';
import {EditSwitchButton, DeleteSwitchButton, SelectSwitchButton,
  ScheduleSwitchButton} from './switch-buttons';
import {setFuncName} from '../../helpers';
import CardHeader from './card-header';

const makeCard = ({mapStateToProps, headerUi, itemUi}) => {
  class Card extends Component {
    componentDidMount () {
      this.props.dispatch(fetchItemsIfNeeded());
    }

    render () {
      const {item, items, isFetching} = this.props;

      return (
        <div className="card">
          <CardHeader
            item={item}
            ui={headerUi}
          />
          <CardBlock
            items={items}
            isFetching={isFetching}
            ui={itemUi}
          />
        </div>
      );
    }
  }

  Card.propTypes = {
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(Card);
};

const CurrentSelectionCard = makeCard({
  headerUi: {
    noItemUi: [SaveCurrentSelectionButton],
  },
  itemUi: {
    buttons: [EditItemButton, UnselectItemButton],
    checkboxes: [],
  },
  mapStateToProps: state => {
    const props = Object.assign({}, state.items);
    const items = props.items;
    const selection = state.currentSelection.items;

    props.items = Object.keys(items).filter(_id => {
      return selection[_id];
    }).map(_id => Object.assign({
      isSelected: true,
    }, items[_id]));

    return props;
  },
});

const AllItemsCard = makeCard({
  headerUi: {
    InputComponent: AddItemInputGroup,
    switches: [SelectSwitchButton, ScheduleSwitchButton, EditSwitchButton,
      DeleteSwitchButton],
  },
  itemUi: {
    buttons: [EditItemButton, DeleteItemButton],
    checkboxes: [SelectItemCheckbox, ScheduleItemCkeckbox],
  },
  mapStateToProps: state => {
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
  },
});

const AllSelectionsCard = makeCard({
  mapStateToProps: state => {
    const props = Object.assign({}, state.items);
    const items = props.items;
    const selections = state.selections.items;

    props.items = Object.keys(selections).map(_id => {
      return items[selections[_id].itemId];
    });

    return props;
  },
});

setFuncName(CurrentSelectionCard, 'CurrentSelectionCard');
setFuncName(AllItemsCard, 'AllItemsCard');
setFuncName(AllSelectionsCard, 'AllSelectionsCard');

export {CurrentSelectionCard, AllItemsCard, AllSelectionsCard};
