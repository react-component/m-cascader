/* eslint no-console:0, react/no-multi-comp:0 */

import 'rmc-picker/assets/index.less';
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
    };
  },
  onChange(value) {
    console.log(value);
  },
  onOk(value) {
    console.log('onOk', value);
    this.setState({
      value: value,
    });
  },
  onDismiss() {
    console.log('onDismiss');
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
  render() {
    return (<div style={{padding: 10}}>
      <h3>popup cascader</h3>
      <p>选择的城市：{this.getSel()}</p>
      <PopCascader
        data={this.props.data}
        value={this.state.value}
        onChange={this.onChange}
        onDismiss={this.onDismiss}
        onOk={this.onOk}
        style={{left: 0, bottom: 0}}>
          <button>open</button>
      </PopCascader>
    </div>);
  },
});

ReactDOM.render(<Demo data={globalData}/>, document.getElementById('__react-content'));
