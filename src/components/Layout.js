import React, { Component } from "react";
import Form from "./Form.js";
import NavBar from "./NavBar.js";
import Display from "./Display.js";

class Layout extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isEditing: false };
  }
  handleUpdateForm = () => {
    this.setState({isEditing:!this.state.isEditing})
  };
  render() {
    return (
      <div>
        <NavBar />
        <Form />
        <Display handleUpdateForm = {this.handleUpdateForm} isEditing = {this.state.isEditing}/>
      </div>
    );
  }
}
export default Layout;
