/* eslint no-console:0 */

/* tslint:disable:no-console */

import Cascader from '../../src/Cascader';
import { View, Text } from 'react-native';
import globalData from '../data';
import React from 'react';

export class PickerDemo extends React.Component<any, any> {
  onChange = (value) => {
    console.log('onChange', value);
  }
  render() {
    return (<View style={{ padding: 10 }}>
      <View><Text>simple inline</Text></View>
      <Cascader data={globalData} onChange={this.onChange} />
    </View>);
  }
}

export const Demo = PickerDemo;
export const title = 'picker';
