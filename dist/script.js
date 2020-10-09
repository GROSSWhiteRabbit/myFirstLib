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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    this.click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    }, i);
  }
};

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function () {
  for (let i = 0; i < this.length; i++) {
    const modal = this[i].getAttribute('data-target');
    console.log(this[i]);
    this.click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).fadeIn(200);
      document.body.style.overflow = 'hidden';
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`${modal} [data-close]`).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).fadeOut(200);
        document.body.style.overflow = '';
      });
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).click(e => {
        if (e.target.classList.contains(modal.slice(1))) {
          Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).fadeOut(200);
        }
      });
    }, i);
  }
};

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);


const $ = function (selector, ...numbers) {
  return new $.prototype.init(selector, numbers);
};

$.prototype.init = function (selector, numbers) {
  if (!selector) {
    return this;
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  if (typeof selector != 'string') {
    console.error(`Invalid parameter of the "init" function. Parameter selector: "${selector}" not string or DOM element`);
    return;
  }

  if (numbers.length == 0) {
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
  } else if (numbers.length > 0) {
    const arr = [];

    for (let value of numbers) {
      if (!isFinite(value)) {
        console.error(`Invalid parameter of the "init" function. Parameter: "${value}" not number or infinite`);
        continue;
      }

      if (!document.querySelectorAll(selector)[value]) {
        console.error(`Element with selector "${selector}" and index "${value}" not found of the "init" function`);
        continue;
      }

      arr.push(document.querySelectorAll(selector)[value]);
    }

    Object.assign(this, arr);
    this.length = arr.length;
  } else {
    console.error('Invalid parameters of the "init" function');
  }

  return this;
};

window.$ = $;
$.prototype.init.prototype = $.prototype;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attribute */ "./src/js/lib/modules/attribute.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");









/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");



_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.html = function (...elemets) {
  if (typeof elemets[0] == 'string' && elemets.length == 1) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].tagName) {
        continue;
      }

      this[i].innerHTML = elemets[0];
    }
  } else if (elemets.length > 1 && typeof elemets[0] == 'string') {
    if (typeof elemets[elemets.length - 1] == 'string') {
      for (let i = 0; i < this.length; i++) {
        if (!this[i].tagName) {
          continue;
        }

        this[i].innerHTML = elemets[elemets.length - 1];
      }
    }

    let digits = [];
    let contents = [];
    let prev = 'string';

    for (let value of elemets) {
      if (contents.length > 1) {
        console.error(`incorrect input of parameters in the "html" function`);
      }

      if (isFinite(value)) {
        digits.push(+value);
        prev = value;
      } else if (typeof value === 'string' && typeof prev === 'string') {
        contents.push(value);
        prev = value;
      } else if (isFinite(prev) && typeof value === 'string') {
        for (let digit of digits) {
          if (!this[digit].tagName) {
            continue;
          }

          this[digit].innerHTML = contents[0];
        }

        digits = [];
        contents = [value];
        prev = value;
      } else {
        console.error(`Invalid parameter of the "html" function. Parameter: "${value}" not number or string`);
      }
    }

    if (digits.length > 0 && contents.length > 0) {
      for (let digit of digits) {
        if (!this[digit].tagName) {
          continue;
        }

        this[digit].innerHTML = contents[0];
      }
    }
  } else if (elemets.every(elem => {
    return typeof elem == 'number';
  }) && elemets.length > 0) {
    const contents = [];

    for (let number of elemets) {
      if (!isFinite(number)) {
        console.error(`Invalid parameter of the "html" function. Parameter: "${number}" not number or infinite`);
        continue;
      }

      if (!this[Math.round(+number)]) {
        console.error(`Element with index "${number}" not found of the "html" function`);
        continue;
      }

      contents.push(this[Math.round(+number)].innerHTML);
    }

    return contents;
  } else if (elemets.length == 0) {
    const contents = [];

    for (let i = 0; i < this.length; i++) {
      contents.push(this[i].innerHTML);
    }

    return contents;
  } else {
    console.error(`incorrect input of parameters in the "html" function`);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.eq = function (i) {
  if (!isFinite(i)) {
    console.error(`Invalid parameter of the "eq" function. Parameter: "${i}" not number or infinite`);
    return this;
  }

  const indexElement = this[i],
        objLength = Object.keys(this).length;

  for (let j = 0; j < objLength; j++) {
    delete this[j];
  }

  this[0] = indexElement;
  this.length = 1;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.index = function () {
  const parent = this[0].parentNode,
        child = [...parent.children];

  const findMyIndex = item => {
    return item == this[0];
  };

  return child.findIndex(findMyIndex);
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.find = function (selector, ...numbers) {
  const copyObj = Object.assign({}, this);
  let countElementFind = 0,
      counter = 0;

  if (typeof selector != 'string') {
    console.error(`Invalid parameter of the "closest" function. Parameter selector: "${selector}" not string`);
    return this;
  } else if (numbers.length == 0) {
    for (let i = 0; i < copyObj.length; i++) {
      const arr = copyObj[i].querySelectorAll(selector);

      for (let j = 0; j < arr.length; j++) {
        this[counter] = arr[j];
        counter++;
      }

      countElementFind += arr.length;
    }

    this.length = countElementFind;
    let objLength = Object.keys(this).length;

    if (objLength > countElementFind + 1) {
      for (; objLength >= countElementFind; objLength--) {
        delete this[objLength];
      }
    }
  } else if (numbers.length > 0) {
    for (let value of numbers) {
      if (!isFinite(value)) {
        console.error(`Invalid parameter of the "closest" function. Parameter: "${value}" not number or infinite`);
        continue;
      }

      if (!copyObj[value]) {
        continue;
      }

      const arr = copyObj[value].querySelectorAll(selector);

      for (let j = 0; j < arr.length; j++) {
        this[counter] = arr[j];
        counter++;
      }

      countElementFind += arr.length;
    }

    this.length = countElementFind;
    let objLength = Object.keys(this).length;

    if (objLength > countElementFind + 1) {
      for (; objLength >= countElementFind; objLength--) {
        delete this[objLength];
      }
    }
  } else {
    console.error('Invalid parameters of the "someAttributes" function');
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.closest = function (selector, ...numbers) {
  let arr = [];

  if (typeof selector != 'string') {
    console.error(`Invalid parameter of the "closest" function. Parameter: "${selector}" not string`);
    return this;
  } else if (numbers.length == 0) {
    for (let i = 0; i < this.length; i++) {
      let repeats = false;

      if (!this[i].closest(selector)) {
        repeats = true;
      } else {
        for (let j = 0; j < arr.length; j++) {
          if (this[i].closest(selector) === arr[j]) {
            repeats = true;
          }
        }
      }

      if (!repeats) {
        arr.push(this[i].closest(selector));
      }
    }

    for (let i = 0; i < arr.length; i++) {
      this[i] = arr[i];
    }

    let objLength = Object.keys(this).length;

    if (objLength > arr.length + 1) {
      for (; objLength >= arr.length; objLength--) {
        delete this[objLength];
      }
    }

    this.length = arr.length;
  } else if (numbers.length > 0) {
    for (let value of numbers) {
      let repeats = false;

      if (!isFinite(value)) {
        console.error(`Invalid parameter of the "closest" function. Parameter: "${value}" not number or infinite`);
        continue;
      }

      if (!this[value] || !this[value].closest(selector)) {
        continue;
      }

      for (let j = 0; j < arr.length; j++) {
        if (this[value].closest(selector) === arr[j]) {
          repeats = true;
        }
      }

      if (!repeats) {
        arr.push(this[value].closest(selector));
      }
    }

    for (let i = 0; i < arr.length; i++) {
      this[i] = arr[i];
    }

    let objLength = Object.keys(this).length;

    if (objLength > arr.length + 1) {
      for (; objLength >= arr.length; objLength--) {
        delete this[objLength];
      }
    }

    this.length = arr.length;
  } else {
    console.error('Invalid parameters of the "someAttributes" function');
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.siblings = function (...numbers) {
  const copyObj = Object.assign({}, this);
  let countElementFind = 0,
      counter = 0;

  if (numbers.length == 0) {
    for (let i = 0; i < copyObj.length; i++) {
      const arr = copyObj[i].parentNode.children;

      for (let j = 0; j < arr.length; j++) {
        if (copyObj[i] !== arr[j]) {
          this[counter] = arr[j];
          counter++;
        }
      }

      countElementFind += arr.length - 1;
    }

    this.length = countElementFind;
    let objLength = Object.keys(this).length;

    if (objLength > countElementFind + 1) {
      for (; objLength >= countElementFind; objLength--) {
        delete this[objLength];
      }
    }
  } else if (numbers.length > 0) {
    for (let value of numbers) {
      if (!isFinite(value)) {
        console.error(`Invalid parameter of the "closest" function. Parameter: "${value}" not number or infinite`);
        continue;
      }

      if (!copyObj[value]) {
        continue;
      }

      const arr = copyObj[value].parentNode.children;

      for (let j = 0; j < arr.length; j++) {
        if (copyObj[value] != arr[j]) {
          this[counter] = arr[j];
          counter++;
        }
      }

      countElementFind += arr.length - 1;
    }

    this.length = countElementFind;
    let objLength = Object.keys(this).length;

    if (objLength > countElementFind + 1) {
      for (; objLength >= countElementFind; objLength--) {
        delete this[objLength];
      }
    }
  } else {
    console.error('Invalid parameters of the "someAttributes" function');
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attribute.js":
/*!*****************************************!*\
  !*** ./src/js/lib/modules/attribute.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");



_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.setAttributes = function (name, value, ...numbersElemets) {
  if (typeof name == 'string' && (typeof value == 'string' || typeof value == 'number') && numbersElemets.length > 0) {
    for (let number of numbersElemets) {
      if (!isFinite(number)) {
        console.error(`Invalid parameter of the "setAttributes" function. Parameter: "${number}" not number or infinite`);
        continue;
      }

      if (!this[Math.round(+number)]) {
        console.error(`Element with index "${number}" not found of the "setAttributes" function`);
        continue;
      }

      this[Math.round(+number)].setAttribute(name, value);
    }
  } else if (typeof name == 'string' && (typeof value == 'string' || typeof value == 'number')) {
    for (let i = 0; i < this.length; i++) {
      this[i].setAttribute(name, value);
    }
  } else {
    if (typeof value != 'string' && typeof value != 'number') {
      console.error(`Invalid value  of the "setAttributes" function`);
    }

    if (typeof name != 'string') {
      console.error(`Invalid name of the "setAttributes" function`);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.getAttributes = function (name, ...numbersElemets) {
  if (typeof name == 'string' && numbersElemets.length > 0) {
    const values = [];

    for (let number of numbersElemets) {
      if (!isFinite(number)) {
        console.error(`Invalid parameter of the "getAttributes" function. Parameter: "${number}" not number or infinite`);
        continue;
      }

      if (!this[Math.round(+number)]) {
        console.error(`Element with index "${number}" not found of the "getAttributes" function`);
        continue;
      }

      values.push(this[Math.round(+number)].getAttribute(name));
    }

    return values;
  } else if (typeof name == 'string') {
    const values = [];

    for (let i = 0; i < this.length; i++) {
      values.push(this[i].getAttribute(name));
    }

    return values;
  } else {
    if (typeof name != 'string') {
      console.error(`Invalid name of the "getAttributes" function`);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.removeAttributes = function (name, ...numbersElemets) {
  if (typeof name == 'string' && numbersElemets.length > 0) {
    for (let number of numbersElemets) {
      if (!isFinite(number)) {
        console.error(`Invalid parameter of the "removeAttributes" function. Parameter: "${number}" not number or infinite`);
        continue;
      }

      if (!this[Math.round(+number)]) {
        console.error(`Element with index "${number}" not found of the "removeAttributes" function`);
        continue;
      }

      this[Math.round(+number)].removeAttribute(name);
    }
  } else if (typeof name == 'string') {
    for (let i = 0; i < this.length; i++) {
      this[i].removeAttribute(name);
    }
  } else {
    if (typeof name != 'string') {
      console.error(`Invalid name of the "removeAttributes" function`);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.someAttributes = function (...attributeNames) {
  if (typeof attributeNames[attributeNames.length - 1] == 'string') {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].tagName) {
        continue;
      }

      for (let att of attributeNames) {
        if (!this[i].hasAttribute(att)) {
          return true;
        }
      }
    }
  } else if (isFinite(attributeNames[attributeNames.length - 1])) {
    let digits = [];
    let attributes = [];
    let prev = 'string';

    for (let value of attributeNames) {
      if (isFinite(value)) {
        digits.push(+value);
        prev = value;
      } else if (typeof value === 'string' && typeof prev === 'string') {
        attributes.push(value);
        prev = value;
      } else if (isFinite(prev) && typeof value === 'string') {
        for (let digit of digits) {
          if (!this[digit].tagName) {
            continue;
          }

          for (let att of attributes) {
            if (!this[digit].hasAttribute(att)) {
              return true;
            }
          }
        }

        digits = [];
        attributes = [value];
        prev = value;
      } else {
        console.error(`Invalid parameter of the "someAttributes" function. Parameter: "${value}" not number or string`);
      }
    }

    if (digits.length > 0 && attributes.length > 0) {
      for (let digit of digits) {
        if (!this[digit].tagName) {
          continue;
        }

        for (let att of attributes) {
          if (!this[digit].hasAttribute(att)) {
            return true;
          }
        }
      }
    }
  } else {
    console.error('Invalid parameters of the "someAttributes" function');
  }

  return false;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.everyAttributes = function (...attributeNames) {
  if (typeof attributeNames[attributeNames.length - 1] == 'string') {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].tagName) {
        continue;
      }

      for (let att of attributeNames) {
        if (!this[i].hasAttribute(att)) {
          return false;
        }
      }
    }
  } else if (isFinite(attributeNames[attributeNames.length - 1])) {
    let digits = [];
    let attributes = [];
    let prev = 'string';

    for (let value of attributeNames) {
      if (isFinite(value)) {
        digits.push(+value);
        prev = value;
      } else if (typeof value === 'string' && typeof prev === 'string') {
        attributes.push(value);
        prev = value;
      } else if (isFinite(prev) && typeof value === 'string') {
        for (let digit of digits) {
          if (!this[digit].tagName) {
            continue;
          }

          for (let att of attributes) {
            if (!this[digit].hasAttribute(att)) {
              return false;
            }
          }
        }

        digits = [];
        attributes = [value];
        prev = value;
      } else {
        console.error(`Invalid parameter of the "everyAttributes" function. Parameter: "${value}" not number or string`);
      }
    }

    if (digits.length > 0 && attributes.length > 0) {
      for (let digit of digits) {
        if (!this[digit].tagName) {
          continue;
        }

        for (let att of attributes) {
          if (!this[digit].hasAttribute(att)) {
            return false;
          }
        }
      }
    }
  } else {
    console.error('Invalid parameters of the "everyAttributes" function');
  }

  return true;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");



_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.addClass = function (...classNames) {
  if (typeof classNames[classNames.length - 1] == 'string') {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].classList) {
        continue;
      }

      this[i].classList.add(...classNames);
    }
  } else if (isFinite(classNames[classNames.length - 1])) {
    let digits = [];
    let clases = [];
    let prev = 'string';

    for (let value of classNames) {
      if (isFinite(value)) {
        digits.push(+value);
        prev = value;
      } else if (typeof value === 'string' && typeof prev === 'string') {
        clases.push(value);
        prev = value;
      } else if (isFinite(prev) && typeof value === 'string') {
        for (let digit of digits) {
          if (!this[digit].classList) {
            continue;
          }

          this[digit].classList.add(...clases);
        }

        digits = [];
        clases = [value];
        prev = value;
      } else {
        console.error(`Invalid parameter of the "addClass" function. Parameter: "${value}" not number or string`);
      }
    }

    if (digits.length > 0 && clases.length > 0) {
      for (let digit of digits) {
        if (!this[digit].classList) {
          continue;
        }

        this[digit].classList.add(...clases);
      }
    }
  } else {
    console.error('Invalid parameters of the "addClass" function');
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.removeClass = function (...classNames) {
  if (typeof classNames[classNames.length - 1] == 'string') {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].classList) {
        continue;
      }

      this[i].classList.remove(...classNames);
    }
  } else if (isFinite(classNames[classNames.length - 1])) {
    let digits = [];
    let clases = [];
    let prev = 'string';

    for (let value of classNames) {
      if (isFinite(value)) {
        digits.push(+value);
        prev = value;
      } else if (typeof value === 'string' && typeof prev === 'string') {
        clases.push(value);
        prev = value;
      } else if (isFinite(prev) && typeof value === 'string') {
        for (let digit of digits) {
          if (!this[digit].classList) {
            continue;
          }

          this[digit].classList.remove(...clases);
        }

        digits = [];
        clases = [value];
        prev = value;
      } else {
        console.error(`Invalid parameter of the "removeClass" function. Parameter: "${value}" not number or string`);
      }
    }

    if (digits.length > 0 && clases.length > 0) {
      for (let digit of digits) {
        if (!this[digit].classList) {
          continue;
        }

        this[digit].classList.remove(...clases);
      }
    }
  } else {
    console.error('Invalid parameters of the "removeClass" function');
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.toggleClass = function (...classNames) {
  if (typeof classNames[classNames.length - 1] == 'string') {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].classList) {
        continue;
      }

      for (let clas of classNames) {
        this[i].classList.toggle(clas);
      }
    }
  } else if (isFinite(classNames[classNames.length - 1])) {
    let digits = [];
    let clases = [];
    let prev = 'string';

    for (let value of classNames) {
      if (isFinite(value)) {
        digits.push(+value);
        prev = value;
      } else if (typeof value === 'string' && typeof prev === 'string') {
        clases.push(value);
        prev = value;
      } else if (isFinite(prev) && typeof value === 'string') {
        for (let digit of digits) {
          if (!this[digit].classList) {
            continue;
          }

          for (let clas of clases) {
            this[digit].classList.toggle(clas);
          }
        }

        digits = [];
        clases = [value];
        prev = value;
      } else {
        console.error(`Invalid parameter of the "toggleClass" function. Parameter: "${value}" not number or string`);
      }
    }

    if (digits.length > 0 && clases.length > 0) {
      for (let digit of digits) {
        if (!this[digit].classList) {
          continue;
        }

        for (let clas of clases) {
          this[digit].classList.toggle(clas);
        }
      }
    }
  } else {
    console.error('Invalid parameters of the "toggleClass" function');
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.someClass = function (...classNames) {
  if (typeof classNames[classNames.length - 1] == 'string') {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].classList) {
        continue;
      }

      if (this[i].classList.contains(...classNames)) {
        return true;
      }
    }
  } else if (isFinite(classNames[classNames.length - 1])) {
    let digits = [];
    let clases = [];
    let prev = 'string';

    for (let value of classNames) {
      if (isFinite(value)) {
        digits.push(+value);
        prev = value;
      } else if (typeof value === 'string' && typeof prev === 'string') {
        clases.push(value);
        prev = value;
      } else if (isFinite(prev) && typeof value === 'string') {
        for (let digit of digits) {
          if (!this[digit].classList) {
            continue;
          }

          if (this[digit].classList.contains(...clases)) {
            return true;
          }
        }

        digits = [];
        clases = [value];
        prev = value;
      } else {
        console.error(`Invalid parameter of the "someClass" function. Parameter: "${value}" not number or string`);
      }
    }

    if (digits.length > 0 && clases.length > 0) {
      for (let digit of digits) {
        if (!this[digit].classList) {
          continue;
        }

        if (this[digit].classList.contains(...clases)) {
          return true;
        }
      }
    }
  } else {
    console.error('Invalid parameters of the "someClass" function');
  }

  return false;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.everyClass = function (...classNames) {
  if (typeof classNames[classNames.length - 1] == 'string') {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].classList) {
        continue;
      }

      for (let clas of classNames) {
        if (!this[i].classList.contains(clas)) {
          return false;
        }
      }
    }
  } else if (isFinite(classNames[classNames.length - 1])) {
    let digits = [];
    let clases = [];
    let prev = 'string';

    for (let value of classNames) {
      if (isFinite(value)) {
        digits.push(+value);
        prev = value;
      } else if (typeof value === 'string' && typeof prev === 'string') {
        clases.push(value);
        prev = value;
      } else if (isFinite(prev) && typeof value === 'string') {
        for (let digit of digits) {
          if (!this[digit].classList) {
            continue;
          }

          for (let clas of clases) {
            if (!this[digit].classList.contains(clas)) {
              return false;
            }
          }
        }

        digits = [];
        clases = [value];
        prev = value;
      } else {
        console.error(`Invalid parameter of the "everyClass" function. Parameter: "${value}" not number or string`);
      }
    }

    if (digits.length > 0 && clases.length > 0) {
      for (let digit of digits) {
        if (!this[digit].classList) {
          continue;
        }

        for (let clas of clases) {
          if (!this[digit].classList.contains(clas)) {
            return false;
          }
        }
      }
    }
  } else {
    console.error('Invalid parameters of the "everyClass" function');
  }

  return true;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");



_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.hide = function (...n) {
  if (n.length > 0) {
    for (let value of n) {
      if (!isFinite(value)) {
        console.error(`Invalid parameter of the "hide" function. Parameter: "${value}" not number or infinite`);
      }

      if (!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style) {
        continue;
      } else {
        this[Math.round(+value)].style.display = 'none';
      }
    }
  } else if (n.length == 0) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].style) {
        continue;
      } else {
        this[i].style.display = 'none';
      }
    }
  } else {
    console.error(`Invalid parameters of the "hide" function`);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.show = function (...n) {
  if (n.length == 1 && (n[0] == 'flex' || n[0] == 'block')) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].style) {
        continue;
      } else {
        this[i].style.display = n[0];
      }
    }
  } else if (n.length > 1 && (n[n.length - 1] == 'flex' || n[n.length - 1] == 'block')) {
    for (let value of n) {
      if (!isFinite(value) && value != n[n.length - 1]) {
        console.error(`Invalid parameter of the "show" function. Parameter: "${value}" not number or infinite`);
      }

      if (!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style) {
        continue;
      } else {
        this[Math.round(+value)].style.display = n[n.length - 1];
      }
    }
  } else if (n.length > 1 && (n[0] == 'flex' || n[0] == 'block')) {
    for (let value of n) {
      if (!isFinite(value) && value != n[0]) {
        console.error(`Invalid parameter of the "show" function. Parameter: "${value}" not number or infinite`);
      }

      if (!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style) {
        continue;
      } else {
        this[Math.round(+value)].style.display = n[0];
      }
    }
  } else if (n.length > 0) {
    for (let value of n) {
      if (!isFinite(value)) {
        console.error(`Invalid parameter of the "show" function. Parameter: "${value}" not number or infinite`);
      }

      if (!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style) {
        continue;
      } else {
        this[Math.round(+value)].style.display = '';
      }
    }
  } else if (n.length == 0) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].style) {
        continue;
      } else {
        this[i].style.display = '';
      }
    }
  } else {
    console.error(`Invalid parameters of the "show" function`);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.toggle = function (...n) {
  if (n.length == 1 && (n[0] == 'flex' || n[0] == 'block')) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].style) {
        continue;
      } else {
        if (this[i].style.display == 'none') {
          this[i].style.display = n[0];
        } else {
          this[i].style.display = 'none';
        }
      }
    }
  } else if (n.length > 1 && (n[n.length - 1] == 'flex' || n[n.length - 1] == 'block')) {
    for (let value of n) {
      if (!isFinite(value) && value !== n[n.length - 1]) {
        console.error(`Invalid parameter of the "toggle" function. Parameter: "${value}" not number or infinite`);
      }

      if (!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style) {
        continue;
      } else {
        if (this[Math.round(+value)].style.display == 'none') {
          this[Math.round(+value)].style.display = n[n.length - 1];
        } else {
          this[Math.round(+value)].style.display = 'none';
        }
      }
    }
  } else if (n.length > 1 && (n[0] == 'flex' || n[0] == 'block')) {
    for (let value of n) {
      if (!isFinite(value) && value != n[0]) {
        console.error(`Invalid parameter of the "toggle" function. Parameter: "${value}" not number or infinite`);
      }

      if (!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style) {
        continue;
      } else {
        if (this[Math.round(+value)].style.display == 'none') {
          this[Math.round(+value)].style.display = n[0];
        } else {
          this[Math.round(+value)].style.display = 'none';
        }
      }
    }
  } else if (n.length > 0) {
    for (let value of n) {
      if (!isFinite(value)) {
        console.error(`Invalid parameter of the "toggle" function. Parameter: "${value}" not number or infinite`);
      }

      if (!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style) {
        continue;
      } else {
        if (this[Math.round(+value)].style.display == 'none') {
          this[Math.round(+value)].style.display = '';
        } else {
          this[Math.round(+value)].style.display = 'none';
        }
      }
    }
  } else if (n.length == 0) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].style) {
        continue;
      } else {
        if (this[i].style.display == 'none') {
          this[i].style.display = '';
        } else {
          this[i].style.display = 'none';
        }
      }
    }
  } else {
    console.error(`Invalid parameters of the "toggle" function`);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._animationOverTime = function (dur, cb, fin) {
  let startTime;

  const _animationOverTime = time => {
    if (!startTime) {
      startTime = time;
    }

    const timeElapsed = time - startTime,
          progress = Math.min(timeElapsed / dur, 1);
    cb(progress);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animationOverTime);
    } else {
      if (typeof fin == 'function') {
        fin();
      }
    }
  };

  return _animationOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._fadeIn = function (dur, display, fin, i) {
  this[i].style.display = display;

  const _fadeIn = progress => {
    this[i].style.opacity = progress;
  };

  const ani = this._animationOverTime(dur, _fadeIn, fin);

  requestAnimationFrame(ani);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._fadeOut = function (dur, display, fin, i) {
  this[i].style.display = display;

  const _fadeOut = progress => {
    this[i].style.opacity = 1 - progress;

    if (progress == 1) {
      this[i].style.display = 'none';
    }
  };

  const ani = this._animationOverTime(dur, _fadeOut, fin);

  requestAnimationFrame(ani);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._checkParametrsFadeFunctions = function (nameFunctions, dur, display, fin) {
  if (!isFinite(dur)) {
    console.error(`Invalid parameter of the "${nameFunctions}" function. Parameter duration: "${dur}" not number or infinite`);
    return "error";
  }

  if (typeof display != 'string') {
    console.error(`Invalid parameter of the "${nameFunctions}" function. Parameter display: "${display}" is not a string `);
    return "error";
  }

  if (fin && typeof fin != 'function') {
    console.error(`Invalid parameter of the "${nameFunctions}" function. Parameter fin: "${fin}" is not a function `);
    return "error";
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur = 1000, display = 'block', fin) {
  if (this._checkParametrsFadeFunctions('fadeIn', dur, display, fin) == 'error') {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this._fadeIn(dur, display, fin, i);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur = 1000, display = 'block', fin) {
  if (this._checkParametrsFadeFunctions('fadeOut', dur, display, fin) == 'error') {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this._fadeOut(dur, display, fin, i);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur = 1000, display = 'block', fin) {
  if (this._checkParametrsFadeFunctions('fadeToggle', dur, display, fin) == 'error') {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display == 'none') {
      this._fadeIn(dur, display, fin, i);
    } else {
      this._fadeOut(dur, display, fin, i);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");



_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype._checkIsFiniteAndExistenceDomElement = function (nameFunctions, value) {
  if (!isFinite(value)) {
    console.error(`Invalid parameter of the "${nameFunctions}" function. Parameter: "${value}" not number or infinite`);
    return "error";
  }

  if (!this[Math.round(+value)]) {
    console.error(`Element with index "${value}" not found of the "${nameFunctions}" function`);
    return "error";
  }
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.on = function (eventName, callBack, ...numbersElemets) {
  if (typeof eventName == 'string' && typeof callBack == 'function' && numbersElemets.length > 0) {
    for (let value of numbersElemets) {
      if (this._checkIsFiniteAndExistenceDomElement('on', value) == 'error') {
        continue;
      }

      this[value].addEventListener(eventName, callBack, false);
    }
  } else if (typeof eventName == 'string' && typeof callBack == 'function') {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener(eventName, callBack, false);
    }
  } else if (Array.isArray(eventName) && typeof callBack == 'function' && numbersElemets.length > 0) {
    for (let value of numbersElemets) {
      if (this._checkIsFiniteAndExistenceDomElement('on', value) == 'error') {
        continue;
      }

      for (let event of eventName) {
        if (typeof event != 'string') {
          console.error(`Event:"${event}" is not a string of the "on" function`);
          continue;
        }

        this[value].addEventListener(event, callBack, false);
      }
    }
  } else if (Array.isArray(eventName) && typeof callBack == 'function') {
    for (let i = 0; i < this.length; i++) {
      for (let event of eventName) {
        if (typeof event != 'string') {
          console.error(`Event:"${event}" is not a string of the "on" function`);
          continue;
        }

        this[i].addEventListener(event, callBack, false);
      }
    }
  } else {
    if (typeof callBack != 'function') {
      console.error(`Invalid callBack function of the "on" function`);
    }

    if (typeof eventName != 'string' && !Array.isArray(eventName)) {
      console.error(`Invalid eventNames of the "on" function`);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.off = function (eventName, callBack, ...numbersElemets) {
  if (typeof eventName == 'string' && typeof callBack == 'function' && numbersElemets.length > 0) {
    for (let value of numbersElemets) {
      if (this._checkIsFiniteAndExistenceDomElement('off', value) == 'error') {
        continue;
      }

      this[value].removeEventListener(eventName, callBack, false);
    }
  } else if (typeof eventName == 'string' && typeof callBack == 'function') {
    for (let i = 0; i < this.length; i++) {
      this[i].removeEventListener(eventName, callBack, false);
    }
  } else if (Array.isArray(eventName) && typeof callBack == 'function' && numbersElemets.length > 0) {
    for (let value of numbersElemets) {
      if (this._checkIsFiniteAndExistenceDomElement('off', value) == 'error') {
        continue;
      }

      for (let event of eventName) {
        if (typeof event != 'string') {
          console.error(`Event:"${event}" is not a string of the "off" function`);
          continue;
        }

        this[value].removeEventListener(event, callBack, false);
      }
    }
  } else if (Array.isArray(eventName) && typeof callBack == 'function') {
    for (let i = 0; i < this.length; i++) {
      for (let event of eventName) {
        if (typeof event != 'string') {
          console.error(`Event:"${event}" is not a string of the "off" function`);
          continue;
        }

        this[i].removeEventListener(event, callBack, false);
      }
    }
  } else {
    if (typeof callBack != 'function') {
      console.error(`Invalid callBack function of the "off" function`);
    }

    if (typeof eventName != 'string' && !Array.isArray(eventName)) {
      console.error(`Invalid eventNames of the "off" function`);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.click = function (callBack, ...numbersElemets) {
  if (typeof callBack == 'function' && numbersElemets.length > 0) {
    for (let value of numbersElemets) {
      if (this._checkIsFiniteAndExistenceDomElement('click', value) == 'error') {
        continue;
      }

      this[Math.round(+value)].addEventListener('click', callBack, false);
    }
  } else if (typeof callBack == 'function') {
    for (let i = 0; i < this.length; i++) {
      if (!this[i]) {
        console.error(`Element with index "${i}" not found of the "click" function`);
        continue;
      }

      this[i].addEventListener('click', callBack, false);
    }
  } else if (typeof callBack == 'number') {
    numbersElemets.push(callBack);

    for (let value of numbersElemets) {
      if (this._checkIsFiniteAndExistenceDomElement('click', value) == 'error') {
        continue;
      }

      this[Math.round(+value)].click();
    }
  } else if (callBack == undefined && numbersElemets.length <= 0) {
    for (let i = 0; i < this.length; i++) {
      this[i].click();
    }
  } else {
    if (typeof callBack != 'function' && typeof callBack != 'number') {
      console.error(`Invalid parameters  of the "click" function`);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
 // console.log($('dropdown__toggle'));

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 0).on('click', () => {
  console.log(Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w_500', 0).fadeToggle(200));
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 1).click(() => {
  console.log(Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w_500', 1).fadeIn());
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 2).click(() => {
  console.log(Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w_500').fadeToggle(1000, 'block'));
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown__toggle').dropdown();
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').click();

function consol() {
  console.log("event");
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map