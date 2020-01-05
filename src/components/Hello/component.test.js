import React from 'react';
import Hello from './component';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { shallow, mount} from "enzyme";
let container = null;
const mockName = 'mockName'

beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement("div")
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders learn react link', () => {
  // render Hello
  act(() => {
    render(<Hello name={mockName} />, container);
  });
  
  // 测试props能否渲染
  const label = container.querySelector('.hello');
  expect(label.textContent).toBe(`hello ${mockName}`);  

  // 模拟测试button
  const button = container.querySelector('button');
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label.textContent).toBe('hello Awesome');
});

test('should ', () => {
  const hello = shallow(<Hello name={mockName}/>)
  expect(hello.find('.hello')).toHaveLength(2);

  expect(hello.contains(<div className="unique" />)).toBeTruthy();

  hello
  .find('button')
  .at(0)
  .simulate('click')
  expect(hello.find('.hello').first().text()).toBe('hello Awesome')
  hello.find('.hello').forEach(node => {
    expect(node.text()).toBe('hello Awesome')
    expect(node.type()).toBe('div')
  })

  expect(hello.find('button').at(0).type()).toBe('button');

  const wrapper = shallow((
    <div>
      <div className="foo qoo" />
      <div className="foo boo" />
      <div className="foo hoo" />
    </div>
  ));
  
  expect(wrapper.find('.foo').some('.hoo')).toBe(true);
  expect(wrapper.find('.foo').some('.bar')).toBe(false);
  expect(wrapper.find('.foo').someWhere((n) => n.hasClass('qoo'))).toBe(true);
  
  expect(wrapper.find('.foo').every('.foo')).toBe(true);
  expect(wrapper.find('.foo').every('.boo')).toBe(false);
  expect(wrapper.find('.foo').everyWhere((n) => n.hasClass('bar'))).toBe(false);
  
});

test('should ', () => {
  const wrapper = shallow(<div><b>important</b></div>);
  expect(wrapper.text()).toContain('tant');

});


test('should ', () => {
  const wrapper = mount(<Hello name={mockName} />)
  expect(wrapper.find({className: 'hello'})).toHaveLength(2);
});





