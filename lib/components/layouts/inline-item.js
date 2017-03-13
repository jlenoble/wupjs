"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;

  var _children = _slicedToArray(children, 3),
      leftContent = _children[0],
      middleContent = _children[1],
      rightContent = _children[2];

  return _react2.default.createElement(
    "div",
    { className: "vertical-align grow" },
    _react2.default.createElement(
      "span",
      null,
      leftContent
    ),
    _react2.default.createElement(
      "span",
      { className: "grow" },
      middleContent
    ),
    _react2.default.createElement(
      "span",
      null,
      rightContent
    )
  );
};

module.exports = exports["default"];