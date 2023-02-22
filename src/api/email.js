import config from '../config';

export async function fetchRecentEmail(userId) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/email-templates?send_date=last&count=1`;
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

export async function fetchEmail(userId, emailId) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/email-templates/${emailId}`;
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

export async function fetchEmails(userId) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/email-templates`;
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

export async function fetchCreateEmail(userId) {
  const FETCH_URL = `${config.serverOrigin}/users/${userId}/email-templates`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  const res = await fetch(FETCH_URL, options);
  const data = await res.json();

  return data;
}
