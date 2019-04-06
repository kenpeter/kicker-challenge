import { createSingleJob } from '../api/jobs';

export const START_CREATE_JOB = 'app/job/START_CREATE_JOB';
export const CREATE_JOB_SUCCESS = 'app/job/CREATE_JOB_SUCCESS';
export const CREATE_JOB_FAIL = 'app/job/CREATE_JOB_FAIL';

const initState = {
  loading: false,
  isError: false,
  errors: '',
};

export const createJobReducer = (state = initState, action) => {
  switch (action.type) {
    case START_CREATE_JOB:
      return {
        ...state,
        loading: true,
        isError: false,
        errors: ''
      };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        errors: ''
      };
    case CREATE_JOB_FAIL:
      return {
        ...state,
        loading: false,
        isError: true,
        errors: action.errors
      };
    default:
      return state;
  }
};

export const startCreateJob = () => {
  return {
    type: START_CREATE_JOB,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const createJobSuccess = () => {
  return {
    type: CREATE_JOB_SUCCESS,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const createJobFail = (errors) => {
  return {
    type: CREATE_JOB_FAIL,
    loading: false,
    isError: true,
    errors
  };
};

export const createJobAPI = (item) => {
  return dispatch => {
    dispatch(startCreateJob());
    createSingleJob(item)
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(createJobSuccess());
      })
      .catch((err) => {
        createJobFail('create job fail');
      });
  };
};
