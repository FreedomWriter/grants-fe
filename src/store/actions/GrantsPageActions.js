// import { axiosWithAuth } from "../../utils/axiosWithAuth";

// ================DON'T NEED THIS STUFF (when BE is up)================
import axios from "axios";
import { grantDetails } from "../../store/dummyData/data.jsx";

export const GET_GRANTS_START = "GET_GRANTS_START";
export const GET_GRANTS_SUCCESS = "GET_GRANTS_SUCCESS";
export const GET_GRANTS_FAILURE = "GET_GRANTS_FAILURE";

export const POST_GRANTS_START = "POST_GRANTS_START";
export const POST_GRANTS_SUCCESS = "POST_GRANTS_SUCCESS";
export const POST_GRANTS_FAILURE = "POST_GRANTS_FAILURE";

export const PUT_GRANTS_START = "GET_PROFILE_START";
export const PUT_GRANTS_SUCCESS = "GET_PROFILE_SUCCESS";
export const PUT_GRANTS_FAILURE = "GET_PROFILE_FAILURE";

//==================UNCOMMENT THE SECTION BELOW===============================
/*
const apiBase = 'https://<>.herokuapp.com/api'
const userInfo = `${apiBase}/userInfo`;
const grantsInfo = `${apiBase}/grantsInfo`;
export const getGrantsInfo = (info) => (dispatch) => {
  dispatch({ type: GET_GRANTS_START });
  axiosWithAuth()
    .get(`${grantsInfo}`)
    .then((res) => {
      console.log("getGrantsInfo>res: ", res);
      dispatch({ type: GET_GRANTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("getGrantsInfo>err: ", err);
      dispatch({ type: GET_GRANTS_FAILURE, payload: { error: err.message } });
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
  dispatch({ type: GET_GRANTS_START });
  // axiosWithAuth()
  axios
    .get(`${grantsInfo}`)
    .then((res) => {
      // console.log("getGrantsInfo>res: ", res);
      // console.log("getGrantsInfo>info: ", info);
      dispatch({
        type: GET_GRANTS_SUCCESS,
        payload: grantDetails.openGrants,
      });
    })
    .catch((err) => {
      console.log("getGrantsInfo>err: ", err);
      dispatch({ type: GET_GRANTS_FAILURE, payload: { error: err.message } });
    });
};
//==============REMOVE ABOVE ONCE BACKEND IS WORKING================
//
// export const postApplicantGgrants = (value) => (dispatch) => {
//   dispatch({ type: POST_GRANTS_START });
//   axiosWithAuth()
//     .post(/* insert api url here */)
//     .then((res) => {
//       dispatch({
//         type: POST_GRANTS_SUCCESS,
//         payload: value,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: POST_GRANTS_FAILURE,
//         payload: { error: err.message },
//       });
//     });
// };

// export const getApplicantGrants = (id) => (dispatch) => {
//   dispatch({ type: PUT_GRANTS_START });

//   axiosWithAuth()
//     .get(/* insert api url here */)
//     .then((res) => {
//       dispatch({
//         type: PUT_GRANTS_SUCCESS,
//         payload: "res.data",
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: PUT_GRANTS_FAILURE,
//         payload: { error: err.message },
//       });
//     });
// };
