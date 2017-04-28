const expect = require('expect.js');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-dom/test-utils');
const Simulate = TestUtils.Simulate;
const Cascader = require('../src/Cascader');
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
        const cascader = <Cascader data={globalData} />;
        return (
          <PopCascader ref="pop" cascader={cascader}>
            <button ref="button">open</button>
          </PopCascader>
        );
      },
    });
    instance = ReactDOM.render(<Ins />, div);
    Simulate.click(ReactDOM.findDOMNode(instance.refs.button));
    expect(instance.refs.pop.state.visible).to.be(true);
    expect(instance.refs.pop.cascader.props.cols).to.be(3);
  });

  it('should display specific cols', () => {
    const cascader = <Cascader data={globalData} cols={4} />;
    instance = ReactDOM.render(
      <PopCascader visible cascader={cascader} />,
    div);
    expect(instance.cascader.props.cols).to.be(4);
  });
});
