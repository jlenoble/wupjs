'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _page = require('./components/layouts/page');

var _page2 = _interopRequireDefault(_page);

var _indexPage = require('./components/pages/index-page');

var _indexPage2 = _interopRequireDefault(_indexPage);

var _testPage = require('./components/pages/test-page');

var _testPage2 = _interopRequireDefault(_testPage);

var _pageNotFound = require('./components/pages/page-not-found');

var _pageNotFound2 = _interopRequireDefault(_pageNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _page2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _indexPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/test', component: _testPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _pageNotFound2.default })
);

exports.default = routes;
module.exports = exports['default'];