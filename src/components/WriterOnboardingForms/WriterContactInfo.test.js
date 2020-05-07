import React, { useState as useStateMock } from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WriterContactInfo from "./WriterContactInfoForm.js";
import WriterProfileForm from "./WriterProfileForm.js";

let contactFormState = {
  firstName: "",
  lastName: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const enableButton = jest.fn(() => false);
const setContactFormStateMock = jest.fn(function () {
  return (contactFormState = {
    firstName: "Blupe",
    lastName: "Fiasco",
    city: "Metropolis",
    state: "Chaos",
    zip: 90210,
    country: "No Country for Blue Men",
  });
});

// let enableButton = false;

// const setDisableButtonMock = jest.fn(function () {
//   return true
// });

const formHelperText = {
  firstName: undefined,
  sector: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  country: undefined,
};

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setContactFormStateMock]);
});

afterEach(() => {
  jest.clearAllMocks();
});

test("contact information is visible", () => {
  const { getByText } = render(
    <WriterContactInfo
      contactFormState={contactFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );
  const header = getByText(/contact information/i);
  expect(header).toBeVisible();
});

test("inputs are visible", () => {
  const { getByLabelText } = render(
    <WriterContactInfo
      contactFormState={contactFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );

  const firstNameLabelText = getByLabelText(/first name/i);
  const lastNameLabelText = getByLabelText(/last Name/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  expect(firstNameLabelText).toBeVisible();
  expect(lastNameLabelText).toBeVisible();
  expect(cityLabelText).toBeVisible();
  expect(stateLabelText).toBeVisible();
  expect(zipLabelText).toBeVisible();
  expect(countryLabelText).toBeVisible();
});

test("form submit adds contact info to state", () => {
  const { getByLabelText } = render(
    <WriterContactInfo
      contactFormState={contactFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );
  const { getByText } = render(<WriterProfileForm />);

  const firstNameLabelText = getByLabelText(/first name/i);
  const lastNameLabelText = getByLabelText(/last Name/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  fireEvent.change(firstNameLabelText, { target: { value: "Blupe" } });
  fireEvent.change(lastNameLabelText, { target: { value: "Fiasco" } });
  fireEvent.change(cityLabelText, { target: { value: "Metropolis" } });
  fireEvent.change(stateLabelText, { target: { value: "Chaos" } });
  fireEvent.change(zipLabelText, {
    target: { value: 90210 },
  });
  fireEvent.change(countryLabelText, {
    target: { value: "No Country for Blue Men" },
  });
  userEvent.click(getByText(/next/i));

  expect(contactFormState).toEqual({
    firstName: "Blupe",
    lastName: "Fiasco",
    city: "Metropolis",
    state: "Chaos",
    zip: 90210,
    country: "No Country for Blue Men",
  });
});
