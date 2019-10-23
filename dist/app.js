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
/******/ 	__webpack_require__.p = ".";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/frappe-charts/dist/frappe-charts.esm.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/frappe-charts/dist/frappe-charts.esm.js ***!
  \**********************************************************************************************/
/*! exports provided: Chart, PercentageChart, PieChart, Heatmap, AxisChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentageChart", function() { return PercentageChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChart", function() { return PieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heatmap", function() { return Heatmap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisChart", function() { return AxisChart; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_math_log10__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.math.log10 */ "./node_modules/core-js/modules/es.math.log10.js");
/* harmony import */ var core_js_modules_es_math_log10__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log10__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.number.is-nan */ "./node_modules/core-js/modules/es.number.is-nan.js");
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.values */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.reflect.get */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_43__);













































function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function $(expr, con) {
  return typeof expr === "string" ? (con || document).querySelector(expr) : expr || null;
}

$.create = function (tag, o) {
  var element = document.createElement(tag);

  for (var i in o) {
    var val = o[i];

    if (i === "inside") {
      $(val).appendChild(element);
    } else if (i === "around") {
      var ref = $(val);
      ref.parentNode.insertBefore(element, ref);
      element.appendChild(ref);
    } else if (i === "styles") {
      if (_typeof(val) === "object") {
        Object.keys(val).map(function (prop) {
          element.style[prop] = val[prop];
        });
      }
    } else if (i in element) {
      element[i] = val;
    } else {
      element.setAttribute(i, val);
    }
  }

  return element;
};

function getOffset(element) {
  var rect = element.getBoundingClientRect();
  return {
    // https://stackoverflow.com/a/7436602/6495043
    // rect.top varies with scroll, so we add whatever has been
    // scrolled to it to get absolute distance from actual page top
    top: rect.top + (document.documentElement.scrollTop || document.body.scrollTop),
    left: rect.left + (document.documentElement.scrollLeft || document.body.scrollLeft)
  };
}

function isElementInViewport(el) {
  // Although straightforward: https://stackoverflow.com/a/7557433/6495043
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  /*or $(window).height() */
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  /*or $(window).width() */
  ;
}

function getElementContentWidth(element) {
  var styles = window.getComputedStyle(element);
  var padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  return element.clientWidth - padding;
}

function fire(target, type, properties) {
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent(type, true, true);

  for (var j in properties) {
    evt[j] = properties[j];
  }

  return target.dispatchEvent(evt);
} // https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/


var BASE_MEASURES = {
  margins: {
    top: 10,
    bottom: 10,
    left: 20,
    right: 20
  },
  paddings: {
    top: 20,
    bottom: 40,
    left: 30,
    right: 10
  },
  baseHeight: 240,
  titleHeight: 20,
  legendHeight: 30,
  titleFontSize: 12
};

function getTopOffset(m) {
  return m.titleHeight + m.margins.top + m.paddings.top;
}

function getLeftOffset(m) {
  return m.margins.left + m.paddings.left;
}

function getExtraHeight(m) {
  var totalExtraHeight = m.margins.top + m.margins.bottom + m.paddings.top + m.paddings.bottom + m.titleHeight + m.legendHeight;
  return totalExtraHeight;
}

function getExtraWidth(m) {
  var totalExtraWidth = m.margins.left + m.margins.right + m.paddings.left + m.paddings.right;
  return totalExtraWidth;
}

var INIT_CHART_UPDATE_TIMEOUT = 700;
var CHART_POST_ANIMATE_TIMEOUT = 400;
var DEFAULT_AXIS_CHART_TYPE = 'line';
var AXIS_DATASET_CHART_TYPES = ['line', 'bar'];
var AXIS_LEGEND_BAR_SIZE = 100;
var BAR_CHART_SPACE_RATIO = 0.5;
var MIN_BAR_PERCENT_HEIGHT = 0.00;
var LINE_CHART_DOT_SIZE = 4;
var DOT_OVERLAY_SIZE_INCR = 4;
var PERCENTAGE_BAR_DEFAULT_HEIGHT = 20;
var PERCENTAGE_BAR_DEFAULT_DEPTH = 2; // Fixed 5-color theme,
// More colors are difficult to parse visually

var HEATMAP_DISTRIBUTION_SIZE = 5;
var HEATMAP_SQUARE_SIZE = 10;
var HEATMAP_GUTTER_SIZE = 2;
var DEFAULT_CHAR_WIDTH = 7;
var TOOLTIP_POINTER_TRIANGLE_HEIGHT = 5;
var DEFAULT_CHART_COLORS = ['light-blue', 'blue', 'violet', 'red', 'orange', 'yellow', 'green', 'light-green', 'purple', 'magenta', 'light-grey', 'dark-grey'];
var HEATMAP_COLORS_GREEN = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
var DEFAULT_COLORS = {
  bar: DEFAULT_CHART_COLORS,
  line: DEFAULT_CHART_COLORS,
  pie: DEFAULT_CHART_COLORS,
  percentage: DEFAULT_CHART_COLORS,
  heatmap: HEATMAP_COLORS_GREEN,
  donut: DEFAULT_CHART_COLORS
}; // Universal constants

var ANGLE_RATIO = Math.PI / 180;
var FULL_ANGLE = 360;

var SvgTip =
/*#__PURE__*/
function () {
  function SvgTip(_ref) {
    var _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? null : _ref$parent,
        _ref$colors = _ref.colors,
        colors = _ref$colors === void 0 ? [] : _ref$colors;

    _classCallCheck(this, SvgTip);

    this.parent = parent;
    this.colors = colors;
    this.titleName = '';
    this.titleValue = '';
    this.listValues = [];
    this.titleValueFirst = 0;
    this.x = 0;
    this.y = 0;
    this.top = 0;
    this.left = 0;
    this.setup();
  }

  _createClass(SvgTip, [{
    key: "setup",
    value: function setup() {
      this.makeTooltip();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.fill();
      this.calcPosition();
    }
  }, {
    key: "makeTooltip",
    value: function makeTooltip() {
      var _this = this;

      this.container = $.create('div', {
        inside: this.parent,
        className: 'graph-svg-tip comparison',
        innerHTML: "<span class=\"title\"></span>\n\t\t\t\t<ul class=\"data-point-list\"></ul>\n\t\t\t\t<div class=\"svg-pointer\"></div>"
      });
      this.hideTip();
      this.title = this.container.querySelector('.title');
      this.dataPointList = this.container.querySelector('.data-point-list');
      this.parent.addEventListener('mouseleave', function () {
        _this.hideTip();
      });
    }
  }, {
    key: "fill",
    value: function fill() {
      var _this2 = this;

      var title;

      if (this.index) {
        this.container.setAttribute('data-point-index', this.index);
      }

      if (this.titleValueFirst) {
        title = "<strong>".concat(this.titleValue, "</strong>").concat(this.titleName);
      } else {
        title = "".concat(this.titleName, "<strong>").concat(this.titleValue, "</strong>");
      }

      this.title.innerHTML = title;
      this.dataPointList.innerHTML = '';
      this.listValues.map(function (set, i) {
        var color = _this2.colors[i] || 'black';
        var value = set.formatted === 0 || set.formatted ? set.formatted : set.value;
        var li = $.create('li', {
          styles: {
            'border-top': "3px solid ".concat(color)
          },
          innerHTML: "<strong style=\"display: block;\">".concat(value === 0 || value ? value : '', "</strong>\n\t\t\t\t\t").concat(set.title ? set.title : '')
        });

        _this2.dataPointList.appendChild(li);
      });
    }
  }, {
    key: "calcPosition",
    value: function calcPosition() {
      var width = this.container.offsetWidth;
      this.top = this.y - this.container.offsetHeight - TOOLTIP_POINTER_TRIANGLE_HEIGHT;
      this.left = this.x - width / 2;
      var maxLeft = this.parent.offsetWidth - width;
      var pointer = this.container.querySelector('.svg-pointer');

      if (this.left < 0) {
        pointer.style.left = "calc(50% - ".concat(-1 * this.left, "px)");
        this.left = 0;
      } else if (this.left > maxLeft) {
        var delta = this.left - maxLeft;
        var pointerOffset = "calc(50% + ".concat(delta, "px)");
        pointer.style.left = pointerOffset;
        this.left = maxLeft;
      } else {
        pointer.style.left = "50%";
      }
    }
  }, {
    key: "setValues",
    value: function setValues(x, y) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var listValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
      this.titleName = title.name;
      this.titleValue = title.value;
      this.listValues = listValues;
      this.x = x;
      this.y = y;
      this.titleValueFirst = title.valueFirst || 0;
      this.index = index;
      this.refresh();
    }
  }, {
    key: "hideTip",
    value: function hideTip() {
      this.container.style.top = '0px';
      this.container.style.left = '0px';
      this.container.style.opacity = '0';
    }
  }, {
    key: "showTip",
    value: function showTip() {
      this.container.style.top = this.top + 'px';
      this.container.style.left = this.left + 'px';
      this.container.style.opacity = '1';
    }
  }]);

  return SvgTip;
}();
/**
 * Returns the value of a number upto 2 decimal places.
 * @param {Number} d Any number
 */


function floatTwo(d) {
  return parseFloat(d.toFixed(2));
}
/**
 * Returns whether or not two given arrays are equal.
 * @param {Array} arr1 First array
 * @param {Array} arr2 Second array
 */

/**
 * Shuffles array in place. ES6 version
 * @param {Array} array An array containing the items.
 */

/**
 * Fill an array with extra points
 * @param {Array} array Array
 * @param {Number} count number of filler elements
 * @param {Object} element element to fill with
 * @param {Boolean} start fill at start?
 */


function fillArray(array, count, element) {
  var start = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!element) {
    element = start ? array[0] : array[array.length - 1];
  }

  var fillerArray = new Array(Math.abs(count)).fill(element);
  array = start ? fillerArray.concat(array) : array.concat(fillerArray);
  return array;
}
/**
 * Returns pixel width of string.
 * @param {String} string
 * @param {Number} charWidth Width of single char in pixels
 */


function getStringWidth(string, charWidth) {
  return (string + "").length * charWidth;
} // https://stackoverflow.com/a/29325222


function getPositionByAngle(angle, radius) {
  return {
    x: Math.sin(angle * ANGLE_RATIO) * radius,
    y: Math.cos(angle * ANGLE_RATIO) * radius
  };
}

function getBarHeightAndYAttr(yTop, zeroLine) {
  var height, y;

  if (yTop <= zeroLine) {
    height = zeroLine - yTop;
    y = yTop;
  } else {
    height = yTop - zeroLine;
    y = zeroLine;
  }

  return [height, y];
}

function equilizeNoOfElements(array1, array2) {
  var extraCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array2.length - array1.length;

  // Doesn't work if either has zero elements.
  if (extraCount > 0) {
    array1 = fillArray(array1, extraCount);
  } else {
    array2 = fillArray(array2, extraCount);
  }

  return [array1, array2];
}

function truncateString(txt, len) {
  if (!txt) {
    return;
  }

  if (txt.length > len) {
    return txt.slice(0, len - 3) + '...';
  } else {
    return txt;
  }
}

function shortenLargeNumber(label) {
  var number;
  if (typeof label === 'number') number = label;else if (typeof label === 'string') {
    number = Number(label);
    if (Number.isNaN(number)) return label;
  } // Using absolute since log wont work for negative numbers

  var p = Math.floor(Math.log10(Math.abs(number)));
  if (p <= 2) return number; // Return as is for a 3 digit number of less

  var l = Math.floor(p / 3);
  var shortened = Math.pow(10, p - l * 3) * +(number / Math.pow(10, p)).toFixed(1); // Correct for floating point error upto 2 decimal places

  return Math.round(shortened * 100) / 100 + ' ' + ['', 'K', 'M', 'B', 'T'][l];
} // cubic bezier curve calculation (from example by François Romain)


function getSplineCurvePointsStr(xList, yList) {
  var points = [];

  for (var i = 0; i < xList.length; i++) {
    points.push([xList[i], yList[i]]);
  }

  var smoothing = 0.2;

  var line = function line(pointA, pointB) {
    var lengthX = pointB[0] - pointA[0];
    var lengthY = pointB[1] - pointA[1];
    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX)
    };
  };

  var controlPoint = function controlPoint(current, previous, next, reverse) {
    var p = previous || current;
    var n = next || current;
    var o = line(p, n);
    var angle = o.angle + (reverse ? Math.PI : 0);
    var length = o.length * smoothing;
    var x = current[0] + Math.cos(angle) * length;
    var y = current[1] + Math.sin(angle) * length;
    return [x, y];
  };

  var bezierCommand = function bezierCommand(point, i, a) {
    var cps = controlPoint(a[i - 1], a[i - 2], point);
    var cpe = controlPoint(point, a[i - 1], a[i + 1], true);
    return "C ".concat(cps[0], ",").concat(cps[1], " ").concat(cpe[0], ",").concat(cpe[1], " ").concat(point[0], ",").concat(point[1]);
  };

  var pointStr = function pointStr(points, command) {
    return points.reduce(function (acc, point, i, a) {
      return i === 0 ? "".concat(point[0], ",").concat(point[1]) : "".concat(acc, " ").concat(command(point, i, a));
    }, '');
  };

  return pointStr(points, bezierCommand);
}

var PRESET_COLOR_MAP = {
  'light-blue': '#7cd6fd',
  'blue': '#5e64ff',
  'violet': '#743ee2',
  'red': '#ff5858',
  'orange': '#ffa00a',
  'yellow': '#feef72',
  'green': '#28a745',
  'light-green': '#98d85b',
  'purple': '#b554ff',
  'magenta': '#ffa3ef',
  'black': '#36114C',
  'grey': '#bdd3e6',
  'light-grey': '#f0f4f7',
  'dark-grey': '#b8c2cc'
};

function limitColor(r) {
  if (r > 255) return 255;else if (r < 0) return 0;
  return r;
}

function lightenDarkenColor(color, amt) {
  var col = getColor(color);
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);
  var r = limitColor((num >> 16) + amt);
  var b = limitColor((num >> 8 & 0x00FF) + amt);
  var g = limitColor((num & 0x0000FF) + amt);
  return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
}

function isValidColor(string) {
  // https://stackoverflow.com/a/8027444/6495043
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(string);
}

var getColor = function getColor(color) {
  return PRESET_COLOR_MAP[color] || color;
};

var AXIS_TICK_LENGTH = 6;
var LABEL_MARGIN = 4;
var LABEL_MAX_CHARS = 15;
var FONT_SIZE = 10;
var BASE_LINE_COLOR = '#dadada';
var FONT_FILL = '#555b51';

function $$1(expr, con) {
  return typeof expr === "string" ? (con || document).querySelector(expr) : expr || null;
}

function createSVG(tag, o) {
  var element = document.createElementNS("http://www.w3.org/2000/svg", tag);

  for (var i in o) {
    var val = o[i];

    if (i === "inside") {
      $$1(val).appendChild(element);
    } else if (i === "around") {
      var ref = $$1(val);
      ref.parentNode.insertBefore(element, ref);
      element.appendChild(ref);
    } else if (i === "styles") {
      if (_typeof(val) === "object") {
        Object.keys(val).map(function (prop) {
          element.style[prop] = val[prop];
        });
      }
    } else {
      if (i === "className") {
        i = "class";
      }

      if (i === "innerHTML") {
        element['textContent'] = val;
      } else {
        element.setAttribute(i, val);
      }
    }
  }

  return element;
}

function renderVerticalGradient(svgDefElem, gradientId) {
  return createSVG('linearGradient', {
    inside: svgDefElem,
    id: gradientId,
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 1
  });
}

function setGradientStop(gradElem, offset, color, opacity) {
  return createSVG('stop', {
    'inside': gradElem,
    'style': "stop-color: ".concat(color),
    'offset': offset,
    'stop-opacity': opacity
  });
}

function makeSVGContainer(parent, className, width, height) {
  return createSVG('svg', {
    className: className,
    inside: parent,
    width: width,
    height: height
  });
}

function makeSVGDefs(svgContainer) {
  return createSVG('defs', {
    inside: svgContainer
  });
}

function makeSVGGroup(className) {
  var transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var args = {
    className: className,
    transform: transform
  };
  if (parent) args.inside = parent;
  return createSVG('g', args);
}

function makePath(pathStr) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var stroke = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
  var strokeWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
  return createSVG('path', {
    className: className,
    d: pathStr,
    styles: {
      stroke: stroke,
      fill: fill,
      'stroke-width': strokeWidth
    }
  });
}

function makeArcPathStr(startPosition, endPosition, center, radius) {
  var clockWise = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var largeArc = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var arcStartX = center.x + startPosition.x,
      arcStartY = center.y + startPosition.y;
  var arcEndX = center.x + endPosition.x,
      arcEndY = center.y + endPosition.y;
  return "M".concat(center.x, " ").concat(center.y, "\n\t\tL").concat(arcStartX, " ").concat(arcStartY, "\n\t\tA ").concat(radius, " ").concat(radius, " 0 ").concat(largeArc, " ").concat(clockWise ? 1 : 0, "\n\t\t").concat(arcEndX, " ").concat(arcEndY, " z");
}

function makeCircleStr(startPosition, endPosition, center, radius) {
  var clockWise = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var largeArc = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var arcStartX = center.x + startPosition.x,
      arcStartY = center.y + startPosition.y;
  var arcEndX = center.x + endPosition.x,
      midArc = center.y * 2,
      arcEndY = center.y + endPosition.y;
  return "M".concat(center.x, " ").concat(center.y, "\n\t\tL").concat(arcStartX, " ").concat(arcStartY, "\n\t\tA ").concat(radius, " ").concat(radius, " 0 ").concat(largeArc, " ").concat(clockWise ? 1 : 0, "\n\t\t").concat(arcEndX, " ").concat(midArc, " z\n\t\tL").concat(arcStartX, " ").concat(midArc, "\n\t\tA ").concat(radius, " ").concat(radius, " 0 ").concat(largeArc, " ").concat(clockWise ? 1 : 0, "\n\t\t").concat(arcEndX, " ").concat(arcEndY, " z");
}

function makeArcStrokePathStr(startPosition, endPosition, center, radius) {
  var clockWise = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var largeArc = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var arcStartX = center.x + startPosition.x,
      arcStartY = center.y + startPosition.y;
  var arcEndX = center.x + endPosition.x,
      arcEndY = center.y + endPosition.y;
  return "M".concat(arcStartX, " ").concat(arcStartY, "\n\t\tA ").concat(radius, " ").concat(radius, " 0 ").concat(largeArc, " ").concat(clockWise ? 1 : 0, "\n\t\t").concat(arcEndX, " ").concat(arcEndY);
}

function makeStrokeCircleStr(startPosition, endPosition, center, radius) {
  var clockWise = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var largeArc = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var arcStartX = center.x + startPosition.x,
      arcStartY = center.y + startPosition.y;
  var arcEndX = center.x + endPosition.x,
      midArc = radius * 2 + arcStartY,
      arcEndY = center.y + startPosition.y;
  return "M".concat(arcStartX, " ").concat(arcStartY, "\n\t\tA ").concat(radius, " ").concat(radius, " 0 ").concat(largeArc, " ").concat(clockWise ? 1 : 0, "\n\t\t").concat(arcEndX, " ").concat(midArc, "\n\t\tM").concat(arcStartX, " ").concat(midArc, "\n\t\tA ").concat(radius, " ").concat(radius, " 0 ").concat(largeArc, " ").concat(clockWise ? 1 : 0, "\n\t\t").concat(arcEndX, " ").concat(arcEndY);
}

function makeGradient(svgDefElem, color) {
  var lighter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var gradientId = 'path-fill-gradient' + '-' + color + '-' + (lighter ? 'lighter' : 'default');
  var gradientDef = renderVerticalGradient(svgDefElem, gradientId);
  var opacities = [1, 0.6, 0.2];

  if (lighter) {
    opacities = [0.4, 0.2, 0];
  }

  setGradientStop(gradientDef, "0%", color, opacities[0]);
  setGradientStop(gradientDef, "50%", color, opacities[1]);
  setGradientStop(gradientDef, "100%", color, opacities[2]);
  return gradientId;
}

function percentageBar(x, y, width, height) {
  var depth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : PERCENTAGE_BAR_DEFAULT_DEPTH;
  var fill = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'none';
  var args = {
    className: 'percentage-bar',
    x: x,
    y: y,
    width: width,
    height: height,
    fill: fill,
    styles: {
      'stroke': lightenDarkenColor(fill, -25),
      // Diabolically good: https://stackoverflow.com/a/9000859
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
      'stroke-dasharray': "0, ".concat(height + width, ", ").concat(width, ", ").concat(height),
      'stroke-width': depth
    }
  };
  return createSVG("rect", args);
}

function heatSquare(className, x, y, size) {
  var fill = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'none';
  var data = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var args = {
    className: className,
    x: x,
    y: y,
    width: size,
    height: size,
    fill: fill
  };
  Object.keys(data).map(function (key) {
    args[key] = data[key];
  });
  return createSVG("rect", args);
}

function legendBar(x, y, size) {
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
  var label = arguments.length > 4 ? arguments[4] : undefined;
  var truncate = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  label = truncate ? truncateString(label, LABEL_MAX_CHARS) : label;
  var args = {
    className: 'legend-bar',
    x: 0,
    y: 0,
    width: size,
    height: '2px',
    fill: fill
  };
  var text = createSVG('text', {
    className: 'legend-dataset-text',
    x: 0,
    y: 0,
    dy: FONT_SIZE * 2 + 'px',
    'font-size': FONT_SIZE * 1.2 + 'px',
    'text-anchor': 'start',
    fill: FONT_FILL,
    innerHTML: label
  });
  var group = createSVG('g', {
    transform: "translate(".concat(x, ", ").concat(y, ")")
  });
  group.appendChild(createSVG("rect", args));
  group.appendChild(text);
  return group;
}

function legendDot(x, y, size) {
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
  var label = arguments.length > 4 ? arguments[4] : undefined;
  var truncate = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  label = truncate ? truncateString(label, LABEL_MAX_CHARS) : label;
  var args = {
    className: 'legend-dot',
    cx: 0,
    cy: 0,
    r: size,
    fill: fill
  };
  var text = createSVG('text', {
    className: 'legend-dataset-text',
    x: 0,
    y: 0,
    dx: FONT_SIZE + 'px',
    dy: FONT_SIZE / 3 + 'px',
    'font-size': FONT_SIZE * 1.2 + 'px',
    'text-anchor': 'start',
    fill: FONT_FILL,
    innerHTML: label
  });
  var group = createSVG('g', {
    transform: "translate(".concat(x, ", ").concat(y, ")")
  });
  group.appendChild(createSVG("circle", args));
  group.appendChild(text);
  return group;
}

function makeText(className, x, y, content) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var fontSize = options.fontSize || FONT_SIZE;
  var dy = options.dy !== undefined ? options.dy : fontSize / 2;
  var fill = options.fill || FONT_FILL;
  var textAnchor = options.textAnchor || 'start';
  return createSVG('text', {
    className: className,
    x: x,
    y: y,
    dy: dy + 'px',
    'font-size': fontSize + 'px',
    fill: fill,
    'text-anchor': textAnchor,
    innerHTML: content
  });
}

function makeVertLine(x, label, y1, y2) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  if (!options.stroke) options.stroke = BASE_LINE_COLOR;
  var l = createSVG('line', {
    className: 'line-vertical ' + options.className,
    x1: 0,
    x2: 0,
    y1: y1,
    y2: y2,
    styles: {
      stroke: options.stroke
    }
  });
  var text = createSVG('text', {
    x: 0,
    y: y1 > y2 ? y1 + LABEL_MARGIN : y1 - LABEL_MARGIN - FONT_SIZE,
    dy: FONT_SIZE + 'px',
    'font-size': FONT_SIZE + 'px',
    'text-anchor': 'middle',
    innerHTML: label + ""
  });
  var line = createSVG('g', {
    transform: "translate(".concat(x, ", 0)")
  });
  line.appendChild(l);
  line.appendChild(text);
  return line;
}

function makeHoriLine(y, label, x1, x2) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  if (!options.stroke) options.stroke = BASE_LINE_COLOR;
  if (!options.lineType) options.lineType = '';
  if (options.shortenNumbers) label = shortenLargeNumber(label);
  var className = 'line-horizontal ' + options.className + (options.lineType === "dashed" ? "dashed" : "");
  var l = createSVG('line', {
    className: className,
    x1: x1,
    x2: x2,
    y1: 0,
    y2: 0,
    styles: {
      stroke: options.stroke
    }
  });
  var text = createSVG('text', {
    x: x1 < x2 ? x1 - LABEL_MARGIN : x1 + LABEL_MARGIN,
    y: 0,
    dy: FONT_SIZE / 2 - 2 + 'px',
    'font-size': FONT_SIZE + 'px',
    'text-anchor': x1 < x2 ? 'end' : 'start',
    innerHTML: label + ""
  });
  var line = createSVG('g', {
    transform: "translate(0, ".concat(y, ")"),
    'stroke-opacity': 1
  });

  if (text === 0 || text === '0') {
    line.style.stroke = "rgba(27, 31, 35, 0.6)";
  }

  line.appendChild(l);
  line.appendChild(text);
  return line;
}

function yLine(y, label, width) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (!options.pos) options.pos = 'left';
  if (!options.offset) options.offset = 0;
  if (!options.mode) options.mode = 'span';
  if (!options.stroke) options.stroke = BASE_LINE_COLOR;
  if (!options.className) options.className = '';
  var x1 = -1 * AXIS_TICK_LENGTH;
  var x2 = options.mode === 'span' ? width + AXIS_TICK_LENGTH : 0;

  if (options.mode === 'tick' && options.pos === 'right') {
    x1 = width + AXIS_TICK_LENGTH;
    x2 = width;
  } // let offset = options.pos === 'left' ? -1 * options.offset : options.offset;


  x1 += options.offset;
  x2 += options.offset;
  return makeHoriLine(y, label, x1, x2, {
    stroke: options.stroke,
    className: options.className,
    lineType: options.lineType,
    shortenNumbers: options.shortenNumbers
  });
}

function xLine(x, label, height) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (!options.pos) options.pos = 'bottom';
  if (!options.offset) options.offset = 0;
  if (!options.mode) options.mode = 'span';
  if (!options.stroke) options.stroke = BASE_LINE_COLOR;
  if (!options.className) options.className = ''; // Draw X axis line in span/tick mode with optional label
  //                        	y2(span)
  // 						|
  // 						|
  //				x line	|
  //						|
  // 					   	|
  // ---------------------+-- y2(tick)
  //						|
  //							y1

  var y1 = height + AXIS_TICK_LENGTH;
  var y2 = options.mode === 'span' ? -1 * AXIS_TICK_LENGTH : height;

  if (options.mode === 'tick' && options.pos === 'top') {
    // top axis ticks
    y1 = -1 * AXIS_TICK_LENGTH;
    y2 = 0;
  }

  return makeVertLine(x, label, y1, y2, {
    stroke: options.stroke,
    className: options.className,
    lineType: options.lineType
  });
}

function yMarker(y, label, width) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (!options.labelPos) options.labelPos = 'right';
  var x = options.labelPos === 'left' ? LABEL_MARGIN : width - getStringWidth(label, 5) - LABEL_MARGIN;
  var labelSvg = createSVG('text', {
    className: 'chart-label',
    x: x,
    y: 0,
    dy: FONT_SIZE / -2 + 'px',
    'font-size': FONT_SIZE + 'px',
    'text-anchor': 'start',
    innerHTML: label + ""
  });
  var line = makeHoriLine(y, '', 0, width, {
    stroke: options.stroke || BASE_LINE_COLOR,
    className: options.className || '',
    lineType: options.lineType
  });
  line.appendChild(labelSvg);
  return line;
}

function yRegion(y1, y2, width, label) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  // return a group
  var height = y1 - y2;
  var rect = createSVG('rect', {
    className: "bar mini",
    // remove class
    styles: {
      fill: "rgba(228, 234, 239, 0.49)",
      stroke: BASE_LINE_COLOR,
      'stroke-dasharray': "".concat(width, ", ").concat(height)
    },
    // 'data-point-index': index,
    x: 0,
    y: 0,
    width: width,
    height: height
  });
  if (!options.labelPos) options.labelPos = 'right';
  var x = options.labelPos === 'left' ? LABEL_MARGIN : width - getStringWidth(label + "", 4.5) - LABEL_MARGIN;
  var labelSvg = createSVG('text', {
    className: 'chart-label',
    x: x,
    y: 0,
    dy: FONT_SIZE / -2 + 'px',
    'font-size': FONT_SIZE + 'px',
    'text-anchor': 'start',
    innerHTML: label + ""
  });
  var region = createSVG('g', {
    transform: "translate(0, ".concat(y2, ")")
  });
  region.appendChild(rect);
  region.appendChild(labelSvg);
  return region;
}

function datasetBar(x, yTop, width, color) {
  var label = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var offset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var meta = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};

  var _getBarHeightAndYAttr = getBarHeightAndYAttr(yTop, meta.zeroLine),
      _getBarHeightAndYAttr2 = _slicedToArray(_getBarHeightAndYAttr, 2),
      height = _getBarHeightAndYAttr2[0],
      y = _getBarHeightAndYAttr2[1];

  y -= offset;

  if (height === 0) {
    height = meta.minHeight;
    y -= meta.minHeight;
  }

  var rect = createSVG('rect', {
    className: "bar mini",
    style: "fill: ".concat(color),
    'data-point-index': index,
    x: x,
    y: y,
    width: width,
    height: height
  });
  label += "";

  if (!label && !label.length) {
    return rect;
  } else {
    rect.setAttribute('y', 0);
    rect.setAttribute('x', 0);
    var text = createSVG('text', {
      className: 'data-point-value',
      x: width / 2,
      y: 0,
      dy: FONT_SIZE / 2 * -1 + 'px',
      'font-size': FONT_SIZE + 'px',
      'text-anchor': 'middle',
      innerHTML: label
    });
    var group = createSVG('g', {
      'data-point-index': index,
      transform: "translate(".concat(x, ", ").concat(y, ")")
    });
    group.appendChild(rect);
    group.appendChild(text);
    return group;
  }
}

function datasetDot(x, y, radius, color) {
  var label = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var dot = createSVG('circle', {
    style: "fill: ".concat(color),
    'data-point-index': index,
    cx: x,
    cy: y,
    r: radius
  });
  label += "";

  if (!label && !label.length) {
    return dot;
  } else {
    dot.setAttribute('cy', 0);
    dot.setAttribute('cx', 0);
    var text = createSVG('text', {
      className: 'data-point-value',
      x: 0,
      y: 0,
      dy: FONT_SIZE / 2 * -1 - radius + 'px',
      'font-size': FONT_SIZE + 'px',
      'text-anchor': 'middle',
      innerHTML: label
    });
    var group = createSVG('g', {
      'data-point-index': index,
      transform: "translate(".concat(x, ", ").concat(y, ")")
    });
    group.appendChild(dot);
    group.appendChild(text);
    return group;
  }
}

function getPaths(xList, yList, color) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var meta = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var pointsList = yList.map(function (y, i) {
    return xList[i] + ',' + y;
  });
  var pointsStr = pointsList.join("L"); // Spline

  if (options.spline) pointsStr = getSplineCurvePointsStr(xList, yList);
  var path = makePath("M" + pointsStr, 'line-graph-path', color); // HeatLine

  if (options.heatline) {
    var gradient_id = makeGradient(meta.svgDefs, color);
    path.style.stroke = "url(#".concat(gradient_id, ")");
  }

  var paths = {
    path: path
  }; // Region

  if (options.regionFill) {
    var gradient_id_region = makeGradient(meta.svgDefs, color, true);
    var pathStr = "M" + "".concat(xList[0], ",").concat(meta.zeroLine, "L") + pointsStr + "L".concat(xList.slice(-1)[0], ",").concat(meta.zeroLine);
    paths.region = makePath(pathStr, "region-fill", 'none', "url(#".concat(gradient_id_region, ")"));
  }

  return paths;
}

var _makeOverlay = {
  'bar': function bar(unit) {
    var transformValue;

    if (unit.nodeName !== 'rect') {
      transformValue = unit.getAttribute('transform');
      unit = unit.childNodes[0];
    }

    var overlay = unit.cloneNode();
    overlay.style.fill = '#000000';
    overlay.style.opacity = '0.4';

    if (transformValue) {
      overlay.setAttribute('transform', transformValue);
    }

    return overlay;
  },
  'dot': function dot(unit) {
    var transformValue;

    if (unit.nodeName !== 'circle') {
      transformValue = unit.getAttribute('transform');
      unit = unit.childNodes[0];
    }

    var overlay = unit.cloneNode();
    var radius = unit.getAttribute('r');
    var fill = unit.getAttribute('fill');
    overlay.setAttribute('r', parseInt(radius) + DOT_OVERLAY_SIZE_INCR);
    overlay.setAttribute('fill', fill);
    overlay.style.opacity = '0.6';

    if (transformValue) {
      overlay.setAttribute('transform', transformValue);
    }

    return overlay;
  },
  'heat_square': function heat_square(unit) {
    var transformValue;

    if (unit.nodeName !== 'circle') {
      transformValue = unit.getAttribute('transform');
      unit = unit.childNodes[0];
    }

    var overlay = unit.cloneNode();
    var radius = unit.getAttribute('r');
    var fill = unit.getAttribute('fill');
    overlay.setAttribute('r', parseInt(radius) + DOT_OVERLAY_SIZE_INCR);
    overlay.setAttribute('fill', fill);
    overlay.style.opacity = '0.6';

    if (transformValue) {
      overlay.setAttribute('transform', transformValue);
    }

    return overlay;
  }
};
var _updateOverlay = {
  'bar': function bar(unit, overlay) {
    var transformValue;

    if (unit.nodeName !== 'rect') {
      transformValue = unit.getAttribute('transform');
      unit = unit.childNodes[0];
    }

    var attributes = ['x', 'y', 'width', 'height'];
    Object.values(unit.attributes).filter(function (attr) {
      return attributes.includes(attr.name) && attr.specified;
    }).map(function (attr) {
      overlay.setAttribute(attr.name, attr.nodeValue);
    });

    if (transformValue) {
      overlay.setAttribute('transform', transformValue);
    }
  },
  'dot': function dot(unit, overlay) {
    var transformValue;

    if (unit.nodeName !== 'circle') {
      transformValue = unit.getAttribute('transform');
      unit = unit.childNodes[0];
    }

    var attributes = ['cx', 'cy'];
    Object.values(unit.attributes).filter(function (attr) {
      return attributes.includes(attr.name) && attr.specified;
    }).map(function (attr) {
      overlay.setAttribute(attr.name, attr.nodeValue);
    });

    if (transformValue) {
      overlay.setAttribute('transform', transformValue);
    }
  },
  'heat_square': function heat_square(unit, overlay) {
    var transformValue;

    if (unit.nodeName !== 'circle') {
      transformValue = unit.getAttribute('transform');
      unit = unit.childNodes[0];
    }

    var attributes = ['cx', 'cy'];
    Object.values(unit.attributes).filter(function (attr) {
      return attributes.includes(attr.name) && attr.specified;
    }).map(function (attr) {
      overlay.setAttribute(attr.name, attr.nodeValue);
    });

    if (transformValue) {
      overlay.setAttribute('transform', transformValue);
    }
  }
};
var UNIT_ANIM_DUR = 350;
var PATH_ANIM_DUR = 350;
var MARKER_LINE_ANIM_DUR = UNIT_ANIM_DUR;
var REPLACE_ALL_NEW_DUR = 250;
var STD_EASING = 'easein';

function translate(unit, oldCoord, newCoord, duration) {
  var old = typeof oldCoord === 'string' ? oldCoord : oldCoord.join(', ');
  return [unit, {
    transform: newCoord.join(', ')
  }, duration, STD_EASING, "translate", {
    transform: old
  }];
}

function translateVertLine(xLine, newX, oldX) {
  return translate(xLine, [oldX, 0], [newX, 0], MARKER_LINE_ANIM_DUR);
}

function translateHoriLine(yLine, newY, oldY) {
  return translate(yLine, [0, oldY], [0, newY], MARKER_LINE_ANIM_DUR);
}

function animateRegion(rectGroup, newY1, newY2, oldY2) {
  var newHeight = newY1 - newY2;
  var rect = rectGroup.childNodes[0];
  var width = rect.getAttribute("width");
  var rectAnim = [rect, {
    height: newHeight,
    'stroke-dasharray': "".concat(width, ", ").concat(newHeight)
  }, MARKER_LINE_ANIM_DUR, STD_EASING];
  var groupAnim = translate(rectGroup, [0, oldY2], [0, newY2], MARKER_LINE_ANIM_DUR);
  return [rectAnim, groupAnim];
}

function animateBar(bar, x, yTop, width) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var meta = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  var _getBarHeightAndYAttr3 = getBarHeightAndYAttr(yTop, meta.zeroLine),
      _getBarHeightAndYAttr4 = _slicedToArray(_getBarHeightAndYAttr3, 2),
      height = _getBarHeightAndYAttr4[0],
      y = _getBarHeightAndYAttr4[1];

  y -= offset;

  if (bar.nodeName !== 'rect') {
    var rect = bar.childNodes[0];
    var rectAnim = [rect, {
      width: width,
      height: height
    }, UNIT_ANIM_DUR, STD_EASING];
    var oldCoordStr = bar.getAttribute("transform").split("(")[1].slice(0, -1);
    var groupAnim = translate(bar, oldCoordStr, [x, y], MARKER_LINE_ANIM_DUR);
    return [rectAnim, groupAnim];
  } else {
    return [[bar, {
      width: width,
      height: height,
      x: x,
      y: y
    }, UNIT_ANIM_DUR, STD_EASING]];
  } // bar.animate({height: args.newHeight, y: yTop}, UNIT_ANIM_DUR, mina.easein);

}

function animateDot(dot, x, y) {
  if (dot.nodeName !== 'circle') {
    var oldCoordStr = dot.getAttribute("transform").split("(")[1].slice(0, -1);
    var groupAnim = translate(dot, oldCoordStr, [x, y], MARKER_LINE_ANIM_DUR);
    return [groupAnim];
  } else {
    return [[dot, {
      cx: x,
      cy: y
    }, UNIT_ANIM_DUR, STD_EASING]];
  } // dot.animate({cy: yTop}, UNIT_ANIM_DUR, mina.easein);

}

function animatePath(paths, newXList, newYList, zeroLine, spline) {
  var pathComponents = [];
  var pointsStr = newYList.map(function (y, i) {
    return newXList[i] + ',' + y;
  }).join("L");
  if (spline) pointsStr = getSplineCurvePointsStr(newXList, newYList);
  var animPath = [paths.path, {
    d: "M" + pointsStr
  }, PATH_ANIM_DUR, STD_EASING];
  pathComponents.push(animPath);

  if (paths.region) {
    var regStartPt = "".concat(newXList[0], ",").concat(zeroLine, "L");
    var regEndPt = "L".concat(newXList.slice(-1)[0], ", ").concat(zeroLine);
    var animRegion = [paths.region, {
      d: "M" + regStartPt + pointsStr + regEndPt
    }, PATH_ANIM_DUR, STD_EASING];
    pathComponents.push(animRegion);
  }

  return pathComponents;
}

function animatePathStr(oldPath, pathStr) {
  return [oldPath, {
    d: pathStr
  }, UNIT_ANIM_DUR, STD_EASING];
} // Leveraging SMIL Animations


var EASING = {
  ease: "0.25 0.1 0.25 1",
  linear: "0 0 1 1",
  // easein: "0.42 0 1 1",
  easein: "0.1 0.8 0.2 1",
  easeout: "0 0 0.58 1",
  easeinout: "0.42 0 0.58 1"
};

function animateSVGElement(element, props, dur) {
  var easingType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "linear";
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  var oldValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var animElement = element.cloneNode(true);
  var newElement = element.cloneNode(true);

  for (var attributeName in props) {
    var animateElement = void 0;

    if (attributeName === 'transform') {
      animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
    } else {
      animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    }

    var currentValue = oldValues[attributeName] || element.getAttribute(attributeName);
    var value = props[attributeName];
    var animAttr = {
      attributeName: attributeName,
      from: currentValue,
      to: value,
      begin: "0s",
      dur: dur / 1000 + "s",
      values: currentValue + ";" + value,
      keySplines: EASING[easingType],
      keyTimes: "0;1",
      calcMode: "spline",
      fill: 'freeze'
    };

    if (type) {
      animAttr["type"] = type;
    }

    for (var i in animAttr) {
      animateElement.setAttribute(i, animAttr[i]);
    }

    animElement.appendChild(animateElement);

    if (type) {
      newElement.setAttribute(attributeName, "translate(".concat(value, ")"));
    } else {
      newElement.setAttribute(attributeName, value);
    }
  }

  return [animElement, newElement];
}

function transform(element, style) {
  // eslint-disable-line no-unused-vars
  element.style.transform = style;
  element.style.webkitTransform = style;
  element.style.msTransform = style;
  element.style.mozTransform = style;
  element.style.oTransform = style;
}

function animateSVG(svgContainer, elements) {
  var newElements = [];
  var animElements = [];
  elements.map(function (element) {
    var unit = element[0];
    var parent = unit.parentNode;
    var animElement, newElement;
    element[0] = unit;

    var _animateSVGElement = animateSVGElement.apply(void 0, _toConsumableArray(element));

    var _animateSVGElement2 = _slicedToArray(_animateSVGElement, 2);

    animElement = _animateSVGElement2[0];
    newElement = _animateSVGElement2[1];
    newElements.push(newElement);
    animElements.push([animElement, parent]);
    parent.replaceChild(animElement, unit);
  });
  var animSvg = svgContainer.cloneNode(true);
  animElements.map(function (animElement, i) {
    animElement[1].replaceChild(newElements[i], animElement[0]);
    elements[i][0] = newElements[i];
  });
  return animSvg;
}

function runSMILAnimation(parent, svgElement, elementsToAnimate) {
  if (elementsToAnimate.length === 0) return;
  var animSvgElement = animateSVG(svgElement, elementsToAnimate);

  if (svgElement.parentNode == parent) {
    parent.removeChild(svgElement);
    parent.appendChild(animSvgElement);
  } // Replace the new svgElement (data has already been replaced)


  setTimeout(function () {
    if (animSvgElement.parentNode == parent) {
      parent.removeChild(animSvgElement);
      parent.appendChild(svgElement);
    }
  }, REPLACE_ALL_NEW_DUR);
}

var CSSTEXT = ".chart-container{position:relative;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip{position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip ul{padding-left:0;display:flex}.graph-svg-tip ol{padding-left:0;display:flex}.graph-svg-tip ul.data-point-list li{min-width:90px;flex:1;font-weight:600}.graph-svg-tip strong{color:#dfe2e5;font-weight:600}.graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:' ';border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}";

function downloadFile(filename, data) {
  var a = document.createElement('a');
  a.style = "display: none";
  var blob = new Blob(data, {
    type: "image/svg+xml; charset=utf-8"
  });
  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 300);
}

function prepareForExport(svg) {
  var clone = svg.cloneNode(true);
  clone.classList.add('chart-container');
  clone.setAttribute('xmlns', "http://www.w3.org/2000/svg");
  clone.setAttribute('xmlns:xlink', "http://www.w3.org/1999/xlink");
  var styleEl = $.create('style', {
    'innerHTML': CSSTEXT
  });
  clone.insertBefore(styleEl, clone.firstChild);
  var container = $.create('div');
  container.appendChild(clone);
  return container.innerHTML;
}

var BaseChart =
/*#__PURE__*/
function () {
  function BaseChart(parent, options) {
    _classCallCheck(this, BaseChart);

    this.parent = typeof parent === 'string' ? document.querySelector(parent) : parent;

    if (!(this.parent instanceof HTMLElement)) {
      throw new Error('No `parent` element to render on was provided.');
    }

    this.rawChartArgs = options;
    this.title = options.title || '';
    this.type = options.type || '';
    this.realData = this.prepareData(options.data);
    this.data = this.prepareFirstData(this.realData);
    this.colors = this.validateColors(options.colors, this.type);
    this.config = {
      showTooltip: 1,
      // calculate
      showLegend: 1,
      // calculate
      isNavigable: options.isNavigable || 0,
      animate: typeof options.animate !== 'undefined' ? options.animate : 1,
      truncateLegends: options.truncateLegends || 0
    };
    this.measures = JSON.parse(JSON.stringify(BASE_MEASURES));
    var m = this.measures;
    this.setMeasures(options);

    if (!this.title.length) {
      m.titleHeight = 0;
    }

    if (!this.config.showLegend) m.legendHeight = 0;
    this.argHeight = options.height || m.baseHeight;
    this.state = {};
    this.options = {};
    this.initTimeout = INIT_CHART_UPDATE_TIMEOUT;

    if (this.config.isNavigable) {
      this.overlays = [];
    }

    this.configure(options);
  }

  _createClass(BaseChart, [{
    key: "prepareData",
    value: function prepareData(data) {
      return data;
    }
  }, {
    key: "prepareFirstData",
    value: function prepareFirstData(data) {
      return data;
    }
  }, {
    key: "validateColors",
    value: function validateColors(colors, type) {
      var validColors = [];
      colors = (colors || []).concat(DEFAULT_COLORS[type]);
      colors.forEach(function (string) {
        var color = getColor(string);

        if (!isValidColor(color)) {
          console.warn('"' + string + '" is not a valid color.');
        } else {
          validColors.push(color);
        }
      });
      return validColors;
    }
  }, {
    key: "setMeasures",
    value: function setMeasures() {// Override measures, including those for title and legend
      // set config for legend and title
    }
  }, {
    key: "configure",
    value: function configure() {
      var _this3 = this;

      var height = this.argHeight;
      this.baseHeight = height;
      this.height = height - getExtraHeight(this.measures); // Bind window events

      this.boundDrawFn = function () {
        return _this3.draw(true);
      };

      window.addEventListener('resize', this.boundDrawFn);
      window.addEventListener('orientationchange', this.boundDrawFn);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('resize', this.boundDrawFn);
      window.removeEventListener('orientationchange', this.boundDrawFn);
    } // Has to be called manually

  }, {
    key: "setup",
    value: function setup() {
      this.makeContainer();
      this.updateWidth();
      this.makeTooltip();
      this.draw(false, true);
    }
  }, {
    key: "makeContainer",
    value: function makeContainer() {
      // Chart needs a dedicated parent element
      this.parent.innerHTML = '';
      var args = {
        inside: this.parent,
        className: 'chart-container'
      };

      if (this.independentWidth) {
        args.styles = {
          width: this.independentWidth + 'px'
        };
      }

      this.container = $.create('div', args);
    }
  }, {
    key: "makeTooltip",
    value: function makeTooltip() {
      this.tip = new SvgTip({
        parent: this.container,
        colors: this.colors
      });
      this.bindTooltip();
    }
  }, {
    key: "bindTooltip",
    value: function bindTooltip() {}
  }, {
    key: "draw",
    value: function draw() {
      var _this4 = this;

      var onlyWidthChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.updateWidth();
      this.calc(onlyWidthChange);
      this.makeChartArea();
      this.setupComponents();
      this.components.forEach(function (c) {
        return c.setup(_this4.drawArea);
      }); // this.components.forEach(c => c.make());

      this.render(this.components, false);

      if (init) {
        this.data = this.realData;
        setTimeout(function () {
          _this4.update(_this4.data);
        }, this.initTimeout);
      }

      this.renderLegend();
      this.setupNavigation(init);
    }
  }, {
    key: "calc",
    value: function calc() {} // builds state

  }, {
    key: "updateWidth",
    value: function updateWidth() {
      this.baseWidth = getElementContentWidth(this.parent);
      this.width = this.baseWidth - getExtraWidth(this.measures);
    }
  }, {
    key: "makeChartArea",
    value: function makeChartArea() {
      if (this.svg) {
        this.container.removeChild(this.svg);
      }

      var m = this.measures;
      this.svg = makeSVGContainer(this.container, 'frappe-chart chart', this.baseWidth, this.baseHeight);
      this.svgDefs = makeSVGDefs(this.svg);

      if (this.title.length) {
        this.titleEL = makeText('title', m.margins.left, m.margins.top, this.title, {
          fontSize: m.titleFontSize,
          fill: '#666666',
          dy: m.titleFontSize
        });
      }

      var top = getTopOffset(m);
      this.drawArea = makeSVGGroup(this.type + '-chart chart-draw-area', "translate(".concat(getLeftOffset(m), ", ").concat(top, ")"));

      if (this.config.showLegend) {
        top += this.height + m.paddings.bottom;
        this.legendArea = makeSVGGroup('chart-legend', "translate(".concat(getLeftOffset(m), ", ").concat(top, ")"));
      }

      if (this.title.length) {
        this.svg.appendChild(this.titleEL);
      }

      this.svg.appendChild(this.drawArea);

      if (this.config.showLegend) {
        this.svg.appendChild(this.legendArea);
      }

      this.updateTipOffset(getLeftOffset(m), getTopOffset(m));
    }
  }, {
    key: "updateTipOffset",
    value: function updateTipOffset(x, y) {
      this.tip.offset = {
        x: x,
        y: y
      };
    }
  }, {
    key: "setupComponents",
    value: function setupComponents() {
      this.components = new Map();
    }
  }, {
    key: "update",
    value: function update(data) {
      if (!data) {
        console.error('No data to update.');
      }

      this.data = this.prepareData(data);
      this.calc(); // builds state

      this.render(this.components, this.config.animate);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.components;
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.config.isNavigable) {
        // Remove all existing overlays
        this.overlays.map(function (o) {
          return o.parentNode.removeChild(o);
        }); // ref.parentNode.insertBefore(element, ref);
      }

      var elementsToAnimate = []; // Can decouple to this.refreshComponents() first to save animation timeout

      components.forEach(function (c) {
        elementsToAnimate = elementsToAnimate.concat(c.update(animate));
      });

      if (elementsToAnimate.length > 0) {
        runSMILAnimation(this.container, this.svg, elementsToAnimate);
        setTimeout(function () {
          components.forEach(function (c) {
            return c.make();
          });

          _this5.updateNav();
        }, CHART_POST_ANIMATE_TIMEOUT);
      } else {
        components.forEach(function (c) {
          return c.make();
        });
        this.updateNav();
      }
    }
  }, {
    key: "updateNav",
    value: function updateNav() {
      if (this.config.isNavigable) {
        this.makeOverlay();
        this.bindUnits();
      }
    }
  }, {
    key: "renderLegend",
    value: function renderLegend() {}
  }, {
    key: "setupNavigation",
    value: function setupNavigation() {
      var _this6 = this;

      var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.config.isNavigable) return;

      if (init) {
        this.bindOverlay();
        this.keyActions = {
          '13': this.onEnterKey.bind(this),
          '37': this.onLeftArrow.bind(this),
          '38': this.onUpArrow.bind(this),
          '39': this.onRightArrow.bind(this),
          '40': this.onDownArrow.bind(this)
        };
        document.addEventListener('keydown', function (e) {
          if (isElementInViewport(_this6.container)) {
            e = e || window.event;

            if (_this6.keyActions[e.keyCode]) {
              _this6.keyActions[e.keyCode]();
            }
          }
        });
      }
    }
  }, {
    key: "makeOverlay",
    value: function makeOverlay() {}
  }, {
    key: "updateOverlay",
    value: function updateOverlay() {}
  }, {
    key: "bindOverlay",
    value: function bindOverlay() {}
  }, {
    key: "bindUnits",
    value: function bindUnits() {}
  }, {
    key: "onLeftArrow",
    value: function onLeftArrow() {}
  }, {
    key: "onRightArrow",
    value: function onRightArrow() {}
  }, {
    key: "onUpArrow",
    value: function onUpArrow() {}
  }, {
    key: "onDownArrow",
    value: function onDownArrow() {}
  }, {
    key: "onEnterKey",
    value: function onEnterKey() {}
  }, {
    key: "addDataPoint",
    value: function addDataPoint() {}
  }, {
    key: "removeDataPoint",
    value: function removeDataPoint() {}
  }, {
    key: "getDataPoint",
    value: function getDataPoint() {}
  }, {
    key: "setCurrentDataPoint",
    value: function setCurrentDataPoint() {}
  }, {
    key: "updateDataset",
    value: function updateDataset() {}
  }, {
    key: "export",
    value: function _export() {
      var chartSvg = prepareForExport(this.svg);
      downloadFile(this.title || 'Chart', [chartSvg]);
    }
  }]);

  return BaseChart;
}();

var AggregationChart =
/*#__PURE__*/
function (_BaseChart) {
  _inherits(AggregationChart, _BaseChart);

  function AggregationChart(parent, args) {
    _classCallCheck(this, AggregationChart);

    return _possibleConstructorReturn(this, _getPrototypeOf(AggregationChart).call(this, parent, args));
  }

  _createClass(AggregationChart, [{
    key: "configure",
    value: function configure(args) {
      _get(_getPrototypeOf(AggregationChart.prototype), "configure", this).call(this, args);

      this.config.maxSlices = args.maxSlices || 20;
      this.config.maxLegendPoints = args.maxLegendPoints || 20;
    }
  }, {
    key: "calc",
    value: function calc() {
      var _this7 = this;

      var s = this.state;
      var maxSlices = this.config.maxSlices;
      s.sliceTotals = [];
      var allTotals = this.data.labels.map(function (label, i) {
        var total = 0;

        _this7.data.datasets.map(function (e) {
          total += e.values[i];
        });

        return [total, label];
      }).filter(function (d) {
        return d[0] >= 0;
      }); // keep only positive results

      var totals = allTotals;

      if (allTotals.length > maxSlices) {
        // Prune and keep a grey area for rest as per maxSlices
        allTotals.sort(function (a, b) {
          return b[0] - a[0];
        });
        totals = allTotals.slice(0, maxSlices - 1);
        var remaining = allTotals.slice(maxSlices - 1);
        var sumOfRemaining = 0;
        remaining.map(function (d) {
          sumOfRemaining += d[0];
        });
        totals.push([sumOfRemaining, 'Rest']);
        this.colors[maxSlices - 1] = 'grey';
      }

      s.labels = [];
      totals.map(function (d) {
        s.sliceTotals.push(d[0]);
        s.labels.push(d[1]);
      });
      s.grandTotal = s.sliceTotals.reduce(function (a, b) {
        return a + b;
      }, 0);
      this.center = {
        x: this.width / 2,
        y: this.height / 2
      };
    }
  }, {
    key: "renderLegend",
    value: function renderLegend() {
      var _this8 = this;

      var s = this.state;
      this.legendArea.textContent = '';
      this.legendTotals = s.sliceTotals.slice(0, this.config.maxLegendPoints);
      var count = 0;
      var y = 0;
      this.legendTotals.map(function (d, i) {
        var barWidth = 110;
        var divisor = Math.floor((_this8.width - getExtraWidth(_this8.measures)) / barWidth);

        if (_this8.legendTotals.length < divisor) {
          barWidth = _this8.width / _this8.legendTotals.length;
        }

        if (count > divisor) {
          count = 0;
          y += 20;
        }

        var x = barWidth * count + 5;
        var dot = legendDot(x, y, 5, _this8.colors[i], "".concat(s.labels[i], ": ").concat(d), _this8.config.truncateLegends);

        _this8.legendArea.appendChild(dot);

        count++;
      });
    }
  }]);

  return AggregationChart;
}(BaseChart); // Playing around with dates


var NO_OF_YEAR_MONTHS = 12;
var NO_OF_DAYS_IN_WEEK = 7;
var NO_OF_MILLIS = 1000;
var SEC_IN_DAY = 86400;
var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var DAY_NAMES_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // https://stackoverflow.com/a/11252167/6495043

function treatAsUtc(date) {
  var result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
}

function getYyyyMmDd(date) {
  var dd = date.getDate();
  var mm = date.getMonth() + 1; // getMonth() is zero-based

  return [date.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
}

function clone(date) {
  return new Date(date.getTime());
} // export function getMonthsBetween(startDate, endDate) {}


function getWeeksBetween(startDate, endDate) {
  var weekStartDate = setDayToSunday(startDate);
  return Math.ceil(getDaysBetween(weekStartDate, endDate) / NO_OF_DAYS_IN_WEEK);
}

function getDaysBetween(startDate, endDate) {
  var millisecondsPerDay = SEC_IN_DAY * NO_OF_MILLIS;
  return (treatAsUtc(endDate) - treatAsUtc(startDate)) / millisecondsPerDay;
}

function areInSameMonth(startDate, endDate) {
  return startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear();
}

function getMonthName(i) {
  var _short = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var monthName = MONTH_NAMES[i];
  return _short ? monthName.slice(0, 3) : monthName;
}

function getLastDateInMonth(month, year) {
  return new Date(year, month + 1, 0); // 0: last day in previous month
} // mutates


function setDayToSunday(date) {
  var newDate = clone(date);
  var day = newDate.getDay();

  if (day !== 0) {
    addDays(newDate, -1 * day);
  }

  return newDate;
} // mutates


function addDays(date, numberOfDays) {
  date.setDate(date.getDate() + numberOfDays);
}

var ChartComponent =
/*#__PURE__*/
function () {
  function ChartComponent(_ref2) {
    var _ref2$layerClass = _ref2.layerClass,
        layerClass = _ref2$layerClass === void 0 ? '' : _ref2$layerClass,
        _ref2$layerTransform = _ref2.layerTransform,
        layerTransform = _ref2$layerTransform === void 0 ? '' : _ref2$layerTransform,
        constants = _ref2.constants,
        getData = _ref2.getData,
        makeElements = _ref2.makeElements,
        animateElements = _ref2.animateElements;

    _classCallCheck(this, ChartComponent);

    this.layerTransform = layerTransform;
    this.constants = constants;
    this.makeElements = makeElements;
    this.getData = getData;
    this.animateElements = animateElements;
    this.store = [];
    this.labels = [];
    this.layerClass = layerClass;
    this.layerClass = typeof this.layerClass === 'function' ? this.layerClass() : this.layerClass;
    this.refresh();
  }

  _createClass(ChartComponent, [{
    key: "refresh",
    value: function refresh(data) {
      this.data = data || this.getData();
    }
  }, {
    key: "setup",
    value: function setup(parent) {
      this.layer = makeSVGGroup(this.layerClass, this.layerTransform, parent);
    }
  }, {
    key: "make",
    value: function make() {
      this.render(this.data);
      this.oldData = this.data;
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this9 = this;

      this.store = this.makeElements(data);
      this.layer.textContent = '';
      this.store.forEach(function (element) {
        _this9.layer.appendChild(element);
      });
      this.labels.forEach(function (element) {
        _this9.layer.appendChild(element);
      });
    }
  }, {
    key: "update",
    value: function update() {
      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.refresh();
      var animateElements = [];

      if (animate) {
        animateElements = this.animateElements(this.data) || [];
      }

      return animateElements;
    }
  }]);

  return ChartComponent;
}();

var componentConfigs = {
  donutSlices: {
    layerClass: 'donut-slices',
    makeElements: function makeElements(data) {
      return data.sliceStrings.map(function (s, i) {
        var slice = makePath(s, 'donut-path', data.colors[i], 'none', data.strokeWidth);
        slice.style.transition = 'transform .3s;';
        return slice;
      });
    },
    animateElements: function animateElements(newData) {
      return this.store.map(function (slice, i) {
        return animatePathStr(slice, newData.sliceStrings[i]);
      });
    }
  },
  pieSlices: {
    layerClass: 'pie-slices',
    makeElements: function makeElements(data) {
      return data.sliceStrings.map(function (s, i) {
        var slice = makePath(s, 'pie-path', 'none', data.colors[i]);
        slice.style.transition = 'transform .3s;';
        return slice;
      });
    },
    animateElements: function animateElements(newData) {
      return this.store.map(function (slice, i) {
        return animatePathStr(slice, newData.sliceStrings[i]);
      });
    }
  },
  percentageBars: {
    layerClass: 'percentage-bars',
    makeElements: function makeElements(data) {
      var _this10 = this;

      return data.xPositions.map(function (x, i) {
        var y = 0;
        var bar = percentageBar(x, y, data.widths[i], _this10.constants.barHeight, _this10.constants.barDepth, data.colors[i]);
        return bar;
      });
    },
    animateElements: function animateElements(newData) {
      if (newData) return [];
    }
  },
  yAxis: {
    layerClass: 'y axis',
    makeElements: function makeElements(data) {
      var _this11 = this;

      return data.positions.map(function (position, i) {
        return yLine(position, data.labels[i], _this11.constants.width, {
          mode: _this11.constants.mode,
          pos: _this11.constants.pos,
          shortenNumbers: _this11.constants.shortenNumbers
        });
      });
    },
    animateElements: function animateElements(newData) {
      var newPos = newData.positions;
      var newLabels = newData.labels;
      var oldPos = this.oldData.positions;
      var oldLabels = this.oldData.labels;

      var _equilizeNoOfElements = equilizeNoOfElements(oldPos, newPos);

      var _equilizeNoOfElements2 = _slicedToArray(_equilizeNoOfElements, 2);

      oldPos = _equilizeNoOfElements2[0];
      newPos = _equilizeNoOfElements2[1];

      var _equilizeNoOfElements3 = equilizeNoOfElements(oldLabels, newLabels);

      var _equilizeNoOfElements4 = _slicedToArray(_equilizeNoOfElements3, 2);

      oldLabels = _equilizeNoOfElements4[0];
      newLabels = _equilizeNoOfElements4[1];
      this.render({
        positions: oldPos,
        labels: newLabels
      });
      return this.store.map(function (line, i) {
        return translateHoriLine(line, newPos[i], oldPos[i]);
      });
    }
  },
  xAxis: {
    layerClass: 'x axis',
    makeElements: function makeElements(data) {
      var _this12 = this;

      return data.positions.map(function (position, i) {
        return xLine(position, data.calcLabels[i], _this12.constants.height, {
          mode: _this12.constants.mode,
          pos: _this12.constants.pos
        });
      });
    },
    animateElements: function animateElements(newData) {
      var newPos = newData.positions;
      var newLabels = newData.calcLabels;
      var oldPos = this.oldData.positions;
      var oldLabels = this.oldData.calcLabels;

      var _equilizeNoOfElements5 = equilizeNoOfElements(oldPos, newPos);

      var _equilizeNoOfElements6 = _slicedToArray(_equilizeNoOfElements5, 2);

      oldPos = _equilizeNoOfElements6[0];
      newPos = _equilizeNoOfElements6[1];

      var _equilizeNoOfElements7 = equilizeNoOfElements(oldLabels, newLabels);

      var _equilizeNoOfElements8 = _slicedToArray(_equilizeNoOfElements7, 2);

      oldLabels = _equilizeNoOfElements8[0];
      newLabels = _equilizeNoOfElements8[1];
      this.render({
        positions: oldPos,
        calcLabels: newLabels
      });
      return this.store.map(function (line, i) {
        return translateVertLine(line, newPos[i], oldPos[i]);
      });
    }
  },
  yMarkers: {
    layerClass: 'y-markers',
    makeElements: function makeElements(data) {
      var _this13 = this;

      return data.map(function (m) {
        return yMarker(m.position, m.label, _this13.constants.width, {
          labelPos: m.options.labelPos,
          mode: 'span',
          lineType: 'dashed'
        });
      });
    },
    animateElements: function animateElements(newData) {
      var _equilizeNoOfElements9 = equilizeNoOfElements(this.oldData, newData);

      var _equilizeNoOfElements10 = _slicedToArray(_equilizeNoOfElements9, 2);

      this.oldData = _equilizeNoOfElements10[0];
      newData = _equilizeNoOfElements10[1];
      var newPos = newData.map(function (d) {
        return d.position;
      });
      var newLabels = newData.map(function (d) {
        return d.label;
      });
      var newOptions = newData.map(function (d) {
        return d.options;
      });
      var oldPos = this.oldData.map(function (d) {
        return d.position;
      });
      this.render(oldPos.map(function (pos, i) {
        return {
          position: oldPos[i],
          label: newLabels[i],
          options: newOptions[i]
        };
      }));
      return this.store.map(function (line, i) {
        return translateHoriLine(line, newPos[i], oldPos[i]);
      });
    }
  },
  yRegions: {
    layerClass: 'y-regions',
    makeElements: function makeElements(data) {
      var _this14 = this;

      return data.map(function (r) {
        return yRegion(r.startPos, r.endPos, _this14.constants.width, r.label, {
          labelPos: r.options.labelPos
        });
      });
    },
    animateElements: function animateElements(newData) {
      var _equilizeNoOfElements11 = equilizeNoOfElements(this.oldData, newData);

      var _equilizeNoOfElements12 = _slicedToArray(_equilizeNoOfElements11, 2);

      this.oldData = _equilizeNoOfElements12[0];
      newData = _equilizeNoOfElements12[1];
      var newPos = newData.map(function (d) {
        return d.endPos;
      });
      var newLabels = newData.map(function (d) {
        return d.label;
      });
      var newStarts = newData.map(function (d) {
        return d.startPos;
      });
      var newOptions = newData.map(function (d) {
        return d.options;
      });
      var oldPos = this.oldData.map(function (d) {
        return d.endPos;
      });
      var oldStarts = this.oldData.map(function (d) {
        return d.startPos;
      });
      this.render(oldPos.map(function (pos, i) {
        return {
          startPos: oldStarts[i],
          endPos: oldPos[i],
          label: newLabels[i],
          options: newOptions[i]
        };
      }));
      var animateElements = [];
      this.store.map(function (rectGroup, i) {
        animateElements = animateElements.concat(animateRegion(rectGroup, newStarts[i], newPos[i], oldPos[i]));
      });
      return animateElements;
    }
  },
  heatDomain: {
    layerClass: function layerClass() {
      return 'heat-domain domain-' + this.constants.index;
    },
    makeElements: function makeElements(data) {
      var _this15 = this;

      var _this$constants = this.constants,
          index = _this$constants.index,
          colWidth = _this$constants.colWidth,
          rowHeight = _this$constants.rowHeight,
          squareSize = _this$constants.squareSize,
          xTranslate = _this$constants.xTranslate;
      var monthNameHeight = -12;
      var x = xTranslate,
          y = 0;
      this.serializedSubDomains = [];
      data.cols.map(function (week, weekNo) {
        if (weekNo === 1) {
          _this15.labels.push(makeText('domain-name', x, monthNameHeight, getMonthName(index, true).toUpperCase(), {
            fontSize: 9
          }));
        }

        week.map(function (day, i) {
          if (day.fill) {
            var _data = {
              'data-date': day.yyyyMmDd,
              'data-value': day.dataValue,
              'data-day': i
            };
            var square = heatSquare('day', x, y, squareSize, day.fill, _data);

            _this15.serializedSubDomains.push(square);
          }

          y += rowHeight;
        });
        y = 0;
        x += colWidth;
      });
      return this.serializedSubDomains;
    },
    animateElements: function animateElements(newData) {
      if (newData) return [];
    }
  },
  barGraph: {
    layerClass: function layerClass() {
      return 'dataset-units dataset-bars dataset-' + this.constants.index;
    },
    makeElements: function makeElements(data) {
      var c = this.constants;
      this.unitType = 'bar';
      this.units = data.yPositions.map(function (y, j) {
        return datasetBar(data.xPositions[j], y, data.barWidth, c.color, data.labels[j], j, data.offsets[j], {
          zeroLine: data.zeroLine,
          barsWidth: data.barsWidth,
          minHeight: c.minHeight
        });
      });
      return this.units;
    },
    animateElements: function animateElements(newData) {
      var newXPos = newData.xPositions;
      var newYPos = newData.yPositions;
      var newOffsets = newData.offsets;
      var newLabels = newData.labels;
      var oldXPos = this.oldData.xPositions;
      var oldYPos = this.oldData.yPositions;
      var oldOffsets = this.oldData.offsets;
      var oldLabels = this.oldData.labels;

      var _equilizeNoOfElements13 = equilizeNoOfElements(oldXPos, newXPos);

      var _equilizeNoOfElements14 = _slicedToArray(_equilizeNoOfElements13, 2);

      oldXPos = _equilizeNoOfElements14[0];
      newXPos = _equilizeNoOfElements14[1];

      var _equilizeNoOfElements15 = equilizeNoOfElements(oldYPos, newYPos);

      var _equilizeNoOfElements16 = _slicedToArray(_equilizeNoOfElements15, 2);

      oldYPos = _equilizeNoOfElements16[0];
      newYPos = _equilizeNoOfElements16[1];

      var _equilizeNoOfElements17 = equilizeNoOfElements(oldOffsets, newOffsets);

      var _equilizeNoOfElements18 = _slicedToArray(_equilizeNoOfElements17, 2);

      oldOffsets = _equilizeNoOfElements18[0];
      newOffsets = _equilizeNoOfElements18[1];

      var _equilizeNoOfElements19 = equilizeNoOfElements(oldLabels, newLabels);

      var _equilizeNoOfElements20 = _slicedToArray(_equilizeNoOfElements19, 2);

      oldLabels = _equilizeNoOfElements20[0];
      newLabels = _equilizeNoOfElements20[1];
      this.render({
        xPositions: oldXPos,
        yPositions: oldYPos,
        offsets: oldOffsets,
        labels: newLabels,
        zeroLine: this.oldData.zeroLine,
        barsWidth: this.oldData.barsWidth,
        barWidth: this.oldData.barWidth
      });
      var animateElements = [];
      this.store.map(function (bar, i) {
        animateElements = animateElements.concat(animateBar(bar, newXPos[i], newYPos[i], newData.barWidth, newOffsets[i], {
          zeroLine: newData.zeroLine
        }));
      });
      return animateElements;
    }
  },
  lineGraph: {
    layerClass: function layerClass() {
      return 'dataset-units dataset-line dataset-' + this.constants.index;
    },
    makeElements: function makeElements(data) {
      var c = this.constants;
      this.unitType = 'dot';
      this.paths = {};

      if (!c.hideLine) {
        this.paths = getPaths(data.xPositions, data.yPositions, c.color, {
          heatline: c.heatline,
          regionFill: c.regionFill,
          spline: c.spline
        }, {
          svgDefs: c.svgDefs,
          zeroLine: data.zeroLine
        });
      }

      this.units = [];

      if (!c.hideDots) {
        this.units = data.yPositions.map(function (y, j) {
          return datasetDot(data.xPositions[j], y, data.radius, c.color, c.valuesOverPoints ? data.values[j] : '', j);
        });
      }

      return Object.values(this.paths).concat(this.units);
    },
    animateElements: function animateElements(newData) {
      var newXPos = newData.xPositions;
      var newYPos = newData.yPositions;
      var newValues = newData.values;
      var oldXPos = this.oldData.xPositions;
      var oldYPos = this.oldData.yPositions;
      var oldValues = this.oldData.values;

      var _equilizeNoOfElements21 = equilizeNoOfElements(oldXPos, newXPos);

      var _equilizeNoOfElements22 = _slicedToArray(_equilizeNoOfElements21, 2);

      oldXPos = _equilizeNoOfElements22[0];
      newXPos = _equilizeNoOfElements22[1];

      var _equilizeNoOfElements23 = equilizeNoOfElements(oldYPos, newYPos);

      var _equilizeNoOfElements24 = _slicedToArray(_equilizeNoOfElements23, 2);

      oldYPos = _equilizeNoOfElements24[0];
      newYPos = _equilizeNoOfElements24[1];

      var _equilizeNoOfElements25 = equilizeNoOfElements(oldValues, newValues);

      var _equilizeNoOfElements26 = _slicedToArray(_equilizeNoOfElements25, 2);

      oldValues = _equilizeNoOfElements26[0];
      newValues = _equilizeNoOfElements26[1];
      this.render({
        xPositions: oldXPos,
        yPositions: oldYPos,
        values: newValues,
        zeroLine: this.oldData.zeroLine,
        radius: this.oldData.radius
      });
      var animateElements = [];

      if (Object.keys(this.paths).length) {
        animateElements = animateElements.concat(animatePath(this.paths, newXPos, newYPos, newData.zeroLine, this.constants.spline));
      }

      if (this.units.length) {
        this.units.map(function (dot, i) {
          animateElements = animateElements.concat(animateDot(dot, newXPos[i], newYPos[i]));
        });
      }

      return animateElements;
    }
  }
};

function getComponent(name, constants, getData) {
  var keys = Object.keys(componentConfigs).filter(function (k) {
    return name.includes(k);
  });
  var config = componentConfigs[keys[0]];
  Object.assign(config, {
    constants: constants,
    getData: getData
  });
  return new ChartComponent(config);
}

var PercentageChart =
/*#__PURE__*/
function (_AggregationChart) {
  _inherits(PercentageChart, _AggregationChart);

  function PercentageChart(parent, args) {
    var _this16;

    _classCallCheck(this, PercentageChart);

    _this16 = _possibleConstructorReturn(this, _getPrototypeOf(PercentageChart).call(this, parent, args));
    _this16.type = 'percentage';

    _this16.setup();

    return _this16;
  }

  _createClass(PercentageChart, [{
    key: "setMeasures",
    value: function setMeasures(options) {
      var m = this.measures;
      this.barOptions = options.barOptions || {};
      var b = this.barOptions;
      b.height = b.height || PERCENTAGE_BAR_DEFAULT_HEIGHT;
      b.depth = b.depth || PERCENTAGE_BAR_DEFAULT_DEPTH;
      m.paddings.right = 30;
      m.legendHeight = 60;
      m.baseHeight = (b.height + b.depth * 0.5) * 8;
    }
  }, {
    key: "setupComponents",
    value: function setupComponents() {
      var s = this.state;
      var componentConfigs = [['percentageBars', {
        barHeight: this.barOptions.height,
        barDepth: this.barOptions.depth
      }, function () {
        return {
          xPositions: s.xPositions,
          widths: s.widths,
          colors: this.colors
        };
      }.bind(this)]];
      this.components = new Map(componentConfigs.map(function (args) {
        var component = getComponent.apply(void 0, _toConsumableArray(args));
        return [args[0], component];
      }));
    }
  }, {
    key: "calc",
    value: function calc() {
      var _this17 = this;

      _get(_getPrototypeOf(PercentageChart.prototype), "calc", this).call(this);

      var s = this.state;
      s.xPositions = [];
      s.widths = [];
      var xPos = 0;
      s.sliceTotals.map(function (value) {
        var width = _this17.width * value / s.grandTotal;
        s.widths.push(width);
        s.xPositions.push(xPos);
        xPos += width;
      });
    }
  }, {
    key: "makeDataByIndex",
    value: function makeDataByIndex() {}
  }, {
    key: "bindTooltip",
    value: function bindTooltip() {
      var _this18 = this;

      var s = this.state;
      this.container.addEventListener('mousemove', function (e) {
        var bars = _this18.components.get('percentageBars').store;

        var bar = e.target;

        if (bars.includes(bar)) {
          var i = bars.indexOf(bar);
          var gOff = getOffset(_this18.container),
              pOff = getOffset(bar);
          var x = pOff.left - gOff.left + parseInt(bar.getAttribute('width')) / 2;
          var y = pOff.top - gOff.top;
          var title = (_this18.formattedLabels && _this18.formattedLabels.length > 0 ? _this18.formattedLabels[i] : _this18.state.labels[i]) + ': ';
          var fraction = s.sliceTotals[i] / s.grandTotal;

          _this18.tip.setValues(x, y, {
            name: title,
            value: (fraction * 100).toFixed(1) + "%"
          });

          _this18.tip.showTip();
        }
      });
    }
  }]);

  return PercentageChart;
}(AggregationChart);

var PieChart =
/*#__PURE__*/
function (_AggregationChart2) {
  _inherits(PieChart, _AggregationChart2);

  function PieChart(parent, args) {
    var _this19;

    _classCallCheck(this, PieChart);

    _this19 = _possibleConstructorReturn(this, _getPrototypeOf(PieChart).call(this, parent, args));
    _this19.type = 'pie';
    _this19.initTimeout = 0;
    _this19.init = 1;

    _this19.setup();

    return _this19;
  }

  _createClass(PieChart, [{
    key: "configure",
    value: function configure(args) {
      _get(_getPrototypeOf(PieChart.prototype), "configure", this).call(this, args);

      this.mouseMove = this.mouseMove.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
      this.hoverRadio = args.hoverRadio || 0.1;
      this.config.startAngle = args.startAngle || 0;
      this.clockWise = args.clockWise || false;
    }
  }, {
    key: "calc",
    value: function calc() {
      var _this20 = this;

      _get(_getPrototypeOf(PieChart.prototype), "calc", this).call(this);

      var s = this.state;
      this.radius = this.height > this.width ? this.center.x : this.center.y;
      var radius = this.radius,
          clockWise = this.clockWise;
      var prevSlicesProperties = s.slicesProperties || [];
      s.sliceStrings = [];
      s.slicesProperties = [];
      var curAngle = 180 - this.config.startAngle;
      s.sliceTotals.map(function (total, i) {
        var startAngle = curAngle;
        var originDiffAngle = total / s.grandTotal * FULL_ANGLE;
        var largeArc = originDiffAngle > 180 ? 1 : 0;
        var diffAngle = clockWise ? -originDiffAngle : originDiffAngle;
        var endAngle = curAngle = curAngle + diffAngle;
        var startPosition = getPositionByAngle(startAngle, radius);
        var endPosition = getPositionByAngle(endAngle, radius);
        var prevProperty = _this20.init && prevSlicesProperties[i];
        var curStart, curEnd;

        if (_this20.init) {
          curStart = prevProperty ? prevProperty.startPosition : startPosition;
          curEnd = prevProperty ? prevProperty.endPosition : startPosition;
        } else {
          curStart = startPosition;
          curEnd = endPosition;
        }

        var curPath = originDiffAngle === 360 ? makeCircleStr(curStart, curEnd, _this20.center, _this20.radius, clockWise, largeArc) : makeArcPathStr(curStart, curEnd, _this20.center, _this20.radius, clockWise, largeArc);
        s.sliceStrings.push(curPath);
        s.slicesProperties.push({
          startPosition: startPosition,
          endPosition: endPosition,
          value: total,
          total: s.grandTotal,
          startAngle: startAngle,
          endAngle: endAngle,
          angle: diffAngle
        });
      });
      this.init = 0;
    }
  }, {
    key: "setupComponents",
    value: function setupComponents() {
      var s = this.state;
      var componentConfigs = [['pieSlices', {}, function () {
        return {
          sliceStrings: s.sliceStrings,
          colors: this.colors
        };
      }.bind(this)]];
      this.components = new Map(componentConfigs.map(function (args) {
        var component = getComponent.apply(void 0, _toConsumableArray(args));
        return [args[0], component];
      }));
    }
  }, {
    key: "calTranslateByAngle",
    value: function calTranslateByAngle(property) {
      var radius = this.radius,
          hoverRadio = this.hoverRadio;
      var position = getPositionByAngle(property.startAngle + property.angle / 2, radius);
      return "translate3d(".concat(position.x * hoverRadio, "px,").concat(position.y * hoverRadio, "px,0)");
    }
  }, {
    key: "hoverSlice",
    value: function hoverSlice(path, i, flag, e) {
      if (!path) return;
      var color = this.colors[i];

      if (flag) {
        transform(path, this.calTranslateByAngle(this.state.slicesProperties[i]));
        path.style.fill = lightenDarkenColor(color, 50);
        var g_off = getOffset(this.svg);
        var x = e.pageX - g_off.left + 10;
        var y = e.pageY - g_off.top - 10;
        var title = (this.formatted_labels && this.formatted_labels.length > 0 ? this.formatted_labels[i] : this.state.labels[i]) + ': ';
        var percent = (this.state.sliceTotals[i] * 100 / this.state.grandTotal).toFixed(1);
        this.tip.setValues(x, y, {
          name: title,
          value: percent + "%"
        });
        this.tip.showTip();
      } else {
        transform(path, 'translate3d(0,0,0)');
        this.tip.hideTip();
        path.style.fill = color;
      }
    }
  }, {
    key: "bindTooltip",
    value: function bindTooltip() {
      this.container.addEventListener('mousemove', this.mouseMove);
      this.container.addEventListener('mouseleave', this.mouseLeave);
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(e) {
      var target = e.target;
      var slices = this.components.get('pieSlices').store;
      var prevIndex = this.curActiveSliceIndex;
      var prevAcitve = this.curActiveSlice;

      if (slices.includes(target)) {
        var i = slices.indexOf(target);
        this.hoverSlice(prevAcitve, prevIndex, false);
        this.curActiveSlice = target;
        this.curActiveSliceIndex = i;
        this.hoverSlice(target, i, true, e);
      } else {
        this.mouseLeave();
      }
    }
  }, {
    key: "mouseLeave",
    value: function mouseLeave() {
      this.hoverSlice(this.curActiveSlice, this.curActiveSliceIndex, false);
    }
  }]);

  return PieChart;
}(AggregationChart);

function normalize(x) {
  // Calculates mantissa and exponent of a number
  // Returns normalized number and exponent
  // https://stackoverflow.com/q/9383593/6495043
  if (x === 0) {
    return [0, 0];
  }

  if (isNaN(x)) {
    return {
      mantissa: -6755399441055744,
      exponent: 972
    };
  }

  var sig = x > 0 ? 1 : -1;

  if (!isFinite(x)) {
    return {
      mantissa: sig * 4503599627370496,
      exponent: 972
    };
  }

  x = Math.abs(x);
  var exp = Math.floor(Math.log10(x));
  var man = x / Math.pow(10, exp);
  return [sig * man, exp];
}

function getChartRangeIntervals(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var upperBound = Math.ceil(max);
  var lowerBound = Math.floor(min);
  var range = upperBound - lowerBound;
  var noOfParts = range;
  var partSize = 1; // To avoid too many partitions

  if (range > 5) {
    if (range % 2 !== 0) {
      upperBound++; // Recalc range

      range = upperBound - lowerBound;
    }

    noOfParts = range / 2;
    partSize = 2;
  } // Special case: 1 and 2


  if (range <= 2) {
    noOfParts = 4;
    partSize = range / noOfParts;
  } // Special case: 0


  if (range === 0) {
    noOfParts = 5;
    partSize = 1;
  }

  var intervals = [];

  for (var i = 0; i <= noOfParts; i++) {
    intervals.push(lowerBound + partSize * i);
  }

  return intervals;
}

function getChartIntervals(maxValue) {
  var minValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _normalize = normalize(maxValue),
      _normalize2 = _slicedToArray(_normalize, 2),
      normalMaxValue = _normalize2[0],
      exponent = _normalize2[1];

  var normalMinValue = minValue ? minValue / Math.pow(10, exponent) : 0; // Allow only 7 significant digits

  normalMaxValue = normalMaxValue.toFixed(6);
  var intervals = getChartRangeIntervals(normalMaxValue, normalMinValue);
  intervals = intervals.map(function (value) {
    return value * Math.pow(10, exponent);
  });
  return intervals;
}

function calcChartIntervals(values) {
  var withMinimum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  //*** Where the magic happens ***
  // Calculates best-fit y intervals from given values
  // and returns the interval array
  var maxValue = Math.max.apply(Math, _toConsumableArray(values));
  var minValue = Math.min.apply(Math, _toConsumableArray(values)); // Exponent to be used for pretty print

  var exponent = 0,
      intervals = []; // eslint-disable-line no-unused-vars

  function getPositiveFirstIntervals(maxValue, absMinValue) {
    var intervals = getChartIntervals(maxValue);
    var intervalSize = intervals[1] - intervals[0]; // Then unshift the negative values

    var value = 0;

    for (var i = 1; value < absMinValue; i++) {
      value += intervalSize;
      intervals.unshift(-1 * value);
    }

    return intervals;
  } // CASE I: Both non-negative


  if (maxValue >= 0 && minValue >= 0) {
    exponent = normalize(maxValue)[1];

    if (!withMinimum) {
      intervals = getChartIntervals(maxValue);
    } else {
      intervals = getChartIntervals(maxValue, minValue);
    }
  } // CASE II: Only minValue negative
  else if (maxValue > 0 && minValue < 0) {
      // `withMinimum` irrelevant in this case,
      // We'll be handling both sides of zero separately
      // (both starting from zero)
      // Because ceil() and floor() behave differently
      // in those two regions
      var absMinValue = Math.abs(minValue);

      if (maxValue >= absMinValue) {
        exponent = normalize(maxValue)[1];
        intervals = getPositiveFirstIntervals(maxValue, absMinValue);
      } else {
        // Mirror: maxValue => absMinValue, then change sign
        exponent = normalize(absMinValue)[1];
        var posIntervals = getPositiveFirstIntervals(absMinValue, maxValue);
        intervals = posIntervals.map(function (d) {
          return d * -1;
        });
      }
    } // CASE III: Both non-positive
    else if (maxValue <= 0 && minValue <= 0) {
        // Mirrored Case I:
        // Work with positives, then reverse the sign and array
        var pseudoMaxValue = Math.abs(minValue);
        var pseudoMinValue = Math.abs(maxValue);
        exponent = normalize(pseudoMaxValue)[1];

        if (!withMinimum) {
          intervals = getChartIntervals(pseudoMaxValue);
        } else {
          intervals = getChartIntervals(pseudoMaxValue, pseudoMinValue);
        }

        intervals = intervals.reverse().map(function (d) {
          return d * -1;
        });
      }

  return intervals;
}

function getZeroIndex(yPts) {
  var zeroIndex;
  var interval = getIntervalSize(yPts);

  if (yPts.indexOf(0) >= 0) {
    // the range has a given zero
    // zero-line on the chart
    zeroIndex = yPts.indexOf(0);
  } else if (yPts[0] > 0) {
    // Minimum value is positive
    // zero-line is off the chart: below
    var min = yPts[0];
    zeroIndex = -1 * min / interval;
  } else {
    // Maximum value is negative
    // zero-line is off the chart: above
    var max = yPts[yPts.length - 1];
    zeroIndex = -1 * max / interval + (yPts.length - 1);
  }

  return zeroIndex;
}

function getIntervalSize(orderedArray) {
  return orderedArray[1] - orderedArray[0];
}

function getValueRange(orderedArray) {
  return orderedArray[orderedArray.length - 1] - orderedArray[0];
}

function scale(val, yAxis) {
  return floatTwo(yAxis.zeroLine - val * yAxis.scaleMultiplier);
}

function getClosestInArray(goal, arr) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var closest = arr.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  }, []);
  return index ? arr.indexOf(closest) : closest;
}

function calcDistribution(values, distributionSize) {
  // Assume non-negative values,
  // implying distribution minimum at zero
  var dataMaxValue = Math.max.apply(Math, _toConsumableArray(values));
  var distributionStep = 1 / (distributionSize - 1);
  var distribution = [];

  for (var i = 0; i < distributionSize; i++) {
    var checkpoint = dataMaxValue * (distributionStep * i);
    distribution.push(checkpoint);
  }

  return distribution;
}

function getMaxCheckpoint(value, distribution) {
  return distribution.filter(function (d) {
    return d < value;
  }).length;
}

var COL_WIDTH = HEATMAP_SQUARE_SIZE + HEATMAP_GUTTER_SIZE;
var ROW_HEIGHT = COL_WIDTH; // const DAY_INCR = 1;

var Heatmap =
/*#__PURE__*/
function (_BaseChart2) {
  _inherits(Heatmap, _BaseChart2);

  function Heatmap(parent, options) {
    var _this21;

    _classCallCheck(this, Heatmap);

    _this21 = _possibleConstructorReturn(this, _getPrototypeOf(Heatmap).call(this, parent, options));
    _this21.type = 'heatmap';
    _this21.countLabel = options.countLabel || '';
    var validStarts = ['Sunday', 'Monday'];
    var startSubDomain = validStarts.includes(options.startSubDomain) ? options.startSubDomain : 'Sunday';
    _this21.startSubDomainIndex = validStarts.indexOf(startSubDomain);

    _this21.setup();

    return _this21;
  }

  _createClass(Heatmap, [{
    key: "setMeasures",
    value: function setMeasures(options) {
      var m = this.measures;
      this.discreteDomains = options.discreteDomains === 0 ? 0 : 1;
      m.paddings.top = ROW_HEIGHT * 3;
      m.paddings.bottom = 0;
      m.legendHeight = ROW_HEIGHT * 2;
      m.baseHeight = ROW_HEIGHT * NO_OF_DAYS_IN_WEEK + getExtraHeight(m);
      var d = this.data;
      var spacing = this.discreteDomains ? NO_OF_YEAR_MONTHS : 0;
      this.independentWidth = (getWeeksBetween(d.start, d.end) + spacing) * COL_WIDTH + getExtraWidth(m);
    }
  }, {
    key: "updateWidth",
    value: function updateWidth() {
      var spacing = this.discreteDomains ? NO_OF_YEAR_MONTHS : 0;
      var noOfWeeks = this.state.noOfWeeks ? this.state.noOfWeeks : 52;
      this.baseWidth = (noOfWeeks + spacing) * COL_WIDTH + getExtraWidth(this.measures);
    }
  }, {
    key: "prepareData",
    value: function prepareData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;

      if (data.start && data.end && data.start > data.end) {
        throw new Error('Start date cannot be greater than end date.');
      }

      if (!data.start) {
        data.start = new Date();
        data.start.setFullYear(data.start.getFullYear() - 1);
      }

      if (!data.end) {
        data.end = new Date();
      }

      data.dataPoints = data.dataPoints || {};

      if (parseInt(Object.keys(data.dataPoints)[0]) > 100000) {
        var points = {};
        Object.keys(data.dataPoints).forEach(function (timestampSec$$1) {
          var date = new Date(timestampSec$$1 * NO_OF_MILLIS);
          points[getYyyyMmDd(date)] = data.dataPoints[timestampSec$$1];
        });
        data.dataPoints = points;
      }

      return data;
    }
  }, {
    key: "calc",
    value: function calc() {
      var s = this.state;
      s.start = clone(this.data.start);
      s.end = clone(this.data.end);
      s.firstWeekStart = clone(s.start);
      s.noOfWeeks = getWeeksBetween(s.start, s.end);
      s.distribution = calcDistribution(Object.values(this.data.dataPoints), HEATMAP_DISTRIBUTION_SIZE);
      s.domainConfigs = this.getDomains();
    }
  }, {
    key: "setupComponents",
    value: function setupComponents() {
      var _this22 = this;

      var s = this.state;
      var lessCol = this.discreteDomains ? 0 : 1;
      var componentConfigs = s.domainConfigs.map(function (config, i) {
        return ['heatDomain', {
          index: config.index,
          colWidth: COL_WIDTH,
          rowHeight: ROW_HEIGHT,
          squareSize: HEATMAP_SQUARE_SIZE,
          xTranslate: s.domainConfigs.filter(function (config, j) {
            return j < i;
          }).map(function (config) {
            return config.cols.length - lessCol;
          }).reduce(function (a, b) {
            return a + b;
          }, 0) * COL_WIDTH
        }, function () {
          return s.domainConfigs[i];
        }.bind(_this22)];
      });
      this.components = new Map(componentConfigs.map(function (args, i) {
        var component = getComponent.apply(void 0, _toConsumableArray(args));
        return [args[0] + '-' + i, component];
      }));
      var y = 0;
      DAY_NAMES_SHORT.forEach(function (dayName, i) {
        if ([1, 3, 5].includes(i)) {
          var dayText = makeText('subdomain-name', -COL_WIDTH / 2, y, dayName, {
            fontSize: HEATMAP_SQUARE_SIZE,
            dy: 8,
            textAnchor: 'end'
          });

          _this22.drawArea.appendChild(dayText);
        }

        y += ROW_HEIGHT;
      });
    }
  }, {
    key: "update",
    value: function update(data) {
      if (!data) {
        console.error('No data to update.');
      }

      this.data = this.prepareData(data);
      this.draw();
      this.bindTooltip();
    }
  }, {
    key: "bindTooltip",
    value: function bindTooltip() {
      var _this23 = this;

      this.container.addEventListener('mousemove', function (e) {
        _this23.components.forEach(function (comp) {
          var daySquares = comp.store;
          var daySquare = e.target;

          if (daySquares.includes(daySquare)) {
            var count = daySquare.getAttribute('data-value');
            var dateParts = daySquare.getAttribute('data-date').split('-');
            var month = getMonthName(parseInt(dateParts[1]) - 1, true);

            var gOff = _this23.container.getBoundingClientRect(),
                pOff = daySquare.getBoundingClientRect();

            var width = parseInt(e.target.getAttribute('width'));
            var x = pOff.left - gOff.left + width / 2;
            var y = pOff.top - gOff.top;
            var value = count + ' ' + _this23.countLabel;
            var name = ' on ' + month + ' ' + dateParts[0] + ', ' + dateParts[2];

            _this23.tip.setValues(x, y, {
              name: name,
              value: value,
              valueFirst: 1
            }, []);

            _this23.tip.showTip();
          }
        });
      });
    }
  }, {
    key: "renderLegend",
    value: function renderLegend() {
      var _this24 = this;

      this.legendArea.textContent = '';
      var x = 0;
      var y = ROW_HEIGHT;
      var lessText = makeText('subdomain-name', x, y, 'Less', {
        fontSize: HEATMAP_SQUARE_SIZE + 1,
        dy: 9
      });
      x = COL_WIDTH * 2 + COL_WIDTH / 2;
      this.legendArea.appendChild(lessText);
      this.colors.slice(0, HEATMAP_DISTRIBUTION_SIZE).map(function (color, i) {
        var square = heatSquare('heatmap-legend-unit', x + (COL_WIDTH + 3) * i, y, HEATMAP_SQUARE_SIZE, color);

        _this24.legendArea.appendChild(square);
      });
      var moreTextX = x + HEATMAP_DISTRIBUTION_SIZE * (COL_WIDTH + 3) + COL_WIDTH / 4;
      var moreText = makeText('subdomain-name', moreTextX, y, 'More', {
        fontSize: HEATMAP_SQUARE_SIZE + 1,
        dy: 9
      });
      this.legendArea.appendChild(moreText);
    }
  }, {
    key: "getDomains",
    value: function getDomains() {
      var s = this.state;
      var _ref3 = [s.start.getMonth(), s.start.getFullYear()],
          startMonth = _ref3[0],
          startYear = _ref3[1];
      var _ref4 = [s.end.getMonth(), s.end.getFullYear()],
          endMonth = _ref4[0],
          endYear = _ref4[1];
      var noOfMonths = endMonth - startMonth + 1 + (endYear - startYear) * 12;
      var domainConfigs = [];
      var startOfMonth = clone(s.start);

      for (var i = 0; i < noOfMonths; i++) {
        var endDate = s.end;

        if (!areInSameMonth(startOfMonth, s.end)) {
          var _ref5 = [startOfMonth.getMonth(), startOfMonth.getFullYear()],
              month = _ref5[0],
              year = _ref5[1];
          endDate = getLastDateInMonth(month, year);
        }

        domainConfigs.push(this.getDomainConfig(startOfMonth, endDate));
        addDays(endDate, 1);
        startOfMonth = endDate;
      }

      return domainConfigs;
    }
  }, {
    key: "getDomainConfig",
    value: function getDomainConfig(startDate) {
      var endDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var _ref6 = [startDate.getMonth(), startDate.getFullYear()],
          month = _ref6[0],
          year = _ref6[1];
      var startOfWeek = setDayToSunday(startDate); // TODO: Monday as well

      endDate = clone(endDate) || getLastDateInMonth(month, year);
      var domainConfig = {
        index: month,
        cols: []
      };
      addDays(endDate, 1);
      var noOfMonthWeeks = getWeeksBetween(startOfWeek, endDate);
      var cols = [],
          col;

      for (var i = 0; i < noOfMonthWeeks; i++) {
        col = this.getCol(startOfWeek, month);
        cols.push(col);
        startOfWeek = new Date(col[NO_OF_DAYS_IN_WEEK - 1].yyyyMmDd);
        addDays(startOfWeek, 1);
      }

      if (col[NO_OF_DAYS_IN_WEEK - 1].dataValue !== undefined) {
        addDays(startOfWeek, 1);
        cols.push(this.getCol(startOfWeek, month, true));
      }

      domainConfig.cols = cols;
      return domainConfig;
    }
  }, {
    key: "getCol",
    value: function getCol(startDate, month) {
      var empty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var s = this.state; // startDate is the start of week

      var currentDate = clone(startDate);
      var col = [];

      for (var i = 0; i < NO_OF_DAYS_IN_WEEK; i++, addDays(currentDate, 1)) {
        var config = {}; // Non-generic adjustment for entire heatmap, needs state

        var currentDateWithinData = currentDate >= s.start && currentDate <= s.end;

        if (empty || currentDate.getMonth() !== month || !currentDateWithinData) {
          config.yyyyMmDd = getYyyyMmDd(currentDate);
        } else {
          config = this.getSubDomainConfig(currentDate);
        }

        col.push(config);
      }

      return col;
    }
  }, {
    key: "getSubDomainConfig",
    value: function getSubDomainConfig(date) {
      var yyyyMmDd = getYyyyMmDd(date);
      var dataValue = this.data.dataPoints[yyyyMmDd];
      var config = {
        yyyyMmDd: yyyyMmDd,
        dataValue: dataValue || 0,
        fill: this.colors[getMaxCheckpoint(dataValue, this.state.distribution)]
      };
      return config;
    }
  }]);

  return Heatmap;
}(BaseChart);

function dataPrep(data, type) {
  data.labels = data.labels || [];
  var datasetLength = data.labels.length; // Datasets

  var datasets = data.datasets;
  var zeroArray = new Array(datasetLength).fill(0);

  if (!datasets) {
    // default
    datasets = [{
      values: zeroArray
    }];
  }

  datasets.map(function (d) {
    // Set values
    if (!d.values) {
      d.values = zeroArray;
    } else {
      // Check for non values
      var vals = d.values;
      vals = vals.map(function (val) {
        return !isNaN(val) ? val : 0;
      }); // Trim or extend

      if (vals.length > datasetLength) {
        vals = vals.slice(0, datasetLength);
      } else {
        vals = fillArray(vals, datasetLength - vals.length, 0);
      }
    } // Set labels
    //
    // Set type


    if (!d.chartType) {
      if (!AXIS_DATASET_CHART_TYPES.includes(type)) type === DEFAULT_AXIS_CHART_TYPE;
      d.chartType = type;
    }
  }); // Markers
  // Regions
  // data.yRegions = data.yRegions || [];

  if (data.yRegions) {
    data.yRegions.map(function (d) {
      if (d.end < d.start) {
        var _ref7 = [d.end, d.start];
        d.start = _ref7[0];
        d.end = _ref7[1];
      }
    });
  }

  return data;
}

function zeroDataPrep(realData) {
  var datasetLength = realData.labels.length;
  var zeroArray = new Array(datasetLength).fill(0);
  var zeroData = {
    labels: realData.labels.slice(0, -1),
    datasets: realData.datasets.map(function (d) {
      return {
        name: '',
        values: zeroArray.slice(0, -1),
        chartType: d.chartType
      };
    })
  };

  if (realData.yMarkers) {
    zeroData.yMarkers = [{
      value: 0,
      label: ''
    }];
  }

  if (realData.yRegions) {
    zeroData.yRegions = [{
      start: 0,
      end: 0,
      label: ''
    }];
  }

  return zeroData;
}

function getShortenedLabels(chartWidth) {
  var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isSeries = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var allowedSpace = chartWidth / labels.length;
  if (allowedSpace <= 0) allowedSpace = 1;
  var allowedLetters = allowedSpace / DEFAULT_CHAR_WIDTH;
  var calcLabels = labels.map(function (label, i) {
    label += "";

    if (label.length > allowedLetters) {
      if (!isSeries) {
        if (allowedLetters - 3 > 0) {
          label = label.slice(0, allowedLetters - 3) + " ...";
        } else {
          label = label.slice(0, allowedLetters) + '..';
        }
      } else {
        var multiple = Math.ceil(label.length / allowedLetters);

        if (i % multiple !== 0) {
          label = "";
        }
      }
    }

    return label;
  });
  return calcLabels;
}

var AxisChart =
/*#__PURE__*/
function (_BaseChart3) {
  _inherits(AxisChart, _BaseChart3);

  function AxisChart(parent, args) {
    var _this25;

    _classCallCheck(this, AxisChart);

    _this25 = _possibleConstructorReturn(this, _getPrototypeOf(AxisChart).call(this, parent, args));
    _this25.barOptions = args.barOptions || {};
    _this25.lineOptions = args.lineOptions || {};
    _this25.type = args.type || 'line';
    _this25.init = 1;

    _this25.setup();

    return _this25;
  }

  _createClass(AxisChart, [{
    key: "setMeasures",
    value: function setMeasures() {
      if (this.data.datasets.length <= 1) {
        this.config.showLegend = 0;
        this.measures.paddings.bottom = 30;
      }
    }
  }, {
    key: "configure",
    value: function configure(options) {
      _get(_getPrototypeOf(AxisChart.prototype), "configure", this).call(this, options);

      options.axisOptions = options.axisOptions || {};
      options.tooltipOptions = options.tooltipOptions || {};
      this.config.xAxisMode = options.axisOptions.xAxisMode || 'span';
      this.config.yAxisMode = options.axisOptions.yAxisMode || 'span';
      this.config.xIsSeries = options.axisOptions.xIsSeries || 0;
      this.config.shortenYAxisNumbers = options.axisOptions.shortenYAxisNumbers || 0;
      this.config.formatTooltipX = options.tooltipOptions.formatTooltipX;
      this.config.formatTooltipY = options.tooltipOptions.formatTooltipY;
      this.config.valuesOverPoints = options.valuesOverPoints;
    }
  }, {
    key: "prepareData",
    value: function prepareData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
      return dataPrep(data, this.type);
    }
  }, {
    key: "prepareFirstData",
    value: function prepareFirstData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
      return zeroDataPrep(data);
    }
  }, {
    key: "calc",
    value: function calc() {
      var onlyWidthChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.calcXPositions();

      if (!onlyWidthChange) {
        this.calcYAxisParameters(this.getAllYValues(), this.type === 'line');
      }

      this.makeDataByIndex();
    }
  }, {
    key: "calcXPositions",
    value: function calcXPositions() {
      var s = this.state;
      var labels = this.data.labels;
      s.datasetLength = labels.length;
      s.unitWidth = this.width / s.datasetLength; // Default, as per bar, and mixed. Only line will be a special case

      s.xOffset = s.unitWidth / 2; // // For a pure Line Chart
      // s.unitWidth = this.width/(s.datasetLength - 1);
      // s.xOffset = 0;

      s.xAxis = {
        labels: labels,
        positions: labels.map(function (d, i) {
          return floatTwo(s.xOffset + i * s.unitWidth);
        })
      };
    }
  }, {
    key: "calcYAxisParameters",
    value: function calcYAxisParameters(dataValues) {
      var withMinimum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'false';
      var yPts = calcChartIntervals(dataValues, withMinimum);
      var scaleMultiplier = this.height / getValueRange(yPts);
      var intervalHeight = getIntervalSize(yPts) * scaleMultiplier;
      var zeroLine = this.height - getZeroIndex(yPts) * intervalHeight;
      this.state.yAxis = {
        labels: yPts,
        positions: yPts.map(function (d) {
          return zeroLine - d * scaleMultiplier;
        }),
        scaleMultiplier: scaleMultiplier,
        zeroLine: zeroLine
      }; // Dependent if above changes

      this.calcDatasetPoints();
      this.calcYExtremes();
      this.calcYRegions();
    }
  }, {
    key: "calcDatasetPoints",
    value: function calcDatasetPoints() {
      var s = this.state;

      var scaleAll = function scaleAll(values) {
        return values.map(function (val) {
          return scale(val, s.yAxis);
        });
      };

      s.datasets = this.data.datasets.map(function (d, i) {
        var values = d.values;
        var cumulativeYs = d.cumulativeYs || [];
        return {
          name: d.name,
          index: i,
          chartType: d.chartType,
          values: values,
          yPositions: scaleAll(values),
          cumulativeYs: cumulativeYs,
          cumulativeYPos: scaleAll(cumulativeYs)
        };
      });
    }
  }, {
    key: "calcYExtremes",
    value: function calcYExtremes() {
      var s = this.state;

      if (this.barOptions.stacked) {
        s.yExtremes = s.datasets[s.datasets.length - 1].cumulativeYPos;
        return;
      }

      s.yExtremes = new Array(s.datasetLength).fill(9999);
      s.datasets.map(function (d) {
        d.yPositions.map(function (pos, j) {
          if (pos < s.yExtremes[j]) {
            s.yExtremes[j] = pos;
          }
        });
      });
    }
  }, {
    key: "calcYRegions",
    value: function calcYRegions() {
      var s = this.state;

      if (this.data.yMarkers) {
        this.state.yMarkers = this.data.yMarkers.map(function (d) {
          d.position = scale(d.value, s.yAxis);
          if (!d.options) d.options = {}; // if(!d.label.includes(':')) {
          // 	d.label += ': ' + d.value;
          // }

          return d;
        });
      }

      if (this.data.yRegions) {
        this.state.yRegions = this.data.yRegions.map(function (d) {
          d.startPos = scale(d.start, s.yAxis);
          d.endPos = scale(d.end, s.yAxis);
          if (!d.options) d.options = {};
          return d;
        });
      }
    }
  }, {
    key: "getAllYValues",
    value: function getAllYValues() {
      var _this26 = this,
          _ref8;

      var key = 'values';

      if (this.barOptions.stacked) {
        key = 'cumulativeYs';
        var cumulative = new Array(this.state.datasetLength).fill(0);
        this.data.datasets.map(function (d, i) {
          var values = _this26.data.datasets[i].values;
          d[key] = cumulative = cumulative.map(function (c, i) {
            return c + values[i];
          });
        });
      }

      var allValueLists = this.data.datasets.map(function (d) {
        return d[key];
      });

      if (this.data.yMarkers) {
        allValueLists.push(this.data.yMarkers.map(function (d) {
          return d.value;
        }));
      }

      if (this.data.yRegions) {
        this.data.yRegions.map(function (d) {
          allValueLists.push([d.end, d.start]);
        });
      }

      return (_ref8 = []).concat.apply(_ref8, _toConsumableArray(allValueLists));
    }
  }, {
    key: "setupComponents",
    value: function setupComponents() {
      var _this27 = this;

      var componentConfigs = [['yAxis', {
        mode: this.config.yAxisMode,
        width: this.width,
        shortenNumbers: this.config.shortenYAxisNumbers // pos: 'right'

      }, function () {
        return this.state.yAxis;
      }.bind(this)], ['xAxis', {
        mode: this.config.xAxisMode,
        height: this.height // pos: 'right'

      }, function () {
        var s = this.state;
        s.xAxis.calcLabels = getShortenedLabels(this.width, s.xAxis.labels, this.config.xIsSeries);
        return s.xAxis;
      }.bind(this)], ['yRegions', {
        width: this.width,
        pos: 'right'
      }, function () {
        return this.state.yRegions;
      }.bind(this)]];
      var barDatasets = this.state.datasets.filter(function (d) {
        return d.chartType === 'bar';
      });
      var lineDatasets = this.state.datasets.filter(function (d) {
        return d.chartType === 'line';
      });
      var barsConfigs = barDatasets.map(function (d) {
        var index = d.index;
        return ['barGraph' + '-' + d.index, {
          index: index,
          color: _this27.colors[index],
          stacked: _this27.barOptions.stacked,
          // same for all datasets
          valuesOverPoints: _this27.config.valuesOverPoints,
          minHeight: _this27.height * MIN_BAR_PERCENT_HEIGHT
        }, function () {
          var s = this.state;
          var d = s.datasets[index];
          var stacked = this.barOptions.stacked;
          var spaceRatio = this.barOptions.spaceRatio || BAR_CHART_SPACE_RATIO;
          var barsWidth = s.unitWidth * (1 - spaceRatio);
          var barWidth = barsWidth / (stacked ? 1 : barDatasets.length);
          var xPositions = s.xAxis.positions.map(function (x) {
            return x - barsWidth / 2;
          });

          if (!stacked) {
            xPositions = xPositions.map(function (p) {
              return p + barWidth * index;
            });
          }

          var labels = new Array(s.datasetLength).fill('');

          if (this.config.valuesOverPoints) {
            if (stacked && d.index === s.datasets.length - 1) {
              labels = d.cumulativeYs;
            } else {
              labels = d.values;
            }
          }

          var offsets = new Array(s.datasetLength).fill(0);

          if (stacked) {
            offsets = d.yPositions.map(function (y, j) {
              return y - d.cumulativeYPos[j];
            });
          }

          return {
            xPositions: xPositions,
            yPositions: d.yPositions,
            offsets: offsets,
            // values: d.values,
            labels: labels,
            zeroLine: s.yAxis.zeroLine,
            barsWidth: barsWidth,
            barWidth: barWidth
          };
        }.bind(_this27)];
      });
      var lineConfigs = lineDatasets.map(function (d) {
        var index = d.index;
        return ['lineGraph' + '-' + d.index, {
          index: index,
          color: _this27.colors[index],
          svgDefs: _this27.svgDefs,
          heatline: _this27.lineOptions.heatline,
          regionFill: _this27.lineOptions.regionFill,
          spline: _this27.lineOptions.spline,
          hideDots: _this27.lineOptions.hideDots,
          hideLine: _this27.lineOptions.hideLine,
          // same for all datasets
          valuesOverPoints: _this27.config.valuesOverPoints
        }, function () {
          var s = this.state;
          var d = s.datasets[index];
          var minLine = s.yAxis.positions[0] < s.yAxis.zeroLine ? s.yAxis.positions[0] : s.yAxis.zeroLine;
          return {
            xPositions: s.xAxis.positions,
            yPositions: d.yPositions,
            values: d.values,
            zeroLine: minLine,
            radius: this.lineOptions.dotSize || LINE_CHART_DOT_SIZE
          };
        }.bind(_this27)];
      });
      var markerConfigs = [['yMarkers', {
        width: this.width,
        pos: 'right'
      }, function () {
        return this.state.yMarkers;
      }.bind(this)]];
      componentConfigs = componentConfigs.concat(barsConfigs, lineConfigs, markerConfigs);
      var optionals = ['yMarkers', 'yRegions'];
      this.dataUnitComponents = [];
      this.components = new Map(componentConfigs.filter(function (args) {
        return !optionals.includes(args[0]) || _this27.state[args[0]];
      }).map(function (args) {
        var component = getComponent.apply(void 0, _toConsumableArray(args));

        if (args[0].includes('lineGraph') || args[0].includes('barGraph')) {
          _this27.dataUnitComponents.push(component);
        }

        return [args[0], component];
      }));
    }
  }, {
    key: "makeDataByIndex",
    value: function makeDataByIndex() {
      var _this28 = this;

      this.dataByIndex = {};
      var s = this.state;
      var formatX = this.config.formatTooltipX;
      var formatY = this.config.formatTooltipY;
      var titles = s.xAxis.labels;
      titles.map(function (label, index) {
        var values = _this28.state.datasets.map(function (set, i) {
          var value = set.values[index];
          return {
            title: set.name,
            value: value,
            yPos: set.yPositions[index],
            color: _this28.colors[i],
            formatted: formatY ? formatY(value) : value
          };
        });

        _this28.dataByIndex[index] = {
          label: label,
          formattedLabel: formatX ? formatX(label) : label,
          xPos: s.xAxis.positions[index],
          values: values,
          yExtreme: s.yExtremes[index]
        };
      });
    }
  }, {
    key: "bindTooltip",
    value: function bindTooltip() {
      var _this29 = this;

      // NOTE: could be in tooltip itself, as it is a given functionality for its parent
      this.container.addEventListener('mousemove', function (e) {
        var m = _this29.measures;
        var o = getOffset(_this29.container);
        var relX = e.pageX - o.left - getLeftOffset(m);
        var relY = e.pageY - o.top;

        if (relY < _this29.height + getTopOffset(m) && relY > getTopOffset(m)) {
          _this29.mapTooltipXPosition(relX);
        } else {
          _this29.tip.hideTip();
        }
      });
    }
  }, {
    key: "mapTooltipXPosition",
    value: function mapTooltipXPosition(relX) {
      var s = this.state;
      if (!s.yExtremes) return;
      var index = getClosestInArray(relX, s.xAxis.positions, true);
      var dbi = this.dataByIndex[index];
      this.tip.setValues(dbi.xPos + this.tip.offset.x, dbi.yExtreme + this.tip.offset.y, {
        name: dbi.formattedLabel,
        value: ''
      }, dbi.values, index);
      this.tip.showTip();
    }
  }, {
    key: "renderLegend",
    value: function renderLegend() {
      var _this30 = this;

      var s = this.data;

      if (s.datasets.length > 1) {
        this.legendArea.textContent = '';
        s.datasets.map(function (d, i) {
          var barWidth = AXIS_LEGEND_BAR_SIZE; // let rightEndPoint = this.baseWidth - this.measures.margins.left - this.measures.margins.right;
          // let multiplier = s.datasets.length - i;

          var rect = legendBar( // rightEndPoint - multiplier * barWidth,	// To right align
          barWidth * i, '0', barWidth, _this30.colors[i], d.name, _this30.config.truncateLegends);

          _this30.legendArea.appendChild(rect);
        });
      }
    } // Overlay

  }, {
    key: "makeOverlay",
    value: function makeOverlay() {
      var _this31 = this;

      if (this.init) {
        this.init = 0;
        return;
      }

      if (this.overlayGuides) {
        this.overlayGuides.forEach(function (g) {
          var o = g.overlay;
          o.parentNode.removeChild(o);
        });
      }

      this.overlayGuides = this.dataUnitComponents.map(function (c) {
        return {
          type: c.unitType,
          overlay: undefined,
          units: c.units
        };
      });

      if (this.state.currentIndex === undefined) {
        this.state.currentIndex = this.state.datasetLength - 1;
      } // Render overlays


      this.overlayGuides.map(function (d) {
        var currentUnit = d.units[_this31.state.currentIndex];
        d.overlay = _makeOverlay[d.type](currentUnit);

        _this31.drawArea.appendChild(d.overlay);
      });
    }
  }, {
    key: "updateOverlayGuides",
    value: function updateOverlayGuides() {
      if (this.overlayGuides) {
        this.overlayGuides.forEach(function (g) {
          var o = g.overlay;
          o.parentNode.removeChild(o);
        });
      }
    }
  }, {
    key: "bindOverlay",
    value: function bindOverlay() {
      var _this32 = this;

      this.parent.addEventListener('data-select', function () {
        _this32.updateOverlay();
      });
    }
  }, {
    key: "bindUnits",
    value: function bindUnits() {
      var _this33 = this;

      this.dataUnitComponents.map(function (c) {
        c.units.map(function (unit) {
          unit.addEventListener('click', function () {
            var index = unit.getAttribute('data-point-index');

            _this33.setCurrentDataPoint(index);
          });
        });
      }); // Note: Doesn't work as tooltip is absolutely positioned

      this.tip.container.addEventListener('click', function () {
        var index = _this33.tip.container.getAttribute('data-point-index');

        _this33.setCurrentDataPoint(index);
      });
    }
  }, {
    key: "updateOverlay",
    value: function updateOverlay() {
      var _this34 = this;

      this.overlayGuides.map(function (d) {
        var currentUnit = d.units[_this34.state.currentIndex];

        _updateOverlay[d.type](currentUnit, d.overlay);
      });
    }
  }, {
    key: "onLeftArrow",
    value: function onLeftArrow() {
      this.setCurrentDataPoint(this.state.currentIndex - 1);
    }
  }, {
    key: "onRightArrow",
    value: function onRightArrow() {
      this.setCurrentDataPoint(this.state.currentIndex + 1);
    }
  }, {
    key: "getDataPoint",
    value: function getDataPoint() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentIndex;
      var s = this.state;
      var data_point = {
        index: index,
        label: s.xAxis.labels[index],
        values: s.datasets.map(function (d) {
          return d.values[index];
        })
      };
      return data_point;
    }
  }, {
    key: "setCurrentDataPoint",
    value: function setCurrentDataPoint(index) {
      var s = this.state;
      index = parseInt(index);
      if (index < 0) index = 0;
      if (index >= s.xAxis.labels.length) index = s.xAxis.labels.length - 1;
      if (index === s.currentIndex) return;
      s.currentIndex = index;
      fire(this.parent, "data-select", this.getDataPoint());
    } // API

  }, {
    key: "addDataPoint",
    value: function addDataPoint(label, datasetValues) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.state.datasetLength;

      _get(_getPrototypeOf(AxisChart.prototype), "addDataPoint", this).call(this, label, datasetValues, index);

      this.data.labels.splice(index, 0, label);
      this.data.datasets.map(function (d, i) {
        d.values.splice(index, 0, datasetValues[i]);
      });
      this.update(this.data);
    }
  }, {
    key: "removeDataPoint",
    value: function removeDataPoint() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.datasetLength - 1;

      if (this.data.labels.length <= 1) {
        return;
      }

      _get(_getPrototypeOf(AxisChart.prototype), "removeDataPoint", this).call(this, index);

      this.data.labels.splice(index, 1);
      this.data.datasets.map(function (d) {
        d.values.splice(index, 1);
      });
      this.update(this.data);
    }
  }, {
    key: "updateDataset",
    value: function updateDataset(datasetValues) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.data.datasets[index].values = datasetValues;
      this.update(this.data);
    } // addDataset(dataset, index) {}
    // removeDataset(index = 0) {}

  }, {
    key: "updateDatasets",
    value: function updateDatasets(datasets) {
      this.data.datasets.map(function (d, i) {
        if (datasets[i]) {
          d.values = datasets[i];
        }
      });
      this.update(this.data);
    } // updateDataPoint(dataPoint, index = 0) {}
    // addDataPoint(dataPoint, index = 0) {}
    // removeDataPoint(index = 0) {}

  }]);

  return AxisChart;
}(BaseChart);

var DonutChart =
/*#__PURE__*/
function (_AggregationChart3) {
  _inherits(DonutChart, _AggregationChart3);

  function DonutChart(parent, args) {
    var _this35;

    _classCallCheck(this, DonutChart);

    _this35 = _possibleConstructorReturn(this, _getPrototypeOf(DonutChart).call(this, parent, args));
    _this35.type = 'donut';
    _this35.initTimeout = 0;
    _this35.init = 1;

    _this35.setup();

    return _this35;
  }

  _createClass(DonutChart, [{
    key: "configure",
    value: function configure(args) {
      _get(_getPrototypeOf(DonutChart.prototype), "configure", this).call(this, args);

      this.mouseMove = this.mouseMove.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
      this.hoverRadio = args.hoverRadio || 0.1;
      this.config.startAngle = args.startAngle || 0;
      this.clockWise = args.clockWise || false;
      this.strokeWidth = args.strokeWidth || 30;
    }
  }, {
    key: "calc",
    value: function calc() {
      var _this36 = this;

      _get(_getPrototypeOf(DonutChart.prototype), "calc", this).call(this);

      var s = this.state;
      this.radius = this.height > this.width ? this.center.x - this.strokeWidth / 2 : this.center.y - this.strokeWidth / 2;
      var radius = this.radius,
          clockWise = this.clockWise;
      var prevSlicesProperties = s.slicesProperties || [];
      s.sliceStrings = [];
      s.slicesProperties = [];
      var curAngle = 180 - this.config.startAngle;
      s.sliceTotals.map(function (total, i) {
        var startAngle = curAngle;
        var originDiffAngle = total / s.grandTotal * FULL_ANGLE;
        var largeArc = originDiffAngle > 180 ? 1 : 0;
        var diffAngle = clockWise ? -originDiffAngle : originDiffAngle;
        var endAngle = curAngle = curAngle + diffAngle;
        var startPosition = getPositionByAngle(startAngle, radius);
        var endPosition = getPositionByAngle(endAngle, radius);
        var prevProperty = _this36.init && prevSlicesProperties[i];
        var curStart, curEnd;

        if (_this36.init) {
          curStart = prevProperty ? prevProperty.startPosition : startPosition;
          curEnd = prevProperty ? prevProperty.endPosition : startPosition;
        } else {
          curStart = startPosition;
          curEnd = endPosition;
        }

        var curPath = originDiffAngle === 360 ? makeStrokeCircleStr(curStart, curEnd, _this36.center, _this36.radius, _this36.clockWise, largeArc) : makeArcStrokePathStr(curStart, curEnd, _this36.center, _this36.radius, _this36.clockWise, largeArc);
        s.sliceStrings.push(curPath);
        s.slicesProperties.push({
          startPosition: startPosition,
          endPosition: endPosition,
          value: total,
          total: s.grandTotal,
          startAngle: startAngle,
          endAngle: endAngle,
          angle: diffAngle
        });
      });
      this.init = 0;
    }
  }, {
    key: "setupComponents",
    value: function setupComponents() {
      var s = this.state;
      var componentConfigs = [['donutSlices', {}, function () {
        return {
          sliceStrings: s.sliceStrings,
          colors: this.colors,
          strokeWidth: this.strokeWidth
        };
      }.bind(this)]];
      this.components = new Map(componentConfigs.map(function (args) {
        var component = getComponent.apply(void 0, _toConsumableArray(args));
        return [args[0], component];
      }));
    }
  }, {
    key: "calTranslateByAngle",
    value: function calTranslateByAngle(property) {
      var radius = this.radius,
          hoverRadio = this.hoverRadio;
      var position = getPositionByAngle(property.startAngle + property.angle / 2, radius);
      return "translate3d(".concat(position.x * hoverRadio, "px,").concat(position.y * hoverRadio, "px,0)");
    }
  }, {
    key: "hoverSlice",
    value: function hoverSlice(path, i, flag, e) {
      if (!path) return;
      var color = this.colors[i];

      if (flag) {
        transform(path, this.calTranslateByAngle(this.state.slicesProperties[i]));
        path.style.stroke = lightenDarkenColor(color, 50);
        var g_off = getOffset(this.svg);
        var x = e.pageX - g_off.left + 10;
        var y = e.pageY - g_off.top - 10;
        var title = (this.formatted_labels && this.formatted_labels.length > 0 ? this.formatted_labels[i] : this.state.labels[i]) + ': ';
        var percent = (this.state.sliceTotals[i] * 100 / this.state.grandTotal).toFixed(1);
        this.tip.setValues(x, y, {
          name: title,
          value: percent + "%"
        });
        this.tip.showTip();
      } else {
        transform(path, 'translate3d(0,0,0)');
        this.tip.hideTip();
        path.style.stroke = color;
      }
    }
  }, {
    key: "bindTooltip",
    value: function bindTooltip() {
      this.container.addEventListener('mousemove', this.mouseMove);
      this.container.addEventListener('mouseleave', this.mouseLeave);
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(e) {
      var target = e.target;
      var slices = this.components.get('donutSlices').store;
      var prevIndex = this.curActiveSliceIndex;
      var prevAcitve = this.curActiveSlice;

      if (slices.includes(target)) {
        var i = slices.indexOf(target);
        this.hoverSlice(prevAcitve, prevIndex, false);
        this.curActiveSlice = target;
        this.curActiveSliceIndex = i;
        this.hoverSlice(target, i, true, e);
      } else {
        this.mouseLeave();
      }
    }
  }, {
    key: "mouseLeave",
    value: function mouseLeave() {
      this.hoverSlice(this.curActiveSlice, this.curActiveSliceIndex, false);
    }
  }]);

  return DonutChart;
}(AggregationChart); // import MultiAxisChart from './charts/MultiAxisChart';


var chartTypes = {
  bar: AxisChart,
  line: AxisChart,
  // multiaxis: MultiAxisChart,
  percentage: PercentageChart,
  heatmap: Heatmap,
  pie: PieChart,
  donut: DonutChart
};

function getChartByType() {
  var chartType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'line';
  var parent = arguments.length > 1 ? arguments[1] : undefined;
  var options = arguments.length > 2 ? arguments[2] : undefined;

  if (chartType === 'axis-mixed') {
    options.type = 'line';
    return new AxisChart(parent, options);
  }

  if (!chartTypes[chartType]) {
    console.error("Undefined chart type: " + chartType);
    return;
  }

  return new chartTypes[chartType](parent, options);
}

var Chart = function Chart(parent, options) {
  _classCallCheck(this, Chart);

  return getChartByType(options.type, parent, options);
};



/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

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
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
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

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator, next;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
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

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
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

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var ADDER = IS_MAP ? 'set' : 'add';
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
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

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
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

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
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

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
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
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
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

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


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

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
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

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


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

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
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

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


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

/***/ "./node_modules/core-js/internals/native-url.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/native-url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !nativeAssign || fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


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
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


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

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
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

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


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

/***/ "./node_modules/core-js/internals/parse-float.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/parse-float.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var nativeParseFloat = global.parseFloat;
var FORCED = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = nativeParseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : nativeParseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/parse-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/parse-int.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/punycode-to-ascii.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/punycode-to-ascii.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

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
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


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

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
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
  version: '3.3.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


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
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
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

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/internals/wrapped-well-known-symbol.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/wrapped-well-known-symbol.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


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

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var SLOPPY_METHOD = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeSort = [].sort;
var test = [1, 2, 3];

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = sloppyArrayMethod('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (get) {
  return function Map() { return get(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.log10.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.log10.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var log = Math.log;
var LOG10E = Math.LOG10E;

// `Math.log10` method
// https://tc39.github.io/ecma262/#sec-math.log10
$({ target: 'Math', stat: true }, {
  log10: function log10(x) {
    return log(x) * LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-nan.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-nan.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Number.isNaN` method
// https://tc39.github.io/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

var ObjectPrototype = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (toString !== ObjectPrototype.toString) {
  redefine(ObjectPrototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/parse-float */ "./node_modules/core-js/internals/parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "./node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var JSON = global.JSON;
var nativeJSONStringify = JSON && JSON.stringify;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
JSON && $({ target: 'JSON', stat: true, forced: !NATIVE_SYMBOL || fails(function () {
  var symbol = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  return nativeJSONStringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || nativeJSONStringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || nativeJSONStringify(Object(symbol)) != '{}';
}) }, {
  stringify: function stringify(it) {
    var args = [it];
    var index = 1;
    var replacer, $replacer;
    while (arguments.length > index) args.push(arguments[index++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return nativeJSONStringify.apply(JSON, args);
  }
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


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

/***/ "./node_modules/core-js/modules/web.url-search-params.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var hasOwn = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.appent` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.url.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");
var arrayFrom = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var codeAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").codeAt;
var toASCII = __webpack_require__(/*! ../internals/punycode-to-ascii */ "./node_modules/core-js/internals/punycode-to-ascii.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+\-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ "./node_modules/frappe-charts/dist/frappe-charts.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/frappe-charts/dist/frappe-charts.min.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:text/css;base64,ZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIikoZmFsc2UpOwovLyBNb2R1bGUKZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsICIuY2hhcnQtY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmfS5jaGFydC1jb250YWluZXIgLmF4aXMsLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtbGFiZWx7ZmlsbDojNTU1YjUxfS5jaGFydC1jb250YWluZXIgLmF4aXMgbGluZSwuY2hhcnQtY29udGFpbmVyIC5jaGFydC1sYWJlbCBsaW5le3N0cm9rZTojZGFkYWRhfS5jaGFydC1jb250YWluZXIgLmRhdGFzZXQtdW5pdHMgY2lyY2xle3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoyfS5jaGFydC1jb250YWluZXIgLmRhdGFzZXQtdW5pdHMgcGF0aHtmaWxsOm5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MnB4fS5jaGFydC1jb250YWluZXIgLmRhdGFzZXQtcGF0aHtzdHJva2Utd2lkdGg6MnB4fS5jaGFydC1jb250YWluZXIgLnBhdGgtZ3JvdXAgcGF0aHtmaWxsOm5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MnB4fS5jaGFydC1jb250YWluZXIgbGluZS5kYXNoZWR7c3Ryb2tlLWRhc2hhcnJheTo1LDN9LmNoYXJ0LWNvbnRhaW5lciAuYXhpcy1saW5lIC5zcGVjaWZpYy12YWx1ZXt0ZXh0LWFuY2hvcjpzdGFydH0uY2hhcnQtY29udGFpbmVyIC5heGlzLWxpbmUgLnktbGluZXt0ZXh0LWFuY2hvcjplbmR9LmNoYXJ0LWNvbnRhaW5lciAuYXhpcy1saW5lIC54LWxpbmV7dGV4dC1hbmNob3I6bWlkZGxlfS5jaGFydC1jb250YWluZXIgLmxlZ2VuZC1kYXRhc2V0LXRleHR7ZmlsbDojNmM3NjgwO2ZvbnQtd2VpZ2h0OjYwMH0uZ3JhcGgtc3ZnLXRpcHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM5NTlkYTU7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC44KTtib3JkZXItcmFkaXVzOjNweH0uZ3JhcGgtc3ZnLXRpcCBvbCwuZ3JhcGgtc3ZnLXRpcCB1bHtwYWRkaW5nLWxlZnQ6MDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5ncmFwaC1zdmctdGlwIHVsLmRhdGEtcG9pbnQtbGlzdCBsaXttaW4td2lkdGg6OTBweDstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXg6MTtmbGV4OjE7Zm9udC13ZWlnaHQ6NjAwfS5ncmFwaC1zdmctdGlwIHN0cm9uZ3tjb2xvcjojZGZlMmU1O2ZvbnQtd2VpZ2h0OjYwMH0uZ3JhcGgtc3ZnLXRpcCAuc3ZnLXBvaW50ZXJ7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjVweDttYXJnaW46MCAwIDAgLTVweDtjb250ZW50OlwiIFwiO2JvcmRlcjo1cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC44KX0uZ3JhcGgtc3ZnLXRpcC5jb21wYXJpc29ue3BhZGRpbmc6MDt0ZXh0LWFsaWduOmxlZnQ7cG9pbnRlci1ldmVudHM6bm9uZX0uZ3JhcGgtc3ZnLXRpcC5jb21wYXJpc29uIC50aXRsZXtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTBweDttYXJnaW46MDtmb250LXdlaWdodDo2MDA7bGluZS1oZWlnaHQ6MTtwb2ludGVyLWV2ZW50czpub25lfS5ncmFwaC1zdmctdGlwLmNvbXBhcmlzb24gdWx7bWFyZ2luOjA7d2hpdGUtc3BhY2U6bm93cmFwO2xpc3Qtc3R5bGU6bm9uZX0uZ3JhcGgtc3ZnLXRpcC5jb21wYXJpc29uIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6NXB4IDEwcHh9IiwgIiJdKTsK"

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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_frappe_charts_dist_frappe_charts_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-loader!frappe-charts/dist/frappe-charts.esm.js */ "./node_modules/babel-loader/lib/index.js!./node_modules/frappe-charts/dist/frappe-charts.esm.js");
/* harmony import */ var frappe_charts_dist_frappe_charts_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frappe-charts/dist/frappe-charts.min.css */ "./node_modules/frappe-charts/dist/frappe-charts.min.css");
/* harmony import */ var frappe_charts_dist_frappe_charts_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frappe_charts_dist_frappe_charts_min_css__WEBPACK_IMPORTED_MODULE_1__);
 // import css


/**
 * Initialize all Frappe charts found in DOM
 */

(function () {
  // Select all charts in a page
  var avidlyFrappeCharts = document.querySelectorAll('.avidly-frappe-chart'); // Loop over charts

  for (var index = 0; index < avidlyFrappeCharts.length; index++) {
    var element = avidlyFrappeCharts[index]; // Get the id

    var id = element.dataset.frappeId ? element.dataset.frappeId : 0; // Get the localized data

    var settings = window['avidlyFrappeChart_' + id] ? window['avidlyFrappeChart_' + id] : []; // Jump out if settings is empty

    if (!settings.data.length) {
      continue;
    } // Initialize the chart


    var chart = new _babel_loader_frappe_charts_dist_frappe_charts_esm_js__WEBPACK_IMPORTED_MODULE_0__["Chart"](element, {
      data: JSON.parse(settings.data),
      axisOptions: {
        xIsSeries: true,
        xAxisMode: 'tick'
      },
      lineOptions: {
        hideDots: 1
      },
      title: settings.title,
      type: 'axis-mixed',
      // or 'bar', 'line', 'pie', 'percentage'
      height: 300,
      colors: ['#107737', '#F08627', '#4E96EF', '#874982']
    });
  }
})();

/***/ })

/******/ });