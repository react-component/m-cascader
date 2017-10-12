/* eslint no-console:0, react/no-multi-comp:0 */

/* tslint:disable:no-console */

import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.less';
import 'rmc-picker/assets/popup.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PopupCascader from '../src/Popup';
import Cascader from '../src/Cascader';
import globalData from './data';
import arrayTreeFilter from 'array-tree-filter';

const COLS = 3;

class Demo extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onChange = (value) => {
    console.log('onChange', value);
    this.setState({
      value,
      visible: false,
    });
  }

  onScrollChange = (value) => {
    console.log('onScrollChange', value);
  }

  onDismiss = () => {
    console.log('onDismiss');
    this.setState({
      visible: false,
    });
  }

  onPickerChange = (value) => {
    console.log('picker change', value);
  }

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
  }

  outerCtrl = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const cascader = (
      <Cascader
        rootNativeProps={{ 'data-xx': 'yy' }}
        onChange={this.onPickerChange}
        data={globalData}
        cols={COLS}
        onScrollChange={this.onScrollChange}
      />
    );
    return (<div style={{ padding: 10 }}>
      <h3>popup cascader</h3>
      <p>选择的城市：{this.getSel()}</p>
      <PopupCascader
        cascader={cascader}
        value={this.state.value}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
        title="Cascader"
      >
        <button ref="button">open</button>
      </PopupCascader>
      <h3>just cascader no children</h3>
      <button onClick={this.outerCtrl}>switch</button>
      <PopupCascader
        cascader={cascader}
        visible={this.state.visible}
        value={this.state.value}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
      />
    </div>);
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
