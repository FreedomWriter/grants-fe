import {
  GET_GRANTS_START,
  GET_GRANTS_SUCCESS,
  GET_GRANTS_FAILURE,
  POST_GRANTS_START,
  POST_GRANTS_SUCCESS,
  POST_GRANTS_FAILURE,
  PUT_GRANTS_START,
  PUT_GRANTS_SUCCESS,
  PUT_GRANTS_FAILURE,
} from "../actions/GrantsPageActions.js";

const initialState = {
  grants: [],
  isLoading: false,
  error: undefined,
};

export const GrantsPageReducer = (state = initialState, action) => {
  // console.log("GrantsPageReducer:type, payload ", type, payload);
  switch (action.type) {
    case GET_GRANTS_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case GET_GRANTS_SUCCESS:
      return {
        ...state,
        error: "",
        grantsInfo: action.payload,
        isLoading: false,
      };
    case GET_GRANTS_FAILURE:
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

export default GrantsPageReducer;
