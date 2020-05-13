import React, { useState as useStateMock } from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NonOrgInformation from "../NonOrgInformation.js";

let formStateMock = {
  website: "",
  bio: "",
  servicesOffered: "",
};

let formHelperTextMock = {
  firstName: undefined,
  lastName: undefined,
  sector: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  country: undefined,
  website: undefined,
  bio: undefined,
  company: undefined,
  postion: undefined,
  responsibilites: undefined,
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setFormStateMock = jest.fn(function () {
  return (formStateMock = {
    website: "www.test.com",
    bio: "Just writing some tests",
  });
});

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setFormStateMock]);
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
  console.error.mockRestore();
  console.warn.mockRestore();
});

test("accessible -  orgInformation pass axe", async () => {
  const { container } = render(
    <NonOrgInformation
      formState={formStateMock}
      formHelperText={formHelperTextMock}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("inputs are visible", () => {
  const { getByLabelText, getByPlaceholderText } = render(
    <NonOrgInformation
      formState={formStateMock}
      formHelperText={formHelperTextMock}
    />
  );

  const bioLabelText = getByPlaceholderText(/tell us about yourself.../i);
  const websiteLabelText = getByLabelText(/website/i);

  expect(websiteLabelText).toBeVisible();
  expect(bioLabelText).toBeVisible();
});

test("State changes values of inputs", () => {
  const { getByPlaceholderText, getByLabelText } = render(
    <NonOrgInformation
      formState={formStateMock}
      formHelperText={formHelperTextMock}
    />
  );

  const bioLabelText = getByPlaceholderText(/tell us about yourself.../i);
  const websiteLabelText = getByLabelText(/website/i);

  userEvent.type(websiteLabelText, { target: { value: "www.test.com" } });
  userEvent.type(bioLabelText, {
    target: { value: "In the begining, she left it as a string" },
  });

  expect(formStateMock).toEqual({
    website: websiteLabelText.value,
    bio: bioLabelText.value,
  });
});
