import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const APPLICANT_ONBOARDING_POST_START =
  "APPLICANT_ONBOARDING_POST_START";
export const APPLICANT_ONBOARDING_POST_SUCCESS =
  "APPLICANT_ONBOARDING_POST_SUCCESS";
export const APPLICANT_ONBOARDING_POST_FAILURE =
  "APPLICANT_ONBOARDING_POST_FAILURE";

export const WRITER_ONBOARDING_POST_START = "WRITER_ONBOARDING_POST_START";
export const WRITER_ONBOARDING_POST_SUCCESS = "WRITER_ONBOARDING_POST_SUCCESS";
export const WRITER_ONBOARDING_POST_FAILURE = "WRITER_ONBOARDING_POST_FAILURE";

export const postApplicantOnboarding = (value, id) => (dispatch) => {
  dispatch({ type: APPLICANT_ONBOARDING_POST_START, payload: value });
  return axiosWithAuth()
    .put(`/applicants/${id}`, value)
    .then((res) => {
      console.log(res);
      dispatch({
        type: APPLICANT_ONBOARDING_POST_SUCCESS,
        payload: value,
      });
    })
    .catch((err) => {
      dispatch({
        type: APPLICANT_ONBOARDING_POST_FAILURE,
        payload: { error: err.message },
      });
    });
};

export const postWriterOboarding = (id, value) => async (dispatch) => {
  dispatch({ type: WRITER_ONBOARDING_POST_START });
  return axiosWithAuth()
    .put(`/writers/${id}`, value)
    .then((res) => {
      dispatch({
        type: WRITER_ONBOARDING_POST_SUCCESS,
        payload: res.status,
      });
    })
    .catch((err) => {
      dispatch({
        type: WRITER_ONBOARDING_POST_FAILURE,
        payload: { error: err.message },
      });
    });
};
