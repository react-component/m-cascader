import * as React from 'react';
import classnames from 'classnames';
import Picker from 'rmc-picker/lib/Picker.web';
import { CascaderProps, CascaderState } from './CascaderTypes';
import reactMixin from 'react-mixin';
import CascaderMixin from './CascaderMixin';

export interface CascaderPropsWeb extends CascaderProps {
  prefixCls?: string;
  pickerPrefixCls?: string;
  className?: string;
}

export default class Cascader extends React.Component<CascaderPropsWeb, CascaderState> {
  static defaultProps = {
      prefixCls: 'rmc-cascader',
      pickerPrefixCls: 'rmc-picker',
    };

  getChildrenTree: () => any[];

  getColArray: () => any[];

  onValueChange:(i, v) => any;

  render() {
    const props = this.props;
    const { prefixCls, pickerPrefixCls, className } = props;
    const value = this.state.value;
    const childrenTree = this.getChildrenTree();
    const cols = this.getColArray().map((v, i) => {
      return (<div key={i} className={`${prefixCls}-main-item`}>
        <Picker
          prefixCls={pickerPrefixCls}
          selectedValue={value[i]}
          onValueChange={this.onValueChange.bind(this, i)}
        >
          {childrenTree[i] || []}
        </Picker>
      </div>);
    });
    return (<div className={classnames(className, prefixCls)}>
      {cols}
    </div>);
  }
}

reactMixin.onClass(Cascader, CascaderMixin);
