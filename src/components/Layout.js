import React, { Component } from "react";
import Form from "./Form.js";
import NavBar from "./NavBar.js";
import Display from "./Display.js";



class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Form/>
        <Display />
      </div>
    );
  }
}
export default Layout;