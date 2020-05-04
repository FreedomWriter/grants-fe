import axios from "axios";

export const COLLEGES_GET_START = "COLLEGES_GET_START";
export const COLLEGES_GET_SUCCESS = "COLLEGES_GET_SUCCESS";
export const COLLEGES_GET_FAILURE = "COLLEGES_GET_FAILURE";

export const CLEAR_COLLEGE_LIST = "CLEAR_COLLEGE_LIST";

export const getColleges = (value) => (dispatch) => {
  console.log({ value });
  dispatch({ type: COLLEGES_GET_START, payload: value });
  // //FAKE RETURN TO AVOID API CALLS
  // dispatch({
  //   type: COLLEGES_GET_SUCCESS,
  //   payload: [{ id: 102377, name: "Tuskegee University" }],
  // });

  /* *********************** AXIOS COMMENTED OUT TO AVOID API CALLS DURING DEVELPMENT *********************** */

  return axios
    .get(
      `${process.env.REACT_APP_COLLEGE_API}${value}${process.env.REACT_APP_COLLEGE_API_QUERY}${process.env.REACT_APP_COLLEGE_API_KEY}`
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

export const clearCollegeList = () => (dispatch) => {
  dispatch({
    type: CLEAR_COLLEGE_LIST,
  });
};
