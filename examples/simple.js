webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(174);


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-console:0 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _rmcCascader = __webpack_require__(175);
	
	var _rmcCascader2 = _interopRequireDefault(_rmcCascader);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _data = __webpack_require__(173);
	
	var _data2 = _interopRequireDefault(_data);
	
	var Demo = _react2['default'].createClass({
	  displayName: 'Demo',
	
	  onChange: function onChange(value) {
	    console.log('onChange', value);
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { style: { padding: 10 } },
	      _react2['default'].createElement(
	        'h3',
	        null,
	        'simple inline'
	      ),
	      _react2['default'].createElement(_rmcCascader2['default'], { data: _data2['default'], onChange: this.onChange })
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('__react-content'));

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _src = __webpack_require__(176);
	
	var _src2 = _interopRequireDefault(_src);

	exports['default'] = _src2['default'];
	module.exports = exports['default'];

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _MCascader = __webpack_require__(165);
	
	var _MCascader2 = _interopRequireDefault(_MCascader);

	exports['default'] = _MCascader2['default'];
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=simple.js.map