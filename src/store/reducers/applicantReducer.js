import {
  GET_PROFILEINFO_START,
  GET_PROFILEINFO_SUCCESS,
  GET_PROFILEINFO_FAILURE,
  POST_APPLICANTGRANTS_START,
  POST_APPLICANTGRANTS_SUCCESS,
  POST_APPLICANTGRANTS_FAILURE,
  GET_APPLICANTGRANTS_START,
  GET_APPLICANTGRANTS_SUCCESS,
  GET_APPLICANTGRANTS_FAILURE,
<<<<<<< HEAD
} from '../actions/ApplicantActions';
=======
} from "../actions/ApplicantActions";
>>>>>>> ed1db19b4ddc4c801383b331540793d1d94931de

const initialState = {
  grants: [],
  applicantProfileDetails: {},
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
        applicantProfileDetails: action.payload,
        isLoading: false,
      };

    case GET_PROFILEINFO_FAILURE:
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

export default applicantReducer;
