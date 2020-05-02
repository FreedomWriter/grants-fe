import {
  COLLEGES_GET_START,
  COLLEGES_GET_SUCCESS,
  COLLEGES_GET_FAILURE,
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

    default:
      return state;
  }
};

export default collegesReducer;
