import reducer from "../reducers/HomePageReducer.js";
import * as types from "../actions/HomepageActions.js";
import {
  ExpansionPanelActions,
  BottomNavigationAction,
} from "@material-ui/core";

const action = {
  payload: {
    error: "",
    userInfo: {},
    grantsInfo: [],
    isLoadingUser: false,
    isLoadingGrants: false,
    reFetch: false,
  },
  error: "Test Error",
};

// console.log("testing>action.payload: ", action.payload);

describe("HomePageReducer", () => {
  test("should return HomePage initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      ...action.payload,
    });
  });
  test("should handle GET_USER_INFO_START", () => {
    expect(
      reducer(undefined, {
        type: types.GET_USER_INFO_START,
      })
    ).toEqual({
      ...action.payload,
      isLoadingUser: true,
    });
  });
  test("should handle GET_USER_INFO_SUCCESSS", () => {
    expect(
      reducer(undefined, {
        type: types.GET_USER_INFO_SUCCESSS,
        payload: action.payload,
      })
    ).toEqual({
      ...action.payload,
      error: "",
      isLoadingUser: false,
    });
  });
  test("should handle GET_USER_INFO_FAIL", () => {
    expect(
      reducer(undefined, {
        type: types.GET_USER_INFO_FAIL,
        payload: action.error,
      })
    ).toEqual({
      ...action.payload,
      error: "Test Error",
    });
  });
  test("should handle GET_GRANTS_INFO_START", () => {
    expect(
      reducer(undefined, {
        type: types.GET_GRANTS_INFO_START,
      })
    ).toEqual({
      ...action.payload,
      isLoadingGrants: true,
    });
  });
});
