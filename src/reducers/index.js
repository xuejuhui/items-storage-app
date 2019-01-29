import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    post: postsReducer,
    auth: authReducer
})

export default rootReducer