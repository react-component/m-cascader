webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-console:0, react/no-multi-comp:0 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rmcCascaderSrcPopup = __webpack_require__(164);
	
	var _rmcCascaderSrcPopup2 = _interopRequireDefault(_rmcCascaderSrcPopup);
	
	var _data = __webpack_require__(173);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _arrayTreeFilter = __webpack_require__(170);
	
	var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);
	
	var Demo = _react2['default'].createClass({
	  displayName: 'Demo',
	
	  propTypes: {
	    data: _react.PropTypes.any,
	    cols: _react.PropTypes.number
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      data: _data2['default'],
	      cols: 3
	    };
	  },
	  getInitialState: function getInitialState() {
	    var data = this.props.data;
	    var value = [];
	    for (var i = 0; i < this.props.cols; i++) {
	      if (data) {
	        value[i] = data[0].value;
	        data = data[0].children;
	      } else {
	        value[i] = undefined;
	      }
	    }
	    return {
	      value: value
	    };
	  },
	  onPickerChange: function onPickerChange(value) {
	    console.log('onPickerChange', value);
	  },
	  onChange: function onChange(value) {
	    console.log('onChange', value);
	    this.setState({
	      value: value || this.state.value
	    });
	  },
	  onDismiss: function onDismiss() {
	    console.log('onDismiss');
	  },
	  getSel: function getSel() {
	    var value = this.state.value;
	
	    var treeChildren = (0, _arrayTreeFilter2['default'])(this.props.data, function (c, level) {
	      return c.value === value[level];
	    });
	    return treeChildren.map(function (v) {
	      return v.label;
	    }).join(',');
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { style: { padding: 10 } },
	      _react2['default'].createElement(
	        'h3',
	        null,
	        'popup cascader'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        '选择的城市：',
	        this.getSel()
	      ),
	      _react2['default'].createElement(
	        _rmcCascaderSrcPopup2['default'],
	        {
	          data: this.props.data,
	          value: this.state.value,
	          cols: this.props.cols,
	          onPickerChange: this.onPickerChange,
	          onDismiss: this.onDismiss,
	          onChange: this.onChange,
	          style: { left: 0, bottom: 0 } },
	        _react2['default'].createElement(
	          'button',
	          null,
	          'open'
	        )
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Demo, { data: _data2['default'] }), document.getElementById('__react-content'));

/***/ },

/***/ 4:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 5:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _MCascader = __webpack_require__(165);
	
	var _MCascader2 = _interopRequireDefault(_MCascader);
	
	var _rmcModal = __webpack_require__(171);
	
	var _rmcModal2 = _interopRequireDefault(_rmcModal);
	
	function noop() {}
	
	var PopupPicker = _react2['default'].createClass({
	  displayName: 'PopupPicker',
	
	  propTypes: {
	    visible: _react.PropTypes.bool,
	    onPickerChange: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    onDismiss: _react.PropTypes.func,
	    onVisibleChange: _react.PropTypes.func,
	    Modal: _react.PropTypes.func,
	    data: _react.PropTypes.any,
	    value: _react.PropTypes.any,
	    cols: _react.PropTypes.number,
	    children: _react.PropTypes.element
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rmc-cascader',
	      Modal: _rmcModal2['default'],
	      modalPrefix: 'rmc-modal',
	      onVisibleChange: noop,
	      okText: 'Ok',
	      dismissText: 'Dismiss',
	      style: {},
	      onChange: noop,
	      onDismiss: noop,
	      onPickerChange: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      pickerValue: null,
	      visible: this.props.visible || false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.popupContainer = document.createElement('div');
	    document.body.appendChild(this.popupContainer);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('visible' in nextProps) {
	      this.setVisibleState(nextProps.visible);
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.state.visible) {
	      _reactDom2['default'].render(this.getModal(), this.popupContainer);
	    } else {
	      this.pickerValue = null;
	      _reactDom2['default'].unmountComponentAtNode(this.popupContainer);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    _reactDom2['default'].unmountComponentAtNode(this.popupContainer);
	    document.body.removeChild(this.popupContainer);
	  },
	  onPickerChange: function onPickerChange(value) {
	    this.setState({
	      pickerValue: value
	    });
	    this.props.onPickerChange(value);
	  },
	  onChange: function onChange() {
	    this.fireVisibleChange(false);
	    this.props.onChange(this.state.pickerValue);
	  },
	  onDismiss: function onDismiss() {
	    this.fireVisibleChange(false);
	    this.props.onDismiss();
	  },
	  onTriggerClick: function onTriggerClick() {
	    this.fireVisibleChange(!this.state.visible);
	    var child = _react2['default'].Children.only(this.props.children);
	    var childProps = child.props || {};
	    if (childProps.onClick) {
	      childProps.onClick();
	    }
	  },
	  setVisibleState: function setVisibleState(visible) {
	    this.setState({
	      visible: visible
	    });
	    if (!visible) {
	      this.setState({
	        pickerValue: null
	      });
	    }
	  },
	  getModal: function getModal() {
	    var props = this.props;
	    var ModalClass = this.props.Modal;
	
	    var extraPorps = {};
	    if (props.pickerPrefixCls) {
	      extraPorps.pickerPrefixCls = props.pickerPrefixCls;
	    }
	    if (props.prefixCls) {
	      extraPorps.prefixCls = props.prefixCls;
	    }
	    if ('cols' in props) {
	      extraPorps.cols = props.cols;
	    }
	    return _react2['default'].createElement(
	      ModalClass,
	      { className: props.className,
	        modalPrefix: props.modalPrefix,
	        visible: true,
	        style: props.style,
	        onDismiss: this.onDismiss },
	      _react2['default'].createElement(
	        'div',
	        { className: props.prefixCls + '-popup-header' },
	        _react2['default'].createElement(
	          'div',
	          { className: props.prefixCls + '-popup-item', onClick: this.onDismiss },
	          props.dismissText
	        ),
	        _react2['default'].createElement('div', { className: props.prefixCls + '-popup-item' }),
	        _react2['default'].createElement(
	          'div',
	          { className: props.prefixCls + '-popup-item', onClick: this.onChange },
	          props.okText
	        )
	      ),
	      _react2['default'].createElement(_MCascader2['default'], _extends({ data: this.props.data, value: this.state.pickerValue || props.value,
	        onChange: this.onPickerChange }, extraPorps))
	    );
	  },
	  fireVisibleChange: function fireVisibleChange(visible) {
	    if (!('visible' in this.props)) {
	      this.setVisibleState(visible);
	    }
	    this.props.onVisibleChange(visible);
	  },
	  render: function render() {
	    var props = this.props;
	    var children = props.children;
	    var child = _react2['default'].Children.only(children);
	    var newChildProps = {
	      onClick: this.onTriggerClick
	    };
	    return _react2['default'].cloneElement(child, newChildProps);
	  }
	});
	
	exports['default'] = PopupPicker;
	module.exports = exports['default'];

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Modal = __webpack_require__(172);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	exports['default'] = _Modal2['default'];
	module.exports = exports['default'];

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(166);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Modal = _react2['default'].createClass({
	  displayName: 'Modal',
	
	  propTypes: {
	    prefixCls: _react2['default'].PropTypes.string,
	    animated: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool,
	    defaultVisible: _react2['default'].PropTypes.bool,
	    onDismiss: _react2['default'].PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rmc-modal',
	      defaultVisible: false,
	      onDismiss: function onDismiss() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultVisible = _props.defaultVisible;
	    var visible = _props.visible;
	
	    return {
	      visible: 'visible' in this.props ? visible : defaultVisible
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.container = document.createElement('div');
	    document.body.insertBefore(this.container, document.body.firstChild || null);
	    this.componentDidUpdate();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('visible' in nextProps) {
	      props.visible = nextProps.visible;
	    }
	    this.setState(props);
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this.getRender(), this.container);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    _reactDom2['default'].unmountComponentAtNode(this.container);
	    document.body.removeChild(this.container);
	  },
	  getRender: function getRender() {
	    var _wrapperCls, _maskCls;
	
	    var props = this.props;
	
	    var wrapperCls = (_wrapperCls = {}, _defineProperty(_wrapperCls, props.prefixCls + '-wrapper', true), _defineProperty(_wrapperCls, props.prefixCls + '-wrapper-open', this.state.visible), _wrapperCls);
	    var maskCls = (_maskCls = {}, _defineProperty(_maskCls, props.prefixCls + '-mask', true), _defineProperty(_maskCls, props.prefixCls + '-mask-open', this.state.visible), _maskCls);
	
	    return _react2['default'].createElement(
	      'div',
	      { className: (0, _classnames2['default'])(wrapperCls) },
	      _react2['default'].createElement(
	        'div',
	        { className: (0, _classnames2['default'])(props.className, '' + props.prefixCls), style: props.style },
	        props.children
	      ),
	      _react2['default'].createElement('div', { className: (0, _classnames2['default'])(maskCls), onClick: this.hide })
	    );
	  },
	  hide: function hide() {
	    if (!('visible' in this.props)) {
	      this.setState({
	        visible: false
	      });
	    }
	    this.props.onDismiss();
	  },
	  render: function render() {
	    return null;
	  }
	});
	exports['default'] = Modal;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=popup.js.map