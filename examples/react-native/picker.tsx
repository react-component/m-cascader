/* eslint no-console:0 */

import Cascader from '../../src/Cascader';
import { View, Text, AppRegistry } from 'react-native';
import globalData from '../data';
import * as React from 'react';

const PickerDemo = React.createClass({
  onChange(value) {
    console.log('onChange', value);
  },
  render() {
    return (<View style={{ padding: 10 }}>
      <View><Text>simple inline</Text></View>
      <Cascader data={globalData} onChange={this.onChange} />
    </View>);
  },
});

export const Demo = PickerDemo;
export const title = 'picker';
