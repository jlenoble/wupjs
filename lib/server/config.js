'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var protocol = exports.protocol = 'http';
var host = exports.host = 'localhost';
var port = exports.port = 3000;
var db = exports.db = 'wup';

var mongoUri = exports.mongoUri = 'mongodb://' + host + '/' + db;