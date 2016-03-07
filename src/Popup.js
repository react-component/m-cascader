import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MCascader from './MCascader';
import Modal from 'rmc-modal';
import { getDefaultValue, COLS, addEventListener, contains } from './utils';


function noop() {
}

const PopupPicker = React.createClass({
  propTypes: {
    visible: PropTypes.bool,
    onPickerChange: PropTypes.func,
    onChange: PropTypes.func,
    onDismiss: PropTypes.func,
    onVisibleChange: PropTypes.func,
    Modal: PropTypes.func,
    data: PropTypes.any,
    value: PropTypes.any,
    cols: PropTypes.number,
    children: PropTypes.element,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    pickerPrefixCls: PropTypes.string,
    okText: PropTypes.string,
    dismissText: PropTypes.string,
    className: PropTypes.string,
    modalPrefix: PropTypes.string,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rmc-cascader',
      Modal,
      modalPrefix: 'rmc-modal',
      onVisibleChange: noop,
      okText: 'Ok',
      dismissText: 'Dismiss',
      style: {},
      cols: COLS,
      onChange: noop,
      onDismiss: noop,
      onPickerChange: noop,
    };
  },
  getInitialState() {
    return {
      pickerValue: null,
      visible: this.props.visible || false,
    };
  },
  componentDidMount() {
    this.popupContainer = document.createElement('div');
    document.body.appendChild(this.popupContainer);
  },
  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  },
  componentDidUpdate() {
    if (this.state.visible) {
      if (!this.onDocumentClickListener) {
        this.onDocumentClickListener = addEventListener(document, 'click', this.onDocumentClick);
      }
      ReactDOM.render(this.getModal(), this.popupContainer);
    } else {
      if (this.onDocumentClickListener) {
        this.onDocumentClickListener.remove();
        this.onDocumentClickListener = null;
      }
      this.pickerValue = null;
      ReactDOM.unmountComponentAtNode(this.popupContainer);
    }
  },
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popupContainer);
    document.body.removeChild(this.popupContainer);
  },
  onPickerChange(value) {
    this.setState({
      pickerValue: value,
    });
    this.props.onPickerChange(value);
  },
  onChange() {
    this.fireVisibleChange(false);
    const { value, cols, data } = this.props;
    this.props.onChange(getDefaultValue(data,
      this.state.pickerValue || value, cols).filter(c => !!c));
  },
  onDismiss() {
    this.fireVisibleChange(false);
    this.props.onDismiss();
  },
  onTriggerClick() {
    this.fireVisibleChange(!this.state.visible);
    const child = React.Children.only(this.props.children);
    const childProps = child.props || {};
    if (childProps.onClick) {
      childProps.onClick();
    }
  },
  onDocumentClick(e) {
    if (e.target !== this.modalContent && !contains(this.modalContent, e.target)) {
      this.fireVisibleChange(false);
    }
  },
  setVisibleState(visible) {
    this.setState({
      visible,
    });
    if (!visible) {
      this.setState({
        pickerValue: null,
      });
    }
  },
  getModal() {
    const { Modal: ModalClass, data, cols, prefixCls,
      style, pickerPrefixCls, dismissText, okText,
      className, modalPrefix, value } = this.props;
    const extraProps = {};
    if (pickerPrefixCls) {
      extraProps.pickerPrefixCls = pickerPrefixCls;
    }
    if (prefixCls) {
      extraProps.prefixCls = prefixCls;
    }
    return (<ModalClass
      className={className}
      modalPrefix={modalPrefix}
      visible
      style={style}
      onDismiss={this.onDismiss}
    >
      <div ref={this.saveModalContent}>
        <div className={`${prefixCls}-popup-header`}>
          <div className={`${prefixCls}-popup-item`} onClick={this.onDismiss}>{dismissText}</div>
          <div className={`${prefixCls}-popup-item`}/>
          <div className={`${prefixCls}-popup-item`} onClick={this.onChange}>{okText}</div>
        </div>
        <MCascader
          data={data}
          value={this.state.pickerValue || value}
          cols={cols}
          onChange={this.onPickerChange}
          {...extraProps}
        />
      </div>
    </ModalClass>);
  },
  fireVisibleChange(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  },
  saveModalContent(content) {
    this.modalContent = content;
  },
  render() {
    const props = this.props;
    const children = props.children;
    if (!children) {
      return null;
    }
    const child = React.Children.only(children);
    const newChildProps = {
      onClick: this.onTriggerClick,
    };
    return React.cloneElement(child, newChildProps);
  },
});

export default PopupPicker;
