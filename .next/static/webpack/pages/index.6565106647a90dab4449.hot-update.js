webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pokemon */ "./components/Pokemon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Error */ "./components/Error.js");


var _jsxFileName = "D:\\Users\\gonza\\Desktop\\react-next\\pages\\index.js",
    _s = $RefreshSig$();






var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var allPokemons = _ref.allPokemons;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(allPokemons),
      pokemons = _useState[0],
      setPokemons = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var searchPokemon = function searchPokemon() {
    var dataSearch = document.querySelector(".search-input").value;
    var pokemonFilter = allPokemons.filter(function (pokemon) {
      return pokemon.name.indexOf(dataSearch) == 0;
    });

    if (pokemonFilter < 0) {
      setError(true);
      setPokemons([]);
    } else {
      setError(false);
      setPokemons(pokemonFilter);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Home -Nexts js- Pokemon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
      searchPokemon: searchPokemon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "box",
      children: [pokemons.map(function (pokemon, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Pokemon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: pokemon.name,
          number: pokemon.id,
          image: pokemon.imageUrl,
          id: pokemon.id
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this);
      }), error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Error__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }, this) : ""]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(Home, "YJpJykPGI4qpIaIUgo61l/lRZTg=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFsbFBva2Vtb25zIiwidXNlU3RhdGUiLCJwb2tlbW9ucyIsInNldFBva2Vtb25zIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlYXJjaFBva2Vtb24iLCJkYXRhU2VhcmNoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJwb2tlbW9uRmlsdGVyIiwiZmlsdGVyIiwicG9rZW1vbiIsIm5hbWUiLCJpbmRleE9mIiwibWFwIiwiaSIsImlkIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBT2UsU0FBU0EsSUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQWJDLFdBQWEsUUFBYkEsV0FBYTs7QUFBQSxrQkFFWEMsc0RBQVEsQ0FBQ0QsV0FBRCxDQUZHO0FBQUEsTUFFcENFLFFBRm9DO0FBQUEsTUFFMUJDLFdBRjBCOztBQUFBLG1CQUdqQkYsc0RBQVEsQ0FBQyxLQUFELENBSFM7QUFBQSxNQUdwQ0csS0FIb0M7QUFBQSxNQUc3QkMsUUFINkI7O0FBTXpDLE1BQU1DLGFBQWEsR0FBRSxTQUFmQSxhQUFlLEdBQUk7QUFDdkIsUUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NDLEtBQXpEO0FBQ0EsUUFBSUMsYUFBYSxHQUFHWCxXQUFXLENBQUNZLE1BQVosQ0FBb0IsVUFBQUMsT0FBTyxFQUFHO0FBQ2hELGFBQVFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxPQUFiLENBQXFCUixVQUFyQixLQUFvQyxDQUE1QztBQUNELEtBRm1CLENBQXBCOztBQUdBLFFBQUdJLGFBQWEsR0FBRyxDQUFuQixFQUFxQjtBQUNuQk4sY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBRixpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNELEtBSEQsTUFHSztBQUNIRSxjQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0FGLGlCQUFXLENBQUNRLGFBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FaRDs7QUFlQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQywwREFBRDtBQUFRLG1CQUFhLEVBQUVMO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxpQkFDSUosUUFBUSxDQUFDYyxHQUFULENBQWEsVUFBQ0gsT0FBRCxFQUFVSSxDQUFWO0FBQUEsNEJBQ2IscUVBQUMsMkRBQUQ7QUFFRSxjQUFJLEVBQUVKLE9BQU8sQ0FBQ0MsSUFGaEI7QUFHRSxnQkFBTSxFQUFFRCxPQUFPLENBQUNLLEVBSGxCO0FBSUUsZUFBSyxFQUFFTCxPQUFPLENBQUNNLFFBSmpCO0FBS0UsWUFBRSxFQUFFTixPQUFPLENBQUNLO0FBTGQsV0FDT0QsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBYixDQURKLEVBVUliLEtBQUssZ0JBQUcscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILEdBQWUsRUFWeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBM0N1QkwsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NTY1MTA2NjQ3YTkwZGFiNDQ0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUG9rZW1vbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb2tlbW9uXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFwiO1xyXG5pbXBvcnQgZ2V0QWxsUG9rZW1vbnMgZnJvbSBcIi4uL3V0aWxzL2dldEFsbFBva2Vtb25zXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvclwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XHJcbiAgcmV0dXJuIGdldEFsbFBva2Vtb25zKClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2FsbFBva2Vtb25zfSl7XHJcblxyXG4gIGxldCBbcG9rZW1vbnMsIHNldFBva2Vtb25zXSA9IHVzZVN0YXRlKGFsbFBva2Vtb25zKVxyXG4gIGxldCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IHNlYXJjaFBva2Vtb24gPSgpPT57XHJcbiAgICBsZXQgZGF0YVNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWlucHV0XCIpLnZhbHVlXHJcbiAgICBsZXQgcG9rZW1vbkZpbHRlciA9IGFsbFBva2Vtb25zLmZpbHRlciggcG9rZW1vbiA9PntcclxuICAgICAgcmV0dXJuICBwb2tlbW9uLm5hbWUuaW5kZXhPZihkYXRhU2VhcmNoKSA9PSAwIDtcclxuICAgIH0pXHJcbiAgICBpZihwb2tlbW9uRmlsdGVyIDwgMCl7XHJcbiAgICAgIHNldEVycm9yKHRydWUpXHJcbiAgICAgIHNldFBva2Vtb25zKFtdKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHNldEVycm9yKGZhbHNlKVxyXG4gICAgICBzZXRQb2tlbW9ucyhwb2tlbW9uRmlsdGVyKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZSAtTmV4dHMganMtIFBva2Vtb248L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTZWFyY2ggc2VhcmNoUG9rZW1vbj17c2VhcmNoUG9rZW1vbn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICB7IHBva2Vtb25zLm1hcCgocG9rZW1vbiwgaSk9PlxyXG4gICAgICAgICAgPFBva2Vtb24gXHJcbiAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgIG5hbWU9e3Bva2Vtb24ubmFtZX1cclxuICAgICAgICAgICAgbnVtYmVyPXtwb2tlbW9uLmlkfSBcclxuICAgICAgICAgICAgaW1hZ2U9e3Bva2Vtb24uaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgIGlkPXtwb2tlbW9uLmlkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHsgZXJyb3IgPyA8RXJyb3IgLz4gOiBcIlwifVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9