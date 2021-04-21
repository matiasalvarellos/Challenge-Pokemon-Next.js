module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/detail/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TablePokemon.js":
/*!************************************!*\
  !*** ./components/TablePokemon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\Users\\gonza\\Desktop\\react-next\\components\\TablePokemon.js";

function TablePokemon({
  name,
  id,
  height,
  weight,
  types,
  abilities
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "card-pokemon",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pokemon-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "imageTable",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tablePokemon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "dataTable",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "titleTable",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "informationPokemon",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dataHeigth",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "data",
                children: "Height"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [height, " cm"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dataWeigth",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "data",
                children: "Weight"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [weight, " Kg"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dataType",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "data",
                children: "Type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, this), types.map((type, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: type.type.name
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 41
              }, this))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dataAbilities",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "data",
                children: "Abilities"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, this), abilities.map((ability, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ability.ability.name
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 46
              }, this))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TablePokemon);

/***/ }),

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TablePokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TablePokemon */ "./components/TablePokemon.js");
/* harmony import */ var _utils_getPokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/getPokemon */ "./utils/getPokemon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Users\\gonza\\Desktop\\react-next\\pages\\detail\\[id].js";




function Detail(props) {
  const {
    0: pokemon,
    1: setPokemon
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TablePokemon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: pokemon.name,
      id: pokemon.id,
      weight: pokemon.weight,
      height: pokemon.height,
      types: pokemon.types,
      abilities: pokemon.abilities
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

Detail.getInitialProps = context => {
  let {
    query
  } = context;
  let {
    id
  } = query;
  let pokemon = Object(_utils_getPokemon__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
  return pokemon;
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ }),

/***/ "./utils/getPokemon.js":
/*!*****************************!*\
  !*** ./utils/getPokemon.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
async function getPokemon(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const dataPokemon = await res.json();
    return dataPokemon;
  } catch (error) {
    console.log(error);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (getPokemon);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZVBva2Vtb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGV0YWlsLy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRQb2tlbW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiVGFibGVQb2tlbW9uIiwibmFtZSIsImlkIiwiaGVpZ2h0Iiwid2VpZ2h0IiwidHlwZXMiLCJhYmlsaXRpZXMiLCJtYXAiLCJ0eXBlIiwiaSIsImFiaWxpdHkiLCJEZXRhaWwiLCJwcm9wcyIsInBva2Vtb24iLCJzZXRQb2tlbW9uIiwidXNlU3RhdGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJnZXRQb2tlbW9uIiwicmVzIiwiZmV0Y2giLCJkYXRhUG9rZW1vbiIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FB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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGV0YWlsL1tpZF0uanNcIik7XG4iLCJmdW5jdGlvbiBUYWJsZVBva2Vtb24oe25hbWUsIGlkLCBoZWlnaHQsIHdlaWdodCwgdHlwZXMsIGFiaWxpdGllc30pe1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBva2Vtb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlVGFibGVcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL290aGVyL29mZmljaWFsLWFydHdvcmsvJHtpZH0ucG5nYH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUG9rZW1vblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhVGFibGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9ybWF0aW9uUG9rZW1vblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YUhlaWd0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGFcIj5IZWlnaHQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57aGVpZ2h0fSBjbTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YVdlaWd0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGFcIj5XZWlnaHQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57d2VpZ2h0fSBLZzwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YVR5cGVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRhXCI+VHlwZTwvcD5cclxuICAgICAgICAgICAgICAgIHt0eXBlcy5tYXAoKHR5cGUsIGkpID0+IDxwIGtleT17aX0+e3R5cGUudHlwZS5uYW1lfTwvcD4pfVxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhQWJpbGl0aWVzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0YVwiPkFiaWxpdGllczwvcD5cclxuICAgICAgICAgICAgICAgIHthYmlsaXRpZXMubWFwKChhYmlsaXR5LGkpPT4gPHAga2V5PXtpfT57YWJpbGl0eS5hYmlsaXR5Lm5hbWV9PC9wPil9XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVBva2Vtb247IiwiaW1wb3J0IFRhYmxlUG9rZW1vbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJsZVBva2Vtb25cIjtcclxuaW1wb3J0IGdldFBva2Vtb24gZnJvbSBcIi4uLy4uL3V0aWxzL2dldFBva2Vtb25cIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWwocHJvcHMpe1xyXG5cclxuICBjb25zdCBbcG9rZW1vbiwgc2V0UG9rZW1vbl0gPSB1c2VTdGF0ZShwcm9wcylcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFRhYmxlUG9rZW1vblxyXG4gICAgICAgIG5hbWU9e3Bva2Vtb24ubmFtZX1cclxuICAgICAgICBpZD17cG9rZW1vbi5pZH1cclxuICAgICAgICB3ZWlnaHQ9e3Bva2Vtb24ud2VpZ2h0fVxyXG4gICAgICAgIGhlaWdodD17cG9rZW1vbi5oZWlnaHR9XHJcbiAgICAgICAgdHlwZXM9e3Bva2Vtb24udHlwZXN9XHJcbiAgICAgICAgYWJpbGl0aWVzPXtwb2tlbW9uLmFiaWxpdGllc30gXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSAoY29udGV4dCk9PntcclxuICBsZXQge3F1ZXJ5fSA9IGNvbnRleHQ7XHJcbiAgbGV0IHtpZH0gPSBxdWVyeTtcclxuICBsZXQgcG9rZW1vbiA9IGdldFBva2Vtb24oaWQpO1xyXG4gIHJldHVybiBwb2tlbW9uXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7IiwiYXN5bmMgZnVuY3Rpb24gZ2V0UG9rZW1vbihpZCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aWR9YClcclxuICAgIGNvbnN0IGRhdGFQb2tlbW9uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YVBva2Vtb24gXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGdldFBva2Vtb247IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=