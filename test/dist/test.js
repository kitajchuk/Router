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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Router.js":
/*!*******************!*\
  !*** ./Router.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var properjs_historia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! properjs-historia */ \"./node_modules/properjs-historia/Historia.js\");\n/* harmony import */ var properjs_matchroute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! properjs-matchroute */ \"./node_modules/properjs-matchroute/MatchRoute.js\");\n/* harmony import */ var properjs_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! properjs-controller */ \"./node_modules/properjs-controller/Controller.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar triggerEl;\nvar activeEl;\nvar initDelay = 200;\nvar rHTTPs = /^http[s]?:\\/\\/.*?\\//;\nvar rFiles = /\\.(jpg|jpeg|png|gif|pdf|csv|txt|md|doc|docx|xls|xlsx|webm|mp4|mp3)$/gi;\nvar rDomain = new RegExp(document.domain);\n\nvar Router = /*#__PURE__*/function (_Controller) {\n  _inherits(Router, _Controller);\n\n  var _super = _createSuper(Router);\n\n  function Router(options) {\n    var _this;\n\n    _classCallCheck(this, Router);\n\n    _this = _super.call(this);\n    _this._options = {\n      async: true,\n      proxy: false,\n      caching: true,\n      handle404: true,\n      handle500: true,\n      historyOptions: {}\n    }; // Normalize usage options passed in\n\n    options = options || {}; // Merge usage options with defaults\n\n    for (var i in options) {\n      _this._options[i] = options[i];\n    }\n\n    _this._matcher = new properjs_matchroute__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    _this._history = new properjs_historia__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this._options.historyOptions);\n    _this._callbacks = [];\n    _this._responses = {};\n    _this._ready = false;\n    _this._isRouting = false;\n    return _this;\n  }\n\n  _createClass(Router, [{\n    key: \"bind\",\n    value: function bind() {\n      var _this2 = this;\n\n      // Ensure this first cache URL is clean as a whistle\n      var url = window.location.href.replace(window.location.hash, \"\"); // Bind GET requests to links\n\n      document.addEventListener(\"click\", function (e) {\n        _this2._handleClick(e);\n      }, false); // Bind popstate event for history\n\n      this._history.on(\"popstate\", function (url, state) {\n        _this2._handlePopstate(url, state);\n      }); // Fire first route\n      // Async this in order to allow .get() to work after instantiation\n\n\n      if (this._options.async && this._options.handle404) {\n        this._route(url, function ()\n        /*response, status*/\n        {\n          _this2._ready = true;\n        }); // Shim a little and bypass true XHR here if not handling 404s\n\n      } else {\n        setTimeout(function () {\n          // https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer\n          var doc = new XMLSerializer().serializeToString(document);\n          var xhr = {\n            status: 200,\n            responseText: doc\n          };\n\n          _this2._fire(url, xhr, xhr.status);\n\n          _this2._cache(url, xhr);\n\n          _this2._ready = true;\n        }, initDelay);\n      }\n    }\n  }, {\n    key: \"trigger\",\n    value: function trigger(url) {\n      if (!triggerEl) {\n        triggerEl = document.createElement(\"a\");\n      }\n\n      triggerEl.href = url;\n\n      this._handleClick(triggerEl, {\n        target: triggerEl\n      });\n    }\n  }, {\n    key: \"get\",\n    value: function get(route, callback) {\n      // Add route to matcher\n      this._matcher.config([route]); // Bind the route to the callback\n\n\n      if (callback._routerRoutes) {\n        callback._routerRoutes.push(route);\n      } else {\n        callback._routerRoutes = [route];\n      } // When binding multiple routes to a single\n      // callback, we need to make sure the callbacks\n      // routes array is updated above but the callback\n      // only gets added to the list once.\n\n\n      if (callback._routerRoutes.length === 1) {\n        // this.on( \"get\", callback );\n        this._callbacks.push(callback);\n      }\n    }\n  }, {\n    key: \"getActiveEl\",\n    value: function getActiveEl() {\n      return activeEl;\n    }\n  }, {\n    key: \"getRouteForUrl\",\n    value: function getRouteForUrl(url) {\n      return this._matcher._cleanRoute(url);\n    }\n  }, {\n    key: \"getRouteDataForUrl\",\n    value: function getRouteDataForUrl(url) {\n      return this._matcher.parse(url, this._matcher.getRoutes()).params;\n    }\n  }, {\n    key: \"_preventDefault\",\n    value: function _preventDefault(e) {\n      if (e.preventDefault) {\n        e.preventDefault();\n      } else {\n        e.returnValue = false;\n      }\n    }\n  }, {\n    key: \"_handleClick\",\n    value: function _handleClick(e) {\n      var el = e.target;\n      var elem = el.matches(\"a\") ? el : el.closest(\"a\");\n\n      var isMatched = elem && this._matcher.test(elem.href);\n\n      var isDomain = elem && rDomain.test(elem.href);\n      var isProxy = elem && this._options.proxy && this._options.proxy.domain;\n      var isHashed = elem && elem.href.indexOf(\"#\") !== -1;\n      var isIgnore = elem && elem.className.indexOf(\"js-router--ignore\") !== -1;\n      var isMetaKey = elem && e.metaKey;\n      var isBlank = elem && elem.target === \"_blank\";\n      var isFile = elem && isDomain && elem.href.match(rFiles); // 0.1 => Ensure url passes MatchRoute config\n      // 0.2 => Ensure url is on the Document's Domain\n      // 0.X => Allow proxy domain's to go through this checkpoint\n\n      if (isMatched && isDomain || isProxy) {\n        // 0.3 => Ensure url is not a #hash\n        // 0.4 => Ensure the element does not contain a `js-router--ignore` className\n        // 0.5 => Ensure the Event.metaKey is not TRUE - Command+click\n        // 0.6 => Ensure the element target is not for a new tab\n        // 0.7 => Ensure url is not a file link on the same document domain\n        if (!isHashed && !isIgnore && !isMetaKey && !isBlank && !isFile) {\n          activeEl = elem;\n\n          this._preventDefault(e);\n\n          if (!this._isRouting) {\n            this._route(elem.href);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"_handlePopstate\",\n    value: function _handlePopstate(url\n    /*, state*/\n    ) {\n      // Hook around browsers firing popstate on pageload\n      if (this._ready) {\n        var dat;\n\n        for (var i = this._callbacks.length; i--;) {\n          dat = this._matcher.parse(url, this._callbacks[i]._routerRoutes);\n\n          if (dat.matched) {\n            break;\n          }\n        }\n\n        var data = {\n          route: this._matcher._cleanRoute(url),\n          response: this._responses[url],\n          request: dat,\n          status: this._responses[url].status\n        };\n        this.fire(\"popget\", data);\n      } else {\n        this._ready = true;\n      }\n    }\n  }, {\n    key: \"_route\",\n    value: function _route(url, callback) {\n      var _this3 = this;\n\n      var urls = {\n        // For XHR\n        request: url,\n        // For history and cache\n        original: url\n      };\n      this._isRouting = true;\n\n      this._matchUrl(urls.original); // Handle proxy first since we modify the request URL\n      // Basically, just piece together a URL that swaps this domain with proxy domain\n\n\n      if (this._options.proxy && this._options.proxy.domain) {\n        // Use window.location.host so it includes port for localhost\n        urls.request = this._options.proxy.domain + \"/\" + urls.request.replace(rHTTPs, \"\");\n      }\n\n      this._getUrl(urls, function (response, status) {\n        _this3._isRouting = false; // Push the URL to window History\n\n        _this3._history.push(urls.original); // Fire event for routing\n\n\n        _this3._fire(urls.original, response, status);\n\n        if (typeof callback === \"function\") {\n          callback(response, status);\n        }\n      });\n    }\n  }, {\n    key: \"_matchUrl\",\n    value: function _matchUrl(url) {\n      if (!this._ready) {\n        return;\n      }\n\n      for (var i = this._callbacks.length; i--;) {\n        var data = this._matcher.parse(url, this._callbacks[i]._routerRoutes);\n\n        if (data.matched) {\n          this.fire(\"preget\", data);\n          break;\n        }\n      }\n    }\n  }, {\n    key: \"_getUrl\",\n    value: function _getUrl(urls, callback) {\n      var _this4 = this;\n\n      var handler = function handler(res, stat) {\n        // Cache if option enabled\n        _this4._cache(urls.original, res);\n\n        if (typeof callback === \"function\") {\n          callback(res, stat);\n        }\n      };\n\n      var xhr = null; // Cached response ?\n\n      if (this._responses[urls.original]) {\n        handler(this._responses[urls.original], this._responses[urls.original].status); // Fresh request ?\n      } else if (this._options.async) {\n        xhr = new XMLHttpRequest();\n        xhr.open(\"GET\", urls.request, true);\n\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status === 200) {\n              handler(xhr, 200);\n            } else if (xhr.status === 404 && _this4._options.handle404) {\n              handler(xhr, 404);\n            } else if (xhr.status === 500 && _this4._options.handle500) {\n              handler(xhr, 500);\n            }\n          }\n        };\n\n        xhr.send();\n      } else {\n        handler({\n          responseText: \"\"\n        }, 200);\n      }\n    }\n  }, {\n    key: \"_cache\",\n    value: function _cache(url, res) {\n      // Caching is enabled, Not currently cached yet\n      if (this._options.caching && !this._responses[url]) {\n        this._responses[url] = res;\n      }\n    }\n  }, {\n    key: \"_fire\",\n    value: function _fire(url, response, status) {\n      // GET events have routes and are special ;-P\n      // This means we bypass the Controller event system for these handlers\n      for (var i = this._callbacks.length; i--;) {\n        var data = this._matcher.parse(url, this._callbacks[i]._routerRoutes);\n\n        if (data.matched) {\n          this._callbacks[i].call(this, {\n            route: this._matcher._cleanRoute(url),\n            response: response,\n            request: data,\n            status: status\n          });\n        }\n      }\n    }\n  }]);\n\n  return Router;\n}(properjs_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./Router.js?");

/***/ }),

/***/ "./node_modules/paramalama/paramalama.js":
/*!***********************************************!*\
  !*** ./node_modules/paramalama/paramalama.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (str) {\n  var query = decodeURIComponent(str).match(/[#|?].*$/g);\n  var ret = {};\n\n  if (query) {\n    query = query[0].replace(/^\\?|^#|^\\/|\\/$|\\[|\\]/g, \"\");\n    query = query.split(\"&\");\n\n    for (var i = query.length; i--;) {\n      var pair = query[i].split(\"=\");\n      var key = pair[0];\n      var val = pair[1];\n\n      if (ret[key]) {\n        // #2 https://github.com/kitajchuk/paramalama/issues/2\n        // This supposedly will work as of ECMA-262\n        // This works since we are not passing objects across frame boundaries\n        // and we are not considering Array-like objects. This WILL be an Array.\n        if ({}.toString.call(ret[key]) !== \"[object Array]\") {\n          ret[key] = [ret[key]];\n        }\n\n        ret[key].push(val);\n      } else {\n        ret[key] = val;\n      }\n    }\n  }\n\n  return ret;\n});\n\n//# sourceURL=webpack:///./node_modules/paramalama/paramalama.js?");

/***/ }),

/***/ "./node_modules/properjs-controller/Controller.js":
/*!********************************************************!*\
  !*** ./node_modules/properjs-controller/Controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar raf = window.requestAnimationFrame;\nvar caf = window.cancelAnimationFrame;\n\nvar Controller = /*#__PURE__*/function () {\n  function Controller() {\n    _classCallCheck(this, Controller);\n\n    // Unique event IDs\n    this._uid = 0;\n    this._uprop = \"properjsUID\"; // Store for event handlers\n\n    this._handlers = {}; // RAF manager props\n\n    this._started = false;\n    this._paused = false;\n    this._cycle = null;\n  }\n\n  _createClass(Controller, [{\n    key: \"uid\",\n    value: function uid() {\n      this._uid = this._uid + 1;\n      return this._uid;\n    }\n  }, {\n    key: \"go\",\n    value: function go(callback) {\n      var _this = this;\n\n      if (this._started) {\n        return this;\n      }\n\n      this._started = true;\n\n      this._anim = function (elapsed) {\n        _this._cycle = raf(_this._anim);\n\n        if (typeof callback === \"function\") {\n          callback(elapsed);\n        }\n      };\n\n      this._cycle = raf(this._anim);\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this._paused = true;\n      return this;\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this._paused = false;\n      return this;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      caf(this._cycle);\n      this._paused = false;\n      this._started = false;\n      this._cycle = null;\n      return this;\n    }\n  }, {\n    key: \"on\",\n    value: function on(event, handler) {\n      var events = event.split(\" \");\n      handler[this._uprop] = this.uid();\n\n      for (var i = events.length; i--;) {\n        if (typeof handler === \"function\") {\n          if (!this._handlers[events[i]]) {\n            this._handlers[events[i]] = [];\n          }\n\n          this._handlers[events[i]].push(handler);\n        }\n      }\n\n      return this;\n    }\n  }, {\n    key: \"off\",\n    value: function off(event, handler) {\n      if (!this._handlers[event]) {\n        return this;\n      }\n\n      if (handler) {\n        this._offOne(event, handler);\n      } else {\n        this._offAll(event);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"fire\",\n    value: function fire(event) {\n      if (!this._handlers[event]) {\n        return this;\n      }\n\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      for (var i = this._handlers[event].length; i--;) {\n        this._handlers[event][i].apply(this, args);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"_offOne\",\n    value: function _offOne(event, handler) {\n      for (var i = 0, len = this._handlers[event].length; i < len; i++) {\n        if (handler[this._uprop] === this._handlers[event][i][this._uprop]) {\n          this._handlers[event].splice(i, 1);\n\n          break;\n        }\n      }\n    }\n  }, {\n    key: \"_offAll\",\n    value: function _offAll(event) {\n      for (var i = this._handlers[event].length; i--;) {\n        this._handlers[event][i] = null;\n      }\n\n      delete this._handlers[event];\n    }\n  }]);\n\n  return Controller;\n}();\n\n\n\n//# sourceURL=webpack:///./node_modules/properjs-controller/Controller.js?");

/***/ }),

/***/ "./node_modules/properjs-historia/Historia.js":
/*!****************************************************!*\
  !*** ./node_modules/properjs-historia/Historia.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Historia; });\n/* harmony import */ var properjs_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! properjs-controller */ \"./node_modules/properjs-controller/Controller.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar pushable = \"history\" in window && \"pushState\" in window.history;\nvar hashable = (\"onhashchange\" in window);\n\nvar Historia = /*#__PURE__*/function (_Controller) {\n  _inherits(Historia, _Controller);\n\n  var _super = _createSuper(Historia);\n\n  function Historia(options) {\n    var _this;\n\n    _classCallCheck(this, Historia);\n\n    _this = _super.call(this);\n    _this._initUrl = window.location.href.replace(window.location.hash, \"\");\n    _this._options = options || {};\n    _this._enabled = false;\n    _this._ishashpushed = false;\n    _this._states = {};\n    _this._callbacks = {};\n    _this._states[_this._initUrl] = {\n      uid: _this.uid() // Controller method\n\n    };\n\n    _this._stateEnable();\n\n    return _this;\n  }\n\n  _createClass(Historia, [{\n    key: \"push\",\n    value: function push(url) {\n      if (url === window.location.href) {\n        return;\n      }\n\n      this._push(url);\n\n      this._states[url] = {\n        uid: this.uid()\n      };\n    }\n  }, {\n    key: \"goBack\",\n    value: function goBack() {\n      window.history.back();\n      this.fire(\"backstate\");\n    }\n  }, {\n    key: \"goForward\",\n    value: function goForward() {\n      window.history.forward();\n      this.fire(\"forwardstate\");\n    }\n  }, {\n    key: \"_push\",\n    value: function _push(url) {\n      if (pushable && !this._options.forceHash) {\n        window.history.pushState(this._states[url], \"\", url);\n      } else {\n        // This replace ensures we get the following:\n        // \"/\":         root\n        // \"/foo/bar/\": uri path\n        var hashUri = url.replace(window.location.origin, \"\"); // Fix for root hash uri.\n        // Ensure we dont get the following:\n        // \"/foo/bar/#/foo/bar/\"\n        // Rather we would get the following:\n        // \"/foo/bar/#/\"\n\n        if (hashUri === window.location.pathname) {\n          hashUri = \"/\";\n        }\n\n        this._ishashpushed = true;\n        window.location.hash = hashUri;\n      }\n    }\n  }, {\n    key: \"_stateEnable\",\n    value: function _stateEnable() {\n      var _this2 = this;\n\n      if (this._enabled) {\n        return this;\n      }\n\n      this._enabled = true;\n\n      var handler = function handler() {\n        var url = window.location.href;\n        var roots = [\"#/\", \"#\", \"\"]; // Ensure we clean out the hash for Router\n        // Example:\n        // Start:  http://localhost/foo/#/bar/\n        // Result: http://localhost/foo/bar/\n\n        if (_this2._options.forceHash) {\n          // Shave the hash from the end of the URL\n          url = url.replace(window.location.hash, \"\"); // Shave the hash root from the end of the URL\n\n          url = url.replace(window.location.pathname, \"\"); // Empty hash means we have gone back to root\n\n          if (roots.indexOf(window.location.hash) !== -1) {\n            // Append the hash root to the URL\n            url = url + window.location.pathname;\n          } else {\n            // Append the applied hash pathname to the URL\n            url = url + window.location.hash.replace(\"#\", \"\");\n          }\n        }\n\n        _this2.fire(\"popstate\", url, _this2._states[url]);\n      };\n\n      if (pushable && !this._options.forceHash) {\n        window.addEventListener(\"popstate\", function () {\n          handler();\n        }, false);\n      } else if (hashable) {\n        // For hashstate we should apply initial hash on page load\n        this._push(this._initUrl);\n\n        window.addEventListener(\"hashchange\", function () {\n          if (!_this2._ishashpushed) {\n            handler();\n          } else {\n            _this2._ishashpushed = false;\n          }\n        }, false);\n      }\n    }\n  }]);\n\n  return Historia;\n}(properjs_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./node_modules/properjs-historia/Historia.js?");

/***/ }),

/***/ "./node_modules/properjs-matchroute/MatchRoute.js":
/*!********************************************************!*\
  !*** ./node_modules/properjs-matchroute/MatchRoute.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MatchRoute; });\n/* harmony import */ var paramalama__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! paramalama */ \"./node_modules/paramalama/paramalama.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar rHTTPs = /^http[s]?:\\/\\/.*?\\//;\nvar rTrails = /^\\/|\\/$/g;\nvar rHashQuery = /#.*$|\\?.*$/g;\nvar rWild = /^:/;\nvar rWilders = {\n  num: /^[0-9]+$/,\n  slug: /^[A-Za-z]+[A-Za-z0-9-_.]*$/\n};\n\nvar MatchRoute = /*#__PURE__*/function () {\n  function MatchRoute(routes) {\n    _classCallCheck(this, MatchRoute);\n\n    this._routes = routes ? this._cleanRoutes(routes) : [];\n  }\n\n  _createClass(MatchRoute, [{\n    key: \"getRoutes\",\n    value: function getRoutes() {\n      return this._routes;\n    }\n  }, {\n    key: \"config\",\n    value: function config(routes) {\n      routes = typeof routes === \"string\" ? [routes] : routes;\n      this._routes = this._routes.concat(this._cleanRoutes(routes));\n      return this;\n    }\n  }, {\n    key: \"test\",\n    value: function test(url) {\n      return this.parse(url, this._routes).matched;\n    }\n  }, {\n    key: \"params\",\n    value: function params(url) {\n      return this.parse(url, this._routes).params;\n    }\n  }, {\n    key: \"compare\",\n    value: function compare(route, url) {\n      return this.parse(url, [route]);\n    }\n  }, {\n    key: \"parse\",\n    value: function parse(url, routes) {\n      var route = this._cleanRoute(url);\n\n      var uris = route.split(\"/\");\n      var uLen = uris.length;\n      var iLen = routes.length;\n      var segMatches, isStar, params, match, ruris, regex, cond, ret;\n\n      for (var i = 0; i < iLen; i++) {\n        // Flag \"*\" route\n        isStar = routes[i] === \"*\"; // Start fresh each iteration\n        // Only one matched route allowed\n\n        ret = {\n          matched: false,\n          route: null,\n          uri: [],\n          params: {},\n          query: Object(paramalama__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url)\n        };\n        ruris = routes[i].split(\"/\"); // Handle route === \"/\"\n\n        if (route === \"/\" && routes[i] === \"/\") {\n          ret.matched = true;\n          ret.route = routes[i];\n          ret.uri = \"/\";\n          break;\n        } // If the actual url doesn't match the route in segment length,\n        // it cannot possibly be considered for matching so just skip it\n\n\n        if (ruris.length !== uris.length && !isStar) {\n          continue;\n        }\n\n        segMatches = 0;\n\n        for (var j = 0; j < uLen; j++) {\n          // Matched a variable uri segment\n          if (rWild.test(ruris[j])) {\n            // Try to split on conditions\n            params = ruris[j].split(\"!\"); // The variable segment\n\n            match = params[0]; // The match condition\n\n            cond = params[1]; // With conditions\n\n            if (cond) {\n              // We support this condition\n              if (rWilders[cond]) {\n                regex = rWilders[cond];\n              } // Test against the condition\n\n\n              if (regex && regex.test(uris[j])) {\n                segMatches++; // Add the match to the config data\n\n                ret.params[match.replace(rWild, \"\")] = uris[j];\n                ret.uri.push(uris[j]);\n              } // No conditions, anything goes\n\n            } else {\n              segMatches++; // Add the match to the config data\n\n              ret.params[match.replace(rWild, \"\")] = uris[j];\n              ret.uri.push(uris[j]);\n            } // Defined segment always goes\n\n          } else {\n            if (uris[j] === ruris[j]) {\n              segMatches++;\n              ret.uri.push(uris[j]);\n            }\n          }\n        } // Handle a uri segment match OR \"*\" wildcard everything\n\n\n        if (segMatches === uris.length || isStar) {\n          ret.matched = true;\n          ret.route = routes[i];\n          ret.uri = isStar ? route : ret.uri.join(\"/\");\n          break;\n        }\n      }\n\n      return ret;\n    }\n  }, {\n    key: \"_cleanRoute\",\n    value: function _cleanRoute(route) {\n      if (route !== \"/\") {\n        route = route.replace(rHTTPs, \"\");\n        route = route.replace(rTrails, \"\");\n        route = route.replace(rHashQuery, \"\");\n        route = route.replace(rTrails, \"\");\n      }\n\n      if (route === \"\") {\n        route = \"/\";\n      }\n\n      return route;\n    }\n  }, {\n    key: \"_cleanRoutes\",\n    value: function _cleanRoutes(routes) {\n      for (var i = routes.length; i--;) {\n        routes[i] = this._cleanRoute(routes[i]);\n      }\n\n      return routes;\n    }\n  }]);\n\n  return MatchRoute;\n}();\n\n\n\n//# sourceURL=webpack:///./node_modules/properjs-matchroute/MatchRoute.js?");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router */ \"./Router.js\");\n // Router is fully utilized with PageController\n// @see: https://github.com/ProperJS/PageController\n\nvar router = new _Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  // Use XHR\n  async: true,\n  // Default\n  // Keeps response caches for requests\n  caching: true,\n  // Default\n  // Handle 404s and 500s\n  handle404: true,\n  // Default\n  handle500: true,\n  // Default\n  // Pass options to Historia\n  // @see: https://github.com/ProperJS/Historia\n  historyOptions: {} // Run Router as a proxy (false by default)\n  // proxy: {\n  //     domain: \"https://your.proxy.domain\",\n  // },\n\n}); // Bind router to page\n\nrouter.bind(); // Some routes to match, same style as MatchRoute\n// @see: https://github.com/ProperJS/MatchRoute\n\nvar routes = [// Known route\n\"some/route\", // Unknown route\n\"another/:slug\", // Enforce Number on last URI segment\n\"also/:slug/:num!num\"]; // Apply the GET listener to routes\n\nroutes.forEach(function (route) {\n  router.get(route, function (data) {\n    console.log(\"route data\", data);\n  });\n}); // Bind to preget events\n// Fires when the route is matched before the request begins\n\nrouter.on(\"preget\", function (data) {\n  console.log(\"preget\", data);\n}); // Bind to popget events\n// Fires when Historia fires a popstate event\n\nrouter.on(\"popget\", function (data) {\n  console.log(\"popget\", data);\n});\n\n//# sourceURL=webpack:///./test/test.js?");

/***/ })

/******/ });