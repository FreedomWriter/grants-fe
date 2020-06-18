import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FAVORITE_POST_START = "FAVORITE_POST_START";
export const FAVORITE_POST_SUCCESS = "FAVORITE_POST_SUCCESS";
export const FAVORITE_POST_FAILURE = "FAVORITE_POST_FAILURE";

export const FAVORITE_GET_START = "FAVORITE_GET_START";
export const FAVORITE_GET_SUCCESS = "FAVORITE_GET_SUCCESS";
export const FAVORITE_GET_FAILURE = "FAVORITE_POST_FAILURE";

export const FAVORITE_DELETE_START = "FAVORITE_DELETE_START";
export const FAVORITE_DELETE_SUCCESS = "FAVORITE_DELETE_SUCCESS";
export const FAVORITE_DELETE_FAILURE = "FAVORITE_DELETE_FAILURE";

export const postFavorite = (value) => (dispatch) => {
  dispatch({ type: FAVORITE_POST_SUCCESS, payload: value });
  // dispatch({ type: FAVORITE_POST_START });
  // return axiosWithAuth()
  //   .post(`/writers/${writer_id}/saved-grants/${grant_id}`)
  //   .then((res) => {
  //     dispatch({
  //       type: FAVORITE_POST_SUCCESS,
  //       payload: res.data,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch({
  //       type: FAVORITE_POST_FAILURE,
  //       payload: { error: err.message },
  //     });
  //   });
};

export const getFavorite = (writer_id) => (dispatch) => {
  dispatch({ type: FAVORITE_GET_START });
  // return axiosWithAuth()
  //   .get(`/writers/${writer_id}/saved-grants/`)
  //   .then((res) => {
  //     dispatch({
  //       type: FAVORITE_GET_SUCCESS,
  //       payload: res.data,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch({
  //       type: FAVORITE_GET_FAILURE,
  //       payload: { error: err.message },
  //     });
  //   });
};

export const deleteFavorite = (value) => (dispatch) => {
  dispatch({ type: FAVORITE_DELETE_SUCCESS, payload: value });
  //     dispatch({ type: FAVORITE_POST_START });
  //   return axiosWithAuth()
  //     .delete(`/TBD`)
  //     .then((res) => {
  //       dispatch({
  //         type: FAVORITE_DELETE_SUCCESS,
  //         payload: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       dispatch({
  //         type: FAVORITE_DELETE_FAILURE,
  //         payload: { error: err.message },
  //       });
  //     });
};
