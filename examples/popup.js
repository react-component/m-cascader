/* eslint no-console:0, react/no-multi-comp:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.less';
import 'rmc-cascader/assets/popup.less';
import 'rmc-modal/assets/index.css';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import PopCascader from 'rmc-cascader/src/Popup';

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
    let data = this.props.data;
    const value = [];
    for (let i = 0; i < this.props.cols; i++) {
      if (data) {
        value[i] = data[0].value;
        data = data[0].children;
      } else {
        value[i] = undefined;
      }
    }
    return {
      value,
      visible: false,
    };
  },
  onPickerChange(value) {
    console.log('onPickerChange', value);
  },
  onChange(value) {
    console.log('onChange', value);
    this.setState({
      value: value || this.state.value,
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
    const {value} = this.state;
    const treeChildren = arrayTreeFilter(this.props.data, (c, level)=> {
      return c.value === value[level];
    });
    return treeChildren.map((v)=> {
      return v.label;
    }).join(',');
  },
  outerCtrl() {
    this.setState({
      visible: !this.state.visible,
    });
  },
  render() {
    return (<div style={{padding: 10}}>
      <h3>popup cascader</h3>
      <p>选择的城市：{this.getSel()}</p>
      <PopCascader
        data={this.props.data}
        value={this.state.value}
        cols={this.props.cols}
        onPickerChange={this.onPickerChange}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
        style={{left: 0, bottom: 0}}>
        <button>open</button>
      </PopCascader>

      <h3>just cascader no children</h3>
      <button onClick={this.outerCtrl}>open</button>
      <button onClick={this.outerCtrl}>switch</button>
      <PopCascader
        visible={this.state.visible}
        data={this.props.data}
        value={this.state.value}
        cols={this.props.cols}
        onPickerChange={this.onPickerChange}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
        style={{left: 0, bottom: 0}}/>
    </div>);
  },
});

ReactDOM.render(<Demo data={globalData}/>, document.getElementById('__react-content'));
