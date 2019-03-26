webpackHotUpdate("static/development/pages/cennik.js",{

/***/ "./components/navigation/NavLink.jsx":
/*!*******************************************!*\
  !*** ./components/navigation/NavLink.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/typography */ "./styles/typography.js");
/* harmony import */ var _utils_prefixHref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/prefixHref */ "./utils/prefixHref.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/colors */ "./styles/colors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/home/ricevind/WebstormProjects/alfredasbiuro/components/navigation/NavLink.jsx";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var navLinkStyles = new String("a.jsx-5682832{position:relative;-webkit-text-decoration:none;text-decoration:none;line-height:".concat(_styles_typography__WEBPACK_IMPORTED_MODULE_4__["lineHeight"], ";font-family:").concat(_styles_typography__WEBPACK_IMPORTED_MODULE_4__["fonts"].body, ";font-size:").concat(_styles_typography__WEBPACK_IMPORTED_MODULE_4__["fontSizes"].m, ";color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_6__["colors"].main.dark, ";}a.active-link.jsx-5682832:after{content:\"\";display:block;position:absolute;bottom:-0.3em;left:0;height:0.1em;width:100%;background-color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_6__["colors"].accent.dark, ";}"));
navLinkStyles.__hash = "5682832";
var NavLink = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(function (_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? "" : _ref$as,
      href = _ref.href,
      router = _ref.router,
      children = _ref.children;

  var isActive = function isActive() {
    return router.pathname === as;
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: Object(_utils_prefixHref__WEBPACK_IMPORTED_MODULE_5__["prefixHref"])(_templateObject(), href),
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-".concat(navLinkStyles.__hash) + " " + (isActive() && "active-link" || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: navLinkStyles.__hash,
    __self: this
  }, navLinkStyles));
});
/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ })

})
//# sourceMappingURL=cennik.js.ecb7bd4e05116b14e625.hot-update.js.map