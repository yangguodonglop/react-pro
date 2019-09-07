import React from "react";
import { Link } from "react-router-dom";
import "./styleA.css";
import axios from 'axios';
export default class demoA extends React.Component {
    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
        .then(function (response) {
            console.log(response)
        //   _this.setState({
        //     users:response.data,
        //     isLoaded:true
        //   });
        })
        .catch(function (error) {
          console.log(error);
        //   _this.setState({
        //     isLoaded:false,
        //     error:error
        //   })
        })
      }
  handleClick(e) {
    alert("链接被点击");
  }

  render() {
    return (
      <div>
        <div className="sty1" onClick={this.handleClick}>
          A页面
        </div>
        <Link to="./demoB">点我啊</Link>
      </div>
    );
  }
}
