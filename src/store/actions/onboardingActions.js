// import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const APPLICANT_ONBOARDING_POST_START =
  "APPLICANT_ONBOARDING_POST_START";
export const APPLICANT_ONBOARDING_POST_SUCCESS =
  "APPLICANT_ONBOARDING_POST_SUCCESS";
export const APPLICANT_ONBOARDING_POST_FAILURE =
  "APPLICANT_ONBOARDING_POST_FAILURE";

export const WRITER_ONBOARDING_POST_START = "WRITER_ONBOARDING_POST_START";
export const WRITER_ONBOARDING_POST_SUCCESS = "WRITER_ONBOARDING_POST_SUCCESS";
export const WRITER_ONBOARDING_POST_FAILURE = "WRITER_ONBOARDING_POST_FAILURE";

export const GET_PROFILEINFO_START = "GET_PROFILEINFO_START";
export const GET_PROFILEINFO_SUCCESS = "GET_PROFILEINFO_SUCCESS";
export const GET_PROFILEINFO_ERROR = "GET_PROFILEINFO_ERROR";

export const postApplicantOnboarding = (value) => (dispatch) => {
  dispatch({ type: APPLICANT_ONBOARDING_POST_START });
  //   return axiosWithAuth()
  //     .post(`/ENDPOINT TBD`, value)
  //     .then((res) => {
  dispatch({
    type: APPLICANT_ONBOARDING_POST_SUCCESS,
    payload: value,
  });
  // })
  // .catch((err) => {
  // dispatch({
  //   type: APPLICANT_ONBOARDING_POST_FAILURE,
  //   payload: { error: err.message },
  // });
  // });
};

export const postWriterOboarding = (value) => async (dispatch) => {
  dispatch({ type: WRITER_ONBOARDING_POST_START });
  // return axiosWithAuth()
  //   .post(`/ENDPOINT TBD`, value)
  //   .then((res) => {
  dispatch({
    type: WRITER_ONBOARDING_POST_SUCCESS,
    payload: value,
  });
  // })
  // .catch((err) => {
  //   dispatch({
  //     type: WRITER_ONBOARDING_POST_FAILURE,
  //     payload: { error: err.message },
  //   });
  // });
};

export const getProfileInfo = (applicant_id) => (dispatch) => {
  dispatch({ type: GET_PROFILEINFO_START });

  // axiosWithAuth()
  //   .get(/* insert api url here */)
  //   .then((res) => {
  dispatch({
    type: GET_PROFILEINFO_SUCCESS,
    payload: applicant_id,
  });
  // })
  // .catch((err) => {
  //   dispatch({
  //   type: GET_PROFILE_ERROR,
  //   payload: "Cannot load profile information"
  //   });
  // });
};
