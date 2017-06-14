import axios from 'axios';

/**
 *
 *
 * @export
 * @param {string} token
 */
export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}
