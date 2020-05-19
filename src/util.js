const calculateTimeDifference = (pastDate, currentDate) => {
  let diffInMilliSeconds = Math.abs(currentDate - pastDate) / 1000;

  const days = Math.floor(diffInMilliSeconds / 86400) * 24;
  diffInMilliSeconds -= days * 86400;

  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;

  const difference = hours + days;
  return difference;
};

export { calculateTimeDifference };
