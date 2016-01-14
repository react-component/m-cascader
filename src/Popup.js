import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import MCascader from './MCascader';
import Modal from 'rmc-modal';

function noop() {
}

const PopupPicker = React.createClass({
  propTypes: {
    onPickerChange: PropTypes.func,
    onChange: PropTypes.func,
    onDismiss: PropTypes.func,
    onVisibleChange: PropTypes.func,
    Modal: PropTypes.func,
    data: PropTypes.any,
    value: PropTypes.any,
    cols: PropTypes.number,
    children: PropTypes.element,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rmc-cascader',
      Modal: Modal,
      modalPrefix: 'rmc-modal',
      onVisibleChange: noop,
      okText: 'Ok',
      dismissText: 'Dismiss',
      style: {},
      onChange: noop,
      onDismiss: noop,
      onPickerChange: noop,
    };
  },
  getInitialState() {
    return {
      visible: false,
    };
  },
  componentDidMount() {
    this.popupContainer = document.createElement('div');
    document.body.appendChild(this.popupContainer);
  },
  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({
        visible: nextProps.visible,
      });
    }
  },
  componentDidUpdate() {
    if (this.state.visible) {
      ReactDOM.render(this.getModal(), this.popupContainer);
    } else {
      this.pickerValue = null;
      ReactDOM.unmountComponentAtNode(this.popupContainer);
    }
  },
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popupContainer);
    document.body.removeChild(this.popupContainer);
  },
  onPickerChange(value) {
    this.pickerValue = value;
    this.props.onPickerChange(value);
  },
  onChange() {
    const pickerValue = this.getPickerValue();
    this.setVisibleState(false);
    this.props.onChange(pickerValue);
  },
  onDismiss() {
    this.setVisibleState(false);
    this.props.onDismiss();
  },
  onTriggerClick() {
    this.setVisibleState(!this.state.visible);
    const child = React.Children.only(this.props.children);
    const childProps = child.props || {};
    if (childProps.onClick) {
      childProps.onClick();
    }
  },
  setVisibleState(visible) {
    if (!('visible' in this.props)) {
      this.setState({
        visible,
      });
    }
    this.props.onVisibleChange(visible);
  },
  getPickerValue() {
    const value = this.pickerValue || this.props.value;
    return value;
  },
  getModal() {
    const props = this.props;
    const {Modal: ModalClass} = this.props;
    const extraPorps = {};
    if (props.pickerPrefixCls) {
      extraPorps.pickerPrefixCls = props.pickerPrefixCls;
    }
    if (props.prefixCls) {
      extraPorps.prefixCls = props.prefixCls;
    }
    if ('cols' in props) {
      extraPorps.cols = props.cols;
    }
    return (<ModalClass className={props.className}
                        modalPrefix={props.modalPrefix}
                        visible
                        style={props.style}
                        onDismiss={this.onDismiss}>
      <div className={`${props.prefixCls}-popup-header`}>
        <div className={`${props.prefixCls}-popup-item`} onClick={this.onDismiss}>{props.dismissText}</div>
        <div className={`${props.prefixCls}-popup-item`}></div>
        <div className={`${props.prefixCls}-popup-item`} onClick={this.onChange}>{props.okText}</div>
      </div>
      <MCascader data={this.props.data} value={this.getPickerValue()}
                 onChange={this.onPickerChange} {...extraPorps} />
    </ModalClass>);
  },
  render() {
    const props = this.props;
    const children = props.children;
    const child = React.Children.only(children);
    const newChildProps = {
      onClick: this.onTriggerClick,
    };
    return React.cloneElement(child, newChildProps);
  },
});

export default PopupPicker;
