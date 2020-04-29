import React, { useState as useStateMock } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { jssPreset } from "@material-ui/core";

// let searchTerms = ""

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: jest.fn()
// }))

test("inputs are visible", () => {
  let searchTerms = "";
  const { getByTestId } = render(
    <Router>
      <Navbar searchTerms={searchTerms} searchTerms={searchTerms} />
    </Router>
  );

  const searchField = getByTestId(/search/i);

  expect(searchField).toBeVisible();
});

test("'Granted' homepage link is visible", () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  expect(getByText(/granted/i)).toBeInTheDocument();
});
