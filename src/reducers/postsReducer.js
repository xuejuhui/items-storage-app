const initialState = {
    items: [],
    loading:false,
  };

const reducer = (state=initialState, action) =>{
    const newState = {
        ...state
    };
    switch(action.type){
        case 'HANDLE_SUBMIT':
        console.log(action.payload)
        return{
            ...state,
            items: [...state.items, action.payload]
        }
        case 'HANDLE_DEL':
        return{
            ...state,
            items: state.items.filter((item)=>{
                return item._id !== action.payload
            })

        }
        case 'FETCH_DATA':
        return{
            ...state,
            items: action.payload,
            loading: false
        }
        case 'LOADING':
        return{
            ...state,
            loading:action.payload
        }
        default:
        return newState

    }



}

export default reducer