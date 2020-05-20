import React, { useState as useStateMock } from "react";
import { render as rtlRender, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import { createStore } from "redux";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import ApplicantContactInfo from "../ApplicantContactInfo";
import ApplicantProfileForm from "../ApplicantProfileForm";
import { initialState as initialReducerState } from "../../../store/reducers/onboardingReducer";
import reducer from "../../../store/reducers/onboardingReducer";

let formState = {};
const formHelperText = {};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setFormStateMock = jest.fn(function () {
  return (formState = {
    first_name: "Blupe",
    last_name: "Fiasco",
    sector: "Disruption",
    city: "Metropolis",
    state: "Chaos",
    zip: "90210",
    country: "No Country for Blue Men",
  });
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

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setFormStateMock]);
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
  console.error.mockRestore();
});

test("accessible -  ApplicantContactInfo pass axe", async () => {
  const { container } = rtlRender(
    <ApplicantContactInfo
      formState={formState}
      formHelperText={formHelperText}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("contact information is visible", () => {
  const { getByText } = rtlRender(
    <ApplicantContactInfo
      formState={formState}
      formHelperText={formHelperText}
    />
  );
  const header = getByText(/contact information/i);
  expect(header).toBeVisible();
});

test("inputs are visible", () => {
  const { getByLabelText } = rtlRender(
    <ApplicantContactInfo
      formState={formState}
      formHelperText={formHelperText}
    />
  );

  const first_nameLabelText = getByLabelText(/first name/i);
  const last_nameLabelText = getByLabelText(/last Name/i);
  const sectorLabelText = getByLabelText(/sector/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  expect(first_nameLabelText).toBeVisible();
  expect(last_nameLabelText).toBeVisible();
  expect(sectorLabelText).toBeVisible();
  expect(cityLabelText).toBeVisible();
  expect(stateLabelText).toBeVisible();
  expect(zipLabelText).toBeVisible();
  expect(countryLabelText).toBeVisible();
});

test("form submit adds ApplicantContactInfo info to state", () => {
  const { getByLabelText } = render(
    <ApplicantContactInfo
      formState={formState}
      formHelperText={formHelperText}
    />
  );

  const { getByText } = render(<ApplicantProfileForm />, {
    initialState: {
      user: {},
      login: {
        user: "",
      },
      isLoading: false,
    },
  });

  const first_nameLabelText = getByLabelText(/first name/i);
  const last_nameLabelText = getByLabelText(/last Name/i);
  const sectorLabelText = getByLabelText(/sector/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  fireEvent.change(first_nameLabelText, { target: { value: "Blupe" } });
  fireEvent.change(last_nameLabelText, { target: { value: "Fiasco" } });
  fireEvent.change(sectorLabelText, {
    target: { value: "Disruption" },
  });
  fireEvent.change(cityLabelText, { target: { value: "Metropolis" } });
  fireEvent.change(stateLabelText, { target: { value: "Chaos" } });
  fireEvent.change(zipLabelText, {
    target: { value: 90210 },
  });
  fireEvent.change(countryLabelText, {
    target: { value: "No Country for Blue Men" },
  });
  userEvent.click(getByText(/next/i));

  expect(formState).toEqual({
    first_name: first_nameLabelText.value,
    last_name: last_nameLabelText.value,
    sector: sectorLabelText.value,
    city: cityLabelText.value,
    state: stateLabelText.value,
    zip: zipLabelText.value,
    country: countryLabelText.value,
  });
});
