import React, { useState as useStateMock } from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WriterBioForm from "../WriterBioForm.js";

let writerBioFormStateMock = {
  website_url: "",
  bio: "",
  servicesOffered: "",
};

let formHelperTextMock = {};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setWriterBioFormStateMock = jest.fn(function () {
  return (writerBioFormStateMock = {
    website_url: "www.test.com",
    bio: "Just writing some tests",
    servicesOffered: "Writer and Researcher",
  });
});

const enableButtonMock = jest.fn(() => {});

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setWriterBioFormStateMock]);
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
  console.error.mockRestore();
  console.warn.mockRestore();
});

test("accessible -  WriterBioForm pass axe", async () => {
  const { container } = render(
    <WriterBioForm
      bioFormState={writerBioFormStateMock}
      formHelperText={formHelperTextMock}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("inputs are visible", () => {
  const { getByLabelText, getAllByTestId, getByPlaceholderText } = render(
    <WriterBioForm
      bioFormState={writerBioFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButtonMock}
    />
  );
  const website_urlLabelText = getByLabelText(/your website_url/i);
  const servicesOfferedLabelText = getAllByTestId("services")[0];
  const bioLabelText = getByPlaceholderText(/this is your chance to shine.../i);

  expect(website_urlLabelText).toBeVisible();
  expect(servicesOfferedLabelText).toBeVisible();
  expect(bioLabelText).toBeVisible();
});

test("State changes values of inputs", () => {
  const { getByLabelText, getAllByTestId, getByPlaceholderText } = render(
    <WriterBioForm
      bioFormState={writerBioFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButtonMock}
    />
  );
  const website_urlLabelText = getByLabelText(/your website_url/i);
  const servicesOfferedLabelText = getAllByTestId("services")[0];
  const bioLabelText = getByPlaceholderText(/this is your chance to shine.../i);

  userEvent.type(website_urlLabelText, { target: { value: "www.test.com" } });
  userEvent.type(servicesOfferedLabelText, {
    target: { value: "Just writing some tests" },
  });
  userEvent.type(bioLabelText, { target: { value: "Writer and Researcher" } });

  expect(writerBioFormStateMock).toEqual({
    website_url: writerBioFormStateMock.website_url,
    bio: writerBioFormStateMock.bio,
    servicesOffered: writerBioFormStateMock.servicesOffered,
  });
});
