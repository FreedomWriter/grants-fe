import React, { useState as useStateMock } from "react";
import { axe } from "jest-axe";
import { render, getByPlaceholderText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApplicantProfileForm from "../ApplicantProfileForm.js";

test("form header is visible", () => {
  const { getByText } = render(<ApplicantProfileForm />);

  const formHeader = getByText(/create profile/i);

  expect(formHeader).toBeVisible();
});
