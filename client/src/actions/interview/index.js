import { SERVER_PREFIX } from "../../config"
import attachHeaders from "../../utils/attachHeaders";
import history from "../../history";

export const createInterview = (body, user) => {
  const url = `${SERVER_PREFIX}/interviews`;
  fetch(attachHeaders(url, user), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => 
    response.json
  ).then(data => {
    if (data.success) {
      history.push('/interviews');
    }
  });
}

export const updateInterview = (body, user, interviewid) => {
  const url = `${SERVER_PREFIX}/interviews/${interviewid}`;
  fetch(attachHeaders(url, user), {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response =>
    response.json
  ).then(data => {
    if (data.success) {
      history.push('/interviews');
    }
  });
}