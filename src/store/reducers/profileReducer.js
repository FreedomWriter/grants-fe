import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  POST_APPLICANTGRANTS_START,
  POST_APPLICANTGRANTS_SUCCESS,
  POST_APPLICANTGRANTS_FAILURE,
  GET_APPLICANTGRANTS_START,
  GET_APPLICANTGRANTS_SUCCESS,
  GET_APPLICANTGRANTS_FAILURE,
} from "../actions/profileActions";

const initialState = {
  grants: [],
  profileDetails: {},
  isLoading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileDetails: action.payload,
        isLoading: false,
      };

    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case POST_APPLICANTGRANTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case POST_APPLICANTGRANTS_SUCCESS:
      return {
        grants: [...state.grants, action.payload],
        isLoading: false,
      };

    case POST_APPLICANTGRANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case GET_APPLICANTGRANTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_APPLICANTGRANTS_SUCCESS:
      return {
        grants: action.payload,
        isLoading: false,
      };

    case GET_APPLICANTGRANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
