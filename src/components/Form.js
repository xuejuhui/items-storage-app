import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { handleSubmit , handleUpdate } from "../actions/postsAction";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: null,
        title: "",
        description: ""
      }
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.item !== this.state.item) {
      return true;
    }
    if (nextProps.handleSubmit !== this.props.handleSubmit) {
      return true;
    }
    return false;
  }
  componentWillReceiveProps(nextProps) {
    nextProps.isEditing ? this.setState({ item: nextProps.editToDo }) : console.log('hi')
  }
  handleTitleChange = e => {
    this.setState({
      item: {
        ...this.state.item,
        title: e.target.value
      }
    });
  };
  handleDescriptionChange = e => {
    this.setState({
      item: {
        ...this.state.item,
        description: e.target.value
      }
    });
  };
  handleFormSubmit = (submitText, id) => e => {
    const { item } = this.state
    e.preventDefault();
    submitText === "Create" ? this.props.handleSubmit(item) : this.props.handleUpdate(id, item)
    this.setState({
      item: {
        id: null,
        title: "",
        description: ""
      }
    });

  }
  render() {
    // const formStyle = {float:'right'}
    const { item: {_id} } = this.state
    const submitText = _id ? "Update" : "Create"
    return (
      <div >
        <form
          onSubmit={this.handleFormSubmit(submitText, _id)}
        >
          <ControlLabel>Title</ControlLabel>
          <FormControl
            name="title"
            type="text"
            label="Text"
            placeholder="Enter text"
            value={this.state.item.title}
            onChange={this.handleTitleChange}
          />
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="textarea"
              name="description"
              value={this.state.item.description}
              onChange={this.handleDescriptionChange}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}
// const mapDispatchToProps = (dispatch)=>{
//   return {
//     handleSubmit:(item)=> dispatch(handleSubmit(item))
//   }
// }
function mapStateToProps(state, ownProps) {
  return {
    editToDo: state.editToDo,
  }
}

export default connect(
  mapStateToProps,
  { handleSubmit, handleUpdate }
)(Form);
