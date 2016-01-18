/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.less';
import MCascader from 'rmc-cascader';
import React from 'react';
import ReactDOM from 'react-dom';
import globalData from './data';

const Demo = React.createClass({
  onChange(value) {
    console.log('onChange', value);
  },
  render() {
    return (<div style={{padding: 10}}>
      <h3>simple inline</h3>
      <MCascader data={globalData} onChange={this.onChange} />
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
