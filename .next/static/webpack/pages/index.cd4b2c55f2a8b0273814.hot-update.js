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
    console.log(pokemons);
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
      }), pokemons.lenght == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Error__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 34
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFsbFBva2Vtb25zIiwidXNlU3RhdGUiLCJwb2tlbW9ucyIsInNldFBva2Vtb25zIiwic2VhcmNoUG9rZW1vbiIsImRhdGFTZWFyY2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInBva2Vtb25GaWx0ZXIiLCJmaWx0ZXIiLCJwb2tlbW9uIiwibmFtZSIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaSIsImlkIiwiaW1hZ2VVcmwiLCJsZW5naHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBT2UsU0FBU0EsSUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQWJDLFdBQWEsUUFBYkEsV0FBYTs7QUFBQSxrQkFFWEMsc0RBQVEsQ0FBQ0QsV0FBRCxDQUZHO0FBQUEsTUFFcENFLFFBRm9DO0FBQUEsTUFFMUJDLFdBRjBCOztBQUt6QyxNQUFNQyxhQUFhLEdBQUUsU0FBZkEsYUFBZSxHQUFJO0FBQ3ZCLFFBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDQyxLQUF6RDtBQUNBLFFBQUlDLGFBQWEsR0FBR1QsV0FBVyxDQUFDVSxNQUFaLENBQW9CLFVBQUFDLE9BQU8sRUFBRztBQUNoRCxhQUFRQSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsT0FBYixDQUFxQlIsVUFBckIsS0FBb0MsQ0FBNUM7QUFDRCxLQUZtQixDQUFwQjtBQUdBRixlQUFXLENBQUNNLGFBQUQsQ0FBWDtBQUNBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsUUFBWjtBQUNELEdBUEQ7O0FBVUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsMERBQUQ7QUFBUSxtQkFBYSxFQUFFRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsaUJBQ0lGLFFBQVEsQ0FBQ2MsR0FBVCxDQUFhLFVBQUNMLE9BQUQsRUFBVU0sQ0FBVjtBQUFBLDRCQUNiLHFFQUFDLDJEQUFEO0FBRUUsY0FBSSxFQUFFTixPQUFPLENBQUNDLElBRmhCO0FBR0UsZ0JBQU0sRUFBRUQsT0FBTyxDQUFDTyxFQUhsQjtBQUlFLGVBQUssRUFBRVAsT0FBTyxDQUFDUSxRQUpqQjtBQUtFLFlBQUUsRUFBRVIsT0FBTyxDQUFDTztBQUxkLFdBQ09ELENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWIsQ0FESixFQVVJZixRQUFRLENBQUNrQixNQUFULElBQW1CLENBQW5CLGdCQUF1QixxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXZCLEdBQW1DLEtBVnZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQXJDdUJyQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkNGIyYzU1ZjJhOGIwMjczODE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBQb2tlbW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1Bva2Vtb25cIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XHJcbmltcG9ydCBnZXRBbGxQb2tlbW9ucyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWxsUG9rZW1vbnNcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Vycm9yXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KXtcclxuICByZXR1cm4gZ2V0QWxsUG9rZW1vbnMoKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7YWxsUG9rZW1vbnN9KXtcclxuXHJcbiAgbGV0IFtwb2tlbW9ucywgc2V0UG9rZW1vbnNdID0gdXNlU3RhdGUoYWxsUG9rZW1vbnMpXHJcbiAgXHJcbiAgXHJcbiAgY29uc3Qgc2VhcmNoUG9rZW1vbiA9KCk9PntcclxuICAgIGxldCBkYXRhU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaW5wdXRcIikudmFsdWVcclxuICAgIGxldCBwb2tlbW9uRmlsdGVyID0gYWxsUG9rZW1vbnMuZmlsdGVyKCBwb2tlbW9uID0+e1xyXG4gICAgICByZXR1cm4gIHBva2Vtb24ubmFtZS5pbmRleE9mKGRhdGFTZWFyY2gpID09IDAgO1xyXG4gICAgfSlcclxuICAgIHNldFBva2Vtb25zKHBva2Vtb25GaWx0ZXIpICBcclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb25zKVxyXG4gIH1cclxuICBcclxuICBcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZSAtTmV4dHMganMtIFBva2Vtb248L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTZWFyY2ggc2VhcmNoUG9rZW1vbj17c2VhcmNoUG9rZW1vbn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICB7IHBva2Vtb25zLm1hcCgocG9rZW1vbiwgaSk9PlxyXG4gICAgICAgICAgPFBva2Vtb24gXHJcbiAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgIG5hbWU9e3Bva2Vtb24ubmFtZX1cclxuICAgICAgICAgICAgbnVtYmVyPXtwb2tlbW9uLmlkfSBcclxuICAgICAgICAgICAgaW1hZ2U9e3Bva2Vtb24uaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgIGlkPXtwb2tlbW9uLmlkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHsgcG9rZW1vbnMubGVuZ2h0ID09IDAgPyA8RXJyb3IgLz4gOiBmYWxzZSB9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=