import expect from 'expect.js';
// tslint:disable-next-line
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// const TestUtils = require('react-addons-test-utils');
// const Simulate = TestUtils.Simulate;

import MCascader from '../src/';
import 'rmc-picker/assets/index.css';
import globalData from '../examples/data';

describe('simple', () => {
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

  it('render to body works', () => {
    instance = ReactDOM.render(<MCascader data={globalData}/>, div);
    expect((ReactDOM as any).findDOMNode(instance).parentNode.parentNode.nodeName.toLowerCase()).to.be('body');
  });

  it('should add css class of root dom node', () => {
    instance = ReactDOM.render(
      <MCascader className="forTest" data={globalData} defaultValue={['02', '02-1', '02-1-1']}/>,
      div);
    expect(ReactDOM.findDOMNode(instance).className.indexOf('forTest') !== -1).to.be(true);
  });

  it('test onChange', (done) => {
    function cb(value) {
      expect(value[1]).to.be('02-2');
      done();
    }

    instance = ReactDOM.render(
      <MCascader data={globalData} onChange={cb} value={['02', '02-1', '02-1-1']}/>,
      div);
    instance.onValueChange(['02', '02-2'], 1);
  });

  it('test cascade effect', () => {

    instance = ReactDOM.render(
      <MCascader data={globalData} value={undefined} />,
      div);

    instance.onValueChange(['02', '01-1'], 0);

    expect(instance.state.value).to.eql(['02', '02-1', '02-1-1']);
  });
});
