export type CascaderOneValue = string|number;
export type CascaderValue = CascaderOneValue[];

export interface CascaderDataItem {
  label: string;
  value: CascaderOneValue;
  children?: CascaderDataItem[];
} 

export interface CascaderProps {
  defaultValue?: CascaderValue;
  value?: CascaderValue;
  onChange?: (value: CascaderValue) => void;
  data: CascaderDataItem[];
  cols?: number;
}

export interface CascaderState {
  value: CascaderValue;
}
