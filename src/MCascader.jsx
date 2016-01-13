import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Picker from 'rmc-picker';
import arrayTreeFilter from 'array-tree-filter';

const MCascader = React.createClass({
  propTypes: {
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    onChange: PropTypes.func,
    data: PropTypes.any,
    cols: PropTypes.number,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rmc-cascader',
      pickerPrefixCls: 'rmc-picker',
      cols: 3,
    };
  },
  getInitialState() {
    return {
      value: this.getNewValue(this.props.data, this.props.defaultValue || this.props.value),
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: this.getNewValue(nextProps.data, nextProps.value),
      });
    }
  },
  onValueChange(index, selectNameValue) {
    const value = this.state.value.concat();
    value[index] = selectNameValue;
    const children = arrayTreeFilter(this.props.data, (c, level) => {
      return level <= index && c.value === value[level];
    });
    let data = children[index];
    for (let i = index + 1; data && data.children && data.children.length && i < value.length; i++) {
      data = data.children[0];
      value[i] = data.value;
    }
    this.setState({
      value: value,
    });
    this.props.onChange(value);
  },
  getNewValue(d, val) {
    let data = d;
    let value = val;
    if (!value) {
      value = [];
      for (let i = 0; i < this.props.cols; i++) {
        if (data) {
          value[i] = data[0].value;
          data = data[0].children;
        } else {
          value[i] = undefined;
        }
      }
    }
    return value;
  },
  getColArray() {
    const ret = [];
    for (let i = 0; i < this.props.cols; i++) {
      ret[i] = undefined;
    }
    return ret;
  },
  render() {
    const props = this.props;
    const {prefixCls, pickerPrefixCls, className} = props;

    const value = this.state.value;
    const childrenTree = arrayTreeFilter(this.props.data, (c, level) => {
      return c.value === value[level];
    }).map(c=>c.children);
    childrenTree.length = this.props.cols - 1;
    childrenTree.unshift(this.props.data);
    const cols = this.getColArray().map((v, i) => {
      return (<div key={i} className={`${prefixCls}-main-item`}>
        <Picker prefixCls={pickerPrefixCls}
                selectedValue={value[i]}
                onValueChange={this.onValueChange.bind(this, i)}>
          {childrenTree[i] || []}
        </Picker>
      </div>);
    });
    return (<div className={classnames(className, prefixCls)}>
      {cols}
    </div>);
  },
});

export default MCascader;
