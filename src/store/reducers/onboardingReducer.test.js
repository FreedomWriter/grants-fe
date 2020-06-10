import reducer from "./onboardingReducer";
import * as types from "../actions/onboardingActions";

const action = {
  payload: {
    workHistory: [],
    error: "Test Error",
  },
};

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    workHistory: [],
    isLoading: false,
  });
});

test("should handle APPLICANT_ONBOARDING_POST_START", () => {
  expect(
    reducer(undefined, {
      type: types.APPLICANT_ONBOARDING_POST_START,
    })
  ).toEqual({
    workHistory: [],
    isLoading: true,
  });
});

test("should handle APPLICANT_ONBOARDING_POST_SUCCESS", () => {
  expect(
    reducer(
      {},
      {
        type: types.APPLICANT_ONBOARDING_POST_SUCCESS,
        payload: action.payload.workHistory,
      }
    )
  ).toEqual({
    user: [],
    isLoading: false,
  });
});

test("should handle APPLICANT_ONBOARDING_POST_FAILURE", () => {
  expect(
    reducer(undefined, {
      type: types.APPLICANT_ONBOARDING_POST_FAILURE,
      payload: action.payload.error,
    })
  ).toEqual({
    workHistory: [],
    isLoading: false,
    error: "Test Error",
  });
});
test("should handle WRITER_ONBOARDING_POST_START", () => {
  expect(
    reducer(undefined, {
      type: types.WRITER_ONBOARDING_POST_START,
    })
  ).toEqual({
    workHistory: [],
    isLoading: true,
  });
});

test("should handle WRITER_ONBOARDING_POST_SUCCESS", () => {
  expect(
    reducer(undefined, {
      type: types.WRITER_ONBOARDING_POST_SUCCESS,
    })
  ).toEqual({
    workHistory: [],
    isLoading: false,
  });
});

test("should handle WRITER_ONBOARDING_POST_FAILURE", () => {
  expect(
    reducer(undefined, {
      type: types.WRITER_ONBOARDING_POST_FAILURE,
      payload: action.payload.error,
    })
  ).toEqual({
    workHistory: [],
    isLoading: false,
    error: "Test Error",
  });
});
