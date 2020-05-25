import { ATTEMPT_LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, ATTEMPT_REGISTER, ATTEMPT_LOGOUT, REGISTER_FAILURE, LOGOUT_FAILURE, REGISTER_SUCCESS, LOGOUT_SUCCESS } from "../types/auth";

const initialState = {
  user: {},
  errors: {},
  loading: false,
}
const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case ATTEMPT_REGISTER:
    case ATTEMPT_LOGOUT:
    case ATTEMPT_LOGIN: 
      return {...state, loading: true};
    case REGISTER_FAILURE:
    case LOGOUT_FAILURE:
    case LOGIN_FAILURE:
      return {user: {}, errors: action.payload, loading: false};
    case REGISTER_SUCCESS:
    case LOGOUT_SUCCESS:
    case LOGIN_SUCCESS:
      return {user: action.payload, errors: {}, loading: false};
    default:
      return state;
  }
}

export default authReducer;