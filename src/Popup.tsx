import React from 'react';
import PopupPicker from 'rmc-picker/lib/Popup';
import { PopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';
import { ICascaderProps, CascaderValue } from './CascaderTypes';

export interface IPopupCascaderProps extends PopupPickerProps {
  cascader: React.ReactElement<ICascaderProps>;
  onChange?: (date?: CascaderValue) => void;
}

const PopupCascader = React.createClass<IPopupCascaderProps, any>({
  getDefaultProps() {
    return {
      pickerValueProp: 'value',
      pickerValueChangeProp: 'onChange',
    } as any;
  },

  onOk(v) {
    const { onChange, onOk } = this.props;
    if (onChange) {
      onChange(v);
    }
    if (onOk) {
      onOk(v);
    }
  },

  render() {
    return (<PopupPicker
      picker={this.props.cascader}
      {...this.props}
      onOk={this.onOk}
    />);
  },
});

export default PopupCascader;
