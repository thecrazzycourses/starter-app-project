module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/redux/actions/users.js":
/*!*******************************************!*\
  !*** ./components/redux/actions/users.js ***!
  \*******************************************/
/*! exports provided: Types, getUsersRequest, getUsersSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return Types; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsersRequest\", function() { return getUsersRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsersSuccess\", function() { return getUsersSuccess; });\n// Step 1: Create Types\nconst Types = {\n  GET_USERS_REQUESTS: 'users/get_users_requests',\n  GET_USERS_SUCCESS: 'users/get_users_success'\n}; // Step 2: Create Action\n\nconst getUsersRequest = () => ({\n  type: Types.GET_USERS_REQUESTS\n});\nconst getUsersSuccess = ({\n  items\n}) => ({\n  type: Types.GET_USERS_SUCCESS,\n  payload: {\n    items\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZHV4L2FjdGlvbnMvdXNlcnMuanM/ODc2NSJdLCJuYW1lcyI6WyJUeXBlcyIsIkdFVF9VU0VSU19SRVFVRVNUUyIsIkdFVF9VU0VSU19TVUNDRVNTIiwiZ2V0VXNlcnNSZXF1ZXN0IiwidHlwZSIsImdldFVzZXJzU3VjY2VzcyIsIml0ZW1zIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1BLEtBQUssR0FBRztBQUNqQkMsb0JBQWtCLEVBQUUsMEJBREg7QUFFakJDLG1CQUFpQixFQUFFO0FBRkYsQ0FBZCxDLENBS1A7O0FBQ08sTUFBTUMsZUFBZSxHQUFHLE9BQU87QUFDbkNDLE1BQUksRUFBRUosS0FBSyxDQUFDQztBQUR1QixDQUFQLENBQXhCO0FBSUEsTUFBTUksZUFBZSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELE1BQWM7QUFDekNGLE1BQUksRUFBRUosS0FBSyxDQUFDRSxpQkFENkI7QUFFekNLLFNBQU8sRUFBRTtBQUNMRDtBQURLO0FBRmdDLENBQWQsQ0FBeEIiLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L2FjdGlvbnMvdXNlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdGVwIDE6IENyZWF0ZSBUeXBlc1xuZXhwb3J0IGNvbnN0IFR5cGVzID0ge1xuICAgIEdFVF9VU0VSU19SRVFVRVNUUzogJ3VzZXJzL2dldF91c2Vyc19yZXF1ZXN0cycsXG4gICAgR0VUX1VTRVJTX1NVQ0NFU1M6ICd1c2Vycy9nZXRfdXNlcnNfc3VjY2VzcycsXG59O1xuXG4vLyBTdGVwIDI6IENyZWF0ZSBBY3Rpb25cbmV4cG9ydCBjb25zdCBnZXRVc2Vyc1JlcXVlc3QgPSAoKSA9PiAoe1xuICAgdHlwZTogVHlwZXMuR0VUX1VTRVJTX1JFUVVFU1RTXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJzU3VjY2VzcyA9ICh7aXRlbXN9KSA9PiAoe1xuICAgIHR5cGU6IFR5cGVzLkdFVF9VU0VSU19TVUNDRVNTLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaXRlbXNcbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/redux/actions/users.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_redux_actions_users_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/redux/actions/users.js */ \"./components/redux/actions/users.js\");\n\nvar _jsxFileName = \"/home/ubuntu/work/github/Starter Project/starter-app-project/pages/index.js\";\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  componentDidMount() {\n    this.props.getUsersRequest();\n  }\n\n  render() {\n    const {\n      items\n    } = this.props.users;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Users List\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [item.firstName, \" \", item.lastName]\n        }, item.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 17\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(({\n  users\n}) => ({\n  users\n}), {\n  getUsersRequest: _components_redux_actions_users_js__WEBPACK_IMPORTED_MODULE_3__[\"getUsersRequest\"]\n})(Index));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJwcm9wcyIsImdldFVzZXJzUmVxdWVzdCIsInJlbmRlciIsIml0ZW1zIiwidXNlcnMiLCJtYXAiLCJpdGVtIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpZCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBTixTQUFvQkMsK0NBQXBCLENBQThCO0FBQzVCQyxtQkFBaUIsR0FBRztBQUNsQixTQUFLQyxLQUFMLENBQVdDLGVBQVg7QUFDRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFDQztBQUFELFFBQVUsS0FBS0gsS0FBTCxDQUFXSSxLQUEzQjtBQUNBLHdCQUNJO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQ0dELEtBQUssQ0FBQ0UsR0FBTixDQUFVQyxJQUFJLGlCQUNYO0FBQUEscUJBQW1CQSxJQUFJLENBQUNDLFNBQXhCLE9BQW9DRCxJQUFJLENBQUNFLFFBQXpDO0FBQUEsV0FBU0YsSUFBSSxDQUFDRyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFVRDs7QUFqQjJCOztBQW9CZkMsMEhBQU8sQ0FBQyxDQUFDO0FBQUNOO0FBQUQsQ0FBRCxNQUFjO0FBQUNBO0FBQUQsQ0FBZCxDQUFELEVBQXlCO0FBQzdDSCxxR0FBZUE7QUFEOEIsQ0FBekIsQ0FBUCxDQUVaSixLQUZZLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge2dldFVzZXJzUmVxdWVzdH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVkdXgvYWN0aW9ucy91c2Vycy5qc1wiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZ2V0VXNlcnNSZXF1ZXN0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMucHJvcHMudXNlcnM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+VXNlcnMgTGlzdDwvaDE+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT57aXRlbS5maXJzdE5hbWV9IHtpdGVtLmxhc3ROYW1lfTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoe3VzZXJzfSkgPT4gKHt1c2Vyc30pLCB7XG4gIGdldFVzZXJzUmVxdWVzdFxufSkoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });