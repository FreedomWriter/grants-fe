import {
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  GET_GRANTS_START,
  GET_GRANTS_SUCCESS,
  GET_GRANTS_FAILURE,
} from "../actions/HomepageActions.js";

const initialState = {
  error: "",
  userInfo: {},
  grants: [],
  isLoadingUser: false,
  isLoadingGrants: false,
  reFetch: false,
};

export const HomePageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_INFO_START:
      return {
        ...state,
        error: "",
        isLoadingUser: true,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        error: "",
        userInfo: payload,
        isLoadingUser: false,
      };
    case GET_USER_INFO_FAIL:
      return {
        ...state,
        error: payload,
        isLoadingUser: false,
      };
    case GET_GRANTS_START:
      return {
        ...state,
        error: "",
        isLoadingGrants: true,
      };
    case GET_GRANTS_SUCCESS:
      return {
        ...state,
        error: "",
        grants: payload,
        isLoadingGrants: false,
      };
    case GET_GRANTS_FAILURE:
      return {
        ...state,
        error: payload,
        isLoadingGrants: false,
      };
    default:
      return state;
  }
};

export default HomePageReducer;
