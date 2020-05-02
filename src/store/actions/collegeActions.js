import axios from "axios";

export const COLLEGES_GET_START = "COLLEGES_GET_START";
export const COLLEGES_GET_SUCCESS = "COLLEGES_GET_SUCCESS";
export const COLLEGES_GET_FAILURE = "COLLEGES_GET_FAILURE";

export const getColleges = (value) => (dispatch) => {
  dispatch({ type: COLLEGES_GET_START });
  return axios
    .get(
      `${process.env.REACT_APP_COLLEGE_API}${value}${process.env.REACT_APP_COLLEGE_API_KEY}`
    )
    .then((res) => {
      const formatted = res.data.results.map((result) => {
        return { id: result.id, name: result["school.name"] };
      });
      dispatch({
        type: COLLEGES_GET_SUCCESS,
        payload: formatted,
      });
    })
    .catch((err) => {
      dispatch({
        type: COLLEGES_GET_FAILURE,
        payload: { error: err.message },
      });
    });
};
