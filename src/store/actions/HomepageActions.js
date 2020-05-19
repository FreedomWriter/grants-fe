// import { axiosWithAuth } from "../../utils/axiosWithAuth";

// ================DON'T NEED THIS STUFF (when BE is up)================
import axios from "axios";
import {
  userDetails,
  grantDetails,
} from "../../components/homepage/dummydata/data.jsx";

export const GET_USER_INFO_START = "GET_USER_INFO_START";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL";

export const GET_GRANTS_INFO_START = "GET_GRANTS_INFO_START";
export const GET_GRANTS_INFO_SUCCESS = "GET_GRANTS_INFO_SUCCESS";
export const GET_GRANTS_INFO_FAIL = "GET_GRANTS_INFO_FAIL";

//==================UNCOMMENT THE SECTION BELOW===============================
/*
const apiBase = 'https://<>.herokuapp.com/api'
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
*/
//

//
//==============REMOVE THIS SECTION WHEN THIS TO THE CORRECT LINK=============
// console.log(
//   "================\n-API DUMMY FOR TESTING HOMPAGE-\n================\n",
//   "===============\n-REMOVE SECTION WHEN BACKEND IS UP-\n================"
// );
const apiBase = "https://jsonplaceholder.typicode.com";
const userInfo = `${apiBase}/posts`;
const grantsInfo = `${apiBase}/posts`;
//
export const getUserInfo = (info) => (dispatch) => {
  dispatch({ type: GET_USER_INFO_START });
  axios
    .get(`${userInfo}`)
    .then((res) => {
      // console.log("getUserInfo>res: ", res);
      // console.log("getUserInfo>info: ", info);
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: userDetails[1] });
    })
    .catch((err) => {
      // console.log("getUserInfo>err: ", err);
      dispatch({ type: GET_USER_INFO_FAIL, payload: { error: err.message } });
    });
};

export const getGrantsInfo = (info) => (dispatch) => {
  dispatch({ type: GET_GRANTS_INFO_START });
  // axiosWithAuth()
  axios
    .get(`${grantsInfo}`)
    .then((res) => {
      // console.log("getGrantsInfo>res: ", res);
      // console.log("getGrantsInfo>info: ", info);
      dispatch({
        type: GET_GRANTS_INFO_SUCCESS,
        payload: grantDetails.openGrants,
      });
    })
    .catch((err) => {
      console.log("getGrantsInfo>err: ", err);
      dispatch({ type: GET_GRANTS_INFO_FAIL, payload: { error: err.message } });
    });
};
//==============REMOVE ABOVE ONCE BACKEND IS WORKING================
//
