import * as React from 'react';
import PopupPicker from 'rmc-picker/lib/Popup';
import { PopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';
import { CascaderProps, CascaderValue } from './CascaderTypes';

function noop() {
}

export interface PopupCascaderProps extends PopupPickerProps {
  cascader: React.ReactElement<CascaderProps>;
  visible?: boolean;
  value?: CascaderValue;
  onChange?: (date: CascaderValue) => void;
  onVisibleChange?: (visible: boolean) => void;
}

export default class PopupCascader extends React.Component<PopupCascaderProps, any> {
  cascader: any;

  static defaultProps = {
    prefixCls: 'rmc-picker-popup',
    onVisibleChange: noop,
    onChange: noop,
  };

  constructor(props: PopupCascaderProps) {
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

  onPickerChange = (pickerValue) => {
    this.setState({
      pickerValue,
    });
    if (this.props.cascader.props.onChange) {
      this.props.cascader.props.onChange(pickerValue);
    }
  };
  onOk = () => {
    this.props.onChange(this.cascader.getValue().filter(c => c !== null && c !== undefined));
  };

  saveRef = (cascader) => {
    this.cascader = cascader;
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

  fireVisibleChange = (visible) => {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  };

  render() {
    const cascader = React.cloneElement(this.props.cascader, ({
      value: this.state.pickerValue || this.props.value,
      onChange: this.onPickerChange,
      ref: this.saveRef,
      data: this.props.cascader.props.data,
    } as CascaderProps));

    return (<PopupPicker
      {...this.props}
      onVisibleChange={this.fireVisibleChange}
      onOk={this.onOk}
      content={cascader}
      visible={this.state.visible}
    />);
  }
}
