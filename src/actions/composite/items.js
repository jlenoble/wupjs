import {fetchActions, createActions, updateActions, deleteActions} from '../db';

const _fetchItem = fetchActions.fetchItemIfNeeded;
const _fetchItems = fetchActions.fetchItemsIfNeeded;
const _newItem = createActions.newItem;
const _updateItem = updateActions.updateItem;
const _deleteItem = deleteActions.deleteItem;

const deleteSelection = deleteActions.deleteSelection;

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

    for (let key of Object.keys(selections)) {
      const {itemId, items} = selections[key];

      if (itemId === _id) {
        await dispatch(deleteSelection(selections[key]));
      } else if (items.indexOf(_id) !== -1) {
        throw new Error('UNHANDLED UNSELECT');
      }
    }

    return dispatch(_deleteItem(item));
  };
}
