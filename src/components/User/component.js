import React from "react";

export default function User(props) {
  let { user } = props
  return (
    <details>
      <summary>{user.name}</summary>
      <strong>我的年龄是: {user.age}</strong> 岁
    </details>
  );
}