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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collections.js":
/*!*************************************!*\
  !*** ./src/dom_node_collections.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arr) {\n    this.elements = arr;\n  }\n\n  html(str) {\n    if (str === undefined) {\n      return this.elements[0].innerHTML;\n    } else {\n      this.elements.forEach( (ele) => {\n        ele.innerHTML = str;\n      });\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(el) {\n    if (el instanceof Array) {\n      el.forEach((ele) => {\n        this.html(ele.outerHTML);\n      });\n    } else if (el instanceof HTMLElement){\n      this.html(el.outerHTML);\n    } else {\n      this.html(el);\n    }\n    \n  }\n\n  attr(key, values) {\n    this.elements.forEach( (el) => {\n      el.setAttribute(key, values);\n    });\n  }\n\n  addClass(class_name) {\n    this.elements.forEach( (el) => {\n      el.className = class_name;\n    });\n  }\n\n  removeClass() {\n    this.addClass(\"\");\n  }\n\n  children() {\n    let arr = [];\n    this.elements.forEach( (ele) => {\n      arr.push(ele.children);\n    });\n    return new DOMNodeCollection(arr);\n  }\n\n  parent() {\n    let arr = [];\n    this.elements.forEach((ele) => {\n      arr.push(ele.parentElement);\n    });\n    return new DOMNodeCollection(arr);\n  }\n\n  find(selector){   //ul.find()\n    let arr = [];\n    this.elements.forEach((ele) => {\n      let subArr = Array.from( ele.querySelectorAll(selectors) );\n      arr = arr.concat(subArr);\n    });\n    return new DOMNodeCollection(arr);\n  }\n\n  remove(){\n    this.elements.forEach( (ele) => {\n      ele.remove();\n    });\n  }\n\n  on(event, cb){\n    this.elements.forEach( (el) => {\n      el.attr(\"callback\", cb);\n      el.addEventListener(event,cb);\n    });\n  }\n\n  off(event){\n    this.elements.forEach( (el) => {\n      let cb = el.getAttribute(\"callback\");\n      el.removeEventListener(event, cb);\n    });\n  }\n\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collections.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collections.js */ \"./src/dom_node_collections.js\");\n\nwindow.$l = (el, func) => {\n  let queue = [];\n\n  if (document.readyState != 'loading') {\n    func();\n  } else {\n    queue.push(func);\n    document.addEventListener(\"DOMContentLoaded\", (event) => {\n      queue.forEach((fxn) => {\n        fxn();\n      });\n    });\n  }\n  const elements = document.querySelectorAll(el);\n  let arrEle = Array.from(elements);\n  return new DOMNodeCollection(arrEle);\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });