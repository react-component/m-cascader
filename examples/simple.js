webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(221);


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _Cascader = __webpack_require__(207);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _data = __webpack_require__(220);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* tslint:disable:no-console */
	var Demo = _react2.default.createClass({
	    displayName: 'Demo',
	    onChange: function onChange(value) {
	        console.log('onChange', value);
	    },
	    render: function render() {
	        return _react2.default.createElement("div", { style: { padding: 10 } }, _react2.default.createElement("h3", null, "simple inline"), _react2.default.createElement(_Cascader2.default, { data: _data2.default, onChange: this.onChange, rootNativeProps: { 'data-xx': 'yy' } }));
	    }
	});
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=simple.js.map