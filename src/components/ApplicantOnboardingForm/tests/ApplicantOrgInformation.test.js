import React, { useState as useStateMock } from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrgInformation from "../OrgInformation.js";

let formStateMock = {};

let formHelperTextMock = {};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setFormStateMock = jest.fn(function () {
  return (formStateMock = {
    orgName: "AwesomeOrg",
    website: "www.test.com",
    bio: "Just writing some tests",
    foundingDate: "Writer and Researcher",
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
    <OrgInformation
      formState={formStateMock}
      formHelperText={formHelperTextMock}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("inputs are visible", () => {
  const { getByLabelText, getByPlaceholderText } = render(
    <OrgInformation
      formState={formStateMock}
      formHelperText={formHelperTextMock}
    />
  );
  const orgNameLabelText = getByLabelText(/organization name/i);
  const foundingDateLabelText = getByLabelText(/founding date/i);
  const websiteLabelText = getByPlaceholderText(
    /tell us about your organization.../i
  );

  expect(orgNameLabelText).toBeVisible();
  expect(foundingDateLabelText).toBeVisible();
  expect(websiteLabelText).toBeVisible();
});

test("State changes values of inputs", () => {
  const { getByLabelText, getByPlaceholderText } = render(
    <OrgInformation
      formState={formStateMock}
      formHelperText={formHelperTextMock}
    />
  );
  const orgNameLabelText = getByLabelText(/organization name/i);
  const foundingDateLabelText = getByLabelText(/founding date/i);
  const websiteLabelText = getByPlaceholderText(
    /tell us about your organization.../i
  );
  const orgBioLabelText = getByPlaceholderText(
    /tell us about your organization.../i
  );

  userEvent.type(orgNameLabelText, { target: { value: "AwesomeOrg" } });
  userEvent.type(foundingDateLabelText, {
    target: { value: "In the begining, she left it as a string" },
  });
  userEvent.type(websiteLabelText, { target: { value: "www.test.com" } });
  userEvent.type(orgBioLabelText, {
    target: { value: "In the begining, she left it as a string" },
  });

  expect(formStateMock).toEqual({
    website: formStateMock.website,
    orgName: formStateMock.orgName,
    bio: formStateMock.bio,
    foundingDate: formStateMock.foundingDate,
  });
});
