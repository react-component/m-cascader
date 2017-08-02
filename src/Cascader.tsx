import React from 'react';
import arrayTreeFilter from 'array-tree-filter';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Picker from 'rmc-picker/lib/Picker';
import { ICascaderProps } from './CascaderTypes';

class Cascader extends React.Component<ICascaderProps, any> {
  static defaultProps = {
    cols: 3,
    prefixCls: 'rmc-cascader',
    pickerPrefixCls: 'rmc-picker',
    data: [],
    disabled: false,
  };

  state = {
    value: this.getValue(this.props.data, this.props.defaultValue || this.props.value),
  };

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: this.getValue(nextProps.data, nextProps.value),
      });
    }
  }

  onValueChange = (value, index) => {
    const children = arrayTreeFilter(this.props.data, (c, level) => {
      return level <= index && c.value === value[level];
    });
    let data = children[index];
    let i;
    for (i = index + 1; data && data.children && data.children.length && i < this.props.cols!; i++) {
      data = data.children[0];
      value[i] = data.value;
    }
    value.length = i;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  getValue(d, val) {
    let data = d || this.props.data;
    let value = val || this.props.value || this.props.defaultValue;
    if (!value || !value.length) {
      value = [];
      for (let i = 0; i < this.props.cols!; i++) {
        if (data && data.length) {
          value[i] = data[0].value;
          data = data[0].children;
        }
      }
    }
    return value;
  }

  getCols() {
    const { data, cols, pickerPrefixCls } = this.props;
    const value = this.state.value;
    const childrenTree = arrayTreeFilter(data, (c, level) => {
      return c.value === value[level];
    }).map(c => c.children);
    childrenTree.length = cols! - 1;
    childrenTree.unshift(data);
    return childrenTree.map((children: any[] = [], level) => (
      <Picker key={level} prefixCls={pickerPrefixCls}>
        {children.map(item =>
          <Picker.Item value={item.value} key={item.value}>{item.label}</Picker.Item>)
        }
      </Picker>
    ));
  }

  render() {
    const props = this.props;
    const {
      prefixCls,
      className, rootNativeProps,
      disabled, pickerItemStyle,
      indicatorStyle,
    } = props;
    const cols = this.getCols();
    return (
      <MultiPicker
        prefixCls={prefixCls}
        disabled={disabled}
        className={className}
        selectedValue={this.state.value}
        rootNativeProps={rootNativeProps}
        indicatorStyle={indicatorStyle}
        pickerItemStyle={pickerItemStyle}
        onValueChange={this.onValueChange}
      >
        {cols}
      </MultiPicker>
    );
  }
}

export default Cascader;
