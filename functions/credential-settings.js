const localRoute = 'http://localhost:3000';

export function wrapUrl(path) {
  let requestUrl = localRoute + '/cim/' + path;
  if (process.env.USE_LOCAL === 'false') {
    requestUrl = 'https://api.imavi.org/cim/' + path;
  }
  return requestUrl;
}
export function imaviUrl(path) {
  let requestUrl = localRoute + '/imavi/' + path;

  if (process.env.USE_LOCAL === 'false') {
    requestUrl = 'https://api.imavi.org/imavi/' + path;
  }
  return requestUrl;
}
