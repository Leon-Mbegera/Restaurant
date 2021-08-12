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

/***/ "./src/brews.js":
/*!**********************!*\
  !*** ./src/brews.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst coffeeBrewMenu = (coffeeImage, coffeeName, coffeeDesc, coffeePrice) => {\n  const coffeeBrews = document.createElement('div');\n\n  const brewImage = document.createElement('img');\n  brewImage.src = coffeeImage;\n  coffeeBrews.appendChild(brewImage);\n\n  const brewName = document.createElement('h3');\n  brewName.textContent = coffeeName;\n  coffeeBrews.appendChild(brewName);\n\n  const brewDesc = document.createElement('p');\n  brewDesc.textContent = coffeeDesc;\n  coffeeBrews.appendChild(brewDesc);\n\n  const brewPrice = document.createElement('p');\n  brewPrice.textContent = coffeePrice;\n  coffeeBrews.appendChild(brewPrice);\n\n  return coffeeBrews;\n};\n\nconst coffeeMenu = () => {\n  const menu = document.createElement('div');\n  menu.className = 'menu-grid home';\n\n  menu.appendChild(coffeeBrewMenu(\n    './images/cappuccino.jpg',\n    'Cappuccino',\n    'Traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam',\n    'ksh. 1,350',\n  ));\n\n  menu.appendChild(coffeeBrewMenu(\n    './images/caramel-macchiato.jpg',\n    'Caramel Macchiato',\n    'Made with vanilla syrup, steamed milk, espresso and caramel sauce',\n    'ksh. 1,150',\n  ));\n\n  menu.appendChild(coffeeBrewMenu(\n    './images/french-vanilla.jpg',\n    'French Vanilla',\n    'Made with whole milk and granulated sugar, and heated over medium heat until steaming',\n    'ksh. 1,475',\n  ));\n\n  menu.appendChild(coffeeBrewMenu(\n    './images/hot-chocolate.jpg',\n    'Hot Chocolate',\n    'Made with combined milk, cocoa powder, and semi sweet chocolate, and brought to a simmer',\n    'ksh. 1,600',\n  ));\n\n  menu.appendChild(coffeeBrewMenu(\n    './images/latte.jpg',\n    'Italian latte',\n    'The hot milk and creamy milk foam are imbued with the delicious flavour of coffee',\n    'ksh. 1,800',\n  ));\n\n  menu.appendChild(coffeeBrewMenu(\n    './images/mocha.jpg',\n    'Cappuccino',\n    'Is a chocolate-flavoured warm beverage that is a variant of a caffè latte',\n    'ksh. 1,350',\n  ));\n\n  return menu;\n};\n\nconst showMenu = () => {\n  const mainMenu = document.createElement('div');\n  mainMenu.textContent = '';\n  mainMenu.append(coffeeMenu());\n  return mainMenu;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);\n\n//# sourceURL=webpack://restaurant/./src/brews.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactUs = () => {\n  const contact = document.createElement('div');\n  contact.className = 'center home';\n\n  const h1 = document.createElement('h1');\n  h1.className = 'center';\n  h1.textContent = 'Feel free to reach us..';\n  contact.append(h1);\n\n  const p = document.createElement('p');\n  p.textContent = 'We are located at Kenyatta Avenue, Latema strt, opposite National Achives, Nairobi CBD.';\n  contact.append(p);\n\n  const p2 = document.createElement('p');\n  p2.textContent = 'Call us: (+254) 222 444 600 or (+254) 334 555 222';\n  contact.append(p2);\n\n  const formDiv = document.createElement('div');\n  const form = document.createElement('form');\n\n  const emailLabel = document.createElement('label');\n  emailLabel.className = 'email-label';\n  const label = document.createTextNode('Email');\n  emailLabel.append(label);\n  form.append(emailLabel);\n  formDiv.append(form);\n  contact.append(formDiv);\n\n  const email = document.createElement('input');\n  email.setAttribute('type', 'text');\n  email.setAttribute('placeholder', 'bunny@example.com');\n  form.append(email);\n  formDiv.append(form);\n  contact.append(formDiv);\n\n  const textLabel = document.createElement('label');\n  textLabel.className = 'text-label';\n  const text = document.createTextNode('Leave us some feedback');\n  textLabel.append(text);\n  form.append(textLabel);\n  formDiv.append(form);\n  contact.append(formDiv);\n\n  const textarea = document.createElement('textarea');\n  const message = document.createTextNode('Drop some feedback on how you liked our size, and or how we should improve inoder to make this place your favorite coffee spot..');\n  textarea.append(message);\n  form.append(textarea);\n  formDiv.append(form);\n  contact.append(formDiv);\n\n  const submit = document.createElement('input');\n  submit.setAttribute('type', 'submit');\n  form.append(submit);\n  formDiv.append(form);\n  contact.append(formDiv);\n\n  return contact;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUs);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeLink\": () => (/* binding */ homeLink),\n/* harmony export */   \"menuLink\": () => (/* binding */ menuLink),\n/* harmony export */   \"contactLink\": () => (/* binding */ contactLink),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeLink = document.createElement('a');\nconst menuLink = document.createElement('a');\nconst contactLink = document.createElement('a');\n\nconst header = () => {\n  const navigation = document.createElement('div');\n  navigation.className = 'd-flex justify-content-between header';\n\n  const ImgDiv = document.createElement('div');\n  const logo = document.createElement('img');\n  logo.className = 'shop-logo';\n  logo.setAttribute('src', './images/logo.png');\n  ImgDiv.append(logo);\n  navigation.append(ImgDiv);\n\n  const links = document.createElement('ul');\n  links.className = 'navigationBar';\n\n  homeLink.textContent = 'Home';\n  const homeItem = document.createElement('li');\n\n  homeItem.appendChild(homeLink);\n  links.appendChild(homeItem);\n\n  menuLink.textContent = 'Menu';\n  const menuItem = document.createElement('li');\n  menuItem.appendChild(menuLink);\n  links.appendChild(menuItem);\n\n  contactLink.textContent = 'Contact Us';\n  const contactItem = document.createElement('li');\n  contactItem.appendChild(contactLink);\n  links.appendChild(contactItem);\n\n  navigation.appendChild(links);\n  return navigation;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n  const section = document.createElement('section');\n  section.className = 'home';\n\n  const largeDiv = document.createElement('div');\n  largeDiv.className = 'd-flex flex-row';\n\n  const leftDiv = document.createElement('div');\n  const welcomeImage = document.createElement('img');\n  welcomeImage.className = 'big-image';\n  welcomeImage.setAttribute('src', './images/Coffee.jpeg');\n  leftDiv.append(welcomeImage);\n  largeDiv.append(leftDiv);\n\n  const rightDiv = document.createElement('div');\n  const heading = document.createElement('h4');\n  heading.textContent = \"Mbegera's Coffee Shop\";\n  heading.className = 'heading';\n  rightDiv.append(heading);\n  largeDiv.append(rightDiv);\n\n  const p = document.createElement('p');\n  p.textContent = \"At Mbegera's, we take great care to serve quality, great-tasting menu items to our customers each and every time they visit our restaurants. We understand that each of our customers has individual needs and considerations when choosing a place to eat or drink outside their home, especially those customers with food allergies. As part of our commitment to you, we provide the most current ingredient information available from our food suppliers for the eight most common allergens\";\n  p.className = 'paragraph';\n  rightDiv.append(p);\n  largeDiv.append(rightDiv);\n\n  section.append(largeDiv);\n\n  return section;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _brews_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brews.js */ \"./src/brews.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\nconst navSection = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst homePage = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\nconst menuPage = (0,_brews_js__WEBPACK_IMPORTED_MODULE_2__.default)();\nconst contactPage = (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n\nconst content = document.querySelector('#content');\ncontent.append(navSection);\n\nconst viewTab = (tab) => {\n  content.innerHTML = '';\n  content.append(navSection, tab);\n};\n\n_header_js__WEBPACK_IMPORTED_MODULE_0__.homeLink.addEventListener('click', () => { viewTab(homePage); });\n_header_js__WEBPACK_IMPORTED_MODULE_0__.menuLink.addEventListener('click', () => { viewTab(menuPage); });\n_header_js__WEBPACK_IMPORTED_MODULE_0__.contactLink.addEventListener('click', () => { viewTab(contactPage); });\nviewTab(homePage);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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