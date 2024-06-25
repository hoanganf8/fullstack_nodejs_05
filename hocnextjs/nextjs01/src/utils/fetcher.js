export const fetcher = ({ url, method = "GET", headers = {}, body = null }) => {
  const options = {
    method,
    headers,
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options).then((res) => res.json());
};
