'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();

app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, '../../../src/server/views'));

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.use(_express2.default.static(_path2.default.join(__dirname, '..')));
app.use(_express2.default.static(_path2.default.join(__dirname, '../..')));
app.use(_express2.default.static(_path2.default.join(__dirname, '../../../src')));
app.use(_express2.default.static(_path2.default.join(__dirname, '../../../node_modules')));

exports.default = app;
module.exports = exports['default'];