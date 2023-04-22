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

/***/ "./modules/foodArea.js":
/*!*****************************!*\
  !*** ./modules/foodArea.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dropdownFoodAreaes = document.querySelector('.dropdown-food-areaes');\n\nconst foodAreaes = {\n  displayAreaes: () => {\n    const getResponse = async () => {\n      const response = await fetch(\n        'https://www.themealdb.com/api/json/v1/1/list.php?a=list',\n        {\n          method: 'GET',\n        },\n      );\n\n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n      const foodAreaesData = await response.json();\n      return foodAreaesData;\n    };\n\n    getResponse().then((foodAreaesData) => {\n      const areaesData = foodAreaesData.meals;\n\n      dropdownFoodAreaes.innerHTML = areaesData.map((area) => `\n        <a href=\"#\">${area.strArea}</a>\n      `).join('');\n    });\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodAreaes);\n\n\n//# sourceURL=webpack://food-menu/./modules/foodArea.js?");

/***/ }),

/***/ "./modules/foodCategories.js":
/*!***********************************!*\
  !*** ./modules/foodCategories.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dropdownFoodCategories = document.querySelector('.dropdown-food-categories');\n\nconst foodCategories = {\n  displayCategories: () => {\n    const getResponse = async () => {\n      const response = await fetch(\n        'https://www.themealdb.com/api/json/v1/1/list.php?c=list',\n        {\n          method: 'GET',\n        },\n      );\n\n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n      const foodCategoriesData = await response.json();\n      return foodCategoriesData;\n    };\n\n    getResponse().then((foodCategoriesData) => {\n      const categoriesData = foodCategoriesData.meals;\n\n      dropdownFoodCategories.innerHTML = categoriesData.map((category) => `\n        <a href=\"#\" id=\"category-${category.strCategory}\">${category.strCategory}</a>\n      `).join('');\n    });\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodCategories);\n\n//# sourceURL=webpack://food-menu/./modules/foodCategories.js?");

/***/ }),

/***/ "./modules/foodComment.js":
/*!********************************!*\
  !*** ./modules/foodComment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _foodRandomSelection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodRandomSelection.js */ \"./modules/foodRandomSelection.js\");\n\n\nconst createPop = () => {\n  const body = document.querySelector('body');\n  const div = document.createElement('div');\n\n  const get = async (ID) => {\n    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mV26cirAdGiyCoVktEPn/comments?item_id=${ID}`);\n    let output = [];\n    const data = await res.json();\n    data.forEach((Comment) => {\n      output += `<p>[${Comment.creation_date}]&nbsp;&nbsp;${Comment.username}:${Comment.comment}</p>`;\n    });\n    const comments = document.querySelectorAll('.comments');\n    comments.forEach((etc) => {\n      etc.innerHTML = output;\n    });\n  };\n\n  _foodRandomSelection_js__WEBPACK_IMPORTED_MODULE_0__.mealsArray.forEach((api) => {\n    const popupC = `\n<div class=\"popup\">\n<img class=\"close\" onclick=\"this.parentNode.style.display = 'none';\" src=\"https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png\">\n<img class=\"popImg\" src=\"${api[0].strMealThumb}\">\n<h3 class=\"FoodName\">${api[0].strMeal}</h3>\n<p class=\"ingredients\">\nThe Ingredients\n</p>\n<div class=\"ingredientC\">\n${api[0].strIngredient1}\n${api[0].strIngredient2}\n${api[0].strIngredient3}\n${api[0].strIngredient4}\n${api[0].strIngredient5}\n${api[0].strIngredient6}\n${api[0].strIngredient7}\n${api[0].strIngredient8}\n${api[0].strIngredient9}\n${api[0].strIngredient10}\n${api[0].strIngredient11}\n${api[0].strIngredient12}\n${api[0].strIngredient13}\n${api[0].strIngredient14}\n${api[0].strIngredient15}\n${api[0].strIngredient16}\n${api[0].strIngredient17}\n${api[0].strIngredient18}\n${api[0].strIngredient19}\n${api[0].strIngredient20}\n</div>\n<div class=\"commentTitle\">\nComments\n</div>\n<div class=\"comments\">\n</div><br>\n<form class=\"flexForm\">\n<div class=\"commentTitle\" align=\"center\">\nAdd comment\n</div>\n<input type=\"text\" class=\"username\" placeholder=\"username\"><br>\n<input type=\"text\" class=\"message\" placeholder=\"message\"><br>\n<button class=\"submit\" type=\"button\">Submit</button>\n<div class=\"idMeal\">${api[0].idMeal}</div>\n</form>\n</div>\n`;\n    get(`\"${api[0].idMeal}\"`);\n\n    div.innerHTML += popupC;\n  });\n  body.appendChild(div);\n};\n\nwindow.setTimeout(() => {\n  const popButton = document.querySelectorAll('.btnForComments');\n\n  for (let i = 0; i < popButton.length; i += 1) {\n    popButton[i].addEventListener('click', () => {\n      document.querySelectorAll('.popup')[i].style.display = 'flex';\n    });\n  }\n}, 3000);\n\nconst submitC = async (item1, user1, ID) => {\n  // eslint-disable-next-line\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mV26cirAdGiyCoVktEPn/comments/', {\n\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: `\"${ID}\"`,\n      username: item1,\n      comment: user1,\n    }),\n  });\n\n  const get = async (ID) => {\n    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mV26cirAdGiyCoVktEPn/comments?item_id=${ID}`);\n    let output = [];\n    const data = await res.json();\n    data.forEach((Comment) => {\n      output += `<p>[${Comment.creation_date}]&nbsp;&nbsp;${Comment.username}:${Comment.comment}</p>`;\n    });\n    const comments = document.querySelectorAll('.comments');\n    comments.forEach((etc) => {\n      etc.innerHTML = output;\n    });\n  };\n  get(`\"${ID}\"`);\n};\n\nwindow.setTimeout(() => {\n  const submit = document.querySelectorAll('.submit');\n  submit.forEach((sub) => {\n    sub.addEventListener('click', (e) => {\n      submitC(// eslint-disable-next-line\n        e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value,\n        e.target.previousElementSibling.previousElementSibling.value,\n        e.target.nextElementSibling.innerHTML,\n      );\n    });\n  });\n}, 3000);\n\n// submit.forEach((e) => {\n//   e.addEventListener(\"click\", () => {\n//     console.log(\"working\")\n//   })\n// })\n\n// document.querySelector(\".logo\").addEventListener(\"click\", function() {\n//     document.querySelector(\".popup\").style.display = \"flex\"\n// })\n\n// })\n\n// })\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPop);\n\n//# sourceURL=webpack://food-menu/./modules/foodComment.js?");


/***/ }),

/***/ "./modules/foodIngredients.js":
/*!************************************!*\
  !*** ./modules/foodIngredients.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dropdownFoodIngredients = document.querySelector('.dropdown-food-ingredients');\n\nconst foodIngredients = {\n  displayIngredients: () => {\n    const getResponse = async () => {\n      const response = await fetch(\n        'https://www.themealdb.com/api/json/v1/1/list.php?i=list',\n        {\n          method: 'GET',\n        },\n      );\n\n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n      const foodIngredientsdata = await response.json();\n      return foodIngredientsdata;\n    };\n\n    getResponse().then((foodIngredientsdata) => {\n      const ingredientsData = foodIngredientsdata.meals;\n\n      dropdownFoodIngredients.innerHTML = ingredientsData.map((ingredient) => `\n        <a href=\"#\">${ingredient.strIngredient}</a>\n      `).join('');\n    });\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodIngredients);\n\n//# sourceURL=webpack://food-menu/./modules/foodIngredients.js?");

/***/ }),

/***/ "./modules/foodRandomSelection.js":
/*!****************************************!*\
  !*** ./modules/foodRandomSelection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"foodRandomSelection\": () => (/* binding */ foodRandomSelection),\n/* harmony export */   \"mealsArray\": () => (/* binding */ mealsArray)\n/* harmony export */ });\nconst foodCards = document.querySelector('.foodCards');\nconst mealsArray = [];\nlet counter = 0;\nconst foodRandomSelection = {\n  displayRandomFoodSelection: () => {\n    const getResponse = async () => {\n      while (counter < 9) {\n        // eslint-disable-next-line no-await-in-loop\n        const response = await fetch(\n          'https://www.themealdb.com/api/json/v1/1/random.php',\n          {\n            method: 'GET',\n          },\n        );\n\n        // eslint-disable-next-line no-await-in-loop\n        const foodRandomdata = await response.json();\n        mealsArray.push(foodRandomdata.meals);\n        // eslint-disable-next-line space-infix-ops\n        counter+=1;\n      }\n      return mealsArray;\n    };\n    getResponse().then((mealsArray) => {\n      const MealsData = mealsArray;\n      foodCards.innerHTML = MealsData.map((meal) => `\n        <div class=\"card\">\n          <img src=\"${meal[0].strMealThumb}\" class=\"img-food\">\n          <div class=\"food-info\">\n            <p class=\"food-name\">${meal[0].strMeal}</p>\n            <p class=\"likeSymbol\">&#10084;</p>\n            <div class=\"likenCount\">\n              <div class=\"likeCount\">count</div>\n              <div class=\"likes\">likes</div>\n            </div>\n          </div>\n\n          <div class=\"buttons\">\n            <input type=\"button\" class=\"btnForComments\" value=\"Comments\">\n            <input type=\"button\" class=\"btnForReservations\" value=\"Reservations\">\n          </div>\n        </div>\n      `).join('');\n    });\n  },\n\n};\n\n// eslint-disable-next-line space-infix-ops\nconst exporting = () => {\n  // eslint-disable-next-line\n  mealsArray;\r\n};\n\nwindow.setTimeout(exporting, 2);\n\n\n\n//# sourceURL=webpack://food-menu/./modules/foodRandomSelection.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/foodLogo.png */ \"./images/foodLogo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&family=Roboto:wght@300;500;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  line-height: 1.5;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  background-color: purple;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  min-height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nimg,\\r\\npicture,\\r\\nvideo,\\r\\ncanvas,\\r\\nsvg {\\r\\n  display: block;\\r\\n  max-width: 100%;\\r\\n}\\r\\n\\r\\ninput,\\r\\nbutton,\\r\\ntextarea,\\r\\nselect {\\r\\n  font: inherit;\\r\\n}\\r\\n\\r\\np,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n  overflow-wrap: break-word;\\r\\n}\\r\\n\\r\\n#root,\\r\\n#__next {\\r\\n  isolation: isolate;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  margin-top: 1vw;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  width: 80px;\\r\\n  height: 50px;\\r\\n  background-size: contain;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.foodCategories,\\r\\n.foodAreaes,\\r\\n.foodIngredients {\\r\\n  float: left;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.dropdown .dropDownBtn {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  color: white;\\r\\n  padding: 14px 16px;\\r\\n  background-color: inherit;\\r\\n  font-family: inherit;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.fa-caret-down {\\r\\n  margin-left: 5px;\\r\\n}\\r\\n\\r\\n.dropdown-content {\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  min-width: 160px;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.dropdown-content a {\\r\\n  float: none;\\r\\n  color: #000;\\r\\n  padding: 5px 16px;\\r\\n  text-decoration: none;\\r\\n  display: block;\\r\\n  text-align: left;\\r\\n  background-color: purple;\\r\\n}\\r\\n\\r\\n.dropdown-content a:hover {\\r\\n  color: gold;\\r\\n}\\r\\n\\r\\n.dropdown:hover .dropdown-content {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n  align-self: center;\\r\\n  cursor: pointer;\\r\\n  color: gold;\\r\\n}\\r\\n\\r\\n.foodItems {\\r\\n  padding-bottom: 7vw;\\r\\n}\\r\\n\\r\\n.foodCards {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 5vw;\\r\\n  flex-wrap: wrap;\\r\\n  margin-top: 5vw;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.img-food {\\r\\n  cursor: pointer;\\r\\n  max-width: 25vw;\\r\\n  min-width: 25vw;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.food-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.food-name {\\r\\n  cursor: pointer;\\r\\n  margin-left: 0.5vw;\\r\\n  flex-wrap: nowrap;\\r\\n  max-width: 25vw;\\r\\n  min-width: 25vw;\\r\\n}\\r\\n\\r\\n.likeSymbol {\\r\\n  align-self: flex-end;\\r\\n  margin-right: 0.75vw;\\r\\n  margin-top: -1vw;\\r\\n  padding: 10px;\\r\\n  cursor: pointer;\\r\\n  color: red;\\r\\n  font-size: 1.2em;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.likenCount {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: end;\\r\\n  margin-top: -10px;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.likeCount {\\r\\n  margin-right: 0.5rem;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  align-self: flex-end;\\r\\n  margin-top: -1vw;\\r\\n  margin-right: 0.5vw;\\r\\n}\\r\\n\\r\\n.buttons {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 15px;\\r\\n  align-items: center;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.btnForComments {\\r\\n  width: 80%;\\r\\n  padding: 5px 0;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 3px 3px 3px 1px #4c4a4b;\\r\\n}\\r\\n\\r\\n.btnForReservations {\\r\\n  width: 80%;\\r\\n  padding: 5px 0;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 3px 3px 3px 1px #4c4a4b;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  border-top: 1px solid #da729f2a;\\r\\n  border-bottom: 1px solid #da729f2a;\\r\\n  padding: 5px 0;\\r\\n  margin-bottom: 5px;\\r\\n  background-color: #da729f2a;\\r\\n}\\r\\n\\r\\n.footer-text {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.footer-name {\\r\\n  text-decoration: none;\\r\\n  color: gold;\\r\\n}\\r\\n\\r\\n.love-created {\\r\\n  color: red;\\r\\n  font-size: 1.2em;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  overflow: scroll;\\r\\n  overflow-x: hidden;\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  background: rgb(115, 22, 168);\\r\\n  width: 800px;\\r\\n  height: 650px;\\r\\n  border: black solid 2px;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n}\\r\\n\\r\\n.close {\\r\\n  width: 30px;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.popImg {\\r\\n  width: 400px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.FoodName {\\r\\n  margin-top: 5px;\\r\\n  text-align: center;\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.ingredients {\\r\\n  margin-left: 7px;\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n.ingredientC {\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n.commentTitle {\\r\\n  font-weight: 1000;\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  margin-top: 7px;\\r\\n}\\r\\n\\r\\n.submit {\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.flexForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.username {\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.message {\\r\\n  padding-bottom: 105px;\\r\\n  width: 200px;\\r\\n  height: 120px;\\r\\n}\\r\\n\\r\\n.idMeal {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://food-menu/./src/index.css?./node_modules/css-loader/dist/cjs.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://food-menu/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://food-menu/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://food-menu/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://food-menu/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://food-menu/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://food-menu/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://food-menu/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://food-menu/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://food-menu/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://food-menu/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_foodArea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/foodArea.js */ \"./modules/foodArea.js\");\n/* harmony import */ var _modules_foodCategories_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/foodCategories.js */ \"./modules/foodCategories.js\");\n/* harmony import */ var _modules_foodIngredients_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/foodIngredients.js */ \"./modules/foodIngredients.js\");\n/* harmony import */ var _modules_foodRandomSelection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/foodRandomSelection.js */ \"./modules/foodRandomSelection.js\");\n/* harmony import */ var _modules_foodComment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/foodComment.js */ \"./modules/foodComment.js\");\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_foodArea_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayAreaes);\ndocument.addEventListener('DOMContentLoaded', _modules_foodCategories_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayCategories);\ndocument.addEventListener('DOMContentLoaded', _modules_foodIngredients_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayIngredients);\ndocument.addEventListener('DOMContentLoaded', _modules_foodRandomSelection_js__WEBPACK_IMPORTED_MODULE_4__.foodRandomSelection.displayRandomFoodSelection);\nwindow.setTimeout(_modules_foodComment_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], 2700);\n\n\n//# sourceURL=webpack://food-menu/./src/index.js?");


/***/ }),

/***/ "./images/foodLogo.png":
/*!*****************************!*\
  !*** ./images/foodLogo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5f65db00eeb8b12c90f.png\";\n\n//# sourceURL=webpack://food-menu/./images/foodLogo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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