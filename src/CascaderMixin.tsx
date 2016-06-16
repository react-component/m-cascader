import arrayTreeFilter from 'array-tree-filter';
import { getDefaultValue, COLS } from './utils';

export default {
  getDefaultProps() {
    return {
      cols: COLS,
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
  getNewValue(d, val) {
    return getDefaultValue(d, val, this.props.cols);
  },
  getColArray() {
    const ret = [];
    for (let i = 0; i < this.props.cols; i++) {
      ret[i] = undefined;
    }
    return ret;
  },
  getChildrenTree() {
    const {data, cols} = this.props;
    const value = this.state.value;
    const childrenTree = arrayTreeFilter(data, (c, level) => {
      return c.value === value[level];
    }).map(c => c.children);
    childrenTree.length = cols - 1;
    childrenTree.unshift(data);
    return childrenTree;
  },
};
