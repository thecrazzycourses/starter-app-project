webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/redux/sagas/users.js":
/*!*****************************************!*\
  !*** ./components/redux/sagas/users.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/users */ \"./components/redux/actions/users.js\");\n/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/users */ \"./components/redux/api/users.js\");\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getUsers),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchGetUsersRequest);\n\n\n\n // Step 9: Create getUser function which watcher will call\n\nfunction getUsers() {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getUsers$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(_api_users__WEBPACK_IMPORTED_MODULE_3__[\"getUsers\"]);\n\n        case 3:\n          result = _context.sent;\n          console.log(result.data);\n          _context.next = 7;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(_actions_users__WEBPACK_IMPORTED_MODULE_2__[\"getUsersSuccess\"]({\n            items: result.data.data\n          }));\n\n        case 7:\n          _context.next = 12;\n          break;\n\n        case 9:\n          _context.prev = 9;\n          _context.t0 = _context[\"catch\"](0);\n          console.log(_context.t0);\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 9]]);\n} // Step 8: Create User Saga Watcher\n// Whenever get-user action dispatch this saga will watch and call getUsers function\n\n\nfunction watchGetUsersRequest() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchGetUsersRequest$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_actions_users__WEBPACK_IMPORTED_MODULE_2__[\"Types\"].GET_USERS_REQUESTS, getUsers);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n} // Step 10: Create fork\n\n\nvar usersSaga = [Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchGetUsersRequest)];\n/* harmony default export */ __webpack_exports__[\"default\"] = (usersSaga);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWR1eC9zYWdhcy91c2Vycy5qcz9lNzc1Il0sIm5hbWVzIjpbImdldFVzZXJzIiwid2F0Y2hHZXRVc2Vyc1JlcXVlc3QiLCJjYWxsIiwiYXBpIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwdXQiLCJhY3Rpb25zIiwiaXRlbXMiLCJ0YWtlRXZlcnkiLCJHRVRfVVNFUlNfUkVRVUVTVFMiLCJ1c2Vyc1NhZ2EiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrR0FLVUEsUTttR0FjQUMsb0I7O0FBbkJWO0FBQ0E7Q0FHQTs7QUFDQSxTQUFVRCxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdUIsaUJBQU1FLCtEQUFJLENBQUNDLG1EQUFELENBQVY7O0FBRnZCO0FBRWNDLGdCQUZkO0FBR1FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDRyxJQUFuQjtBQUhSO0FBSVEsaUJBQU1DLDhEQUFHLENBQUNDLDhEQUFBLENBQXdCO0FBQzlCQyxpQkFBSyxFQUFFTixNQUFNLENBQUNHLElBQVAsQ0FBWUE7QUFEVyxXQUF4QixDQUFELENBQVQ7O0FBSlI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFRRixpQkFBTyxDQUFDQyxHQUFSOztBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FZQTtBQUNBOzs7QUFDQSxTQUFVTCxvQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTVUsb0VBQVMsQ0FBQ0Ysb0RBQUEsQ0FBY0csa0JBQWYsRUFBbUNaLFFBQW5DLENBQWY7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQUlBOzs7QUFDQSxJQUFNYSxTQUFTLEdBQUcsQ0FDZEMsK0RBQUksQ0FBQ2Isb0JBQUQsQ0FEVSxDQUFsQjtBQUllWSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVkdXgvc2FnYXMvdXNlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NhbGwsIGZvcmssIHB1dCwgdGFrZUV2ZXJ5fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlcnMnXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL3VzZXJzJ1xuXG4vLyBTdGVwIDk6IENyZWF0ZSBnZXRVc2VyIGZ1bmN0aW9uIHdoaWNoIHdhdGNoZXIgd2lsbCBjYWxsXG5mdW5jdGlvbiogZ2V0VXNlcnMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhcGkuZ2V0VXNlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmdldFVzZXJzU3VjY2Vzcyh7XG4gICAgICAgICAgICBpdGVtczogcmVzdWx0LmRhdGEuZGF0YVxuICAgICAgICB9KSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxufVxuXG4vLyBTdGVwIDg6IENyZWF0ZSBVc2VyIFNhZ2EgV2F0Y2hlclxuLy8gV2hlbmV2ZXIgZ2V0LXVzZXIgYWN0aW9uIGRpc3BhdGNoIHRoaXMgc2FnYSB3aWxsIHdhdGNoIGFuZCBjYWxsIGdldFVzZXJzIGZ1bmN0aW9uXG5mdW5jdGlvbiogd2F0Y2hHZXRVc2Vyc1JlcXVlc3QoKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuVHlwZXMuR0VUX1VTRVJTX1JFUVVFU1RTLCBnZXRVc2Vycyk7XG59XG5cbi8vIFN0ZXAgMTA6IENyZWF0ZSBmb3JrXG5jb25zdCB1c2Vyc1NhZ2EgPSBbXG4gICAgZm9yayh3YXRjaEdldFVzZXJzUmVxdWVzdClcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJzU2FnYTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/redux/sagas/users.js\n");

/***/ })

})