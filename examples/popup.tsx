/* eslint no-console:0, react/no-multi-comp:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.less';
import 'rmc-picker/assets/popup.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PopupCascader from '../src/Popup';
import globalData from './data';
import arrayTreeFilter from 'array-tree-filter';

const COLS = 3;

const Demo = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  
  onPickerChange(value) {
    console.log('onPickerChange ', value);
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
    const treeChildren = arrayTreeFilter(globalData, (c, level) => {
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
        data={globalData}
        value={this.state.value}
        cols={COLS}
        onPickerChange={this.onPickerChange}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
        title="Cascader" data-xx="zsd"
      >
        <button ref="button">open</button>
      </PopupCascader>
      <h3>just cascader no children</h3>
      <button onClick={this.outerCtrl}>switch</button>
      <PopupCascader
        visible={this.state.visible}
        data={globalData}
        value={this.state.value}
        cols={COLS}
        onPickerChange={this.onPickerChange}
        onDismiss={this.onDismiss}
        onChange={this.onChange} data-xx="zsd"
      />
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
