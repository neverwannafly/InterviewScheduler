import attachHeaders from "./attachHeaders";
import { SERVER_PREFIX } from "../config";

const fetchUsers = async (userData, query) => {
  const url = `${SERVER_PREFIX}/api/users/fetch`;
  const response = await fetch(attachHeaders(url, userData, {query}));
  const data = await response.json();
  return data.map(user => ({username: user.username, id: parseInt(user.id)}));
}

export default fetchUsers;