import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { PUT_GRANTS_FAILURE } from "./grantsActions";

export const GET_PROFILE_START = "GET_PROFILE_START";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";
export const EDIT_PROFILE_START=
"EDIT_PROFILE_START";
export const EDIT_PROFILE_SUCCESS=
"EDIT_PROFILE_SUCCESS";
export const TOGGLE_EDITING=
"TOGGLE_EDITING";
export const PUT_PROFILE_START=
"PUT_PROFILE_START";
export const PUT_PROFILE_SUCCESS=
"PUT_PROFILE_SUCCESS";
export const PUT_PROFILE_FAILURE=
"PUT_PROFILE_SUCCESS";

export const getApplicantInfo = (id) => (dispatch) => {
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

export const getWriterInfo = (id) => (dispatch) => {
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

export const toggleEditing = () => (dispatch) => {
  dispatch({
    type: TOGGLE_EDITING
  });
};

export const updateWriterProfile = (id, updatedData) => (dispatch) => {
  dispatch({ type: PUT_PROFILE_START});

  axiosWithAuth()
    .put(`/writers/${id}`, updatedData)
    .then((res) => {
      dispatch({
        type: PUT_PROFILE_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: PUT_PROFILE_FAILURE,
        payload: { error: err.message}
      });
    });
}; 

export const updateApplicantProfile = (id, updatedData) => (dispatch) => {
  dispatch({ type: PUT_PROFILE_START});

  axiosWithAuth()
    .put(`/applicants/${id}`, updatedData)
    .then((res) => {
      dispatch({
        type: PUT_PROFILE_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: PUT_PROFILE_FAILURE,
        payload: { error: err.message}
      });
    });
}; 
