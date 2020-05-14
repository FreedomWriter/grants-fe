import reducer from "./onboardingReducer";
import * as types from "../actions/onboardingActions";

const action = {
  payload: {
    user: {
      bio:
        "jasdoiautoiaea ic jahv p8dsg [anb idog[a oiafgb[a8dg ar8halk ivjas dlnald g[au g[anjb [a9db8u[aih[aknbhb[ab",
      city: "Chicago",
      country: "United States",
      firstName: "Natalie",
      foundingDate: "",
      lastName: "Davis",
      org: false,
      orgName: "",
      sector: "Never Make A Profit",
      state: "Illinois",
      type: "applicant",
      website: "www.natalieldavis.com",
      zip: "60619",
    },
    error: "Test Error",
  },
};

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    user: {},
    isLoading: false,
  });
});

test("should handle APPLICANT_ONBOARDING_POST_START", () => {
  expect(
    reducer(undefined, {
      type: types.APPLICANT_ONBOARDING_POST_START,
    })
  ).toEqual({
    user: {},
    isLoading: true,
  });
});

test("should handle APPLICANT_ONBOARDING_POST_SUCCESS", () => {
  expect(
    reducer(
      {},
      {
        type: types.APPLICANT_ONBOARDING_POST_SUCCESS,
        payload: action.payload.user,
      }
    )
  ).toEqual({
    user: {
      bio:
        "jasdoiautoiaea ic jahv p8dsg [anb idog[a oiafgb[a8dg ar8halk ivjas dlnald g[au g[anjb [a9db8u[aih[aknbhb[ab",
      city: "Chicago",
      country: "United States",
      firstName: "Natalie",
      foundingDate: "",
      lastName: "Davis",
      org: false,
      orgName: "",
      sector: "Never Make A Profit",
      state: "Illinois",
      type: "applicant",
      website: "www.natalieldavis.com",
      zip: "60619",
    },
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
    user: {},
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
    user: {},
    isLoading: true,
  });
});

test("should handle WRITER_ONBOARDING_POST_SUCCESS", () => {
  expect(
    reducer(
      {},
      {
        type: types.WRITER_ONBOARDING_POST_SUCCESS,
        payload: action.payload.user,
      }
    )
  ).toEqual({
    user: {
      bio:
        "jasdoiautoiaea ic jahv p8dsg [anb idog[a oiafgb[a8dg ar8halk ivjas dlnald g[au g[anjb [a9db8u[aih[aknbhb[ab",
      city: "Chicago",
      country: "United States",
      firstName: "Natalie",
      foundingDate: "",
      lastName: "Davis",
      org: false,
      orgName: "",
      sector: "Never Make A Profit",
      state: "Illinois",
      type: "applicant",
      website: "www.natalieldavis.com",
      zip: "60619",
    },
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
    user: {},
    isLoading: false,
    error: "Test Error",
  });
});
