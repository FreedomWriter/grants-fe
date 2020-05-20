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

// const  = render(<Homepage />);

// console.log("Homepage.test.js>render: ", result);

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
    // const renderRes = render(<Homepage />);
    // console.log("Homepage>renderTest: ", renderRes);
    //
    expect(true).toBeTruthy();
  });
});
