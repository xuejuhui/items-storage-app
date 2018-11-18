import axios from 'axios';

export function handleDel (id) {
    return async dispatch =>{
        axios.delete(`http://localhost:3001/api/items/${id}`)
        dispatch({type:'HANDLE_DEL', payload:id})
    }
} 

export function handleSubmit (item){
    return async dispatch =>{
        let response = await axios.post('http://localhost:3001/api/items',item)
        dispatch({type:'HANDLE_SUBMIT', payload:response.data})
    }
}

export function fetchingData () {
    return async dispatch =>{
     dispatch(loading())
     const item = await axios.get('http://localhost:3001/api/items')
     dispatch({type:'FETCH_DATA', payload:item.data})
    }
}

export function loading () {
    return dispatch =>{
        dispatch({type:'LOADING', payload:true})
    }
}