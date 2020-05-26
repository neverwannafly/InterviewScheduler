const attachHeaders = (url, userData, extra={}) => {
  const params = {
    user_id: userData.id,
    token: userData.token,
  };
  const newUrl = `${url}?${new URLSearchParams(Object.assign({}, params, extra))}`;
  return newUrl;
}

export default attachHeaders;