'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetch;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _urlParse = require('url-parse');

var _urlParse2 = _interopRequireDefault(_urlParse);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetch(path, options) {
  var url = (0, _urlParse2.default)(path);

  if (!url.protocol) {
    url.set('protocol', _config.protocol);
  }

  if (!url.host) {
    url.set('host', _config.host);
  }

  if (!url.port) {
    url.set('port', _config.port);
  }

  return (0, _isomorphicFetch2.default)(url.toString(), options);
}
module.exports = exports['default'];