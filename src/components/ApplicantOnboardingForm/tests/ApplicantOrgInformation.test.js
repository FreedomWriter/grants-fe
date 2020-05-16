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
    org_name: "AwesomeOrg",
    website_url: "www.test.com",
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
  const org_nameLabelText = getByLabelText(/organization name/i);
  const foundingDateLabelText = getByLabelText(/founding date/i);
  const website_urlLabelText = getByPlaceholderText(
    /tell us about your organization.../i
  );

  expect(org_nameLabelText).toBeVisible();
  expect(foundingDateLabelText).toBeVisible();
  expect(website_urlLabelText).toBeVisible();
});

test("State changes values of inputs", () => {
  const { getByLabelText, getByPlaceholderText } = render(
    <OrgInformation
      formState={formStateMock}
      formHelperText={formHelperTextMock}
    />
  );
  const org_nameLabelText = getByLabelText(/organization name/i);
  const foundingDateLabelText = getByLabelText(/founding date/i);
  const website_urlLabelText = getByPlaceholderText(
    /tell us about your organization.../i
  );
  const orgBioLabelText = getByPlaceholderText(
    /tell us about your organization.../i
  );

  userEvent.type(org_nameLabelText, { target: { value: "AwesomeOrg" } });
  userEvent.type(foundingDateLabelText, {
    target: { value: "In the begining, she left it as a string" },
  });
  userEvent.type(website_urlLabelText, { target: { value: "www.test.com" } });
  userEvent.type(orgBioLabelText, {
    target: { value: "In the begining, she left it as a string" },
  });

  expect(formStateMock).toEqual({
    website_url: formStateMock.website_url,
    org_name: formStateMock.org_name,
    bio: formStateMock.bio,
    foundingDate: formStateMock.foundingDate,
  });
});
