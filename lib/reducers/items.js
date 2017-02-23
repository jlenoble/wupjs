'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.items = items;

var _actions = require('../actions');

function items() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    items: []
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions.REQUEST_ITEMS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case _actions.RECEIVE_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });

    case _actions.CREATE_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        items: state.items.concat(Object.assign({
          _id: action._id
        }, action.item))
      });

    case _actions.CREATE_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.map(function (item) {
          return item._id !== action._id ? item : action.item;
        })
      });

    case _actions.CREATE_ITEM_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.filter(function (item) {
          return item._id !== action._id;
        })
      });

    case _actions.DELETE_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        items: state.items.filter(function (item) {
          return item._id !== action._id;
        })
      });

    case _actions.DELETE_ITEM_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.concat(action.item)
      });

    case _actions.UPDATE_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        items: state.items.map(function (item) {
          return item._id !== action._id ? item : {
            title: action.title,
            _id: item._id
          };
        })
      });

    case _actions.UPDATE_ITEM_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.map(function (item) {
          return item._id !== action._id ? item : {
            title: action.title,
            _id: item._id
          };
        })
      });

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