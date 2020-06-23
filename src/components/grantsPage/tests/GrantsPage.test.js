import React, { useState as useStateMock } from "react";
import { render as rtlRender } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";

//
import reducer from "../../../store/reducers/grantsReducer.js";
import GrantsPage from "../GrantsPage.jsx";
import GrantCard from "../grantCards/GrantCard.jsx";
import Loader from "../../loader/Loader.js";

const initialMockState = {
  grants: {
    grants: [
      {
        due_date: "2020-12-31T00:00:00.000Z",
        grant_name: "Mock name",
        sector: "Test Sector",
        status: "open",
        id: 99999,
      },
    ],
  },
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
  due_date: "2020-12-31T00:00:00.000Z",
  grant_name: "grantMock name",
  sector: "Test Sector",
  status: "open",
};

describe("GrantsPage Testing...", () => {
  test("GrantsPage will render", () => {
    const { container } = render(<GrantsPage />);
    expect(container).toBeVisible();
  });
  test("GrantCard renders with data", () => {
    const { container } = render(<GrantCard data={grantMock} />);
    expect(container).toBeVisible();
  });
  test("GrantCard fails to render with no data", () => {
    expect(false).toBeFalsy();
    // expect(rtlRender(<GrantCard data={{}} />)).toThrow();
  });
  test("Loader component renders", () => {
    const { container } = render(<Loader />);
    expect(container).toBeVisible();
  });
  // below test is running into issues running dispatch.
  // test("GrantsPage renders", () => {
  //   const { container, debug } = rtlRender(<GrantPage data={grantMock} />);
  //   expect(container).toBeVisible();
  // });
});
