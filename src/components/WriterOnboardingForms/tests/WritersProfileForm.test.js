import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import WriterProfileForm from "../WriterProfileForm.js";

test("accessible -  WriterProfileForm pass axe", async () => {
  const { container } = render(<WriterProfileForm />);
  expect(await axe(container)).toHaveNoViolations();
});

test("Create profile header is visible", () => {
  const { getByText } = render(<WriterProfileForm />);
  const createProfileHeader = getByText(/create profile/i);

  expect(createProfileHeader).toBeVisible();
});

test("Stepper is visible", () => {
  const { getByTestId } = render(<WriterProfileForm />);
  const stepper = getByTestId("stepper");

  expect(stepper).toBeVisible();
});

test("Next Button is visible", () => {
  const { getByText } = render(<WriterProfileForm />);
  const nextButton = getByText(/next/i);

  expect(nextButton).toBeVisible();
});

test("Next Button is disabled", () => {
  const { getByText } = render(<WriterProfileForm />);
  const nextButton = getByText(/next/i);

  expect(nextButton).toBeDisabled();
});
