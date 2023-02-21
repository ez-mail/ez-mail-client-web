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

export async function getEmails(userId) {
  console.log(userId);
}
