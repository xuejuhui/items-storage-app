import React, { Component } from "react";
import { connect } from 'react-redux';
import Form from "./Form.js";
import NavBar from "./NavBar.js";
import Display from "./Display.js";
import { handleUpdate, handleUpdateValue } from '../actions/postsAction'

class Layout extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isEditing: false, editTodo:{} };
  }
  handleUpdateForm = (todoId) => {
    // let remainder = this.props.items.filter((item)=> item._id===todoId)[0];
    this.setState({isEditing:!this.state.isEditing})
    this.props.handleUpdateValue(todoId)

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

const mapStateToProps = (state) => {
  return {
    items: state.items,
    loading: state.loading
  }

}

// const mapDispatchToProps = (dispatch)=>{
//   return { 
//     handleDel:(id)=> dispatch(handleDel(id)),
//     // fetchingData: ()=> dispatch(fetchingData())
//   }
// }
export default connect(mapStateToProps, { handleUpdate, handleUpdateValue })(Layout)
