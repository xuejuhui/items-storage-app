import axios from 'axios';

export function handleDel (id) {
    return dispatch =>{
        axios.delete(`/api/items/${id}`)
        dispatch({type:'HANDLE_DEL', payload:id})
    }
} 

export function handleUpdate (id, item) {
    return async dispatch =>{
        const update = await axios.put(`/api/items/${id}`,item)
        console.log(update)
        dispatch({type:'HANDLE_UPDATE', payload:update.data})
    }
}

export function handleSubmit (item){
    return async dispatch =>{
        let response = await axios.post('/api/items',item)
        dispatch({type:'HANDLE_SUBMIT', payload:response.data})
    }
}

export function fetchingData () {
    return async dispatch =>{
     dispatch(loading())
     const item = await axios.get('/api/items')
     dispatch({type:'FETCH_DATA', payload:item.data})
    }
}

export function loading () {
    return dispatch =>{
        dispatch({type:'LOADING', payload:true})
    }
}

export function handleUpdateForm (isEdit) {
    return dispatch =>{
        dispatch({type:'EDIT', payload:isEdit})
    }
}

export function handleUpdateValue (toDoId) {
    return async dispatch =>{
        const item = await axios.get('/api/items')
        const remainer = item.data.filter((item)=> item._id === toDoId)[0]
        dispatch({type:'VALUE', payload:remainer})
       }
}