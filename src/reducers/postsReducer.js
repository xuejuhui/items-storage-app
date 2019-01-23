const initialState = {
    items: [],
    loading: false,
    isEditing: false,
    editToDo: {},
};

const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };
    switch (action.type) {
        case 'HANDLE_SUBMIT':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'HANDLE_DEL':
            return {
                ...state,
                items: state.items.filter((item) => {
                    return item._id !== action.payload
                })

            }
        case 'FETCH_DATA':
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'EDIT':
            return {
                ...state,
                isEditing: action.payload
            }
        case 'VALUE':
            return {
                ...state,
                editToDo: action.payload
            }
        case 'HANDLE_UPDATE':
            return {
                ...state,
                items: state.items.map((item) => {
                    return item._id === action.payload.item._id ? item = action.payload.item : item
                }
                )
            }
        default:
            return newState

    }



}

export default reducer