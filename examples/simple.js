webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(187);


/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _rmcCascader = __webpack_require__(188);
	
	var _rmcCascader2 = _interopRequireDefault(_rmcCascader);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(162);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _data = __webpack_require__(186);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/* eslint no-console:0 */
	
	var Demo = _react2["default"].createClass({
	  displayName: 'Demo',
	  onChange: function onChange(value) {
	    console.log('onChange', value);
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      'div',
	      { style: { padding: 10 } },
	      _react2["default"].createElement(
	        'h3',
	        null,
	        'simple inline'
	      ),
	      _react2["default"].createElement(_rmcCascader2["default"], { data: _data2["default"], onChange: this.onChange })
	    );
	  }
	});
	
	_reactDom2["default"].render(_react2["default"].createElement(Demo, null), document.getElementById('__react-content'));

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(189);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _src2["default"]; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MCascader = __webpack_require__(164);
	
	var _MCascader2 = _interopRequireDefault(_MCascader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _MCascader2["default"]; // export this package's api
	
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=simple.js.map