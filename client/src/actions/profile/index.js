import attachHeaders from "../../utils/attachHeaders";
import { getProfile, profileFailure, profileSuccess } from "./profile";
import { SERVER_PREFIX, NETWORK_ERROR } from "../../config";

export const retrieveProfile = (user) => {
  return async dispatch => {
    dispatch(getProfile());
    try {
      const url = `${SERVER_PREFIX}/user/${user.id}`;
      const response = await fetch(attachHeaders(url, user));
      const data = await response.json();
      console.log(data);
      if (data.success) {
        dispatch(profileSuccess({
          resume: data.resume,
        }));
      } else {
        dispatch(profileFailure(data.error));
      }
    } catch {
      dispatch(profileFailure(NETWORK_ERROR));
    }
  }
}