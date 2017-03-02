import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../../actions';
import CardBlock from './card-block';
import {AddItemInputGroup} from './item-input-groups';
import {EditItemButton, DeleteItemButton, UnselectItemButton,
  SaveCurrentSelectionButton} from './item-buttons';
import {SelectItemCheckbox, ScheduleItemCkeckbox} from './item-checkboxes';
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
    itemUi: {
      buttons: [EditItemButton],
      checkboxes: [],
    },
  },
  itemUi: {
    buttons: [EditItemButton, UnselectItemButton],
    checkboxes: [],
  },
  mapStateToProps: state => {
    const props = Object.assign({}, state.items);
    const items = props.items;
    const selection = state.currentSelection.items;
    const {_id, isBeingEdited, cardName} = state.currentItem;

    let item = Object.assign({}, state.currentSelection.item);
    if (item._id) {
      item = Object.assign({}, items[item._id]);
    }
    item.isBeingNamed = state.currentSelection.isBeingNamed;

    props.items = Object.keys(items).filter(key => {
      return selection[key];
    }).map(key => Object.assign({
      isBeingEdited: isBeingEdited && key === _id &&
        CurrentSelectionCard.name === cardName,
      isSelected: true,
      cardName: CurrentSelectionCard.name,
    }, items[key]));

    props.item = item;

    return props;
  },
});

const AllItemsCard = makeCard({
  headerUi: {
    InputComponent: AddItemInputGroup,
    switches: [],
  },
  itemUi: {
    buttons: [EditItemButton, DeleteItemButton],
    checkboxes: [SelectItemCheckbox, ScheduleItemCkeckbox],
  },
  mapStateToProps: state => {
    const props = Object.assign({}, state.items);
    const items = props.items;

    const {_id, isBeingEdited, cardName} = state.currentItem;
    const selection = state.currentSelection.items;

    props.items = Object.keys(items).map(key => {
      const item = items[key];
      return Object.assign({
        isBeingEdited: isBeingEdited && item._id === _id &&
          AllItemsCard.name === cardName,
        isSelected: selection[item._id] ? true : false,
        cardName: AllItemsCard.name,
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
