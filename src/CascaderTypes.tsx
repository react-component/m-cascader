export type CascaderOneValue = string|number;
export type CascaderValue = CascaderOneValue[];

export interface ICascaderDataItem {
  label: string;
  value: CascaderOneValue;
  children?: ICascaderDataItem[];
}

export interface ICascaderProps {
  defaultValue?: CascaderValue;
  value?: CascaderValue;
  onChange?: (value: CascaderValue) => void;
  data: ICascaderDataItem[];
  cols?: number;
  disabled?: boolean;
  rootNativeProps?: {};
  pickerItemStyle?: {};
  indicatorStyle?: {};
  style?: any;
  /** web only */
  prefixCls?: string;
  /** web only */
  pickerPrefixCls?: string;
  /** web only */
  className?: string;
}
