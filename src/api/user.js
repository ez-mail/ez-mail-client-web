import config from '../config';

export async function fetchSendingInfo(userId) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/sending-info`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);
  const data = await res.json();

  return data;
}

export async function updateSendingInfo(userId, senderInfo) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/sending-info`;
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(senderInfo),
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);

  return res.status;
}

export async function fetchOrigin(userId) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/origin`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);
  const data = await res.json();

  return data;
}

export async function fetchAddOrigin(userId, origin) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/origin`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(origin),
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);

  return res.status;
}
