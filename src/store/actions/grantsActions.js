import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const GET_GRANTS_START = "GET_GRANTS_START";
export const GET_GRANTS_SUCCESS = "GET_GRANTS_SUCCESS";
export const GET_GRANTS_FAILURE = "GET_GRANTS_FAILURE";

export const POST_GRANTS_START = "POST_GRANTS_START";
export const POST_GRANTS_SUCCESS = "POST_GRANTS_SUCCESS";
export const POST_GRANTS_FAILURE = "POST_GRANTS_FAILURE";

export const PUT_GRANTS_START = "PUT_GRANTS_START";
export const PUT_GRANTS_SUCCESS = "PUT_GRANTS_SUCCESS";
export const PUT_GRANTS_FAILURE = "PUT_GRANTS_FAILURE";

export const DELETE_GRANTS_START = "DELETE_GRANTS_START";
export const DELETE_GRANTS_SUCCESS = "DELETE_GRANTS_SUCCESS";
export const DELETE_GRANTS_FAILURE = "DELETE_GRANTS_FAILURE";
  
export const getGrants = () => (dispatch) => {
  dispatch({ type: GET_GRANTS_START });
  axiosWithAuth()
    .get("/grants/")
    .then((res) => {
      dispatch({ type: GET_GRANTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_GRANTS_FAILURE, payload: { error: err.message } });
    });
};

export const getGrantsByApplicantId = (id) => (dispatch) => {
  dispatch({ type: GET_GRANTS_START });

  axiosWithAuth()
    .get(`grants/user/${id}`)
    .then((res) => {
      dispatch({
        type: GET_GRANTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_GRANTS_FAILURE,
        payload: { error: err.message },
      });
    });
};

/* MAY NEED TO BE REFACTORED TO POST TO A PARTICULAR USER */
// applicant_profile_id = profile:id (not profile:applicant_id) //
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
      console.log(res)
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

export const deleteGrant = (id) => (dispatch) => {
  dispatch({ type: DELETE_GRANTS_START, payload: id });

  axiosWithAuth()
    .delete(`/grants/${id}`)
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
