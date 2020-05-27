import history from "../history";
import { SERVER_PREFIX } from "../config";
import attachHeaders from "./attachHeaders";

const sendFile = (user, files, successCallback) => {
  const formData = new FormData();
  for (const [name, file] of Object.entries(files)) {
    formData.append(name, file);
  }
  const url = `${SERVER_PREFIX}/user/${user.id}`;
  const xmlHttpRequest =  new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(xmlHttpRequest.responseText);
      successCallback(response);
    }
  };
  xmlHttpRequest.open('PATCH', attachHeaders(url, user));
  xmlHttpRequest.send(formData);
}

export default sendFile;