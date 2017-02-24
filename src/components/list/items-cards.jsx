import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../../actions';
import CardBlock from './card-block';
import {AddItemInputGroup} from './item-input-groups';
import ButtonGroup from '../presentational/button-group';
import ActionGlyphButton from '../container/action-glyph-button';
import {EditItemButton, DeleteItemButton, UnselectItemButton}
  from './item-buttons';
import {SelectItemCheckbox, ScheduleItemCkeckbox} from './item-checkboxes';
import {EditSwitchButton, DeleteSwitchButton, SelectSwitchButton,
  ScheduleSwitchButton} from './switch-buttons';
import {setFuncName} from '../../helpers';

const makeCard = ({mapStateToProps, itemUi, headerContent}) => {
  class Card extends Component {
    componentDidMount () {
      this.props.dispatch(fetchItemsIfNeeded());
    }

    render () {
      const {items, isFetching} = this.props;

      return (
        <div className="card">
          <div className="card-header">
            {headerContent}
          </div>
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
  headerContent: (
    <ActionGlyphButton
      glyphicon="save"
      handleClick={dispatch => {
      }}
    />
  ),
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
  headerContent: [(
    <ButtonGroup key="1">
      <SelectSwitchButton/>
      <ScheduleSwitchButton/>
      <EditSwitchButton/>
      <DeleteSwitchButton/>
    </ButtonGroup>
  ), (<AddItemInputGroup key="2"/>)],
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
