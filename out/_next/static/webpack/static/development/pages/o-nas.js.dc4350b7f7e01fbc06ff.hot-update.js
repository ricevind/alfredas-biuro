webpackHotUpdate("static/development/pages/o-nas.js",{

/***/ "./components/navigation/NavLink.jsx":
/*!*******************************************!*\
  !*** ./components/navigation/NavLink.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/typography */ "./styles/typography.js");
/* harmony import */ var _utils_prefixHref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/prefixHref */ "./utils/prefixHref.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/colors */ "./styles/colors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/ricevind/WebstormProjects/alfredasbiuro/components/navigation/NavLink.jsx";







var navLinkStyles = new String("a.jsx-5682832{position:relative;-webkit-text-decoration:none;text-decoration:none;line-height:".concat(_styles_typography__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], ";font-family:").concat(_styles_typography__WEBPACK_IMPORTED_MODULE_3__["fonts"].body, ";font-size:").concat(_styles_typography__WEBPACK_IMPORTED_MODULE_3__["fontSizes"].m, ";color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_5__["colors"].main.dark, ";}a.active-link.jsx-5682832:after{content:\"\";display:block;position:absolute;bottom:-0.3em;left:0;height:0.1em;width:100%;background-color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_5__["colors"].accent.dark, ";}"));
navLinkStyles.__hash = "5682832";
var NavLink = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(function (_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? "" : _ref$as,
      href = _ref.href,
      router = _ref.router,
      children = _ref.children;

  var isActive = function isActive() {
    return router.pathname === as;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: as,
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(navLinkStyles.__hash) + " " + (isActive() && "active-link" || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, router.pathname)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: navLinkStyles.__hash,
    __self: this
  }, navLinkStyles));
});
/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ })

})
//# sourceMappingURL=o-nas.js.dc4350b7f7e01fbc06ff.hot-update.js.map