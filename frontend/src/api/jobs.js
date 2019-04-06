import Config from '../config';

export const getJobs = () => {
  /* eslint-disable no-undef */
  return fetch(Config.jobUrl, {
    method: 'GET'
  });
};

export const createSingleJob = (item) => {
  const body = `title=${item.title}&description=${item.description}&location=${item.location}`;
  return fetch(Config.createJobUrl, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
    }),
    body: body
  });
};

export const deleteSingleJob = (id) => {
  /* eslint-disable no-undef */
  return fetch(Config.deleteJobUrl + '/' + id, {
    method: 'GET'
  });
};

