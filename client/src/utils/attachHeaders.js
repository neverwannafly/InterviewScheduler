const attachHeaders = (url, userData) => {
  const params = {
    user_id: userData.userId,
    token: userData.token,
  };
  const newUrl = `${url}?${new URLSearchParams(params)}`;
  return newUrl;
}

export default attachHeaders;