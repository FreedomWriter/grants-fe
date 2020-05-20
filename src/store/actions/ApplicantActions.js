import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const GET_PROFILEINFO_START = "GET_PROFILEINFO_START";
export const GET_PROFILEINFO_SUCCESS = "GET_PROFILEINFO_SUCCESS";
export const GET_PROFILEINFO_FAILURE = "GET_PROFILEINFO_FAILURE";

export const POST_APPLICANTGRANTS_START = "POST_APPLICANTGRANTS_START";
export const POST_APPLICANTGRANTS_SUCCESS = "POST_APPLICANTGRANTS_SUCCESS";
export const POST_APPLICANTGRANTS_FAILURE = "POST_APPLICANTGRANTS_FAILURE";

export const GET_APPLICANTGRANTS_START = "GET_PROFILEINFO_START";
export const GET_APPLICANTGRANTS_SUCCESS = "GET_PROFILEINFO_SUCCESS";
export const GET_APPLICANTGRANTS_FAILURE = "GET_PROFILEINFO_FAILURE";

export const getProfileInfo = (applicant_id) => (dispatch) => {
  dispatch({ type: GET_PROFILEINFO_START });

  axiosWithAuth()
    .get(`/applicants/${applicant_id}`)
    .then((res) => {
      console.log(res)
      dispatch({
        type: GET_PROFILEINFO_SUCCESS,
        payload: res.data.profile,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PROFILEINFO_FAILURE,
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

export const getApplicantGrants = (applicant_id) => (dispatch) => {
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
