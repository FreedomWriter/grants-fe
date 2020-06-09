import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const WORK_POST_START = "WORK_POST_START";
export const WORK_POST_SUCCESS = "WORK_POST_SUCCESS";
export const WORK_POST_FAILURE = "WORK_POST_FAILURE";

export const WORK_PUT_START = "WORK_PUT_START";
export const WORK_PUT_SUCCESS = "WORK_PUT_SUCCESS";
export const WORK_PUT_FAILURE = "WORK_PUT_FAILURE";

export const WORK_GET_START = "WORK_GET_START";
export const WORK_GET_SUCCESS = "WORK_GET_SUCCESS";
export const WORK_GET_FAILURE = "WORK_POST_FAILURE";

export const WORK_DELETE_START = "WORK_DELETE_START";
export const WORK_DELETE_SUCCESS = "WORK_DELETE_SUCCESS";
export const WORK_DELETE_FAILURE = "WORK_DELETE_FAILURE";

export const postWorkHistory = (id, value) => (dispatch) => {
  dispatch({ type: WORK_POST_START, payload: value, id: id });

  return axiosWithAuth()
    .post(`/writers/${id}/work/`, value)
    .then((res) => {
      dispatch({
        type: WORK_POST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: WORK_POST_FAILURE,
        payload: { error: err.message },
      });
    });
};

export const updateWorkHistory = (id, value) => (dispatch) => {
  dispatch({ type: WORK_PUT_START, payload: value, id: id });

  return axiosWithAuth()
    .put(`/writers/${id}/work/${value.id}/`, value)
    .then((res) => {
      dispatch({
        type: WORK_PUT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: WORK_PUT_FAILURE,
        payload: { error: err.message },
      });
    });
};

export const getWorkHistory = (writerId) => (dispatch) => {
  dispatch({ type: WORK_GET_START, payload: writerId });
  return axiosWithAuth()
    .get(`/writers/${writerId}/work/`)
    .then((res) => {
      dispatch({
        type: WORK_GET_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: WORK_GET_FAILURE,
        payload: { error: err.message },
      });
    });
};

export const deleteWorkHistory = (id, workHistoryId) => (dispatch) => {
  dispatch({ type: WORK_DELETE_START, id: id, workHistoryId: workHistoryId });
  return axiosWithAuth()
    .delete(`/writers/${id}/work/${workHistoryId}/`)
    .then((res) => {
      dispatch({
        type: WORK_DELETE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: WORK_DELETE_FAILURE,
        payload: { error: err.message },
      });
    });
};
