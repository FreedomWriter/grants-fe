import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_WRITER_START = "FETCH_WRITER_START";
export const FETCH_WRITER_SUCCESS = "FETCH_WRITER_SUCCESS";
export const FETCH_WRITER_FAILURE = "FETCH_WRITER_FAILURE";

export const fetchStart = () => {
  return {
    type: FETCH_WRITER_START,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: FETCH_WRITER_SUCCESS,
    payload: data,
  };
};

export const fetchFailure = (err) => {
  return {
    type: FETCH_WRITER_FAILURE,
    payload: err,
  };
};

export const fetchWriters = (id) => async (dispatch) => {
  dispatch(fetchStart());

  const endPoint = `auth/writers/${id}`;
  try {
    const response = await axiosWithAuth().get(endPoint);
    dispatch(fetchSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(fetchFailure(err["response"].status));
    throw new Error(err);
  }
};
