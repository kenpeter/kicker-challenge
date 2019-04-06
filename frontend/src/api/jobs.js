import Config from '../config';

const getJobs = () => {
  /* eslint-disable no-undef */
  return fetch(Config.jobUrl, {
    method: 'GET'
  });
};

export default getJobs;
