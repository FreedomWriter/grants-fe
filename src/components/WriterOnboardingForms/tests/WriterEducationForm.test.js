import React, { useState as useStateMock } from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import WriterEducationForm from "../WriterEducationForm.js";

const enableButton = jest.fn(() => true);
const setDisableCollegeSubmitButton = jest.fn(() => {});

let educationFormStateMock = {
  college: "",
  startDate: "",
  endDate: "",
  stillAttending: true,
  anticipatedGraduation: "",
  degree: "",
};

const setEducationFormStateMock = jest.fn(function () {
  return (educationFormStateMock = {
    college: "Howard University",
    startDate: "2010-01-01",
    endDate: "2010-01-02",
    stillAttending: "true",
    anticipatedGraduation: "",
    degree: "Doctoral degree",
  });
});

let formHelperTextMock = {};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setEducationFormStateMock]);
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
  // console.error.mockRestore();
});

test("accessible -  WriterContactInfo pass axe", async () => {
  const { container } = render(
    <WriterEducationForm
      educationFormState={educationFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableCollegeSubmitButton={setDisableCollegeSubmitButton}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("form submit adds contact info to state", async () => {
  const { getByLabelText } = render(
    <WriterEducationForm
      educationFormState={educationFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableCollegeSubmitButton={setDisableCollegeSubmitButton}
      setEducationFormState={setEducationFormStateMock}
    />
  );

  const searchCollegeLabelText = getByLabelText(/Enter School Name/i);
  const startDateLabelText = getByLabelText(/Start Date/i);
  const endDateLabelText = getByLabelText(/Anticipated Graduation Date/i);
  const currentlyEnrolledLabelText = getByLabelText(/Currently Enrolled/i);
  const degreeEarnedLabelText = getByLabelText(/degree/i);

  expect(educationFormStateMock).toEqual({
    college: searchCollegeLabelText.value,
    startDate: startDateLabelText.value,
    endDate: endDateLabelText.value,
    stillAttending: currentlyEnrolledLabelText.value.toString(),
    anticipatedGraduation: "",
    degree: degreeEarnedLabelText.innerHTML,
  });
});
