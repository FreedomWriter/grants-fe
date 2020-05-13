import React, { useState as useStateMock } from "react";
import { axe } from "jest-axe";
import { render, getByPlaceholderText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApplicantProfileForm from "../ApplicantProfileForm.js";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

/* ********************** Figure out autocomplete a11y error issue ********************** */

test("accessible -  WriterProfileForm pass axe", async () => {
  const { container } = render(<ApplicantProfileForm />);
  expect(await axe(container)).toHaveNoViolations();
});

test("form header is visible", () => {
  const { getByText } = render(<ApplicantProfileForm />);

  const formHeader = getByText(/create profile/i);

  expect(formHeader).toBeVisible();
});

/* ********************** Button currently not disable FIX IT ********************** */

test("Next Button is not disabled", () => {
  const { getByText } = render(<ApplicantProfileForm />);
  const nextButton = getByText(/next/i);

  expect(nextButton).not.toBeDisabled();
});
