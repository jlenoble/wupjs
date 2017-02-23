'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentSelection = currentSelection;

var _actions = require('../actions');

function currentSelection() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
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

    default:
      return state;
  }
}