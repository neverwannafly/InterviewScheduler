import { SERVER_PREFIX } from "../../config"
import attachHeaders from "../../utils/attachHeaders";
import history from "../../history";

export const createInterview = async (body, user) => {
  const url = `${SERVER_PREFIX}/interviews`;
  const response = await fetch(attachHeaders(url, user), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  if (data.success) {
    history.push('/interviews');
  }
  console.log(data);
}

export const updateInterview = async (body, user, interviewid) => {
  const url = `${SERVER_PREFIX}/interviews/${interviewid}`;
  const response = await fetch(attachHeaders(url, user), {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  if (data.success) {
    history.push('/interviews');
  }
  console.log(data);
}