import React from "react";
import { Link } from "react-router-dom";

export default class demoB extends React.Component {
  render() {
    return (
      <div>
        <div>B页面</div>
        <Link to="./demoA">点我啊</Link>
      </div>
    );
  }
}
