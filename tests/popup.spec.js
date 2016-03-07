const expect = require('expect.js');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const Simulate = TestUtils.Simulate;

const PopCascader = require('../src/Popup');
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
    const Ins = React.createClass({
      render() {
        instance = this;
        return (
          <PopCascader data={globalData} ref="pop">
            <button ref="button">open</button>
          </PopCascader>
        );
      },
    });
    ReactDOM.render(<Ins />, div);
    Simulate.click(ReactDOM.findDOMNode(instance.refs.button));
    expect(instance.refs.pop.state.visible).to.be(true);
  });

  it('should display specific cols', () => {
    instance = ReactDOM.render(
      <PopCascader data={globalData} visible cols={3} />,
    div);
    // todo. 获取不到内部popup出来的 dom，怎么获取？
    expect(instance.getModal().props.children.props.children[1].props.cols).to.be(3);
  });
});
