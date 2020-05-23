/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/uikit/headers-and-footers/headers-and-footers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/buttons/buttons.js":
/*!*******************************************!*\
  !*** ./src/components/buttons/buttons.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.scss */ \"./src/components/buttons/buttons.scss\");\n/* harmony import */ var _buttons_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_buttons_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///./src/components/buttons/buttons.js?");

/***/ }),

/***/ "./src/components/buttons/buttons.scss":
/*!*********************************************!*\
  !*** ./src/components/buttons/buttons.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/buttons/buttons.scss?");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ \"./src/components/header/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo_logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo/logo.js */ \"./src/components/logo/logo.js\");\n/* harmony import */ var _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/buttons.js */ \"./src/components/buttons/buttons.js\");\n\n\n\n\nconst toggleMenuButtons = document.querySelectorAll('.header__toggle-menu-btn');\nconst toggleSubmenuLinks = document.querySelectorAll('.header__nav-item.header__submenu');\nconst headerNavMenu = document.querySelectorAll('.header__main-nav');\nconst userNames = document.querySelectorAll('.header__user-name');\n\nuserNames.forEach((name) => {\n  const headerWrapper = name.closest('.header__buttons-wrapper');\n  headerWrapper.classList.add('header__buttons-wrapper--authorized');\n});\n\ntoggleMenuButtons.forEach((button) => {\n  button.classList.remove('header__toggle-menu-btn--nojs');\n  button.classList.add('header__toggle-menu-btn--withjs');\n});\n\nheaderNavMenu.forEach((navMenu) => {\n  const wrapper = navMenu.closest('.header__content-wrapper');\n  const list = navMenu.querySelector('.header__nav-list');\n  wrapper.classList.remove('header__content-wrapper-menu--opened');\n  wrapper.classList.add('header__content-wrapper-menu--closed');\n});\n\ntoggleMenuButtons.forEach((button) => {\n  button.addEventListener('click', function() {\n    const wrapper = button.closest('.header__content-wrapper');\n    if (wrapper.classList.contains('header__content-wrapper-menu--closed')) {\n      wrapper.classList.remove('header__content-wrapper-menu--closed');\n      wrapper.classList.add('header__content-wrapper-menu--opened');\n    } else {\n      wrapper.classList.add('header__content-wrapper-menu--closed');\n      wrapper.classList.remove('header__content-wrapper-menu--opened');\n    }\n  });\n});\n\ntoggleSubmenuLinks.forEach((link) => {\n  const button = link.querySelector('.header__toggle-submenu-btn');\n  button.classList.remove('header__toggle-submenu-btn--nojs');\n  button.classList.add('header__toggle-submenu-btn--withjs');\n});\n\ntoggleSubmenuLinks.forEach((button) => {\n  button.addEventListener('click', function() {\n    const submenu = button.closest('.header__submenu');\n    if (submenu.classList.contains('header__submenu--close')) {\n      submenu.classList.remove('header__submenu--close');\n      submenu.classList.add('header__submenu--opened');\n    } else {\n      submenu.classList.add('header__submenu--close');\n      submenu.classList.remove('header__submenu--opened');\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./src/components/header/header.js?");

/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/header/header.scss?");

/***/ }),

/***/ "./src/components/logo/logo.js":
/*!*************************************!*\
  !*** ./src/components/logo/logo.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.scss */ \"./src/components/logo/logo.scss\");\n/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///./src/components/logo/logo.js?");

/***/ }),

/***/ "./src/components/logo/logo.scss":
/*!***************************************!*\
  !*** ./src/components/logo/logo.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/logo/logo.scss?");

/***/ }),

/***/ "./src/pages/uikit/headers-and-footers/headers-and-footers.js":
/*!********************************************************************!*\
  !*** ./src/pages/uikit/headers-and-footers/headers-and-footers.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _headers_and_footers_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers-and-footers.scss */ \"./src/pages/uikit/headers-and-footers/headers-and-footers.scss\");\n/* harmony import */ var _headers_and_footers_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_headers_and_footers_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/header/header.js */ \"./src/components/header/header.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/pages/uikit/headers-and-footers/headers-and-footers.js?");

/***/ }),

/***/ "./src/pages/uikit/headers-and-footers/headers-and-footers.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/uikit/headers-and-footers/headers-and-footers.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/uikit/headers-and-footers/headers-and-footers.scss?");

/***/ })

/******/ });