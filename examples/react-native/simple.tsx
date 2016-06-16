/* eslint no-console:0 */

import Cascader from '../../src/Cascader';
import React, { View, Text, AppRegistry } from 'react-native';
import globalData from '../data';

const Demo = React.createClass({
  onChange(value) {
    console.log('onChange', value);
  },
  render() {
    return (<View style={{ padding: 10 }}>
      <View><Text>simple inline</Text></View>
      <Cascader data={globalData} onChange={this.onChange}/>
    </View>);
  },
});

AppRegistry.registerComponent('simple', () => Demo);
