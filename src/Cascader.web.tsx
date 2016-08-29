import * as React from 'react';
import classnames from 'classnames';
import Picker from 'rmc-picker/lib/Picker.web';
import {CascaderProps, CascaderState} from './CascaderTypes';
import CascaderMixin from './CascaderMixin';

function getDataAttr(props) {
  const dataAttrs = {};
  Object.keys(props).forEach(i => {
    if (i.indexOf('data-') === 0) {
      dataAttrs[i] = props[i];
    }
  });
  return dataAttrs;
}

const Cascader = React.createClass<CascaderProps, CascaderState>({
  mixins: [CascaderMixin],

  getDefaultProps() {
    return {
      prefixCls: 'rmc-cascader',
      pickerPrefixCls: 'rmc-picker',
      data: [],
    };
  },

  render() {
    const props = this.props;
    const {prefixCls, pickerPrefixCls, className, disabled = false} = props;
    const value = this.state.value;
    const childrenTree = this.getChildrenTree();
    const cols = this.getColArray().map((v, i) => {
      return (<div key={i} className={`${prefixCls}-main-item`}>
        <Picker
          prefixCls={pickerPrefixCls}
          selectedValue={value[i]}
          onValueChange={this.onValueChange.bind(this, i) }
          disabled={disabled}
        >
          {childrenTree[i] || []}
        </Picker>
      </div>);
    });
    return (<div {...getDataAttr(this.props)} className={classnames(className, prefixCls)}>
      {cols}
    </div>);
  },
});

export default Cascader;
