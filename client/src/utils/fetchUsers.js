import attachHeaders from "./attachHeaders";
import { SERVER_PREFIX } from "../config";

const fetchUsers = (userData, query) => {
  return new Promise((resolve, reject) => {
    const url = `${SERVER_PREFIX}/api/users/fetch`;
    fetch(attachHeaders(url, userData, {query})).then(response => 
      response.json()
    ).then(data => {
      resolve(data.map(user => {
        return {username: user.username, id: parseInt(user.id)}
      }));
    });
  });
}

export default fetchUsers;