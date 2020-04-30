import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const GET_USER_INFO_START = "GET_USER_INFO_START";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL";

export const GET_GRANTS_INFO_START = "GET_GRANTS_INFO_START";
export const GET_GRANTS_INFO_SUCCESS = "GET_GRANTS_INFO_SUCCESS";
export const GET_GRANTS_INFO_FAIL = "GET_GRANTS_INFO_FAIL";

const apiBase = "www.somethingIsHere.com";
const userInfo = `${apiBase}/userInfo`;
const grantsInfo = `${apiBase}/grantsInfo`;

export const getUserInfo = (info) => (dispatch) => {
  dispatch({ type: GET_USER_INFO_START });
  axiosWithAuth()
    .get(`${userInfo}`)
    .then((res) => {
      console.log("getUserInfo>res: ", res);
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("getUserInfo>err: ", err);
      dispatch({ type: GET_USER_INFO_FAIL, payload: { error: err.message } });
    });
};

export const getGrantsInfo = (info) => (dispatch) => {
  dispatch({ type: GET_GRANTS_INFO_START });
  axiosWithAuth()
    .get(`${grantsInfo}`)
    .then((res) => {
      console.log("getGrantsInfo>res: ", res);
      dispatch({ type: GET_GRANTS_INFO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("getGrantsInfo>err: ", err);
      dispatch({ type: GET_GRANTS_INFO_FAIL, payload: { error: err.message } });
    });
};
