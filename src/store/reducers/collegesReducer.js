import {
  COLLEGES_GET_START,
  COLLEGES_GET_SUCCESS,
  COLLEGES_GET_FAILURE,
  CLEAR_COLLEGE_LIST,
} from "../actions/collegeActions";

const initialState = {
  colleges: [],
  isLoading: false,
};

const collegesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLEGES_GET_START:
      return {
        ...state,
        isLoading: true,
      };
    case COLLEGES_GET_SUCCESS:
      return {
        colleges: action.payload,
        isLoading: false,
      };
    case COLLEGES_GET_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    // CLEAR_COLLEGE_LIST used to avoid making api calls
    case CLEAR_COLLEGE_LIST:
      return {
        colleges: [],
      };

    default:
      return state;
  }
};

export default collegesReducer;
