import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Users from "./component";
let container = null;

beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('should render user list', async () => {
  const userList = [{
    name: 'user1',
    age: 26
  },{
    name: 'user2',
    age: 24
  }]

  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(userList)
    })
  )

  await act(async () => {
    await render(<Users />, container)
  })


  
  
  expect(container.querySelector('.users').children.length).toBe(2);

});
