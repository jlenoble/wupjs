'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selection = undefined;

var _mongoose = require('./mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectionSchema = new _mongoose2.default.Schema({
  itemId: String,
  items: Array
});

var Selection = exports.Selection = _mongoose2.default.model('Selection', selectionSchema);