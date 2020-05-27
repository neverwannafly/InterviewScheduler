import { SERVER_PREFIX } from "../../config"
import attachHeaders from "../../utils/attachHeaders";

export const createInterview = async (body, user) => {
  const url = `${SERVER_PREFIX}/interviews`;
  const response = await fetch(attachHeaders(url, user), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = response.json();
  console.log(data);
}