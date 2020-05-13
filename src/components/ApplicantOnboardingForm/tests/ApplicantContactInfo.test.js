import React, { useState as useStateMock } from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import ApplicantContactInfo from "../ApplicantContactInfo";
import ApplicantProfileForm from "../ApplicantProfileForm";

let formState = {};
const formHelperText = {};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setFormStateMock = jest.fn(function () {
  return (formState = {
    firstName: "Blupe",
    lastName: "Fiasco",
    sector: "Disruption",
    city: "Metropolis",
    state: "Chaos",
    zip: "90210",
    country: "No Country for Blue Men",
  });
});

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setFormStateMock]);
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
  console.error.mockRestore();
});

test("accessible -  ApplicantContactInfo pass axe", async () => {
  const { container } = render(
    <ApplicantContactInfo
      formState={formState}
      formHelperText={formHelperText}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("contact information is visible", () => {
  const { getByText } = render(
    <ApplicantContactInfo
      formState={formState}
      formHelperText={formHelperText}
    />
  );
  const header = getByText(/contact information/i);
  expect(header).toBeVisible();
});

test("inputs are visible", () => {
  const { getByLabelText } = render(
    <ApplicantContactInfo
      formState={formState}
      formHelperText={formHelperText}
    />
  );

  const firstNameLabelText = getByLabelText(/first name/i);
  const lastNameLabelText = getByLabelText(/last Name/i);
  const sectorLabelText = getByLabelText(/sector/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  expect(firstNameLabelText).toBeVisible();
  expect(lastNameLabelText).toBeVisible();
  expect(sectorLabelText).toBeVisible();
  expect(cityLabelText).toBeVisible();
  expect(stateLabelText).toBeVisible();
  expect(zipLabelText).toBeVisible();
  expect(countryLabelText).toBeVisible();
});

test("form submit adds contact info to state", () => {
  const { getByLabelText } = render(
    <ApplicantContactInfo
      formState={formState}
      formHelperText={formHelperText}
    />
  );
  const { getByText } = render(<ApplicantProfileForm />);

  const firstNameLabelText = getByLabelText(/first name/i);
  const lastNameLabelText = getByLabelText(/last Name/i);
  const sectorLabelText = getByLabelText(/sector/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  fireEvent.change(firstNameLabelText, { target: { value: "Blupe" } });
  fireEvent.change(lastNameLabelText, { target: { value: "Fiasco" } });
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
    firstName: firstNameLabelText.value,
    lastName: lastNameLabelText.value,
    sector: sectorLabelText.value,
    city: cityLabelText.value,
    state: stateLabelText.value,
    zip: zipLabelText.value,
    country: countryLabelText.value,
  });
});
