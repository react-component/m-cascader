import React from 'react';
import arrayTreeFilter from 'array-tree-filter';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
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
    let cols = this.props.cols || 3;
    for (i = index + 1; data && data.children && data.children.length && i < cols; i++) {
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
    let cols = this.props.cols || 3;
    if (!value || !value.length) {
      value = [];
      for (let i = 0; i < cols; i++) {
        if (data && data.length) {
          value[i] = data[0].value;
          data = data[0].children;
        }
      }
    }
    return value;
  }

  getCols() {
    const { data, cols = 3 } = this.props;
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
  }

  render() {
    const props = this.props;
    const {
      prefixCls, pickerPrefixCls,
      className, rootNativeProps,
      disabled, pickerItemStyle,
      indicatorStyle,
    } = props;
    return (
      <MultiPicker
        prefixCls={prefixCls}
        pickerPrefixCls={pickerPrefixCls}
        disabled={disabled}
        className={className}
        selectedValue={this.state.value}
        rootNativeProps={rootNativeProps}
        indicatorStyle={indicatorStyle}
        pickerItemStyle={pickerItemStyle}
        onValueChange={this.onValueChange}
      >
        {this.getCols()}
      </MultiPicker>
    );
  }
}

export default Cascader;
