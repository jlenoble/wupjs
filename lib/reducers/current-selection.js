'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentSelection = currentSelection;

var _actions = require('../actions');

function currentSelection() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isBeingNamed: false,
    items: {}
  };
  var action = arguments[1];

  var _id = action.item ? action.item._id : '';
  var items = {};

  switch (action.type) {
    case _actions.SELECT_ITEM:
      if (state.items[_id]) {
        return state;
      }
      items[_id] = action.item;
      return {
        items: Object.assign({}, state.items, items)
      };

    case _actions.UNSELECT_ITEM:
      if (!state.items[_id]) {
        return state;
      }
      Object.assign(items, state.items);
      delete items[_id];
      return { items: items };

    case _actions.START_NAMING_SELECTION:
      return Object.assign({}, state, {
        isBeingNamed: true
      });

    case _actions.STOP_NAMING_SELECTION:
      return Object.assign({}, state, {
        isBeingNamed: false
      });

    case _actions.DISPLAY_SELECTION_NAME:
      return Object.assign({}, state, {
        isBeingNamed: false,
        item: Object.assign({}, action.item)
      });

    default:
      return state;
  }
}