module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/v1/callback/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/v1/callback/index.js":
/*!****************************************!*\
  !*** ./pages/api/v1/callback/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return callback; });\n/* harmony import */ var _utils_auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/auth0.js */ \"./utils/auth0.js\");\n\nasync function callback(req, res) {\n  try {\n    await _utils_auth0_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleCallback(req, res, {\n      redirectTo: '/'\n    });\n  } catch (error) {\n    console.error(error);\n    res.status(error.status || 400).end(error.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdjEvY2FsbGJhY2svaW5kZXguanM/NjE4ZiJdLCJuYW1lcyI6WyJjYWxsYmFjayIsInJlcSIsInJlcyIsImF1dGgwIiwiaGFuZGxlQ2FsbGJhY2siLCJyZWRpcmVjdFRvIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiZW5kIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxlQUFlQSxRQUFmLENBQXdCQyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDN0MsTUFBSTtBQUNBLFVBQU1DLHVEQUFLLENBQUNDLGNBQU4sQ0FBcUJILEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUFFRyxnQkFBVSxFQUFFO0FBQWQsS0FBL0IsQ0FBTjtBQUNILEdBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDWkMsV0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDQUosT0FBRyxDQUFDTSxNQUFKLENBQVdGLEtBQUssQ0FBQ0UsTUFBTixJQUFnQixHQUEzQixFQUFnQ0MsR0FBaEMsQ0FBb0NILEtBQUssQ0FBQ0ksT0FBMUM7QUFDSDtBQUNKIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3YxL2NhbGxiYWNrL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGgwIGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9hdXRoMC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjYWxsYmFjayhyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGF1dGgwLmhhbmRsZUNhbGxiYWNrKHJlcSwgcmVzLCB7IHJlZGlyZWN0VG86ICcvJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNDAwKS5lbmQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/v1/callback/index.js\n");

/***/ }),

/***/ "./utils/auth0.js":
/*!************************!*\
  !*** ./utils/auth0.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__[\"initAuth0\"])({\n  domain: process.env.AUTH0_DOMAIN,\n  clientId: process.env.AUTH0_CLIENT_ID,\n  clientSecret: process.env.AUTH0_CLIENT_SECRET,\n  scope: 'openid profile',\n  redirectUri: process.env.AUTH0_REDIRECT_URI,\n  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,\n  session: {\n    // The secret used to encrypt the cookie.\n    cookieSecret: process.env.AUTH0_COOKIE_SECRET,\n    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.\n    cookieLifetime: 60 * 60 * 8,\n    // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.\n    cookieDomain: 'your-domain.com',\n    // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.\n    cookieSameSite: 'lax',\n    // (Optional) Store the id_token in the session. Defaults to false.\n    storeIdToken: false,\n    // (Optional) Store the access_token in the session. Defaults to false.\n    storeAccessToken: false,\n    // (Optional) Store the refresh_token in the session. Defaults to false.\n    storeRefreshToken: false\n  },\n  oidcClient: {\n    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.\n    httpTimeout: 2500,\n    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.\n    clockTolerance: 10000\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoMC5qcz82YTc0Il0sIm5hbWVzIjpbImluaXRBdXRoMCIsImRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJBVVRIMF9ET01BSU4iLCJjbGllbnRJZCIsIkFVVEgwX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJzY29wZSIsInJlZGlyZWN0VXJpIiwiQVVUSDBfUkVESVJFQ1RfVVJJIiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwiQVVUSDBfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJIiwic2Vzc2lvbiIsImNvb2tpZVNlY3JldCIsIkFVVEgwX0NPT0tJRV9TRUNSRVQiLCJjb29raWVMaWZldGltZSIsImNvb2tpZURvbWFpbiIsImNvb2tpZVNhbWVTaXRlIiwic3RvcmVJZFRva2VuIiwic3RvcmVBY2Nlc3NUb2tlbiIsInN0b3JlUmVmcmVzaFRva2VuIiwib2lkY0NsaWVudCIsImh0dHBUaW1lb3V0IiwiY2xvY2tUb2xlcmFuY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWVBLG9JQUFTLENBQUM7QUFDckJDLFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBREM7QUFFckJDLFVBQVEsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGVBRkQ7QUFHckJDLGNBQVksRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLLG1CQUhMO0FBSXJCQyxPQUFLLEVBQUUsZ0JBSmM7QUFLckJDLGFBQVcsRUFBRVIsT0FBTyxDQUFDQyxHQUFSLENBQVlRLGtCQUxKO0FBTXJCQyx1QkFBcUIsRUFBRVYsT0FBTyxDQUFDQyxHQUFSLENBQVlVLDhCQU5kO0FBT3JCQyxTQUFPLEVBQUU7QUFDTDtBQUNBQyxnQkFBWSxFQUFFYixPQUFPLENBQUNDLEdBQVIsQ0FBWWEsbUJBRnJCO0FBR0w7QUFDQUMsa0JBQWMsRUFBRSxLQUFLLEVBQUwsR0FBVSxDQUpyQjtBQUtMO0FBQ0FDLGdCQUFZLEVBQUUsaUJBTlQ7QUFPTDtBQUNBQyxrQkFBYyxFQUFFLEtBUlg7QUFTTDtBQUNBQyxnQkFBWSxFQUFFLEtBVlQ7QUFXTDtBQUNBQyxvQkFBZ0IsRUFBRSxLQVpiO0FBYUw7QUFDQUMscUJBQWlCLEVBQUU7QUFkZCxHQVBZO0FBdUJyQkMsWUFBVSxFQUFFO0FBQ1I7QUFDQUMsZUFBVyxFQUFFLElBRkw7QUFHUjtBQUNBQyxrQkFBYyxFQUFFO0FBSlI7QUF2QlMsQ0FBRCxDQUF4QiIsImZpbGUiOiIuL3V0aWxzL2F1dGgwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdEF1dGgwIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCh7XG4gICAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXG4gICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCxcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9TRUNSRVQsXG4gICAgc2NvcGU6ICdvcGVuaWQgcHJvZmlsZScsXG4gICAgcmVkaXJlY3RVcmk6IHByb2Nlc3MuZW52LkFVVEgwX1JFRElSRUNUX1VSSSxcbiAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6IHByb2Nlc3MuZW52LkFVVEgwX1BPU1RfTE9HT1VUX1JFRElSRUNUX1VSSSxcbiAgICBzZXNzaW9uOiB7XG4gICAgICAgIC8vIFRoZSBzZWNyZXQgdXNlZCB0byBlbmNyeXB0IHRoZSBjb29raWUuXG4gICAgICAgIGNvb2tpZVNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ09PS0lFX1NFQ1JFVCxcbiAgICAgICAgLy8gVGhlIGNvb2tpZSBsaWZldGltZSAoZXhwaXJhdGlvbikgaW4gc2Vjb25kcy4gU2V0IHRvIDggaG91cnMgYnkgZGVmYXVsdC5cbiAgICAgICAgY29va2llTGlmZXRpbWU6IDYwICogNjAgKiA4LFxuICAgICAgICAvLyAoT3B0aW9uYWwpIFRoZSBjb29raWUgZG9tYWluIHRoaXMgc2hvdWxkIHJ1biBvbi4gTGVhdmUgaXQgYmxhbmsgdG8gcmVzdHJpY3QgaXQgdG8geW91ciBkb21haW4uXG4gICAgICAgIGNvb2tpZURvbWFpbjogJ3lvdXItZG9tYWluLmNvbScsXG4gICAgICAgIC8vIChPcHRpb25hbCkgU2FtZVNpdGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHNlc3Npb24gY29va2llLiBEZWZhdWx0cyB0byAnbGF4JywgYnV0IGNhbiBiZSBjaGFuZ2VkIHRvICdzdHJpY3QnIG9yICdub25lJy4gU2V0IGl0IHRvIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgdGhlIFNhbWVTaXRlIHNldHRpbmcuXG4gICAgICAgIGNvb2tpZVNhbWVTaXRlOiAnbGF4JyxcbiAgICAgICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgaWRfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICBzdG9yZUlkVG9rZW46IGZhbHNlLFxuICAgICAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSBhY2Nlc3NfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICBzdG9yZUFjY2Vzc1Rva2VuOiBmYWxzZSxcbiAgICAgICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgcmVmcmVzaF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgIHN0b3JlUmVmcmVzaFRva2VuOiBmYWxzZVxuICAgIH0sXG4gICAgb2lkY0NsaWVudDoge1xuICAgICAgICAvLyAoT3B0aW9uYWwpIENvbmZpZ3VyZSB0aGUgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgZm9yIEhUVFAgcmVxdWVzdHMgdG8gQXV0aDAuXG4gICAgICAgIGh0dHBUaW1lb3V0OiAyNTAwLFxuICAgICAgICAvLyAoT3B0aW9uYWwpIENvbmZpZ3VyZSB0aGUgY2xvY2sgdG9sZXJhbmNlIGluIG1pbGxpc2Vjb25kcywgaWYgdGhlIHRpbWUgb24geW91ciBzZXJ2ZXIgaXMgcnVubmluZyBiZWhpbmQuXG4gICAgICAgIGNsb2NrVG9sZXJhbmNlOiAxMDAwMFxuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/auth0.js\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@auth0/nextjs-auth0\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCI/N2RhOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXV0aDAvbmV4dGpzLWF1dGgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@auth0/nextjs-auth0\n");

/***/ })

/******/ });