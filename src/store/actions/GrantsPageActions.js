// import { axiosWithAuth } from "../../utils/axiosWithAuth";

// ================DON'T NEED THIS STUFF (when BE is up)================
import axios from "axios";
import { grantDetails } from "../../store/dummyData/data.jsx";

export const GET_GRANTS_INFO_START = "GET_GRANTS_INFO_START";
export const GET_GRANTS_INFO_SUCCESS = "GET_GRANTS_INFO_SUCCESS";
export const GET_GRANTS_INFO_FAIL = "GET_GRANTS_INFO_FAIL";

//==================UNCOMMENT THE SECTION BELOW===============================
/*
const apiBase = 'https://<>.herokuapp.com/api'
const userInfo = `${apiBase}/userInfo`;
const grantsInfo = `${apiBase}/grantsInfo`;


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
const grantsInfo = `${apiBase}/posts`;
//

export const getGrantsInfo = (info) => (dispatch) => {
  console.log("GrantsPageActions.js>grantsInfo: ", grantDetails);
  dispatch({ type: GET_GRANTS_INFO_START });
  axios
    .get(`${grantsInfo}`)
    .then((res) => {
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
