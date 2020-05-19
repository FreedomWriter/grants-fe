import {
  FETCH_WRITER_START,
  FETCH_WRITER_SUCCESS,
  FETCH_WRITER_FAILURE,
} from "../actions/writerProfileAction.js";

const initialState = {
  writerProfile: {
    id: "",
    writer_id: "",
    bio: "",
    website: "",
    first_name: "",
    last_name: "",
    sector: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
  isLoading: false,
};

const writerReducer = (
  state = {
    ...initialState.writerProfile,
  },
  action
) => {
  switch (action.type) {
    case FETCH_WRITER_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_WRITER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        writerProfile: action.payload.writerProfile,
      };
    case FETCH_WRITER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default writerReducer;
