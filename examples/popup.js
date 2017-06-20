webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(36);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Popup = __webpack_require__(182);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _Cascader = __webpack_require__(279);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);
	
	var _data = __webpack_require__(296);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _arrayTreeFilter = __webpack_require__(295);
	
	var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var COLS = 3; /* eslint no-console:0, react/no-multi-comp:0 */
	/* tslint:disable:no-console */
	
	var Demo = _react2.default.createClass({
	    displayName: 'Demo',
	    getInitialState: function getInitialState() {
	        return {
	            visible: false
	        };
	    },
	    onChange: function onChange(value) {
	        console.log('onChange', value);
	        this.setState({
	            value: value,
	            visible: false
	        });
	    },
	    onDismiss: function onDismiss() {
	        console.log('onDismiss');
	        this.setState({
	            visible: false
	        });
	    },
	    onPickerChange: function onPickerChange(value) {
	        console.log('picker change', value);
	    },
	    getSel: function getSel() {
	        var value = this.state.value;
	        if (!value) {
	            return '';
	        }
	        var treeChildren = (0, _arrayTreeFilter2.default)(_data2.default, function (c, level) {
	            return c.value === value[level];
	        });
	        return treeChildren.map(function (v) {
	            return v.label;
	        }).join(',');
	    },
	    outerCtrl: function outerCtrl() {
	        this.setState({
	            visible: !this.state.visible
	        });
	    },
	    render: function render() {
	        var cascader = _react2.default.createElement(_Cascader2.default, { rootNativeProps: { 'data-xx': 'yy' }, onChange: this.onPickerChange, data: _data2.default, cols: COLS });
	        return _react2.default.createElement("div", { style: { padding: 10 } }, _react2.default.createElement("h3", null, "popup cascader"), _react2.default.createElement("p", null, '\u9009\u62E9\u7684\u57CE\u5E02\uFF1A', this.getSel()), _react2.default.createElement(_Popup2.default, { cascader: cascader, value: this.state.value, onDismiss: this.onDismiss, onChange: this.onChange, title: "Cascader" }, _react2.default.createElement("button", { ref: "button" }, "open")), _react2.default.createElement("h3", null, "just cascader no children"), _react2.default.createElement("button", { onClick: this.outerCtrl }, "switch"), _react2.default.createElement(_Popup2.default, { cascader: cascader, visible: this.state.visible, value: this.state.value, onDismiss: this.onDismiss, onChange: this.onChange }));
	    }
	});
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 4:
2,

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(183);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(184);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(253);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Popup = __webpack_require__(261);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	/* tslint:disable: interface-name */
	
	function noop() {}
	
	var PopupCascader = function (_React$Component) {
	    (0, _inherits3.default)(PopupCascader, _React$Component);
	
	    function PopupCascader(props) {
	        (0, _classCallCheck3.default)(this, PopupCascader);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	
	        _this.onPickerChange = function (pickerValue) {
	            _this.setState({
	                pickerValue: pickerValue
	            });
	            if (_this.props.cascader.props.onChange) {
	                _this.props.cascader.props.onChange(pickerValue);
	            }
	        };
	        _this.onOk = function () {
	            var onChange = _this.props.onChange;
	
	            if (onChange) {
	                onChange(_this.cascader.getValue().filter(function (c) {
	                    return c !== null && c !== undefined;
	                }));
	            }
	        };
	        _this.saveRef = function (cascader) {
	            _this.cascader = cascader;
	        };
	        _this.fireVisibleChange = function (visible) {
	            if (_this.state.visible !== visible) {
	                if (!('visible' in _this.props)) {
	                    _this.setVisibleState(visible);
	                }
	                var onVisibleChange = _this.props.onVisibleChange;
	
	                if (onVisibleChange) {
	                    onVisibleChange(visible);
	                }
	            }
	        };
	        _this.state = {
	            pickerValue: null,
	            visible: _this.props.visible || false
	        };
	        return _this;
	    }
	
	    PopupCascader.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('visible' in nextProps) {
	            this.setVisibleState(nextProps.visible);
	        }
	    };
	
	    PopupCascader.prototype.setVisibleState = function setVisibleState(visible) {
	        this.setState({
	            visible: visible
	        });
	        if (!visible) {
	            this.setState({
	                pickerValue: null
	            });
	        }
	    };
	
	    PopupCascader.prototype.render = function render() {
	        var cascader = _react2.default.cloneElement(this.props.cascader, {
	            value: this.state.pickerValue || this.props.value,
	            onChange: this.onPickerChange,
	            ref: this.saveRef,
	            data: this.props.cascader.props.data
	        });
	        return _react2.default.createElement(_Popup2.default, __assign({}, this.props, { onVisibleChange: this.fireVisibleChange, onOk: this.onOk, content: cascader, visible: this.state.visible }));
	    };
	
	    return PopupCascader;
	}(_react2.default.Component);
	
	exports.default = PopupCascader;
	
	PopupCascader.defaultProps = {
	    prefixCls: 'rmc-picker-popup',
	    onVisibleChange: noop,
	    onChange: noop
	};
	module.exports = exports['default'];

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(183);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(184);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(253);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactNative = __webpack_require__(266);
	
	var _reactMixin = __webpack_require__(274);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _PopupMixin = __webpack_require__(276);
	
	var _PopupMixin2 = _interopRequireDefault(_PopupMixin);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var PopupPicker = function (_React$Component) {
	    (0, _inherits3['default'])(PopupPicker, _React$Component);
	
	    function PopupPicker() {
	        (0, _classCallCheck3['default'])(this, PopupPicker);
	        return (0, _possibleConstructorReturn3['default'])(this, (PopupPicker.__proto__ || Object.getPrototypeOf(PopupPicker)).apply(this, arguments));
	    }
	
	    (0, _createClass3['default'])(PopupPicker, [{
	        key: 'getModal',
	        value: function getModal() {
	            var props = this.props;
	            var styles = props.styles,
	                title = props.title,
	                okText = props.okText,
	                dismissText = props.dismissText;
	
	            var titleEl = typeof title === 'string' ? _react2['default'].createElement(
	                _reactNative.Text,
	                { style: [styles.title] },
	                title
	            ) : title;
	            var okEl = typeof okText === 'string' ? _react2['default'].createElement(
	                _reactNative.Text,
	                { style: [styles.actionText] },
	                okText
	            ) : okText;
	            var dismissEl = typeof dismissText === 'string' ? _react2['default'].createElement(
	                _reactNative.Text,
	                { style: [styles.actionText] },
	                dismissText
	            ) : dismissText;
	            return _react2['default'].createElement(
	                _Modal2['default'],
	                { animationType: 'slide-up', wrapStyle: styles.modal, visible: this.state.visible, onClose: this.onDismiss.bind(this) },
	                _react2['default'].createElement(
	                    _reactNative.View,
	                    { style: [styles.header] },
	                    _react2['default'].createElement(
	                        _reactNative.TouchableHighlight,
	                        { onPress: this.onDismiss.bind(this), style: [styles.headerItem], activeOpacity: props.actionTextActiveOpacity, underlayColor: props.actionTextUnderlayColor },
	                        dismissEl
	                    ),
	                    _react2['default'].createElement(
	                        _reactNative.View,
	                        { style: [styles.headerItem] },
	                        titleEl
	                    ),
	                    _react2['default'].createElement(
	                        _reactNative.TouchableHighlight,
	                        { onPress: this.onOk.bind(this), style: [styles.headerItem], activeOpacity: props.actionTextActiveOpacity, underlayColor: props.actionTextUnderlayColor },
	                        okEl
	                    )
	                ),
	                this.getContent()
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.getRender();
	        }
	    }]);
	    return PopupPicker;
	}(_react2['default'].Component);
	
	PopupPicker.defaultProps = {
	    actionTextUnderlayColor: '#ddd',
	    actionTextActiveOpacity: 1,
	    triggerType: 'onPress',
	    styles: {},
	    WrapComponent: _reactNative.View
	};
	_reactMixin2['default'].onClass(PopupPicker, _PopupMixin2['default']);
	exports['default'] = PopupPicker;
	module.exports = exports['default'];

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @noflow - get/set properties not yet supported by flow. also `...require(x)` is broken #6560135
	 */
	'use strict';
	
	const warning = __webpack_require__(15);
	
	if (__DEV__) {
	  var warningDedupe = {};
	  var addonWarn = function(prevName, newPackageName) {
	    warning(
	      warningDedupe[prevName],
	      'React.addons.' + prevName + ' is deprecated. Please import the "' +
	      newPackageName + '" package instead.'
	    );
	    warningDedupe[prevName] = true;
	  };
	}
	
	// Export React, plus some native additions.
	const ReactNative = {
	  // Components
	  get ActivityIndicator() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ActivityIndicator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ART() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ReactNativeART\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Button() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Button\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get DatePickerIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"DatePickerIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get DrawerLayoutAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"DrawerLayoutAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Image() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Image\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ImageEditor() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ImageEditor\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ImageStore() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ImageStore\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get KeyboardAvoidingView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"KeyboardAvoidingView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ListView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ListView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get MapView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"MapView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Modal() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Navigator() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Navigator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NavigatorIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NavigatorIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Picker() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Picker\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PickerIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PickerIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ProgressBarAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ProgressBarAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ProgressViewIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ProgressViewIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ScrollView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ScrollView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get SegmentedControlIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"SegmentedControlIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Slider() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Slider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get SnapshotViewIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"SnapshotViewIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Switch() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Switch\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get RecyclerViewBackedScrollView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"RecyclerViewBackedScrollView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get RefreshControl() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"RefreshControl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get StatusBar() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"StatusBar\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get SwipeableListView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"SwipeableListView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TabBarIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TabBarIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Text() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Text\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TextInput() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TextInput\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ToastAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ToastAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ToolbarAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ToolbarAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Touchable() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Touchable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TouchableHighlight() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TouchableHighlight\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TouchableNativeFeedback() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TouchableNativeFeedback\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TouchableOpacity() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TouchableOpacity\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TouchableWithoutFeedback() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TouchableWithoutFeedback\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get View() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"View\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ViewPagerAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ViewPagerAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get WebView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"WebView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	
	  // APIs
	  get ActionSheetIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ActionSheetIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AdSupportIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AdSupportIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Alert() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Alert\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AlertIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AlertIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Animated() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Animated\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AppRegistry() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AppRegistry\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AppState() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AppState\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AsyncStorage() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AsyncStorage\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get BackAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"BackAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get CameraRoll() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"CameraRoll\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Clipboard() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Clipboard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get DatePickerAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"DatePickerAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Dimensions() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Dimensions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Easing() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Easing\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get I18nManager() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"I18nManager\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ImagePickerIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ImagePickerIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get InteractionManager() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"InteractionManager\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Keyboard() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Keyboard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get LayoutAnimation() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"LayoutAnimation\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Linking() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Linking\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NativeEventEmitter() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NativeEventEmitter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NavigationExperimental() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NavigationExperimental\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NetInfo() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NetInfo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PanResponder() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PanResponder\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PermissionsAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PermissionsAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PixelRatio() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PixelRatio\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PushNotificationIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PushNotificationIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Settings() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Settings\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Share() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Share\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get StatusBarIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"StatusBarIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get StyleSheet() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"StyleSheet\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Systrace() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Systrace\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TimePickerAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TimePickerAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get UIManager() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"UIManager\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Vibration() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Vibration\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get VibrationIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"VibrationIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	
	  // Plugins
	  get DeviceEventEmitter() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"RCTDeviceEventEmitter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NativeAppEventEmitter() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"RCTNativeAppEventEmitter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NativeModules() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NativeModules\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Platform() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Platform\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get processColor() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"processColor\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get requireNativeComponent() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"requireNativeComponent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	
	  // Prop Types
	  get ColorPropType() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ColorPropType\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get EdgeInsetsPropType() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"EdgeInsetsPropType\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PointPropType() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PointPropType\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	
	  // See http://facebook.github.io/react/docs/addons.html
	  addons: {
	    get LinkedStateMixin() {
	      if (__DEV__) {
	        addonWarn('LinkedStateMixin', 'react-addons-linked-state-mixin');
	      }
	      return __webpack_require__(267);
	    },
	    get PureRenderMixin() {
	      if (__DEV__) {
	        addonWarn('PureRenderMixin', 'react-addons-pure-render-mixin');
	      }
	      return __webpack_require__(270);
	    },
	    get TestModule() {
	      if (__DEV__) {
	        warning(
	          warningDedupe.TestModule,
	          'React.addons.TestModule is deprecated. ' +
	          'Use ReactNative.NativeModules.TestModule instead.'
	        );
	        warningDedupe.TestModule = true;
	      }
	      return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NativeModules\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).TestModule;
	    },
	    get batchedUpdates() {
	      if (__DEV__) {
	        warning(
	          warningDedupe.batchedUpdates,
	          'React.addons.batchedUpdates is deprecated. ' +
	          'Use ReactNative.unstable_batchedUpdates instead.'
	        );
	        warningDedupe.batchedUpdates = true;
	      }
	      return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ReactUpdates\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).batchedUpdates;
	    },
	    get createFragment() {
	      if (__DEV__) {
	        addonWarn('createFragment', 'react-addons-create-fragment');
	      }
	      return __webpack_require__(272).create;
	    },
	    get update() {
	      if (__DEV__) {
	        addonWarn('update', 'react-addons-update');
	      }
	      return __webpack_require__(273);
	    },
	  },
	};
	
	// Better error messages when accessing React APIs on ReactNative
	if (__DEV__) {
	  const throwOnWrongReactAPI = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"throwOnWrongReactAPI\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	  const reactAPIs = [ 'createClass', 'Component' ];
	
	  for (const key of reactAPIs) {
	    Object.defineProperty(ReactNative, key, {
	      get() { throwOnWrongReactAPI(key); },
	      enumerable: false,
	      configurable: false,
	    });
	  }
	}
	
	// Preserve getters with warnings on the internal ReactNative copy without
	// invoking them.
	const ReactNativeInternal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ReactNative\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	function applyForwarding(key) {
	  if (__DEV__) {
	    Object.defineProperty(
	      ReactNative,
	      key,
	      Object.getOwnPropertyDescriptor(ReactNativeInternal, key)
	    );
	    return;
	  }
	  ReactNative[key] = ReactNativeInternal[key];
	}
	for (const key in ReactNativeInternal) {
	  applyForwarding(key);
	}
	module.exports = ReactNative;


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactLink = __webpack_require__(268);
	var ReactStateSetters = __webpack_require__(269);
	
	/**
	 * A simple mixin around ReactLink.forState().
	 * See https://facebook.github.io/react/docs/two-way-binding-helpers.html
	 */
	var LinkedStateMixin = {
	  /**
	   * Create a ReactLink that's linked to part of this component's state. The
	   * ReactLink will have the current value of this.state[key] and will call
	   * setState() when a change is requested.
	   *
	   * @param {string} key state key to update.
	   * @return {ReactLink} ReactLink instance linking to the state.
	   */
	  linkState: function (key) {
	    return new ReactLink(this.state[key], ReactStateSetters.createStateKeySetter(this, key));
	  }
	};
	
	module.exports = LinkedStateMixin;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * ReactLink encapsulates a common pattern in which a component wants to modify
	 * a prop received from its parent. ReactLink allows the parent to pass down a
	 * value coupled with a callback that, when invoked, expresses an intent to
	 * modify that value. For example:
	 *
	 * React.createClass({
	 *   getInitialState: function() {
	 *     return {value: ''};
	 *   },
	 *   render: function() {
	 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
	 *     return <input valueLink={valueLink} />;
	 *   },
	 *   _handleValueChange: function(newValue) {
	 *     this.setState({value: newValue});
	 *   }
	 * });
	 *
	 * We have provided some sugary mixins to make the creation and
	 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
	 */
	
	var React = __webpack_require__(6);
	
	/**
	 * Deprecated: An an easy way to express two-way binding with React. 
	 * See https://facebook.github.io/react/docs/two-way-binding-helpers.html
	 *
	 * @param {*} value current value of the link
	 * @param {function} requestChange callback to request a change
	 */
	function ReactLink(value, requestChange) {
	  this.value = value;
	  this.requestChange = requestChange;
	}
	
	/**
	 * Creates a PropType that enforces the ReactLink API and optionally checks the
	 * type of the value being passed inside the link. Example:
	 *
	 * MyComponent.propTypes = {
	 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
	 * }
	 */
	function createLinkTypeChecker(linkType) {
	  var shapes = {
	    value: linkType === undefined ? React.PropTypes.any.isRequired : linkType.isRequired,
	    requestChange: React.PropTypes.func.isRequired
	  };
	  return React.PropTypes.shape(shapes);
	}
	
	ReactLink.PropTypes = {
	  link: createLinkTypeChecker
	};
	
	module.exports = ReactLink;

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactStateSetters = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function (component, funcReturningState) {
	    return function (a, b, c, d, e, f) {
	      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
	      if (partialState) {
	        component.setState(partialState);
	      }
	    };
	  },
	
	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function (component, key) {
	    // Memoize the setters.
	    var cache = component.__keySetters || (component.__keySetters = {});
	    return cache[key] || (cache[key] = createStateKeySetter(component, key));
	  }
	};
	
	function createStateKeySetter(component, key) {
	  // Partial state is allocated outside of the function closure so it can be
	  // reused with every call, avoiding memory allocation when this function
	  // is called.
	  var partialState = {};
	  return function stateKeySetter(value) {
	    partialState[key] = value;
	    component.setState(partialState);
	  };
	}
	
	ReactStateSetters.Mixin = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateSetter(function(xValue) {
	   *     return {x: xValue};
	   *   })(1);
	   *
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function (funcReturningState) {
	    return ReactStateSetters.createStateSetter(this, funcReturningState);
	  },
	
	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateKeySetter('x')(1);
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function (key) {
	    return ReactStateSetters.createStateKeySetter(this, key);
	  }
	};
	
	module.exports = ReactStateSetters;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var shallowCompare = __webpack_require__(271);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 *
	 * See https://facebook.github.io/react/docs/pure-render-mixin.html
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var shallowEqual = __webpack_require__(127);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(11);
	
	var ReactChildren = __webpack_require__(9);
	var ReactElement = __webpack_require__(13);
	
	var emptyFunction = __webpack_require__(16);
	var invariant = __webpack_require__(12);
	var warning = __webpack_require__(15);
	
	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set or fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */
	
	var numericPropertyRegex = /^\d+$/;
	
	var warnedAboutNumeric = false;
	
	var ReactFragment = {
	  /**
	   * Wrap a keyed object in an opaque proxy that warns you if you access any
	   * of its properties.
	   * See https://facebook.github.io/react/docs/create-fragment.html
	   */
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : void 0;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : void 0;
	      return object;
	    }
	
	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.') : _prodInvariant('0') : void 0;
	
	    var result = [];
	
	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : void 0;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }
	
	    return result;
	  }
	};
	
	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(11),
	    _assign = __webpack_require__(8);
	
	var invariant = __webpack_require__(12);
	var hasOwnProperty = {}.hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return _assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = '$push';
	var COMMAND_UNSHIFT = '$unshift';
	var COMMAND_SPLICE = '$splice';
	var COMMAND_SET = '$set';
	var COMMAND_MERGE = '$merge';
	var COMMAND_APPLY = '$apply';
	
	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
	}
	
	/**
	 * Returns a updated shallow copy of an object without mutating the original.
	 * See https://facebook.github.io/react/docs/update.html for details.
	 */
	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
	    _assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(277);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function noop() {}
	exports['default'] = {
	    getDefaultProps: function getDefaultProps() {
	        return {
	            onVisibleChange: noop,
	            okText: 'Ok',
	            pickerValueProp: 'selectedValue',
	            pickerValueChangeProp: 'onValueChange',
	            dismissText: 'Dismiss',
	            title: '',
	            onOk: noop,
	            onDismiss: noop
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            pickerValue: 'value' in this.props ? this.props.value : null,
	            visible: this.props.visible || false
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if ('value' in nextProps) {
	            this.setState({
	                pickerValue: nextProps.value
	            });
	        }
	        if ('visible' in nextProps) {
	            this.setVisibleState(nextProps.visible);
	        }
	    },
	    onPickerChange: function onPickerChange(pickerValue) {
	        if (this.state.pickerValue !== pickerValue) {
	            this.setState({
	                pickerValue: pickerValue
	            });
	            var _props = this.props,
	                picker = _props.picker,
	                pickerValueChangeProp = _props.pickerValueChangeProp;
	
	            if (picker && picker.props[pickerValueChangeProp]) {
	                picker.props[pickerValueChangeProp](pickerValue);
	            }
	        }
	    },
	    saveRef: function saveRef(picker) {
	        this.picker = picker;
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
	    fireVisibleChange: function fireVisibleChange(visible) {
	        if (this.state.visible !== visible) {
	            if (!('visible' in this.props)) {
	                this.setVisibleState(visible);
	            }
	            this.props.onVisibleChange(visible);
	        }
	    },
	    getRender: function getRender() {
	        var props = this.props;
	        var children = props.children;
	        if (!children) {
	            return this.getModal();
	        }
	        var _props2 = this.props,
	            WrapComponent = _props2.WrapComponent,
	            disabled = _props2.disabled;
	
	        var child = children;
	        var newChildProps = {};
	        if (!disabled) {
	            newChildProps[props.triggerType] = this.onTriggerClick.bind(this);
	        }
	        return _react2['default'].createElement(
	            WrapComponent,
	            { style: props.wrapStyle },
	            _react2['default'].cloneElement(child, newChildProps),
	            this.getModal()
	        );
	    },
	    onTriggerClick: function onTriggerClick(e) {
	        var child = this.props.children;
	        var childProps = child.props || {};
	        if (childProps[this.props.triggerType]) {
	            childProps[this.props.triggerType](e);
	        }
	        this.fireVisibleChange(!this.state.visible);
	    },
	    onOk: function onOk() {
	        this.props.onOk(this.picker && this.picker.getValue());
	        this.fireVisibleChange(false);
	    },
	    getContent: function getContent() {
	        if (this.props.picker) {
	            var _React$cloneElement;
	
	            var pickerValue = this.state.pickerValue;
	
	            if (pickerValue === null) {
	                pickerValue = this.props.value;
	            }
	            return _react2['default'].cloneElement(this.props.picker, (_React$cloneElement = {}, (0, _defineProperty3['default'])(_React$cloneElement, this.props.pickerValueProp, pickerValue), (0, _defineProperty3['default'])(_React$cloneElement, this.props.pickerValueChangeProp, this.onPickerChange.bind(this)), (0, _defineProperty3['default'])(_React$cloneElement, 'ref', this.saveRef.bind(this)), _React$cloneElement));
	        } else {
	            return this.props.content;
	        }
	    },
	    onDismiss: function onDismiss() {
	        this.props.onDismiss();
	        this.fireVisibleChange(false);
	    },
	    hide: function hide() {
	        this.fireVisibleChange(false);
	    }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(183);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(184);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(253);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactNative = __webpack_require__(266);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var styles = _reactNative.StyleSheet.create({
	    wrap: {
	        flex: 1,
	        backgroundColor: 'rgba(0,0,0,0)'
	    },
	    mask: {
	        backgroundColor: 'black',
	        opacity: .5
	    },
	    content: {
	        backgroundColor: 'white'
	    },
	    absolute: {
	        position: 'absolute',
	        top: 0,
	        bottom: 0,
	        left: 0,
	        right: 0
	    }
	});
	var screen = _reactNative.Dimensions.get('window');
	
	var RCModal = function (_React$Component) {
	    (0, _inherits3['default'])(RCModal, _React$Component);
	
	    function RCModal(props) {
	        (0, _classCallCheck3['default'])(this, RCModal);
	
	        var _this = (0, _possibleConstructorReturn3['default'])(this, (RCModal.__proto__ || Object.getPrototypeOf(RCModal)).call(this, props));
	
	        _this.animateMask = function (visible) {
	            _this.stopMaskAnim();
	            _this.state.opacity.setValue(_this.getOpacity(!visible));
	            _this.animMask = _reactNative.Animated.timing(_this.state.opacity, {
	                toValue: _this.getOpacity(visible),
	                duration: _this.props.animationDuration
	            });
	            _this.animMask.start(function () {
	                _this.animMask = null;
	            });
	        };
	        _this.stopMaskAnim = function () {
	            if (_this.animMask) {
	                _this.animMask.stop();
	                _this.animMask = null;
	            }
	        };
	        _this.stopDialogAnim = function () {
	            if (_this.animDialog) {
	                _this.animDialog.stop();
	                _this.animDialog = null;
	            }
	        };
	        _this.animateDialog = function (visible) {
	            _this.stopDialogAnim();
	            _this.animateMask(visible);
	            var animationType = _this.props.animationType;
	
	            if (animationType !== 'none') {
	                if (animationType === 'slide-up' || animationType === 'slide-down') {
	                    _this.state.position.setValue(_this.getPosition(!visible));
	                    _this.animDialog = _reactNative.Animated.timing(_this.state.position, {
	                        toValue: _this.getPosition(visible),
	                        duration: _this.props.animationDuration,
	                        easing: visible ? _reactNative.Easing.elastic(0.8) : undefined
	                    });
	                } else if (animationType === 'fade') {
	                    _this.animDialog = _reactNative.Animated.parallel([_reactNative.Animated.timing(_this.state.opacity, {
	                        toValue: _this.getOpacity(visible),
	                        duration: _this.props.animationDuration,
	                        easing: visible ? _reactNative.Easing.elastic(0.8) : undefined
	                    }), _reactNative.Animated.spring(_this.state.scale, {
	                        toValue: _this.getScale(visible),
	                        duration: _this.props.animationDuration,
	                        easing: visible ? _reactNative.Easing.elastic(0.8) : undefined
	                    })]);
	                }
	                _this.animDialog.start(function () {
	                    _this.animDialog = null;
	                    if (!visible) {
	                        _this.setState({
	                            modalVisible: false
	                        });
	                    }
	                    _this.props.onAnimationEnd(visible);
	                });
	            } else {
	                if (!visible) {
	                    _this.setState({
	                        modalVisible: false
	                    });
	                }
	            }
	        };
	        _this.close = function () {
	            _this.animateDialog(false);
	        };
	        _this.onMaskClose = function () {
	            if (_this.props.maskClosable) {
	                _this.props.onClose();
	            }
	        };
	        _this.getPosition = function (visible) {
	            if (visible) {
	                return 0;
	            }
	            return _this.props.animationType === 'slide-down' ? -screen.height : screen.height;
	        };
	        _this.getScale = function (visible) {
	            return visible ? 1 : 1.05;
	        };
	        _this.getOpacity = function (visible) {
	            return visible ? 1 : 0;
	        };
	        var visible = props.visible;
	
	        _this.state = {
	            position: new _reactNative.Animated.Value(_this.getPosition(visible)),
	            scale: new _reactNative.Animated.Value(_this.getScale(visible)),
	            opacity: new _reactNative.Animated.Value(_this.getOpacity(visible)),
	            modalVisible: visible
	        };
	        return _this;
	    }
	
	    (0, _createClass3['default'])(RCModal, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.shouldComponentUpdate(nextProps)) {
	                this.setState({
	                    modalVisible: true
	                });
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.props.visible || this.props.visible !== nextProps.visible) {
	                return true;
	            }
	            if (nextState) {
	                if (nextState.modalVisible !== this.state.modalVisible) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.animateAppear && this.props.animationType !== 'none') {
	                this.componentDidUpdate({});
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            var props = this.props;
	
	            if (prevProps.visible !== props.visible) {
	                this.animateDialog(props.visible);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	
	            if (!this.state.modalVisible) {
	                return null;
	            }
	            var animationStyleMap = {
	                none: {},
	                'slide-up': { transform: [{ translateY: this.state.position }] },
	                'slide-down': { transform: [{ translateY: this.state.position }] },
	                fade: { transform: [{ scale: this.state.scale }], opacity: this.state.opacity }
	            };
	            return _react2['default'].createElement(_reactNative.Modal, { visible: true, transparent: true, onRequestClose: this.props.onClose }, _react2['default'].createElement(_reactNative.View, { style: [styles.wrap, props.wrapStyle] }, _react2['default'].createElement(_reactNative.TouchableWithoutFeedback, { onPress: this.onMaskClose }, _react2['default'].createElement(_reactNative.Animated.View, { style: [styles.absolute, { opacity: this.state.opacity }] }, _react2['default'].createElement(_reactNative.View, { style: [styles.absolute, props.maskStyle] }))), _react2['default'].createElement(_reactNative.Animated.View, { style: [styles.content, props.style, animationStyleMap[props.animationType]] }, this.props.children)));
	        }
	    }]);
	    return RCModal;
	}(_react2['default'].Component);
	
	exports['default'] = RCModal;
	
	RCModal.defaultProps = {
	    wrapStyle: styles.wrap,
	    maskStyle: styles.mask,
	    animationType: 'slide-up',
	    animateAppear: false,
	    animationDuration: 300,
	    visible: false,
	    maskClosable: true,
	    onClose: function onClose() {},
	    onAnimationEnd: function onAnimationEnd(_visible) {}
	};
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=popup.js.map