import {fetchActions, createActions, updateActions, deleteActions} from '../db';
import {uiActions} from '../ui';
import {updateSelection} from './selections';
import {getItemFromSelection} from '../../components/cards/helpers';

const _fetchItem = fetchActions.fetchItemIfNeeded;
const _fetchItems = fetchActions.fetchItemsIfNeeded;
const _newItem = createActions.newItem;
const _updateItem = updateActions.updateItem;
const _deleteItem = deleteActions.deleteItem;

const deleteSelection = deleteActions.deleteSelection;

const editSelection = uiActions.editSelection;
const unselectItem = uiActions.unselectItem;

export function fetchItemIfNeeded (item, reload) {
  return _fetchItem(item, reload);
}

export function fetchItemsIfNeeded (reload) {
  return _fetchItems(reload);
}

export function newItem (item, fail) {
  return _newItem(item, fail);
}

export function updateItem (item, previousItem) {
  return _updateItem(item, previousItem);
}

export function deleteItem (item) {
  return async (dispatch, getState) => {
    const selections = getState().selections.items;
    const _id = item._id;
    const selection0 = selections[getState().currentSelection.selectionId];

    for (let key of Object.keys(selections)) {
      const selection = selections[key];
      const {itemId, items} = selection;

      if (itemId === _id) {
        await dispatch(deleteSelection(selections[key]));
      } else if (items.indexOf(_id) !== -1) {
        const _item = getItemFromSelection(getState(), selection);
        _item.selectionId = selection._id;
        await dispatch(editSelection(_item));
        await dispatch(unselectItem(item));
        await dispatch(updateSelection(_item));
      }
    }

    if (selection0) {
      await dispatch(editSelection(getItemFromSelection(getState(),
        selection0)));
    }

    return dispatch(_deleteItem(item));
  };
}
