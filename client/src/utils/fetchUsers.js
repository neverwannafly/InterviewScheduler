import attachHeaders from "./attachHeaders";
import { SERVER_PREFIX } from "../config";

const fetchUsers = async (userData, query) => {
  const url = `${SERVER_PREFIX}/api/users/fetch`;
  const response = await fetch(attachHeaders(url, userData, {query}));
  const data = await response.json();
  console.log(data.map(user => ({name: user.username, id: user.id})));
  return data.map(user => ({name: user.username, id: user.id}));
}

export default fetchUsers;