'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger2.default)();

exports.default = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(logger), (0, _redux.applyMiddleware)(_reduxThunk2.default));
module.exports = exports['default'];