import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const LOGIN_POST_START = "LOGIN_POST_START";
export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
export const LOGIN_POST_FAILURE = "LOGIN_POST_FAILURE";

export const REGISTER_POST_START = "REGISTER_POST_START";
export const REGISTER_POST_SUCCESS = "REGISTER_POST_SUCCESS";
export const REGISTER_POST_FAILURE = "REGISTER_POST_FAILURE";

export const LOGOUT = "LOGOUT";

export const postLogin = (value) => (dispatch) => {
  return axiosWithAuth()
    .post(`auth/login`, value)
    .then((res) => console.log({ res }))
    .catch((err) => console.log({ err }));
};

export const postRegister = (value) => async (dispatch) => {
  return axiosWithAuth()
    .post(`auth/register`, value)
    .then((res) => console.log({ res }))
    .catch((err) => console.log({ err }));
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
