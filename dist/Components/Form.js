"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Field = _interopRequireDefault(require("./Field"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function FormBuilder(props) {
  var colors = props.colors ? props.colors : {
    primary: "#11998e",
    secondary: "#38ef7d",
    text: "#060606",
    border: "#9b9b9b"
  };
  (0, _react.useEffect)(function () {
    document.documentElement.style.setProperty('--primary', colors.primary);
    document.documentElement.style.setProperty('--secondary', colors.secondary);
    document.documentElement.style.setProperty('--text', colors.text);
    document.documentElement.style.setProperty('--border', colors.border);
  }, []);
  var gap = props.gap ? props.gap : "1rem";
  var gridColumns = props.gridColumns ? props.gridColumns : "2";

  //fields
  var fields = props.fields;
  var _useState = (0, _react.useState)(fields),
    _useState2 = _slicedToArray(_useState, 2),
    formFields = _useState2[0],
    setFormFields = _useState2[1];

  //process title
  var title;
  if (props.title !== undefined) {
    if (_typeof(props.title) === String) {
      title = {
        text: props.title,
        classes: "testing"
      };
    } else {
      title = props.title;
    }
  } else {
    title = {
      text: "Form",
      classes: "testing"
    };
  }

  //process submit btn
  var submit_btn;
  if (props.submit_btn !== undefined) {
    if (_typeof(props.submit_btn) === String) {
      submit_btn = {
        text: props.submit_btn,
        classes: "testing"
      };
    } else {
      submit_btn = props.submit_btn;
    }
  } else {
    submit_btn = {
      text: "Submit",
      classes: "testing"
    };
  }
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Data Submitted:', formFields);
  };
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormFields(function (prevFields) {
      return prevFields.map(function (field) {
        return field.name === name ? _objectSpread(_objectSpread({}, field), {}, {
          value: value
        }) : field;
      });
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: title.classes ? title.classes : null
  }, title.text), /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: "repeat(".concat(gridColumns, ", 1fr)"),
      gap: '1rem'
    }
  }, formFields.map(function (field, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      style: {
        gridColumn: "span ".concat(Math.min(field.gridSpan, gridColumns))
      }
    }, /*#__PURE__*/_react["default"].createElement(_Field["default"], {
      data: field,
      updateVal: handleChange
    }));
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: submit_btn.classes ? submit_btn.classes : null,
    onClick: handleSubmit
  }, submit_btn.text)));
}
var _default = exports["default"] = FormBuilder;