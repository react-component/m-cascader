/* eslint no-console:0, react/no-multi-comp:0 */


import React, { View, Text, StyleSheet, AppRegistry, TouchableHighlight } from 'react-native';
import PopupCascader from '../../src/Popup';
import globalData from '../data';
import arrayTreeFilter from 'array-tree-filter';
import PopupStyles from '../../src/PopupStyles';

const COLS = 3;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    width: 300,
  }
});

const Demo = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  onPickerChange(value) {
    console.log('onPickerChange', value);
  },
  onChange(value) {
    console.log('onChange', value);
    this.setState({
      value,
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
    const value = this.state.value;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(globalData, (c, level) => {
      return c.value === value[level];
    });
    return treeChildren.map((v) => {
      return v.label;
    }).join(',');
  },
  outerCtrl() {
    this.setState({
      visible: !this.state.visible,
    });
  },
  render() {
    return (<View style={{ padding: 10 }}>
      <View><Text>popup cascader</Text></View>
      <View><Text>选择的城市：{this.getSel()}</Text></View>
      <PopupCascader
        styles={PopupStyles}
        data={globalData}
        value={this.state.value}
        cols={COLS}
        onPickerChange={this.onPickerChange}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
        title="Cascader"
      >
        <TouchableHighlight activeOpacity={0.5} style={[styles.button]} underlayColor="#a9d9d4">
          <Text>open</Text>
        </TouchableHighlight>
      </PopupCascader>
      <View><Text>just cascader no children</Text></View>
      <TouchableHighlight
        onPress={this.outerCtrl} 
        activeOpacity={0.5}
        style={[styles.button]}
        underlayColor="#a9d9d4">
        <Text>switch</Text>
      </TouchableHighlight>
      <PopupCascader
        styles={PopupStyles}
        visible={this.state.visible}
        data={globalData}
        value={this.state.value}
        cols={COLS}
        onPickerChange={this.onPickerChange}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
      />
    </View>);
  },
});

AppRegistry.registerComponent('popup', () => Demo);
