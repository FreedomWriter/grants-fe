import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import ApplicantProfileForm from "../ApplicantProfileForm.js";
import ApplicantContactInfo from "../ApplicantContactInfo";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

let formStateMock = {};

let formHelperTextMock = {};

/* ********************** Figure out autocomplete a11y error issue ********************** */

test("accessible -  WriterProfileForm pass axe", async () => {
  const { container } = render(<ApplicantProfileForm />);
  expect(await axe(container)).toHaveNoViolations();
});

test("Applicant Profile Form to be visible", () => {
  const { container } = render(
    <ApplicantContactInfo
      formHelperText={formHelperTextMock}
      formState={formStateMock}
    />
  );

  expect(container).toBeVisible();
});

test("form header is visible", () => {
  const { getByText } = render(<ApplicantProfileForm />);

  const formHeader = getByText(/create profile/i);

  expect(formHeader).toBeVisible();
});

test("Next Button is visible", () => {
  const { getByText } = render(<ApplicantProfileForm />);
  const nextButton = getByText(/next/i);

  expect(nextButton).toBeVisible();
});

/* ********************** Button currently not disable FIX IT ********************** */

test("Next Button is not disabled", () => {
  const { getByText } = render(<ApplicantProfileForm />);
  const nextButton = getByText(/next/i);

  expect(nextButton).not.toBeDisabled();
});
