import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import Picker from 'rmc-picker/lib/Picker';
import { CascaderProps, CascaderState } from './CascaderTypes';
import CascaderMixin from './CascaderMixin';
import FlexAlignType = __React.FlexAlignType;

type FlexDirection = "row" | "column";

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  root: {
    flexDirection: 'row' as FlexDirection,
    alignItems: 'center' as FlexAlignType,
    paddingTop: 10,
    paddingBottom: 10,
  }
});

const Cascader = React.createClass<CascaderProps, CascaderState>({
  mixins: [CascaderMixin],

  render() {
    const value = this.state.value;
    const childrenTree = this.getChildrenTree();
    const cols = this.getColArray().map((_, i) => {
      return (<View style={styles.item} key={i}>
        <Picker
          pure={false}
          selectedValue={value[i]}
          onValueChange={(v) => {this.onValueChange(i, v);}}
        >
          {childrenTree[i] || []}
        </Picker>
      </View>);
    });
    return (<View style={styles.root}>
      {cols}
    </View>);
  },
});

export default Cascader;
