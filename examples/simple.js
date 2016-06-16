webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(195);


/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _Cascader = __webpack_require__(165);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);
	
	var _react = __webpack_require__(5);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(162);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _data = __webpack_require__(194);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint no-console:0 */
	
	var Demo = React.createClass({
	    displayName: 'Demo',
	    onChange: function onChange(value) {
	        console.log('onChange', value);
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { style: { padding: 10 } },
	            React.createElement(
	                'h3',
	                null,
	                'simple inline'
	            ),
	            React.createElement(_Cascader2.default, { data: _data2.default, onChange: this.onChange })
	        );
	    }
	});
	ReactDOM.render(React.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map