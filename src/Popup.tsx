import React from 'react';
import PopupPicker from 'rmc-picker/lib/Popup';
import { IPopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';
import { ICascaderProps, CascaderValue } from './CascaderTypes';

export interface IPopupCascaderProps extends IPopupPickerProps {
  cascader: React.ReactElement<ICascaderProps>;
  onChange?: (date?: CascaderValue) => void;
}

class PopupCascader extends React.Component<IPopupCascaderProps, any> {
  static defaultProps = {
    pickerValueProp: 'value',
    pickerValueChangeProp: 'onChange',
  };

  onOk = (v) => {
    const { onChange, onOk } = this.props;
    if (onChange) {
      onChange(v);
    }
    if (onOk) {
      onOk(v);
    }
  }

  render() {
    return (<PopupPicker
      picker={this.props.cascader}
      {...this.props}
      onOk={this.onOk}
    />);
  }
}

export default PopupCascader;
