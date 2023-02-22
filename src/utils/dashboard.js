function getPercentHeight(val, max) {
  const LIMITED_HEIGHT = 80;

  if (max === 0) return '0';

  return `${(val / max) * LIMITED_HEIGHT}`;
}

function getDateString(parseDate) {
  const month = new Date(parseDate).getMonth() + 1;
  const date = new Date(parseDate).getDate();

  return `${month}월 ${date}일`;
}

export function getRefinedTrendData(data) {
  const today = Date.now();
  const max = Math.max(...data);
  const DAY = 86400000;
  const refinedData = data.map((item, index) => {
    return [
      String(item),
      getPercentHeight(item, max),
      getDateString(today - DAY * index),
    ];
  });

  return refinedData;
}

export function getSuccessPercentage(data) {
  const { totalSendCount, successSendCount } = data;

  if (totalSendCount === 0) return '0%';

  return `${Math.floor((successSendCount / totalSendCount) * 100)}%`;
}

export function getOpenMailPercentage(data) {
  const totalCount = data.recipients.length;

  if (totalCount === 0) return '0%';

  const openCount = data.recipients.filter(
    recipient => recipient.isEmailOpen,
  ).length;

  return `${Math.floor((openCount / totalCount) * 100)}%`;
}

export function getKoreaDateString(date) {
  const koreaDate = new Date(
    Date.parse(date) - new Date(date).getTimezoneOffset() * 60 * 1000,
  );

  return koreaDate.toLocaleString('ko-KR', { timeZone: 'UTC' });
}
