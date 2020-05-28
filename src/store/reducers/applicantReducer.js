import {
  GET_PROFILEINFO_START,
  GET_PROFILEINFO_SUCCESS,
  GET_PROFILEINFO_FAILURE,
  POST_GRANTS_START,
  POST_GRANTS_SUCCESS,
  POST_GRANTS_FAILURE,
  PUT_GRANTS_START,
  PUT_GRANTS_SUCCESS,
  PUT_GRANTS_FAILURE,
} from "../actions/ApplicantActions";

const initialState = {
  grants: [],
  profileDetails: {},
  isLoading: false,
};

const applicantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILEINFO_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PROFILEINFO_SUCCESS:
      return {
        ...state,
        profileDetails: action.payload,
        isLoading: false,
      };

    case GET_PROFILEINFO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case POST_GRANTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case POST_GRANTS_SUCCESS:
      return {
        grants: [...state.grants, action.payload],
        isLoading: false,
      };

    case POST_GRANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case PUT_GRANTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case PUT_GRANTS_SUCCESS:
      return {
        grants: action.payload,
        isLoading: false,
      };

    case PUT_GRANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default applicantReducer;
