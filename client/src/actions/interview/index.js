import { SERVER_PREFIX } from "../../config"
import attachHeaders from "../../utils/attachHeaders";
import history from "../../history";
import { issueNotice } from "../notice/notice";
import { GREEN_NOTICE, RED_NOTICE, YELLOW_NOTICE } from "../../types/notice";

export const createInterview = (body, user) => {
  return dispatch => {
    const url = `${SERVER_PREFIX}/interviews`;
    fetch(attachHeaders(url, user), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => 
      response.json()
    ).then(data => {
      if (data.success) {
        dispatch(issueNotice('Interview Created Successfully', GREEN_NOTICE));
        history.push('/interviews');
      } else {
        dispatch(issueNotice(data.error, RED_NOTICE));
      }
    });
  }
}

export const updateInterview = (body, user, interviewid) => {
  return dispatch => {
    const url = `${SERVER_PREFIX}/interviews/${interviewid}`;
    fetch(attachHeaders(url, user), {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response =>
      response.json()
    ).then(data => {
      if (data.success) {
        dispatch(issueNotice('Interview Updated Successfully', YELLOW_NOTICE));
        history.push('/interviews');
      } else {
        dispatch(issueNotice(data.error, RED_NOTICE));
      }
    });
  }
}