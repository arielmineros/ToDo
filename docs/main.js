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

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-inicial/./src/css/styles.css?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* reexport safe */ _todo_class__WEBPACK_IMPORTED_MODULE_1__.Todo),\n/* harmony export */   \"TodoList\": () => (/* reexport safe */ _todo_list__WEBPACK_IMPORTED_MODULE_0__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list */ \"./src/classes/todo-list.js\");\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.js":
/*!**********************************!*\
  !*** ./src/classes/todo-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n\n\nclass TodoList {\n    constructor() {\n        this.cargarLocalStorage();\n        this.pendiente();\n    }\n\n    nuevoTodo(todo) {\n        this.todos.push(todo);\n        this.guardarLocalStorage();\n    }\n\n    eliminarTodo(id) {\n        this.todos = this.todos.filter((todo) => todo.id !== parseInt(id));\n        this.guardarLocalStorage();\n    }\n\n    marcarCompletado(id) {\n        for (const todo of this.todos) {\n            if (todo.id == id) {\n                todo.completado = !todo.completado;\n                this.guardarLocalStorage();\n                break;\n            }\n        }\n    }\n\n    eliminarCompletados() {\n        this.todos = this.todos.filter((todo) => !todo.completado);\n        this.guardarLocalStorage();\n    }\n    guardarLocalStorage() {\n        localStorage.setItem(\"todo\", JSON.stringify(this.todos));\n        this.pendiente();\n    }\n    cargarLocalStorage() {\n        this.todos = localStorage.getItem(\"todo\")\n            ? JSON.parse(localStorage.getItem(\"todo\"))\n            : [];\n        this.todos = this.todos.map(_todo_class__WEBPACK_IMPORTED_MODULE_1__.Todo.fromJson);\n    }\n    // Método que muestra los todos pendientes\n    pendiente() {\n        let i = 0;\n        const pendientes = document.querySelector(\".todo-count\");\n        for (const todo of this.todos) {\n            if (todo.completado == true) {\n                i += 1;\n            }\n        }\n        pendientes.textContent = `${this.todos.length - i} pendiente(s)`;\n    }\n}\n\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/todo-list.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    static fromJson({ id, tarea, completado, creado }) {\n        const tempTodo = new Todo(tarea);\n        tempTodo.id = id;\n        tempTodo.completado = completado;\n        tempTodo.creado = creado;\n        return tempTodo;\n    }\n    constructor(tarea) {\n        this.tarea = tarea;\n        this.id = new Date().getTime();\n        this.completado = false;\n        this.creado = new Date();\n    }\n}\n\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components */ \"./src/js/components.js\");\n\n\n\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__.TodoList();\n\ntodoList.todos.forEach((todo) => (0,_js_components__WEBPACK_IMPORTED_MODULE_2__.crearTodoHtml)(todo));\n//console.log(\"todos\", todoList.todos);\n//console.log(todoList);\n//console.log(todoList.todos.length);\n\n\n//# sourceURL=webpack://webpack-inicial/./src/index.js?");

/***/ }),

/***/ "./src/js/components.js":
/*!******************************!*\
  !*** ./src/js/components.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearTodoHtml\": () => (/* binding */ crearTodoHtml)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n// Importaciones\n\n\n\n// Referencias en el HTML\nconst divTodoList = document.querySelector(\".todo-list\");\nconst txtInput = document.querySelector(\".new-todo\");\nconst btnBorrar = document.querySelector(\".clear-completed\");\nconst fulFilter = document.querySelector(\".filters\");\nconst anchorFiltros = document.querySelectorAll(\".filtro\");\n\nconst crearTodoHtml = (todo) => {\n    const htmlTodo = `\n  <li class=\"${todo.completado ? \"completed\" : \"\"}\" data-id=\"${todo.id}\">\n    <div class=\"view\">\n      <input class=\"toggle\" type=\"checkbox\" ${todo.completado ? \"checked\" : \"\"}>\n      <label>${todo.tarea}</label>\n      <button class=\"destroy\"></button>\n    </div>\n    <input class=\"edit\" value=\"Create a TodoMVC template\">\n  </li>`;\n\n    const div = document.createElement(\"div\");\n    div.innerHTML = htmlTodo;\n    divTodoList.append(div.firstElementChild);\n\n    return div.firstElementChild;\n};\n\ntxtInput.addEventListener(\"keyup\", (event) => {\n    if (event.code === \"Enter\" && txtInput.value.length > 0) {\n        const nuevaTarea = new _classes__WEBPACK_IMPORTED_MODULE_0__.Todo(txtInput.value);\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.nuevoTodo(nuevaTarea);\n        crearTodoHtml(nuevaTarea);\n        txtInput.value = \"\";\n    }\n});\n\ndivTodoList.addEventListener(\"click\", (event) => {\n    const nombreElemento = event.target.localName; // input, button, label\n    const todoElemento = event.target.parentElement.parentElement;\n    const todoId = todoElemento.getAttribute(\"data-id\");\n\n    if (nombreElemento.includes(\"input\")) {\n        // click en el check\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.marcarCompletado(todoId);\n        todoElemento.classList.toggle(\"completed\");\n    } else if (nombreElemento.includes(\"button\")) {\n        // click en botón borrar\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarTodo(todoId);\n        divTodoList.removeChild(todoElemento);\n    }\n});\n\nbtnBorrar.addEventListener(\"click\", () => {\n    _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarCompletados();\n    for (let i = divTodoList.children.length - 1; i >= 0; i--) {\n        const elemento = divTodoList.children[i];\n        if (elemento.classList.contains(\"completed\")) {\n            divTodoList.removeChild(elemento);\n        }\n    }\n});\n\nfulFilter.addEventListener(\"click\", (event) => {\n    const filtro = event.target.text;\n    if (!filtro) {\n        return;\n    }\n    anchorFiltros.forEach((element) => element.classList.remove(\"selected\"));\n    event.target.classList.add(\"selected\");\n\n    for (const elemento of divTodoList.children) {\n        elemento.classList.remove(\"hidden\");\n        const completado = elemento.classList.contains(\"completed\");\n        switch (filtro) {\n            case \"Pendientes\":\n                if (completado) {\n                    elemento.classList.add(\"hidden\");\n                }\n                break;\n            case \"Completados\":\n                if (!completado) {\n                    elemento.classList.add(\"hidden\");\n                }\n        }\n    }\n});\n\n\n//# sourceURL=webpack://webpack-inicial/./src/js/components.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;