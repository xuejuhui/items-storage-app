const initialState = {};

const AUTHENTICATED = 'AUTHENTICATED'
const UNAUTHENTICATED = 'UNAUTHENTICATED'
const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR'

const authReducer = (state = initialState, action) => {
  const newState = {
    ...state
  };
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };

    default:
      return newState;
  }
};

export default authReducer