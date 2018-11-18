import React from 'react'
import { connect } from 'react-redux';
import { handleDel } from '../actions/postsAction'

const Display = (props)=> {
   const {items , loading} = props
  console.log(items, loading)
  return (
    <div>
        {items.map((item)=>{
            console.log(item)
            return(
              <div key={item._id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button onClick={()=> props.handleDel(item._id)}>Del</button>
              </div>
            )
        })} 
    </div>
  )

}
const mapStateToProps = ( state )=> {
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
export default connect(mapStateToProps, { handleDel })(Display)



