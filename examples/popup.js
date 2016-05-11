/* eslint no-console:0, react/no-multi-comp:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.less';
import 'rmc-picker/assets/popup.css';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PopupCascader from 'rmc-cascader/src/Popup';
import globalData from './data';
import arrayTreeFilter from 'array-tree-filter';

const Demo = React.createClass({
  propTypes: {
    data: PropTypes.any,
    cols: PropTypes.number,
  },
  getDefaultProps() {
    return {
      data: globalData,
      cols: 3,
    };
  },
  getInitialState() {
    return {
      visible: false,
    };
  },
  onPickerChange(value) {
    console.log('onPickerChange', value);
  },
  onChange(value) {
    console.log('onChange', value);
    this.setState({
      value,
      visible: false,
    });
  },
  onDismiss() {
    console.log('onDismiss');
    this.setState({
      visible: false,
    });
  },
  getSel() {
    const value = this.state.value;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(this.props.data, (c, level) => {
      return c.value === value[level];
    });
    return treeChildren.map((v) => {
      return v.label;
    }).join(',');
  },
  outerCtrl() {
    this.setState({
      visible: !this.state.visible,
    });
  },
  render() {
    return (<div style={{ padding: 10 }}>
      <h3>popup cascader</h3>
      <p>选择的城市：{this.getSel()}</p>
      <PopupCascader
        data={this.props.data}
        value={this.state.value}
        cols={this.props.cols}
        onPickerChange={this.onPickerChange}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
        title="Cascader"
        style={{ left: 0, bottom: 0 }}
      >
        <button ref="button">open</button>
      </PopupCascader>

      <h3>just cascader no children</h3>
      <button onClick={this.outerCtrl}>open</button>
      <button onClick={this.outerCtrl}>switch</button>
      <PopupCascader
        visible={this.state.visible}
        data={this.props.data}
        value={this.state.value}
        cols={this.props.cols}
        onPickerChange={this.onPickerChange}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
      />
    </div>);
  },
});

ReactDOM.render(<Demo data={ globalData }/>, document.getElementById('__react-content'));
