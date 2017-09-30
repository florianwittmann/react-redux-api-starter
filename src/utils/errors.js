export const parseError = error =>
  (error.response && error.response.data && error.response.data.error
    ? error.response.data.error
    : "Unknown error");

export const parseLoginError = error =>
  (error.response && error.response.status === 401
    ? "Bad Login Info"
    : "Unknown error");
