import {
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  GET_GRANTS_INFO_START,
  GET_GRANTS_INFO_SUCCESS,
  GET_GRANTS_INFO_FAIL,
} from "../actions/HomepageActions.js";

const initialState = {
  error: "",
  userInfo: {},
  grantsInfo: [],
  isLoadingUser: false,
  isLoadingGrants: false,
  reFetch: false,
};

export const HomePageReducer = (state = initialState, { type, payload }) => {
  // console.log("HomePageReducer:type, payload ", type, payload);
  switch (type) {
    case GET_USER_INFO_START:
      return {
        ...state,
        error: "",
        isLoadingUser: true,
      };
    case GET_USER_INFO_SUCCESS:
      console.log("getUserInfoSuccess");
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
    case GET_GRANTS_INFO_START:
      return {
        ...state,
        error: "",
        isLoadingGrants: true,
      };
    case GET_GRANTS_INFO_SUCCESS:
      return {
        ...state,
        error: "",
        grantsInfo: payload,
        isLoadingGrants: false,
      };
    case GET_GRANTS_INFO_FAIL:
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
