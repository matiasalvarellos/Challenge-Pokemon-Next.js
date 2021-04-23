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

  var searchPokemon = function searchPokemon() {
    var dataSearch = document.querySelector(".search-input").value;
    var pokemonFilter = allPokemons.filter(function (pokemon) {
      return pokemon.name.indexOf(dataSearch) == 0;
    });
    setPokemons(pokemonFilter);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Home -Nexts js- Pokemon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
      searchPokemon: searchPokemon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
          lineNumber: 36,
          columnNumber: 11
        }, _this);
      }), pokemons.lenght < 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Error__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 33
      }, this) : false]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(Home, "PKRm536gVVT0x3Y21Ss2/3YZLOQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFsbFBva2Vtb25zIiwidXNlU3RhdGUiLCJwb2tlbW9ucyIsInNldFBva2Vtb25zIiwic2VhcmNoUG9rZW1vbiIsImRhdGFTZWFyY2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInBva2Vtb25GaWx0ZXIiLCJmaWx0ZXIiLCJwb2tlbW9uIiwibmFtZSIsImluZGV4T2YiLCJtYXAiLCJpIiwiaWQiLCJpbWFnZVVybCIsImxlbmdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFPZSxTQUFTQSxJQUFULE9BQTRCO0FBQUE7O0FBQUE7O0FBQUEsTUFBYkMsV0FBYSxRQUFiQSxXQUFhOztBQUFBLGtCQUVYQyxzREFBUSxDQUFDRCxXQUFELENBRkc7QUFBQSxNQUVwQ0UsUUFGb0M7QUFBQSxNQUUxQkMsV0FGMEI7O0FBS3pDLE1BQU1DLGFBQWEsR0FBRSxTQUFmQSxhQUFlLEdBQUk7QUFDdkIsUUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NDLEtBQXpEO0FBQ0EsUUFBSUMsYUFBYSxHQUFHVCxXQUFXLENBQUNVLE1BQVosQ0FBb0IsVUFBQUMsT0FBTyxFQUFHO0FBQ2hELGFBQVFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxPQUFiLENBQXFCUixVQUFyQixLQUFvQyxDQUE1QztBQUNELEtBRm1CLENBQXBCO0FBR0FGLGVBQVcsQ0FBQ00sYUFBRCxDQUFYO0FBRUQsR0FQRDs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQywwREFBRDtBQUFRLG1CQUFhLEVBQUVMO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxpQkFDSUYsUUFBUSxDQUFDWSxHQUFULENBQWEsVUFBQ0gsT0FBRCxFQUFVSSxDQUFWO0FBQUEsNEJBQ2IscUVBQUMsMkRBQUQ7QUFFRSxjQUFJLEVBQUVKLE9BQU8sQ0FBQ0MsSUFGaEI7QUFHRSxnQkFBTSxFQUFFRCxPQUFPLENBQUNLLEVBSGxCO0FBSUUsZUFBSyxFQUFFTCxPQUFPLENBQUNNLFFBSmpCO0FBS0UsWUFBRSxFQUFFTixPQUFPLENBQUNLO0FBTGQsV0FDT0QsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBYixDQURKLEVBVUliLFFBQVEsQ0FBQ2dCLE1BQVQsR0FBa0IsQ0FBbEIsZ0JBQXNCLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBdEIsR0FBa0MsS0FWdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBckN1Qm5CLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTBkN2RmMjI2MTc2OGRkMGVhNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFBva2Vtb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9rZW1vblwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hcIjtcclxuaW1wb3J0IGdldEFsbFBva2Vtb25zIGZyb20gXCIuLi91dGlscy9nZXRBbGxQb2tlbW9uc1wiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpe1xyXG4gIHJldHVybiBnZXRBbGxQb2tlbW9ucygpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHthbGxQb2tlbW9uc30pe1xyXG5cclxuICBsZXQgW3Bva2Vtb25zLCBzZXRQb2tlbW9uc10gPSB1c2VTdGF0ZShhbGxQb2tlbW9ucylcclxuICBcclxuICBcclxuICBjb25zdCBzZWFyY2hQb2tlbW9uID0oKT0+e1xyXG4gICAgbGV0IGRhdGFTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pbnB1dFwiKS52YWx1ZVxyXG4gICAgbGV0IHBva2Vtb25GaWx0ZXIgPSBhbGxQb2tlbW9ucy5maWx0ZXIoIHBva2Vtb24gPT57XHJcbiAgICAgIHJldHVybiAgcG9rZW1vbi5uYW1lLmluZGV4T2YoZGF0YVNlYXJjaCkgPT0gMCA7XHJcbiAgICB9KVxyXG4gICAgc2V0UG9rZW1vbnMocG9rZW1vbkZpbHRlcikgIFxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lIC1OZXh0cyBqcy0gUG9rZW1vbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNlYXJjaCBzZWFyY2hQb2tlbW9uPXtzZWFyY2hQb2tlbW9ufSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgIHsgcG9rZW1vbnMubWFwKChwb2tlbW9uLCBpKT0+XHJcbiAgICAgICAgICA8UG9rZW1vbiBcclxuICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgbmFtZT17cG9rZW1vbi5uYW1lfVxyXG4gICAgICAgICAgICBudW1iZXI9e3Bva2Vtb24uaWR9IFxyXG4gICAgICAgICAgICBpbWFnZT17cG9rZW1vbi5pbWFnZVVybH1cclxuICAgICAgICAgICAgaWQ9e3Bva2Vtb24uaWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyBwb2tlbW9ucy5sZW5naHQgPCAwID8gPEVycm9yIC8+IDogZmFsc2UgfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9