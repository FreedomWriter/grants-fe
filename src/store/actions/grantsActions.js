// import { axiosWithAuth } from "../../utils/axiosWithAuth";

// ================DON'T NEED THIS STUFF (when BE is up)================
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { grantDetails } from "../dummyData/data.jsx";
import axios from "axios";

export const GET_GRANTS_START = "GET_GRANTS_START";
export const GET_GRANTS_SUCCESS = "GET_GRANTS_SUCCESS";
export const GET_GRANTS_FAILURE = "GET_GRANTS_FAILURE";

export const GET_APPLICANT_GRANTS_START = "GET_APPLICANT_GRANTS_START";
export const GET_APPLICANT_GRANTS_SUCCESS = "GET_APPLICANT_GRANTS_SUCCESS";
export const GET_APPLICANT_GRANTS_FAILURE = "GET_APPLICANT_GRANTS_FAILURE";

export const POST_GRANTS_START = "POST_GRANTS_START";
export const POST_GRANTS_SUCCESS = "POST_GRANTS_SUCCESS";
export const POST_GRANTS_FAILURE = "POST_GRANTS_FAILURE";

export const PUT_GRANTS_START = "PUT_PROFILE_START";
export const PUT_GRANTS_SUCCESS = "PUT_PROFILE_SUCCESS";
export const PUT_GRANTS_FAILURE = "PUT_PROFILE_FAILURE";

export const DELETE_GRANTS_START = "DELETE_PROFILE_START";
export const DELETE_GRANTS_SUCCESS = "DELETE_PROFILE_SUCCESS";
export const DELETE_GRANTS_FAILURE = "DELETE_PROFILE_FAILURE";

// //==================UNCOMMENT THE SECTION BELOW===============================
// /*
const apiBase = "https://<>.herokuapp.com/api";

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
// */
// //

// //
// //==============REMOVE THIS SECTION WHEN THIS TO THE CORRECT LINK=============
// // console.log(
// //   "================\n-API DUMMY FOR TESTING HOMPAGE-\n================\n",
// //   "===============\n-REMOVE SECTION WHEN BACKEND IS UP-\n================"
// // );
// const apiBase = "https://jsonplaceholder.typicode.com";
// const grantsInfo = `${apiBase}/posts`;
// //

// export const getGrantsInfo = (info) => (dispatch) => {
//   dispatch({ type: GET_GRANTS_START });
//   // axiosWithAuth()
//   axios
//     .get(`${grantsInfo}`)
//     .then((res) => {
//       // console.log("getGrantsInfo>res: ", res);
//       // console.log("getGrantsInfo>info: ", info);
//       dispatch({
//         type: GET_GRANTS_SUCCESS,
//         payload: grantDetails.openGrants,
//       });
//     })
//     .catch((err) => {
//       console.log("getGrantsInfo>err: ", err);
//       dispatch({ type: GET_GRANTS_FAILURE, payload: { error: err.message } });
//     });
// };
// //==============REMOVE ABOVE ONCE BACKEND IS WORKING================
//

export const getGrants = (id) => (dispatch) => {
  dispatch({ type: PUT_GRANTS_START });

  axiosWithAuth()
    .get(`/grants/`)
    .then((res) => {
      dispatch({
        type: PUT_GRANTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: PUT_GRANTS_FAILURE,
        payload: { error: err.message },
      });
    });
};

export const getGrantsByApplicantId = (id) => (dispatch) => {
  dispatch({ type: GET_APPLICANT_GRANTS_START });

  axiosWithAuth()
    .get(`/grants/${id}`)
    .then((res) => {
      dispatch({
        type: GET_APPLICANT_GRANTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_APPLICANT_GRANTS_FAILURE,
        payload: { error: err.message },
      });
    });
};

/* MAY NEED TO BE REFACTORED TO POST TO A PARTICULAR USER */
export const postGrants = (value) => (dispatch) => {
  dispatch({ type: POST_GRANTS_START });
  
  axiosWithAuth()
    .post(`/grants/new`, value)
    .then((res) => {
      dispatch({
        type: POST_GRANTS_SUCCESS,
        payload: value,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_GRANTS_FAILURE,
        payload: { error: err.message },
      });
    });
};

export const putGrants = (id, value) => (dispatch) => {
  dispatch({ type: PUT_GRANTS_START });

  axiosWithAuth()
    .put(`/grants/${id}`, value)
    .then((res) => {
      dispatch({
        type: PUT_GRANTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: PUT_GRANTS_FAILURE,
        payload: { error: err.message },
      });
    });
};

export const deleteGrants = (id) => (dispatch) => {
  dispatch({ type: DELETE_GRANTS_START });

  axiosWithAuth()
    .put(`/grants/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_GRANTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_GRANTS_FAILURE,
        payload: { error: err.message },
      });
    });
};
