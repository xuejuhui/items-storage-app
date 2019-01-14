import React from 'react'
import Form from "./Form.js";


const Display = (props) => {
  const { item, loading, handleUpdateForm, handleDel, isEditing } = props
  if (isEditing) {
    return (
      <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button onClick={() => handleDel(item._id)}>Del</button>
              <button onClick={() => handleUpdateForm(item._id)}>Edit</button>
      </div>
    )
  }
  return (
    <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => handleDel(item._id)}>Del</button>
            <button onClick={() => handleUpdateForm(item._id)}>Edit</button>
    </div>
  )

}

export default Display



