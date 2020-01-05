import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import User from "./component";

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

it("渲染用户数据", async () => {
  const fakeUser = {
    name: "ZhuJiang",
    age: "26",
    address: "123"
  }

  render(<User user={fakeUser} />, container)

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe('我的年龄是: ' + fakeUser.age);
})