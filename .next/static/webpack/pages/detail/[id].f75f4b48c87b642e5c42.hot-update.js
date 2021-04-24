webpackHotUpdate_N_E("pages/detail/[id]",{

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TablePokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TablePokemon */ "./components/TablePokemon.js");
/* harmony import */ var _components_ArrowButtoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ArrowButtoms */ "./components/ArrowButtoms.js");
/* harmony import */ var _utils_getPokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getPokemon */ "./utils/getPokemon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Users\\gonza\\Desktop\\react-next\\pages\\detail\\[id].js",
    _s = $RefreshSig$();






function Detail(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props),
      pokemon = _useState[0],
      setPokemon = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ArrowButtoms__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TablePokemon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: pokemon.name,
      id: pokemon.id,
      weight: pokemon.weight,
      height: pokemon.height,
      types: pokemon.types,
      abilities: pokemon.abilities
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_s(Detail, "/DlUD0QHu9GsvvZ4lEHbTYL2HCs=");

_c = Detail;

Detail.getInitialProps = function (context) {
  var query = context.query;
  var id = query.id;
  var pokemon = Object(_utils_getPokemon__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
  return pokemon;
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

var _c;

$RefreshReg$(_c, "Detail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsLy5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJwcm9wcyIsInVzZVN0YXRlIiwicG9rZW1vbiIsInNldFBva2Vtb24iLCJuYW1lIiwiaWQiLCJ3ZWlnaHQiLCJoZWlnaHQiLCJ0eXBlcyIsImFiaWxpdGllcyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsImdldFBva2Vtb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBc0I7QUFBQTs7QUFBQSxrQkFFVUMsc0RBQVEsQ0FBQ0QsS0FBRCxDQUZsQjtBQUFBLE1BRWJFLE9BRmE7QUFBQSxNQUVKQyxVQUZJOztBQUlwQixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFFRCxPQUFPLENBQUNFLElBRGhCO0FBRUUsUUFBRSxFQUFFRixPQUFPLENBQUNHLEVBRmQ7QUFHRSxZQUFNLEVBQUVILE9BQU8sQ0FBQ0ksTUFIbEI7QUFJRSxZQUFNLEVBQUVKLE9BQU8sQ0FBQ0ssTUFKbEI7QUFLRSxXQUFLLEVBQUVMLE9BQU8sQ0FBQ00sS0FMakI7QUFNRSxlQUFTLEVBQUVOLE9BQU8sQ0FBQ087QUFOckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBakJRVixNOztLQUFBQSxNOztBQW1CVEEsTUFBTSxDQUFDVyxlQUFQLEdBQXlCLFVBQUNDLE9BQUQsRUFBVztBQUFBLE1BQzdCQyxLQUQ2QixHQUNwQkQsT0FEb0IsQ0FDN0JDLEtBRDZCO0FBQUEsTUFFN0JQLEVBRjZCLEdBRXZCTyxLQUZ1QixDQUU3QlAsRUFGNkI7QUFHbEMsTUFBSUgsT0FBTyxHQUFHVyxpRUFBVSxDQUFDUixFQUFELENBQXhCO0FBQ0EsU0FBT0gsT0FBUDtBQUNELENBTEQ7O0FBUWVILHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9baWRdLmY3NWY0YjQ4Yzg3YjY0MmU1YzQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFibGVQb2tlbW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlUG9rZW1vblwiO1xyXG5pbXBvcnQgQXJyb3dCdXR0b21zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Fycm93QnV0dG9tc1wiXHJcbmltcG9ydCBnZXRQb2tlbW9uIGZyb20gXCIuLi8uLi91dGlscy9nZXRQb2tlbW9uXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsKHByb3BzKXtcclxuXHJcbiAgY29uc3QgW3Bva2Vtb24sIHNldFBva2Vtb25dID0gdXNlU3RhdGUocHJvcHMpXHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxBcnJvd0J1dHRvbXMgLz5cclxuICAgICAgPFRhYmxlUG9rZW1vblxyXG4gICAgICAgIG5hbWU9e3Bva2Vtb24ubmFtZX1cclxuICAgICAgICBpZD17cG9rZW1vbi5pZH1cclxuICAgICAgICB3ZWlnaHQ9e3Bva2Vtb24ud2VpZ2h0fVxyXG4gICAgICAgIGhlaWdodD17cG9rZW1vbi5oZWlnaHR9XHJcbiAgICAgICAgdHlwZXM9e3Bva2Vtb24udHlwZXN9XHJcbiAgICAgICAgYWJpbGl0aWVzPXtwb2tlbW9uLmFiaWxpdGllc30gXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSAoY29udGV4dCk9PntcclxuICBsZXQge3F1ZXJ5fSA9IGNvbnRleHQ7XHJcbiAgbGV0IHtpZH0gPSBxdWVyeTtcclxuICBsZXQgcG9rZW1vbiA9IGdldFBva2Vtb24oaWQpO1xyXG4gIHJldHVybiBwb2tlbW9uXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==