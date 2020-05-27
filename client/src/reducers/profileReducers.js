import { GET_PROFILE, PROFILE_SUCCESS, PROFILE_FAILURE } from "../types/profile";

const initialState = {
  loading: false,
  profile: {},
  error: {},
  success: false,
}
const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PROFILE:
      return { ...state, loading: true }
    case PROFILE_SUCCESS:
      return { profile: action.payload, loading: false, error: {}, success: true }
    case PROFILE_FAILURE:
      return { profile: {}, loading: false, error: action.payload, success: false }
    default:
      return state;
  }
}

export default profileReducer;