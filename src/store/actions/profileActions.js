import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const GET_PROFILE_START = "GET_PROFILE_START";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

// export const POST_GRANTS_START = "POST_GRANTS_START";
// export const POST_GRANTS_SUCCESS = "POST_GRANTS_SUCCESS";
// export const POST_GRANTS_FAILURE = "POST_GRANTS_FAILURE";

// export const PUT_GRANTS_START = "GET_PROFILE_START";
// export const PUT_GRANTS_SUCCESS = "GET_PROFILE_SUCCESS";
// export const PUT_GRANTS_FAILURE = "GET_PROFILE_FAILURE";

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
