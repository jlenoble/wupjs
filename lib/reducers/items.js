'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.items = items;

var _actions = require('../actions');

function items() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    items: {}
  };
  var action = arguments[1];

  var items = void 0;

  switch (action.type) {
    case _actions.REQUEST_ITEMS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case _actions.RECEIVE_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.reduce(function (obj, item) {
          obj[item._id] = item; // eslint-disable-line no-param-reassign
          return obj;
        }, {})
      });

    case _actions.CREATE_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        items: Object.assign({
          _id: action.item
        }, state.items)
      });

    case _actions.CREATE_ITEM_SUCCESS:
      items = Object.assign({}, state.items);
      delete items[action._id];
      items[action.item._id] = action.item;
      return {
        isFetching: false,
        items: items
      };

    case _actions.CREATE_ITEM_ERROR:
      items = Object.assign({}, state.items);
      delete items[action._id];
      return {
        isFetching: false,
        items: items
      };

    case _actions.DELETE_ITEM:
      items = Object.assign({}, state.items);
      delete items[action._id];
      return {
        isFetching: true,
        items: items
      };

    case _actions.DELETE_ITEM_ERROR:
      items = Object.assign({}, state.items);
      items[action.item._id] = action.item;
      return {
        isFetching: false,
        items: items
      };

    case _actions.UPDATE_ITEM:
      items = Object.assign({}, state.items);
      items[action.item._id] = action.item;
      return {
        isFetching: true,
        items: items
      };

    case _actions.UPDATE_ITEM_ERROR:
      items = Object.assign({}, state.items);
      items[action.item._id] = action.item;
      return {
        isFetching: false,
        items: items
      };

    case _actions.RECEIVE_ITEMS_ERROR:
    case _actions.UPDATE_ITEM_SUCCESS:
    case _actions.DELETE_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}