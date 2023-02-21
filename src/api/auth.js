import config from '../config';

export async function requestLogin(email, password) {
  const userInfo = { email, password };
  const FETCH_URL = `${config.serverOrigin}/login`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);

  return res;
}

export async function requestSignUp(email, name, password) {
  const userInfo = { email, password, userName: name };
  const FETCH_URL = `${config.serverOrigin}/signup`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);

  return res.status;
}

export async function requestLogout() {
  const FETCH_URL = `${config.serverOrigin}/logout`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);

  return res;
}
