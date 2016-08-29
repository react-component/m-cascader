/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.less';
import Cascader from '../src/Cascader.web';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import globalData from './data';

const Demo = React.createClass({
  onChange(value) {
    console.log('onChange', value);
  },
  render() {
    return (<div style={{ padding: 10 }}>
      <h3>simple inline</h3>
      <Cascader data={globalData} onChange={this.onChange} data-xx="zsd" />
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
