import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form.js";
import NavBar from "./NavBar.js";
import Display from "./Display.js";
import {
  handleUpdate,
  handleUpdateValue,
  handleDel
} from "../actions/postsAction";

class Layout extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isEditing: false, editTodo: {} };
  }
  handleUpdateForm = todoId => {
    // let remainder = this.props.items.filter((item)=> item._id===todoId)[0];
    this.setState({ isEditing: !this.state.isEditing });
    this.props.handleUpdateValue(todoId);
  };
  render() {
    const { isEditing } = this.state;
    const { items } = this.props;
    console.log(isEditing);
    return isEditing ? (
      <div>
        <NavBar />
        <Form />
        {items.map(item => {
          return (
            <div key={item._id}>
              <Display
                handleUpdateForm={this.handleUpdateForm}
                isEditing={this.state.isEditing}
                handleDel={this.props.handleDel}
                item={item}
              />
            </div>
          );
        })}
        <Form />
      </div>
    ) : (
      <div>
        <NavBar />
        <Form />
        {items.map(item => {
          return (
            <div key={item._id}>
              <Display
                handleUpdateForm={this.handleUpdateForm}
                isEditing={this.state.isEditing}
                handleDel={this.props.handleDel}
                item={item}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    loading: state.loading
  };
};

// const mapDispatchToProps = (dispatch)=>{
//   return {
//     handleDel:(id)=> dispatch(handleDel(id)),
//     // fetchingData: ()=> dispatch(fetchingData())
//   }
// }
export default connect(
  mapStateToProps,
  { handleUpdate, handleUpdateValue, handleDel }
)(Layout);
