import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const APPLICANT_ONBOARDING_START = "APPLICANT_ONBOARDING_START";
export const APPLICANT_ONBOARDING_SUCCESS = "APPLICANT_ONBOARDING_SUCCESS";
export const APPLICANT_ONBOARDING_FAILURE = "APPLICANT_ONBOARDING_FAILURE";

export const REGISTER_POST_START = "REGISTER_POST_START";
export const REGISTER_POST_SUCCESS = "REGISTER_POST_SUCCESS";
export const REGISTER_POST_FAILURE = "REGISTER_POST_FAILURE";

export const LOGOUT = "LOGOUT";

export const postApplicantOnboarding = (value) => (dispatch) => {
  dispatch({ type: APPLICANT_ONBOARDING_START });
  //   return axiosWithAuth()
  //     .post(`/ENDPOINT TBD`, value)
  //     .then((res) => {
  dispatch({
    type: APPLICANT_ONBOARDING_SUCCESS,
    payload: value,
  });
  // })
  // .catch((err) => {
  // dispatch({
  //   type: APPLICANT_ONBOARDING_FAILURE,
  //   payload: { error: err.message },
  // });
  // });
};

export const postRegister = (value) => async (dispatch) => {
  dispatch({ type: REGISTER_POST_START });
  return axiosWithAuth()
    .post(`/auth/register`, value)
    .then((res) => {
      dispatch({
        type: REGISTER_POST_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_POST_FAILURE,
        payload: { error: err.message },
      });
    });
};
