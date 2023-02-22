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

export async function fetchSubscribers(userId) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/subscribers`;
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

export async function fetchDeleteSubscribers(userId, subscribersData) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/subscribers`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subscribersData),
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);

  return res.status;
}
