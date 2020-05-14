import React, { useState as useStateMock } from "react";
import { axe } from "jest-axe";
import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WriterWorkHistoryForm from "./WriterWorkHistoryForm.js";

const enableButton = jest.fn(() => {});
const setDisableWorkHistorySubmitButtonMock = jest.fn(() => {});

let writerWorkFormStateMock = {
  company: "",
  position: "",
  workStartDate: "",
  workEndDate: "",
  currentPosition: true,
  responsibilites: "",
};

const setWriterWorkFormStateMock = jest.fn(function () {
  return (writerWorkFormStateMock = {
    company: "Life",
    position: "Human",
    workStartDate: "1980-01-18",
    workEndDate: "",
    currentPosition: true,
    responsibilites: "Just a human, doing human things.",
  });
});

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

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setWriterWorkFormStateMock]);
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();

  console.error.mockRestore();
});

test("accessible -  WriterWorkHistoryForm pass axe", async () => {
  const { container } = render(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("Work History header displays", () => {
  const { getByText } = render(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );

  expect(getByText(/work history/i)).toBeInTheDocument();
});

test("inputs are visible", () => {
  const { getByLabelText, getByTestId } = render(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );

  const companyLabelText = getByLabelText(/company/i);
  const positionLabelText = getByLabelText(/position/i);
  const workStartDateLabelText = getByLabelText(/work start date/i);
  const responsibilitiesLabelText = getByLabelText(/responsibilites/i);
  //   const workEndDateLabelText = getByLabelText(/work end date/i);

  expect(companyLabelText).toBeVisible();
  expect(positionLabelText).toBeVisible();
  expect(workStartDateLabelText).toBeVisible();
  expect(responsibilitiesLabelText).toBeVisible();
});

test("form submit adds Current Position to state", () => {
  const { getByLabelText, queryByLabelText, debug } = render(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );

  const companyLabelText = getByLabelText(/company/i);
  const positionLabelText = getByLabelText(/position/i);
  const workStartDateLabelText = getByLabelText(/work start date/i);
  const responsibilitiesLabelText = getByLabelText(/responsibilites/i);
  const workEndDateLabelText = queryByLabelText(/work end date/i);

  userEvent.type(companyLabelText, {
    target: { value: "Life" },
  });
  userEvent.type(positionLabelText, {
    target: { value: "Human" },
  });
  userEvent.selectOptions(workStartDateLabelText, {
    target: { value: "1980-01-18" },
  });
  userEvent.type(responsibilitiesLabelText, {
    target: { value: "Just a human, doing human things." },
  });

  expect(workEndDateLabelText).toBeNull();
  expect(writerWorkFormStateMock).toEqual({
    company: companyLabelText.value,
    position: positionLabelText.value,
    workStartDate: workStartDateLabelText.value,
    workEndDate: "",
    currentPosition: true,
    responsibilites: responsibilitiesLabelText.value,
  });
});

test("form submit adds Past Position to state", () => {
  const { getByLabelText, queryByLabelText } = render(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );

  const companyLabelText = getByLabelText(/company/i);
  const positionLabelText = getByLabelText(/position/i);
  const workStartDateLabelText = getByLabelText(/work start date/i);
  const responsibilitiesLabelText = getByLabelText(/responsibilites/i);
  const workEndDateLabelText = queryByLabelText(/work end date/i);
  //   userEvent.check();

  userEvent.type(companyLabelText, {
    target: { value: "Life" },
  });
  userEvent.type(positionLabelText, {
    target: { value: "Human" },
  });
  userEvent.selectOptions(workStartDateLabelText, {
    target: { value: "1980-01-18" },
  });
  userEvent.type(responsibilitiesLabelText, {
    target: { value: "Just a human, doing human things." },
  });

  expect(writerWorkFormStateMock).toEqual({
    company: companyLabelText.value,
    position: positionLabelText.value,
    workStartDate: workStartDateLabelText.value,
    workEndDate: "",
    currentPosition: true,
    responsibilites: responsibilitiesLabelText.value,
  });
});
