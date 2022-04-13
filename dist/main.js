/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = () => {\n    const main = document.getElementById(\"main\");\n    const tempMain = document.createElement(\"main\");\n    tempMain.setAttribute(\"id\", \"main\");\n    main.replaceWith(tempMain);\n\n    const contactHeader = document.createElement(\"section\");\n    contactHeader.setAttribute(\"id\", \"mainHeader\");\n    tempMain.appendChild(contactHeader);\n    contactHeader.innerHTML = \"Contact Us\";\n\n    //contact\n    const contactContent = document.createElement(\"section\");\n    contactContent.setAttribute(\"class\", \"mainHome\");\n    contactContent.setAttribute(\"id\", \"contactSection\");\n    tempMain.appendChild(contactContent);\n\n    const ownerHeader = document.createElement(\"h2\");\n    ownerHeader.setAttribute(\"id\", \"ownerHeader\");\n    contactContent.appendChild(ownerHeader);\n    document.getElementById(\"ownerHeader\").innerHTML = \"first last\";\n\n    const p = document.createElement(\"p\");\n    p.setAttribute(\"id\", \"number\");\n    contactContent.appendChild(p);\n    p.innerHTML = \"555-555-5555\";\n\n    const p1 = document.createElement(\"p\");\n    p1.setAttribute(\"id\", \"email\");\n    contactContent.appendChild(p1);\n    p1.innerHTML = \"first.last@gmail.com\";\n    \n\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = () => {\n    var content = document.getElementById(\"content\");\n    var footer = document.createElement(\"footer\");\n    content.appendChild(footer)\n    footer.innerHTML = \"Developed by geoJasent\";\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nav\": () => (/* binding */ nav)\n/* harmony export */ });\n/* harmony import */ var _navHome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navHome.js */ \"./src/navHome.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst nav = () => {\n    var content = document.getElementById(\"content\");\n    var nav = document.createElement(\"nav\");\n    nav.setAttribute(\"id\", \"nav\");\n    content.appendChild(nav)\n    \n    var ul = document.createElement(\"UL\");\n\n    const liArray = [\"Home\", \"Menu\", \"Contact\"];\n        liArray.forEach(item => {\n            var li = document.createElement(\"LI\");\n            li.setAttribute(\"id\", item);\n            li.innerHTML = item;\n            ul.appendChild(li)\n        })\n    nav.appendChild(ul)\n        \n    const Home = document.getElementById(\"Home\");\n    Home.onclick = function() {(0,_navHome_js__WEBPACK_IMPORTED_MODULE_0__.navHome)()};\n\n    const Menu = document.getElementById(\"Menu\");\n    Menu.onclick = function() {(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)()};\n\n    const Contact = document.getElementById(\"Contact\");\n    Contact.onclick = function() {(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)()};\n\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _initial_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-home.js */ \"./src/initial-home.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\n\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.nav)(), (0,_initial_home_js__WEBPACK_IMPORTED_MODULE_1__.initialHome)(), (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.footer)();\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/initial-home.js":
/*!*****************************!*\
  !*** ./src/initial-home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialHome\": () => (/* binding */ initialHome)\n/* harmony export */ });\nconst initialHome = () => {\n    const content = document.getElementById(\"content\");\n    const mainHome = document.createElement(\"main\");\n    mainHome.setAttribute(\"id\", \"main\");\n    content.appendChild(mainHome);\n\n    const header = document.createElement(\"header\");\n    header.setAttribute(\"id\", \"mainHeader\");\n    mainHome.appendChild(header);\n    header.innerHTML = \"Heavenly Bakery\";\n    \n    const mainContent = document.createElement(\"section\");\n    mainContent.setAttribute(\"class\", \"mainHome\");\n    mainContent.setAttribute(\"id\", \"welcome\");\n    mainHome.appendChild(mainContent);\n    const welcome = document.getElementById(\"welcome\");\n    welcome.innerHTML = \"Pastries and more baked daily.\";\n\n    const hoursContent = document.createElement(\"section\");\n    hoursContent.setAttribute(\"class\", \"mainHome\");\n    hoursContent.setAttribute(\"id\", \"hours\");\n    mainHome.appendChild(hoursContent);\n\n    const hoursHeader = document.createElement(\"h2\");\n    hoursHeader.setAttribute(\"id\", \"hoursHeader\");\n    hoursContent.appendChild(hoursHeader);\n    document.getElementById(\"hoursHeader\").innerHTML = \"Hours\";\n    \n    const p = document.createElement(\"p\");\n    p.setAttribute(\"id\", \"hoursText\");\n    hoursContent.appendChild(p);\n    p.innerHTML = \"Monday-Friday: 8am - 6pm</br> Saturday: 10am - 6pm</br> Sunday: Closed\";\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/initial-home.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n    const main = document.getElementById(\"main\");\n    const tempMain = document.createElement(\"main\");\n    tempMain.setAttribute(\"id\", \"main\");\n    main.replaceWith(tempMain);\n\n    const menuHeader = document.createElement(\"section\");\n    menuHeader.setAttribute(\"id\", \"mainHeader\");\n    tempMain.appendChild(menuHeader);\n    menuHeader.innerHTML = \"Heavenly Bakery Menu\";\n\n    //danish -refactor into constructor?\n    const danishContent = document.createElement(\"section\");\n    danishContent.setAttribute(\"class\", \"mainHome\");\n    danishContent.setAttribute(\"id\", \"danishSection\");\n    tempMain.appendChild(danishContent);\n    \n    const danishHeader = document.createElement(\"h2\");\n    danishHeader.setAttribute(\"id\", \"danishHeader\");\n    danishContent.appendChild(danishHeader);\n    document.getElementById(\"danishHeader\").innerHTML = \"Danish - $4\";\n    \n    const p = document.createElement(\"p\");\n    p.setAttribute(\"id\", \"danish\");\n    danishContent.appendChild(p);\n    p.innerHTML = \"Insert photo of danish here\";\n    \n    //croissant\n    const croissantContent = document.createElement(\"section\");\n    croissantContent.setAttribute(\"class\", \"mainHome\");\n    croissantContent.setAttribute(\"id\", \"croissantSection\");\n    tempMain.appendChild(croissantContent);\n\n    const croissantHeader = document.createElement(\"h2\");\n    croissantHeader.setAttribute(\"id\", \"croissantHeader\");\n    croissantContent.appendChild(croissantHeader);\n    document.getElementById(\"croissantHeader\").innerHTML = \"Croissant - $2\";\n\n    const p1 = document.createElement(\"p\");\n    p1.setAttribute(\"id\", \"croissant\");\n    croissantContent.appendChild(p1);\n    p1.innerHTML = \"Insert photo of croissant here\";\n\n    //panDulce\n    const panDulceContent = document.createElement(\"section\");\n    panDulceContent.setAttribute(\"class\", \"mainHome\");\n    panDulceContent.setAttribute(\"id\", \"panDulceSection\");\n    tempMain.appendChild(panDulceContent);\n\n    const panDulceHeader = document.createElement(\"h2\");\n    panDulceHeader.setAttribute(\"id\", \"panDulceHeader\");\n    panDulceContent.appendChild(panDulceHeader);\n    document.getElementById(\"panDulceHeader\").innerHTML = \"Pan Dulce - $3\";\n\n    const p2 = document.createElement(\"p\");\n    p2.setAttribute(\"id\", \"panDulce\");\n    panDulceContent.appendChild(p2);\n    p2.innerHTML = \"Insert photo of panDulce here\";\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/navHome.js":
/*!************************!*\
  !*** ./src/navHome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navHome\": () => (/* binding */ navHome)\n/* harmony export */ });\nconst navHome = () => {\n    const main = document.getElementById(\"main\");\n    const tempMain = document.createElement(\"main\");\n    tempMain.setAttribute(\"id\", \"main\");\n    main.replaceWith(tempMain);\n\n    const header = document.createElement(\"header\");\n    header.setAttribute(\"id\", \"mainHeader\");\n    tempMain.appendChild(header);\n    header.innerHTML = \"Heavenly Bakery\";\n    \n    const mainContent = document.createElement(\"section\");\n    mainContent.setAttribute(\"class\", \"mainHome\");\n    mainContent.setAttribute(\"id\", \"welcome\");\n    tempMain.appendChild(mainContent);\n    const welcome = document.getElementById(\"welcome\");\n    welcome.innerHTML = \"Pastries and more baked daily.\";\n\n    const hoursContent = document.createElement(\"section\");\n    hoursContent.setAttribute(\"class\", \"mainHome\");\n    hoursContent.setAttribute(\"id\", \"hours\");\n    tempMain.appendChild(hoursContent);\n\n    const hoursHeader = document.createElement(\"h2\");\n    hoursHeader.setAttribute(\"id\", \"hoursHeader\");\n    hoursContent.appendChild(hoursHeader);\n    document.getElementById(\"hoursHeader\").innerHTML = \"Hours\";\n    \n    const p = document.createElement(\"p\");\n    p.setAttribute(\"id\", \"hoursText\");\n    hoursContent.appendChild(p);\n    p.innerHTML = \"Monday-Friday: 8am - 6pm</br> Saturday: 10am - 6pm</br> Sunday: Closed\";\n}\n\n\n\nfunction rot13(message){\n    const alpabet = \"abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM\";\n    return message.replace(/[a-z]/ig, letter => alpabet[alpabet.indexOf(letter) + 13])\n}\n\n//# sourceURL=webpack://restaurantpage/./src/navHome.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;