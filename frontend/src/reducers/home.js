import { getJobs, deleteSingleJob } from '../api/jobs';

export const START_LOAD_HOME = 'app/home/START_LOAD_HOME';
export const LOAD_HOME_SUCCESS = 'app/home/LOAD_HOME_SUCCESS';
export const LOAD_HOME_FAIL = 'app/home/LOAD_HOME_FAIL';

export const START_DELETE_JOB = 'app/job/START_DELETE_JOB';
export const DELETE_JOB_SUCCESS = 'app/job/DELETE_JOB_SUCCESS';
export const DELETE_JOB_FAIL = 'app/job/DELETE_JOB_FAIL';

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: '',
};

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOAD_HOME:
      return {
        ...state,
        loading: true,
        isError: false,
        errors: ''
      };
    case LOAD_HOME_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ''
      };
    case LOAD_HOME_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        isError: true,
        errors: action.errors
      };
    default:
      return state;
  }
};

export const startLoadHome = () => {
  return {
    type: START_LOAD_HOME,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const loadHomeSuccess = (data) => {
  return {
    type: LOAD_HOME_SUCCESS,
    data,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const loadHomeFail = (errors) => {
  return {
    type: LOAD_HOME_FAIL,
    data : [],
    loading: false,
    isError: true,
    errors
  };
};

export const loadHomeAPI = () => {
  return dispatch => {
    dispatch(startLoadHome());
    getJobs()
      .then(res => {
        return res.json();
      })
      .then(res => {
        const data = res;
        dispatch(loadHomeSuccess(data));
      })
      .catch((err) => {
        loadHomeFail(err);
      });
  };
};

export const startDeleteJob = () => {
  return {
    type: START_DELETE_JOB,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const deleteJobSuccess = () => {
  return {
    type: DELETE_JOB_SUCCESS,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const deleteJobFail = (errors) => {
  return {
    type: DELETE_JOB_FAIL,
    loading: false,
    isError: true,
    errors
  };
};

export const deleteJobAPI = (id) => {
  return dispatch => {
    dispatch(startDeleteJob());
    deleteSingleJob(id)
      .then(res => {

        // test
        console.log('res1');
        console.log(res);

        return res.json();
      })
      .then(res => {
        dispatch(deleteJobSuccess());
        dispatch(startLoadHome());

        getJobs()
          .then(resJobs => {
            return resJobs.json();
          })
          .then(resJobs => {
            dispatch(loadHomeSuccess(resJobs));
          })
          .catch((err) => {
            loadHomeFail(err);
          });
      })
      .catch((err) => {
        deleteJobFail('delete job fail');
      });
  };
};
