'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selections = selections;

var _actions = require('../actions');

function selections() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    items: {}
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions.REQUEST_SELECTIONS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case _actions.RECEIVE_SELECTIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.reduce(function (obj, item) {
          obj[item._id] = item; // eslint-disable-line no-param-reassign
          return obj;
        }, {})
      });

    case _actions.RECEIVE_SELECTIONS_ERROR:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}