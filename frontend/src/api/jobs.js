import Config from '../config';

export const getJobs = () => {
  /* eslint-disable no-undef */
  return fetch(Config.jobUrl, {
    method: 'GET'
  });
};

export const createSingleJob = (item) => {
  /* eslint-disable no-undef */
  return fetch(Config.createJobUrl, {
    method: 'POST'
  });
};

export const deleteSingleJob = (id) => {
  /* eslint-disable no-undef */
  return fetch(Config.deleteJobUrl + '/' + id, {
    method: 'GET'
  });
};

