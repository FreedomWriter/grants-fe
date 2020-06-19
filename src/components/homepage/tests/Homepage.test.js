import React, { useState as useStateMock } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { axe } from "jest-axe";

//
import { initialState as initialReducerState } from "../../../store/reducers/grantsReducer.js";
import reducer from "../../../store/reducers/grantsReducer.js";
import HomePage from "../Homepage.jsx";
import GrantCard from "../grantCards/GrantCard.jsx";

const setMockHomePage = jest.fn(function () {
  return true;
});
beforeEach(() => {
  //insert any function that is repeated by multiple tests.
  // useStateMock.mockImplementation((init) => [init, ])
});

afterEach(() => {
  //undo the functions done in beforeEach
});

const initialMockState = {
  grants: [],
  login: {
    usertype: "writer",
  },
  profileInfo: {
    profileDetails: [],
  },
  applicantGrants: [],
  isLoading: false,
  error: undefined,
  workHistory: [],
};

function render(
  ui,
  {
    initialState = initialMockState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

let grantMock = {
  due_date: "0000",
  grant_name: "Mock name",
  sector: "Test Sector",
  status: "open",
};
let emptyGrant = [];

describe("HomePage Testing...", () => {
  test("test to return true", () => {
    expect(true).toBeTruthy();
  });
  test("Grants won't render", () => {
    const { container } = render(<HomePage />);
    // console.log(container);
  });
  // test("GrantCard component renders ", () => {
  //   const { container } = render(<GrantCard />, grantMock);
  //   expect(container).toBeVisible();
  // });
});
