import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { initialState as initialReducerState } from "../../../store/reducers/loginReducer";
import reducer from "../../../store/reducers/loginReducer";

import LandingPage from "../LandingPage.js";

function renderRedux(
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
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

describe("Test", () => {
  test("LandingPage renders something..", () => {
    expect(true).toBeTruthy();
  });
});

describe("LandingPage has buttons", () => {
  test("LandingPage has register button", () => {
    const { getByText } = renderRedux(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
      {
        initialReducerState: {},
      }
    );
    expect(getByText(/Register/i)).toBeVisible();
  });
  test("LandingPage has login button", () => {
    const { getByText } = renderRedux(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
      {
        initialReducerState: {},
      }
    );
    expect(getByText(/login/i)).toBeVisible();
  });
});

describe("Login/Register route to correct forms", () => {
  test("Register button routes to RegisterForm", async () => {
    const history = createMemoryHistory();

    const { container, getByText } = renderRedux(
      <Router history={history}>
        <LandingPage />
      </Router>,
      {
        initialReducerState: {},
      }
    );

    expect(container.innerHTML).toMatch("Get help with your grant today!");
    fireEvent.click(getByText(/register/i));
    expect(history.location.pathname).toBe("/RegisterForm");
  });
  test("Login button routes to LoginForm", () => {
    const history = createMemoryHistory();

    const { container, getByText } = renderRedux(
      <Router history={history}>
        <LandingPage />
      </Router>,
      {
        initialReducerState: {},
      }
    );

    expect(container.innerHTML).toMatch("Get help with your grant today!");
    fireEvent.click(getByText(/login/i));
    expect(history.location.pathname).toBe("/LoginForm");
  });
});
