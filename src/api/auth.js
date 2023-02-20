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
  };

  const res = await fetch(FETCH_URL, options);

  return res;
}

export async function requestSignUp(email, name, password) {
  console.log(email, name, password);
}
