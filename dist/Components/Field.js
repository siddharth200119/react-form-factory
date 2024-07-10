"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Field.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Field(props) {
  var data = props.data;
  var renderError = function renderError(error) {
    return error ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "form__error"
    }, data.errorMessage) : null;
  };
  switch (data.type) {
    case "text":
    case "email":
    case "password":
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "form__group field"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: data.type,
        id: data.name,
        disabled: data.disabled,
        value: data.value,
        name: data.name,
        onChange: props.updateVal,
        placeholder: data.placeholder,
        className: "form__field",
        required: true
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: data.name,
        className: "form__label"
      }, data.label), renderError(data.error));
    case "number":
    case "datetime-local":
    case "date":
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "form__group field"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: data.type,
        id: data.name,
        disabled: data.disabled,
        value: data.value,
        name: data.name,
        onChange: props.updateVal,
        placeholder: data.placeholder,
        min: data.minValue,
        max: data.maxValue,
        step: data.stepSize,
        className: "form__field--date",
        required: true
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: data.name,
        className: "form__label"
      }, data.label), renderError(data.error));
    case "textarea":
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "form__group field"
      }, /*#__PURE__*/_react["default"].createElement("textarea", {
        id: data.name,
        value: data.value,
        disabled: data.disabled,
        name: data.name,
        rows: data.rows,
        cols: data.cols,
        onChange: props.updateVal,
        className: "form__field",
        required: true
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: data.name,
        className: "form__label"
      }, data.label), renderError(data.error));
    case "file":
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "form__group field"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: data.type,
        id: data.name,
        disabled: data.disabled,
        name: data.name,
        accept: data.accept,
        multiple: data.multiple ? true : undefined,
        required: true
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: data.name,
        className: "form__label"
      }, data.label), renderError(data.error));
    case "dropdown":
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "form__group field"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        id: data.name,
        name: data.name,
        value: data.value,
        onChange: props.updateVal,
        disabled: data.disabled,
        className: "form__field",
        required: true
      }, data.options.map(function (option, index) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: index,
          disabled: option.disabled,
          value: option.value
        }, option.label);
      })), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: data.name,
        className: "form__label"
      }, data.label), renderError(data.error));
    case "radio":
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "form__group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "form__label--inline"
      }, data.label), data.options.map(function (option, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index,
          className: "form__radio-group"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "radio",
          id: "".concat(data.name, "_").concat(option.value),
          name: data.name,
          disabled: option.disabled,
          value: option.value,
          checked: data.value === option.value,
          onChange: props.updateVal,
          className: "form__radio",
          required: true
        }), /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "".concat(data.name, "_").concat(option.value),
          className: "form__label--inline"
        }, option.label));
      }), renderError(data.error));
    case "checkbox":
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "form__group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "form__label--inline"
      }, data.label), data.options.map(function (option, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index,
          className: "form__checkbox-group"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "checkbox",
          id: "".concat(data.name, "_").concat(option.value),
          name: data.name,
          disabled: option.disabled,
          value: option.value,
          checked: data.checkedValues.includes(option.value),
          onChange: function onChange(e) {
            var index = data.checkedValues.indexOf(option.value);
            if (index === -1) {
              data.checkedValues.push(option.value);
            } else {
              data.checkedValues.splice(index, 1);
            }
            props.updateVal(e, option.value);
          },
          className: "form__checkbox",
          required: true
        }), /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "".concat(data.name, "_").concat(option.value),
          className: "form__label--inline"
        }, option.label));
      }), renderError(data.error));
    default:
      return null;
  }
}
var _default = exports["default"] = Field;