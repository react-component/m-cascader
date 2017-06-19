/* eslint no-console:0 */

/* tslint:disable:no-console */

import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.less';
import Cascader from '../src/Cascader.web';
import React from 'react';
import ReactDOM from 'react-dom';
import globalData from './data';

const Demo = React.createClass({
  onChange(value) {
    console.log('onChange', value);
  },
  render() {
    return (<div style={{ padding: 10 }}>
      <h3>simple inline</h3>
      <Cascader data={globalData} onChange={this.onChange} rootNativeProps={{'data-xx': 'yy'}}/>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
