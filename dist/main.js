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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst coffeeBrewMenu = (coffeeImage, coffeeName, coffeeDesc, coffeePrice,) => {\r\n\r\n  const coffeeBrews = document.createElement('div');\r\n\r\n  const brewImage = document.createElement('img');\r\n  brewImage.src = coffeeImage;\r\n  coffeeBrews.appendChild(brewImage);\r\n\r\n  const brewName = document.createElement('h3');\r\n  brewName.textContent = coffeeName;\r\n  coffeeBrews.appendChild(brewName);\r\n\r\n  const brewDesc = document.createElement('p');\r\n  brewDesc.textContent = coffeeDesc;\r\n  coffeeBrews.appendChild(brewDesc);\r\n\r\n  const brewPrice = document.createElement('p');\r\n  brewPrice.textContent = coffeePrice;\r\n  coffeeBrews.appendChild(brewPrice);\r\n\r\n  return coffeeBrews;\r\n};\r\n\r\nconst coffeeMenu = () => {\r\n  const menu = document.createElement('div');\r\n  menu.className = 'menu-grid home';\r\n\r\n    menu.appendChild(coffeeBrewMenu(\r\n      './images/cappuccino.jpg',\r\n      'Cappuccino',\r\n      'Traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam',\r\n      'ksh. 1,350'\r\n      ),\r\n    );\r\n\r\n    menu.appendChild(coffeeBrewMenu(\r\n      './images/caramel-macchiato.jpg',\r\n      'Caramel Macchiato',\r\n      'Made with vanilla syrup, steamed milk, espresso and caramel sauce',\r\n      'ksh. 1,150'\r\n      ),\r\n    );\r\n\r\n    menu.appendChild(coffeeBrewMenu(\r\n      './images/french-vanilla.jpg',\r\n      'French Vanilla',\r\n      'Made with whole milk and granulated sugar, and heated over medium heat until steaming',\r\n      'ksh. 1,475'\r\n      ),\r\n    );\r\n\r\n    menu.appendChild(coffeeBrewMenu(\r\n      './images/hot-chocolate.jpg',\r\n      'Hot Chocolate',\r\n      'Made with combined milk, cocoa powder, and semi sweet chocolate, and brought to a simmer',\r\n      'ksh. 1,600'\r\n      ),\r\n    );\r\n\r\n    menu.appendChild(coffeeBrewMenu(\r\n      './images/latte.jpg',\r\n      'Italian latte',\r\n      'The hot milk and creamy milk foam are imbued with the delicious flavour of coffee',\r\n      'ksh. 1,800'\r\n      ),\r\n    );\r\n\r\n    menu.appendChild(coffeeBrewMenu(\r\n      './images/mocha.jpg',\r\n      'Cappuccino',\r\n      'Is a chocolate-flavoured warm beverage that is a variant of a caffè latte',\r\n      'ksh. 1,350'\r\n      ),\r\n    );\r\n  \r\n   return menu;\r\n};\r\n\r\nconst showMenu = () => {\r\n  const mainMenu = document.createElement('div');\r\n  mainMenu.textContent = '';\r\n  mainMenu.append(coffeeMenu());\r\n  return mainMenu;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);\n\n//# sourceURL=webpack://restaurant/./src/brews.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactUs = () => {\r\n  const contact = document.createElement('div');\r\n  contact.className = 'center home';\r\n\r\n  const h1 = document.createElement('h1');\r\n  h1.className = 'center';\r\n  h1.textContent = 'Feel free to reach us..';\r\n  contact.append(h1);\r\n\r\n  const p = document.createElement('p');\r\n  p.textContent = 'We are located at Kenyatta Avenue, Latema strt, opposite National Achives, Nairobi CBD.';\r\n  contact.append(p);\r\n\r\n  const p2 = document.createElement('p');\r\n  p2.textContent = 'Call us: (+254) 222 444 600 or (+254) 334 555 222';\r\n  contact.append(p2);\r\n\r\n  const formDiv = document.createElement('div');\r\n  const form = document.createElement('form');\r\n\r\n  const emailLabel = document.createElement('label');\r\n  emailLabel.className = 'email-label';\r\n  const label = document.createTextNode('Email');\r\n  emailLabel.append(label);\r\n  form.append(emailLabel);\r\n  formDiv.append(form);\r\n  contact.append(formDiv);\r\n\r\n  const email = document.createElement('input');\r\n  email.setAttribute('type', 'text');\r\n  email.setAttribute('placeholder', 'bunny@example.com');\r\n  form.append(email);\r\n  formDiv.append(form);\r\n  contact.append(formDiv);\r\n\r\n  const textLabel = document.createElement('label');\r\n  textLabel.className = 'text-label';\r\n  const text = document.createTextNode('Leave us some feedback');\r\n  textLabel.append(text);\r\n  form.append(textLabel);\r\n  formDiv.append(form);\r\n  contact.append(formDiv);\r\n\r\n  const textarea = document.createElement('textarea');\r\n  const message = document.createTextNode('Drop some feedback on how you liked our size, and or how we should improve inoder to make this place your favorite coffee spot..');\r\n  textarea.append(message);\r\n  form.append(textarea);\r\n  formDiv.append(form);\r\n  contact.append(formDiv);\r\n\r\n  const submit = document.createElement(\"input\");\r\n  submit.setAttribute(\"type\", \"submit\");\r\n  form.append(submit);\r\n  formDiv.append(form);\r\n  contact.append(formDiv);\r\n  \r\n  return contact;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUs);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeLink\": () => (/* binding */ homeLink),\n/* harmony export */   \"menuLink\": () => (/* binding */ menuLink),\n/* harmony export */   \"contactLink\": () => (/* binding */ contactLink),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeLink = document.createElement('a'); \r\nconst menuLink = document.createElement('a');\r\nconst contactLink = document.createElement('a');\r\n\r\nconst header = () => {\r\n  const navigation = document.createElement('div');\r\n  navigation.className = 'd-flex justify-content-between header';\r\n\r\n  const img_div = document.createElement('div');\r\n  const logo = document.createElement('img');\r\n  logo.className = 'shop-logo'\r\n  logo.setAttribute(\"src\", \"./images/logo.png\");\r\n  img_div.append(logo);\r\n  navigation.append(img_div);\r\n\r\n  const links = document.createElement('ul');\r\n  links.className = 'navigationBar';\r\n  \r\n\r\n  homeLink.textContent = 'Home';\r\n  const homeItem = document.createElement('li');\r\n\r\n  homeItem.appendChild(homeLink);\r\n  links.appendChild(homeItem);\r\n  \r\n\r\n  menuLink.textContent = 'Menu';\r\n  const menuItem = document.createElement('li');\r\n  menuItem.appendChild(menuLink);\r\n  links.appendChild(menuItem);\r\n\r\n  contactLink.textContent = 'Contact Us';\r\n  const contactItem = document.createElement('li');\r\n  contactItem.appendChild(contactLink);\r\n  links.appendChild(contactItem);\r\n\r\n  navigation.appendChild(links);\r\n  return navigation;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about =()=> {\r\n\r\n  const section = document.createElement('section');\r\n  section.className = 'home';\r\n\r\n  const largeDiv = document.createElement('div');\r\n  largeDiv.className = 'd-flex flex-row';\r\n\r\n  const leftDiv = document.createElement('div');\r\n  const welcomeImage = document.createElement('img');\r\n  welcomeImage.className = 'big-image';\r\n  welcomeImage.setAttribute(\"src\", \"./images/Coffee.jpeg\");\r\n  leftDiv.append(welcomeImage);\r\n  largeDiv.append(leftDiv);\r\n\r\n  const rightDiv = document.createElement('div');\r\n  const heading = document.createElement(\"h4\");\r\n  heading.textContent = \"Mbegera's Coffee Shop\";\r\n  heading.className = 'heading';\r\n  rightDiv.append(heading);\r\n  largeDiv.append(rightDiv);\r\n\r\n  const p = document.createElement('p');\r\n  p.textContent = \"At Mbegera's, we take great care to serve quality, great-tasting menu items to our customers each and every time they visit our restaurants. We understand that each of our customers has individual needs and considerations when choosing a place to eat or drink outside their home, especially those customers with food allergies. As part of our commitment to you, we provide the most current ingredient information available from our food suppliers for the eight most common allergens\";\r\n  p.className = 'paragraph'\r\n  rightDiv.append(p);\r\n  largeDiv.append(rightDiv);\r\n  \r\n  section.append(largeDiv);\r\n\r\n  return section;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\r\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _brews_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brews.js */ \"./src/brews.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst navSection = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\nconst homePage = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\nconst menuPage = (0,_brews_js__WEBPACK_IMPORTED_MODULE_2__.default)();\r\nconst contactPage = (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n\r\nconst content = document.querySelector('#content');\r\ncontent.append(navSection);\r\n\r\nconst viewTab = (tab) => {\r\n  content.innerHTML = '';\r\n  content.append(navSection, tab);\r\n}\r\n\r\n_header_js__WEBPACK_IMPORTED_MODULE_0__.homeLink.addEventListener('click', ()=>{viewTab(homePage)});\r\n_header_js__WEBPACK_IMPORTED_MODULE_0__.menuLink.addEventListener('click', ()=>{viewTab(menuPage)});\r\n_header_js__WEBPACK_IMPORTED_MODULE_0__.contactLink.addEventListener('click', ()=>{viewTab(contactPage)});\r\nviewTab(homePage);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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