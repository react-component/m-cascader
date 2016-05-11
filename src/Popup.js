import React, { PropTypes } from 'react';
import MCascader from './MCascader';
import { getDefaultValue, COLS, noop, pick } from './utils';
import PopupPicker from 'rmc-picker/lib/Popup';

const PROPS = ['onDismiss', 'children', 'style', 'okText', 'dismissText', 'title', 'className'];

const PopupCascader = React.createClass({
  propTypes: {
    visible: PropTypes.bool,
    onPickerChange: PropTypes.func,
    onChange: PropTypes.func,
    onVisibleChange: PropTypes.func,
    data: PropTypes.any,
    value: PropTypes.any,
    cols: PropTypes.number,
    prefixCls: PropTypes.string,
    popupPrefixCls: PropTypes.string,
    pickerPrefixCls: PropTypes.string,
  },
  getDefaultProps() {
    return {
      popupPrefixCls: 'rmc-picker-popup',
      onVisibleChange: noop,
      cols: COLS,
      onChange: noop,
      onPickerChange: noop,
    };
  },
  getInitialState() {
    return {
      pickerValue: null,
      visible: this.props.visible || false,
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  },
  onPickerChange(value) {
    this.setState({
      pickerValue: value,
    });
    this.props.onPickerChange(value);
  },
  onOk() {
    const { value, cols, data } = this.props;
    this.props.onChange(getDefaultValue(data,
      this.state.pickerValue || value, cols).filter(c => !!c));
  },
  setVisibleState(visible) {
    this.setState({
      visible,
    });
    if (!visible) {
      this.setState({
        pickerValue: null,
      });
    }
  },
  getModal() {
    const { data, cols, prefixCls,
      pickerPrefixCls,
      value } = this.props;
    const extraProps = {};
    if (pickerPrefixCls) {
      extraProps.pickerPrefixCls = pickerPrefixCls;
    }
    if (prefixCls) {
      extraProps.prefixCls = prefixCls;
    }
    return (<MCascader
      data={data}
      value={this.state.pickerValue || value}
      cols={cols}
      onChange={this.onPickerChange}
      {...extraProps}
    />);
  },
  fireVisibleChange(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  },
  render() {
    const props = pick(this.props, PROPS);
    return (<PopupPicker
      {...props}
      onVisibleChange={this.fireVisibleChange}
      onOk={this.onOk}
      content={this.getModal()}
      prefixCls={this.props.popupPrefixCls}
      visible={this.state.visible}
    />);
  },
});

export default PopupCascader;
