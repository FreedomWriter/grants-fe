import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const WORK_POST_START = "WORK_POST_START";
export const WORK_POST_SUCCESS = "WORK_POST_SUCCESS";
export const WORK_POST_FAILURE = "WORK_POST_FAILURE";

export const WORK_GET_START = "WORK_GET_START";
export const WORK_GET_SUCCESS = "WORK_GET_SUCCESS";
export const WORK_GET_FAILURE = "WORK_POST_FAILURE";

export const WORK_DELETE_START = "WORK_DELETE_START";
export const WORK_DELETE_SUCCESS = "WORK_DELETE_SUCCESS";
export const WORK_DELETE_FAILURE = "WORK_DELETE_FAILURE";

export const postWorkHistory = (id, value) => (dispatch) => {
  dispatch({ type: WORK_POST_START, payload: value, id: id });

  return axiosWithAuth()
    .post(`/writers/work/${id}`, value)
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

export const getWorkHistory = () => (dispatch) => {
  dispatch({ type: WORK_GET_SUCCESS });
  //   dispatch({ type: WORK_GET_START });
  //   return axiosWithAuth()
  //     .get(`/TBD`)
  //     .then((res) => {
  //       dispatch({
  //         type: WORK_GET_SUCCESS,
  //         payload: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       dispatch({
  //         type: WORK_GET_FAILURE,
  //         payload: { error: err.message },
  //       });
  //     });
};

export const deleteWorkHistory = (value) => (dispatch) => {
  dispatch({ type: WORK_DELETE_SUCCESS, payload: value });
  //     dispatch({ type: WORK_POST_START });
  //   return axiosWithAuth()
  //     .delete(`/TBD`)
  //     .then((res) => {
  //       dispatch({
  //         type: WORK_DELETE_SUCCESS,
  //         payload: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       dispatch({
  //         type: WORK_DELETE_FAILURE,
  //         payload: { error: err.message },
  //       });
  //     });
};
