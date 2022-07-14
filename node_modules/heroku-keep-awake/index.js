const moment = require('moment');
const fetch = require('node-fetch');

const isStopTime = (stopTimes) => {
  const { start, end } = stopTimes;
  const format = 'HH:mm';

  // Check if a start and end time are supplied.
  if (!start || !end) {
    console.log('WARNING: Both a start/end stop time must be defined.');
    return true;
  }

  const current = moment();
  const startTime = moment(start, format);
  const endTime = moment(end, format);

  return current.isBetween(startTime, endTime);
};

const wakeDyno = (url, options = {}) => {
  const { interval = 29, logging = true, stopTimes = {} } = options;
  const milliseconds = interval * 60000;

  setTimeout(() => {
    if (isStopTime(stopTimes)) {
      wakeDyno(url, options); // Recursively call function until not a stop time.
    } else {
      fetch(url)
        .then(() => logging && console.log('Successfully woke the dyno'))
        .catch(() => logging && console.log('Error attempting to wake the dyno'))
        .finally(() => wakeDyno(url, options));
    }
  }, milliseconds);
};

const wakeDynos = (urls, options = {}) => {
  const { interval = 29, logging = true, stopTimes = {} } = options;
  const milliseconds = interval * 60000;

  setTimeout(() => {
    if (!Array.isArray(urls)) {
      console.log('ERROR: wakeDynos() is expecting an array of urls.');
      return;
    }

    if (isStopTime(stopTimes)) {
      wakeDynos(urls, options); // Recursively call function until not a stop time.
    } else {
      const promises = urls.map((url) => fetch(url));
      Promise.all(promises)
        .then(() => logging && console.log('Successfully woke all dynos'))
        .catch(() => logging && console.log('Error attempting to wake the dynos'))
        .finally(() => wakeDynos(urls, options));
    }
  }, milliseconds);
};

module.exports = { wakeDyno, wakeDynos };
