// use jsx to render html, do not modify simple.html

import 'rmc-cascader/assets/index.less';
import 'rmc-picker/assets/index.less';
import MCascader from 'rmc-cascader';
import React from 'react';
import ReactDOM from 'react-dom';
import globalData from './data';

const Demo = React.createClass({
  onChange(value) {
    console.log(value);
  },
  render() {
    return (<div style={{padding: 10}}>
      <h3>simple inline</h3>
      <MCascader data={globalData} onChange={this.onChange} />
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
