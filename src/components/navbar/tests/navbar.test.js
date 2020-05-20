import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Navbar from "../Navbar";
import { initialState as initialReducerState } from "../../../store/reducers/onboardingReducer";
import reducer from "../../../store/reducers/onboardingReducer";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

const searchTerms = "";

function renderProvider(
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

test("search field is visible", () => {
  const { getByTestId } = renderProvider(
    <Router>
      <Navbar searchTerms={searchTerms} />
    </Router>,
    {
      initialState: {
        onboarding: {
          user: {},
        },
        login: {
          usertype: "",
        },
        isLoading: false,
      },
    }
  );

  const searchField = getByTestId(/search/i);

  expect(searchField).toBeVisible();
});

test("'Granted' homepage link is visible", () => {
  const { getByText } = renderProvider(
    <Router>
      <Navbar searchTerms={searchTerms} />
    </Router>,
    {
      initialState: {
        onboarding: {
          user: {},
        },
        login: {
          usertype: "",
        },
        isLoading: false,
      },
    }
  );

  expect(getByText(/granted/i)).toBeInTheDocument();
});
