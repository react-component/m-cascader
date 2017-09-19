webpackJsonp([1],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_css__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_cascader_assets_index_less__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_cascader_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rmc_cascader_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Cascader__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data__ = __webpack_require__(91);




/* tslint:disable:no-console */







var Demo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

    function Demo() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));

        _this.onChange = function (value) {
            console.log('onChange', value);
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", { style: { padding: 10 } }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("h3", null, "simple inline"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_Cascader__["a" /* default */], { data: __WEBPACK_IMPORTED_MODULE_9__data__["a" /* default */], onChange: this.onChange, rootNativeProps: { 'data-xx': 'yy' } }));
        }
    }]);

    return Demo;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ })

},[312]);
//# sourceMappingURL=simple.js.map