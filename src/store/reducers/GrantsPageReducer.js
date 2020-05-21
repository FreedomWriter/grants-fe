import {
  GET_GRANTS_INFO_START,
  GET_GRANTS_INFO_SUCCESS,
  GET_GRANTS_INFO_FAIL,
} from "../actions/GrantsPageActions.js";

const initialState = {
  error: "",
  userInfo: {},
  grantsInfo: [],
  isLoadingUser: false,
  isLoadingGrants: false,
  reFetch: false,
};

export const GrantsPageReducer = (state = initialState, { type, payload }) => {
  // console.log("GrantsPageReducer:type, payload ", type, payload);
  switch (type) {
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

export default GrantsPageReducer;
