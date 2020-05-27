import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const GET_PROFILE_START = "GET_PROFILE_START";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export const POST_APPLICANTGRANTS_START = "POST_APPLICANTGRANTS_START";
export const POST_APPLICANTGRANTS_SUCCESS = "POST_APPLICANTGRANTS_SUCCESS";
export const POST_APPLICANTGRANTS_FAILURE = "POST_APPLICANTGRANTS_FAILURE";

export const GET_APPLICANTGRANTS_START = "GET_PROFILE_START";
export const GET_APPLICANTGRANTS_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_APPLICANTGRANTS_FAILURE = "GET_PROFILE_FAILURE";

export const getProfileInfo = (id) => (dispatch) => {
  dispatch({ type: GET_PROFILE_START, payload: id });

  axiosWithAuth()
    .get(`/applicants/${id}`)
    .then((res) => {
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: res.data.profile,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PROFILE_FAILURE,
        payload: "Cannot load profile information",
      });
    });
};

export const getApplicantInfo = (id) => (dispatch) => {
  dispatch({ type: GET_PROFILE_START, payload: id });

  axiosWithAuth()
    .get(`/writers/${id}`)
    .then((res) => {
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: res.data.profile,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PROFILE_FAILURE,
        payload: "Cannot load profile information",
      });
    });
};

export const postApplicantGgrants = (value) => (dispatch) => {
  dispatch({ type: POST_APPLICANTGRANTS_START });
  axiosWithAuth()
    .post(/* insert api url here */)
    .then((res) => {
      dispatch({
        type: POST_APPLICANTGRANTS_SUCCESS,
        payload: value,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_APPLICANTGRANTS_FAILURE,
        payload: { error: err.message },
      });
    });
};

export const getApplicantGrants = (id) => (dispatch) => {
  dispatch({ type: GET_APPLICANTGRANTS_START });

  axiosWithAuth()
    .get(/* insert api url here */)
    .then((res) => {
      dispatch({
        type: GET_APPLICANTGRANTS_SUCCESS,
        payload: "res.data",
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_APPLICANTGRANTS_FAILURE,
        payload: { error: err.message },
      });
    });
};
