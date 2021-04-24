webpackHotUpdate_N_E("pages/detail/[id]",{

/***/ "./components/ArrowButtoms.js":
/*!************************************!*\
  !*** ./components/ArrowButtoms.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArrowButtoms; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Users\\gonza\\Desktop\\react-next\\components\\ArrowButtoms.js";

function ArrowButtoms(_ref) {
  var id = _ref.id;

  var leftLink = function leftLink() {
    var url = "/detail/".concat(id - 1);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-arrow",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "arrow",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "\\static\\images\\left.png",
            alt: "arrow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "return",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://cdn.onlinewebfonts.com/svg/img_519526.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "arrow",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "\\static\\images\\rigth.png",
            alt: "arrow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = ArrowButtoms;

var _c;

$RefreshReg$(_c, "ArrowButtoms");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ArrowButtoms__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: pokemon.id
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnJvd0J1dHRvbXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RldGFpbC8uanMiXSwibmFtZXMiOlsiQXJyb3dCdXR0b21zIiwiaWQiLCJsZWZ0TGluayIsInVybCIsIkRldGFpbCIsInByb3BzIiwidXNlU3RhdGUiLCJwb2tlbW9uIiwic2V0UG9rZW1vbiIsIm5hbWUiLCJ3ZWlnaHQiLCJoZWlnaHQiLCJ0eXBlcyIsImFiaWxpdGllcyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsImdldFBva2Vtb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFlBQVQsT0FBMkI7QUFBQSxNQUFKQyxFQUFJLFFBQUpBLEVBQUk7O0FBRXhDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBSUMsR0FBRyxxQkFBY0YsRUFBRSxHQUFDLENBQWpCLENBQVA7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyw0QkFBVDtBQUFtQyxlQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBV0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsNkJBQVQ7QUFBb0MsZUFBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBcUJEO0tBM0J1QkQsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ksTUFBVCxDQUFnQkMsS0FBaEIsRUFBc0I7QUFBQTs7QUFBQSxrQkFFVUMsc0RBQVEsQ0FBQ0QsS0FBRCxDQUZsQjtBQUFBLE1BRWJFLE9BRmE7QUFBQSxNQUVKQyxVQUZJOztBQUlwQixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdFQUFEO0FBQWMsUUFBRSxFQUFFRCxPQUFPLENBQUNOO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFFTSxPQUFPLENBQUNFLElBRGhCO0FBRUUsUUFBRSxFQUFFRixPQUFPLENBQUNOLEVBRmQ7QUFHRSxZQUFNLEVBQUVNLE9BQU8sQ0FBQ0csTUFIbEI7QUFJRSxZQUFNLEVBQUVILE9BQU8sQ0FBQ0ksTUFKbEI7QUFLRSxXQUFLLEVBQUVKLE9BQU8sQ0FBQ0ssS0FMakI7QUFNRSxlQUFTLEVBQUVMLE9BQU8sQ0FBQ007QUFOckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBakJRVCxNOztLQUFBQSxNOztBQW1CVEEsTUFBTSxDQUFDVSxlQUFQLEdBQXlCLFVBQUNDLE9BQUQsRUFBVztBQUFBLE1BQzdCQyxLQUQ2QixHQUNwQkQsT0FEb0IsQ0FDN0JDLEtBRDZCO0FBQUEsTUFFN0JmLEVBRjZCLEdBRXZCZSxLQUZ1QixDQUU3QmYsRUFGNkI7QUFHbEMsTUFBSU0sT0FBTyxHQUFHVSxpRUFBVSxDQUFDaEIsRUFBRCxDQUF4QjtBQUNBLFNBQU9NLE9BQVA7QUFDRCxDQUxEOztBQVFlSCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvW2lkXS5lNGVjYzgxNzJkNzU0MDIyNTIyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJyb3dCdXR0b21zKHtpZH0pe1xyXG4gIFxyXG4gIGNvbnN0IGxlZnRMaW5rID0gKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGAvZGV0YWlsLyR7aWQtMX1gXHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1hcnJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXFxzdGF0aWNcXGltYWdlc1xcbGVmdC5wbmdcIiBhbHQ9XCJhcnJvd1wiIC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXR1cm5cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2Nkbi5vbmxpbmV3ZWJmb250cy5jb20vc3ZnL2ltZ181MTk1MjYucG5nXCIgIC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJcXHN0YXRpY1xcaW1hZ2VzXFxyaWd0aC5wbmdcIiBhbHQ9XCJhcnJvd1wiIC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwiaW1wb3J0IFRhYmxlUG9rZW1vbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJsZVBva2Vtb25cIjtcclxuaW1wb3J0IEFycm93QnV0dG9tcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcnJvd0J1dHRvbXNcIlxyXG5pbXBvcnQgZ2V0UG9rZW1vbiBmcm9tIFwiLi4vLi4vdXRpbHMvZ2V0UG9rZW1vblwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIERldGFpbChwcm9wcyl7XHJcblxyXG4gIGNvbnN0IFtwb2tlbW9uLCBzZXRQb2tlbW9uXSA9IHVzZVN0YXRlKHByb3BzKVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXJyb3dCdXR0b21zIGlkPXtwb2tlbW9uLmlkfS8+XHJcbiAgICAgIDxUYWJsZVBva2Vtb25cclxuICAgICAgICBuYW1lPXtwb2tlbW9uLm5hbWV9XHJcbiAgICAgICAgaWQ9e3Bva2Vtb24uaWR9XHJcbiAgICAgICAgd2VpZ2h0PXtwb2tlbW9uLndlaWdodH1cclxuICAgICAgICBoZWlnaHQ9e3Bva2Vtb24uaGVpZ2h0fVxyXG4gICAgICAgIHR5cGVzPXtwb2tlbW9uLnR5cGVzfVxyXG4gICAgICAgIGFiaWxpdGllcz17cG9rZW1vbi5hYmlsaXRpZXN9IFxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5EZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gKGNvbnRleHQpPT57XHJcbiAgbGV0IHtxdWVyeX0gPSBjb250ZXh0O1xyXG4gIGxldCB7aWR9ID0gcXVlcnk7XHJcbiAgbGV0IHBva2Vtb24gPSBnZXRQb2tlbW9uKGlkKTtcclxuICByZXR1cm4gcG9rZW1vblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=