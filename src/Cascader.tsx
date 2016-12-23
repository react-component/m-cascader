import React from 'react';
import arrayTreeFilter from 'array-tree-filter';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import { ICascaderProps } from './CascaderTypes';

const Cascader = React.createClass<ICascaderProps, any>({
  getDefaultProps() {
    return {
      cols: 3,
      prefixCls: 'rmc-cascader',
      pickerPrefixCls: 'rmc-picker',
      data: [],
      disabled: false,
    };
  },
  getInitialState() {
    return {
      value: this.getValue(this.props.data, this.props.defaultValue || this.props.value),
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: this.getValue(nextProps.data, nextProps.value),
      });
    }
  },
  onValueChange(value, index) {
    const children = arrayTreeFilter(this.props.data, (c, level) => {
      return level <= index && c.value === value[level];
    });
    let data = children[index];
    let i;
    for (i = index + 1; data && data.children && data.children.length && i < this.props.cols; i++) {
      data = data.children[0];
      value[i] = data.value;
    }
    value.length = i;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    this.props.onChange(value);
  },
  getValue(d, val) {
    let data = d || this.props.data;
    let value = val || this.props.value || this.props.defaultValue;
    if (!value || !value.length) {
      value = [];
      for (let i = 0; i < this.props.cols; i++) {
        if (data && data.length) {
          value[i] = data[0].value;
          data = data[0].children;
        } else {
          value[i] = undefined;
        }
      }
    }
    return value;
  },
  getCols() {
    const { data, cols } = this.props;
    const value = this.state.value;
    const childrenTree = arrayTreeFilter(data, (c, level) => {
      return c.value === value[level];
    }).map(c => c.children);
    childrenTree.length = cols - 1;
    childrenTree.unshift(data);
    return childrenTree.map(children => {
      return {
        props: {
          children: children || [],
        },
      };
    });
  },

  render() {
    const props = this.props;
    const {
      prefixCls, pickerPrefixCls,
      className, rootNativeProps,
      disabled, pickerItemStyle,
    } = props;
    return (
      <MultiPicker
        prefixCls={prefixCls}
        pickerPrefixCls={pickerPrefixCls}
        disabled={disabled}
        className={className}
        selectedValue={this.state.value}
        rootNativeProps={rootNativeProps}
        pickerItemStyle={pickerItemStyle}
        onValueChange={this.onValueChange}
      >
        {this.getCols()}
      </MultiPicker>
    );
  },
});

export default Cascader;
