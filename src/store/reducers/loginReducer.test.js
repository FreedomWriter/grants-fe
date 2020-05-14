import reducer from "../reducers/loginReducer";
import * as types from "../actions/LoginActions";

const action = {
  payload: {
    id: 1,
    username: "TestUser",
    token: "testToken",
    error: "Test Error",
  },
};

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    user: "",
    isLoading: false,
  });
});
test("should handle LOGIN_POST_START", () => {
  expect(
    reducer(undefined, {
      type: types.LOGIN_POST_START,
    })
  ).toEqual({
    user: "",
    isLoading: true,
  });
});
test("should handle LOGIN_POST_SUCCESS", () => {
  expect(
    reducer(
      {},
      {
        type: types.LOGIN_POST_SUCCESS,
        payload: action.payload,
      }
    )
  ).toEqual({
    user: {
      id: 1,
      username: "TestUser",
    },
    loggedIn: true,
    isLoading: false,
  });
});
test("should handle LOGIN_POST_FAILURE", () => {
  expect(
    reducer(undefined, {
      type: types.LOGIN_POST_FAILURE,
      payload: action.payload.error,
    })
  ).toEqual({
    user: "",
    isLoading: false,
    error: "Test Error",
  });
});
test("should handle REGISTER_POST_START", () => {
  expect(
    reducer(undefined, {
      type: types.REGISTER_POST_START,
    })
  ).toEqual({
    user: "",
    isLoading: true,
  });
});
test("should handle REGISTER_POST_SUCCESS", () => {
  expect(
    reducer(
      {},
      {
        type: types.REGISTER_POST_SUCCESS,
        payload: action.payload,
      }
    )
  ).toEqual({
    user: {
      id: 1,
      username: "TestUser",
    },
    loggedIn: true,
    isLoading: false,
  });
});
test("should handle REGISTER_POST_FAILURE", () => {
  expect(
    reducer(undefined, {
      type: types.REGISTER_POST_FAILURE,
      payload: action.payload.error,
    })
  ).toEqual({
    user: "",
    isLoading: false,
    error: "Test Error",
  });
});
