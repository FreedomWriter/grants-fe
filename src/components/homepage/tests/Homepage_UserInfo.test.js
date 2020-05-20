import React, { useState as useStateMock } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";

//
import Homepage from "../Homepage.jsx";
import { initialState as initialReducerState } from "../../../store/reducers/HomePageReducer.js";
import reducer from "../../../store/reducers/HomePageReducer.js";
import UserCardApplicant from "../userCard/UserCardApplicant.jsx";
import UserCardWriter from "../userCard/UserCardWriter.jsx";

// const  = render(<Homepage />);

// console.log("Homepage.test.js>render: ", result);

const setMockHomePage = jest.fn(function () {
  return true;
});
beforeEach(() => {
  //insert any function that is repeated by multiple tests.
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  //undo the functions done in beforeEach
  console.error.mockRestore();
});

let userMock = {};

function render(
  ui,
  {
    initialState = initialReducerState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

describe("HomePage Testing...", () => {
  test("test to return true", () => {
    expect(true).toBeTruthy();
  });
  test("Homepage renders something...", () => {
    const { container, debug } = rtlRender(
      <UserCardApplicant details={userMock} />
    );
    debug(container);
    expect(container).toBeVisible();
    // expect(true).toBeTruthy();
  });
});
