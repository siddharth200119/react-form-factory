"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Field(props) {
  var data = props.data;
  switch (data.type) {
    case "text":
      return /*#__PURE__*/_react["default"].createElement("input", {
        type: data.type,
        value: data.value,
        name: data.name,
        onChange: props.updateVal
      });
  }
}
var _default = exports["default"] = Field;