import config from '../config';

export async function fetchSubscriberTrend(userId) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/subscribers/trend`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);
  const data = await res.json();

  return data;
}
