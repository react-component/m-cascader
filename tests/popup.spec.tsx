import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import TestUtils from 'react-dom/test-utils';
const Simulate = TestUtils.Simulate;
import Cascader from '../src/Cascader';
import PopCascader from '../src/Popup';
import 'rmc-picker/assets/index.css';
import globalData from '../examples/data';

describe('popup', () => {
  let instance;
  let div;
  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('should visible', () => {
    const Ins = createReactClass({
      render() {
        const cascader = <Cascader data={globalData} />;
        return (
          <PopCascader ref="pop" className="poptest" cascader={cascader}>
            <button ref="button">open</button>
          </PopCascader>
        );
      },
    });
    instance = ReactDOM.render(<Ins />, div);
    Simulate.click(ReactDOM.findDOMNode(instance.refs.button));
    expect(document.getElementsByClassName('poptest').length).to.above(0);
    expect(instance.refs.pop.props.cascader.props.cols).to.be(3);
  });

  it('should display specific cols', () => {
    const cascader = <Cascader data={globalData} cols={4} />;
    instance = ReactDOM.render(
      <PopCascader cascader={cascader} />,
    div);
    expect(instance.props.cascader.props.cols).to.be(4);
  });
});
