import * as React from 'react';
import Cascader from './Cascader';
import {getDefaultValue, COLS, noop, exclude} from './utils';
import PopupPicker from 'rmc-picker/lib/Popup';
import {PopupPickerProps} from 'rmc-picker/lib/PopupPickerTypes';
import {CascaderProps, CascaderValue} from './CascaderTypes';

const EXCLUDE_PROPS = {
  popupPrefixCls: 1,
  pickerPrefixCls: 1,
  visible: 1,
  mode: 1,
  onPickerChange: 1,
  onChange: 1,
  onVisibleChange: 1,
};

export interface PopupCascaderProps extends PopupPickerProps, CascaderProps {
  popupPrefixCls?:string;
  pickerPrefixCls?:string;
  visible?:boolean;
  mode?:string;
  onPickerChange?:(date:CascaderValue) => void;
  onChange?:(date:CascaderValue) => void;
  onVisibleChange?:(visible:boolean) => void;
}

export interface PopupCascaderState {
  pickerValue?:CascaderValue;
  visible?:boolean;
}

export default class PopupCascader extends React.Component<PopupCascaderProps, PopupCascaderState> {
  static defaultProps = {
    popupPrefixCls: 'rmc-picker-popup',
    onVisibleChange: noop,
    cols: COLS,
    onChange: noop,
    onPickerChange: noop,
  };

  constructor(props:PopupCascaderProps) {
    super(props);
    this.state = {
      pickerValue: null,
      visible: this.props.visible || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  }

  onPickerChange = (value) => {
    // console.log('inner onPickerChange', value);
    this.setState({
      pickerValue: value,
    });
    this.props.onPickerChange(value);
  };
  onOk = () => {
    const {value, cols, data} = this.props;
    // console.log('inner onOk', this.state.pickerValue);
    this.props.onChange(getDefaultValue(data,
      this.state.pickerValue || value, cols).filter(c => !!c));
  };

  setVisibleState(visible) {
    this.setState({
      visible,
    });
    if (!visible) {
      this.setState({
        pickerValue: null,
      });
    }
  }

  getModal() {
    const {
      data, cols, prefixCls,
      pickerPrefixCls,
      value
    } = this.props;
    const extraProps:PopupCascaderProps = {
      data,
    };
    if (pickerPrefixCls) {
      extraProps.pickerPrefixCls = pickerPrefixCls;
    }
    if (prefixCls) {
      extraProps.prefixCls = prefixCls;
    }
    return (<Cascader
      {...this.props}
      {...extraProps}
      value={this.state.pickerValue || value}
      cols={cols}
      onChange={this.onPickerChange}
    />);
  }

  fireVisibleChange = (visible) => {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  };

  render() {
    const props:any = exclude(this.props, EXCLUDE_PROPS);
    props.prefixCls = this.props.popupPrefixCls;
    return (<PopupPicker
      {...props}
      onVisibleChange={this.fireVisibleChange}
      onOk={this.onOk}
      content={this.getModal()}
      visible={this.state.visible}
    />);
  }
}
