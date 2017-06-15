/* tslint:disable:no-console */

import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.less';
import Cascader from '../src/Cascader';
import React from 'react';
import ReactDOM from 'react-dom';
import globalData from './data';

class Demo extends React.Component<any, any> {
  onChange = (value) => {
    console.log('onChange', value);
  }

  render() {
    return (<div style={{ padding: 10 }}>
      <h3>simple inline</h3>
      <Cascader data={globalData} onChange={this.onChange} rootNativeProps={{'data-xx': 'yy'}}/>
    </div>);
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
