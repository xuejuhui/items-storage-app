import React from 'react'
import Form from "./Form.js";
import { connect } from 'react-redux';
import { handleDel } from '../actions/postsAction'
import { handleUpdate } from '../actions/postsAction'

const Display = (props) => {
  const { items, loading, handleUpdateForm, handleDel, isEditing } = props
  console.log(props.editTodo)
  if (isEditing) {
    return (
      <div>
        {items.map((item) => {

          return (
            <div key={item._id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button onClick={() => handleDel(item._id)}>Del</button>
              <button onClick={() => handleUpdateForm(item._id)}>Edit</button>

            </div>
          )
        })}
        <Form editTodo={props.editTodo}/>
      </div>
    )
  }
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => handleDel(item._id)}>Del</button>
            <button onClick={() => handleUpdateForm(item._id)}>Edit</button>
          </div>
        )
      })}
    </div>
  )

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
export default connect(mapStateToProps, { handleDel, handleUpdate })(Display)



