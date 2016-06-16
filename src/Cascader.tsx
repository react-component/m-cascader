import React, {Component, View, StyleSheet, Text} from 'react-native';
import Picker from 'rmc-picker/lib/Picker';
import { CascaderProps, CascaderState } from './CascaderTypes';
import reactMixin from 'react-mixin';
import CascaderMixin from './CascaderMixin';

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export default class Cascader extends Component<CascaderProps, CascaderState> {
  getChildrenTree: () => any[];

  getColArray: () => any[];

  onValueChange:(i, v) => any;

  render() {
    const props = this.props;
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
  }
}

reactMixin.onClass(Cascader, CascaderMixin);
