import React, { useState as useStateMock } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

test("can render with redux with custom initial state", () => {
  render(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );

  // expect(screen.getByTestId("colleges-options")).toBeInTheDocument();
});

test("form submit adds contact info to state", () => {
  const { getByLabelText, getByTestId, getAllByLabelText } = render(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );
  // const { getByText } = rtlRender(<WriterEducationCard />);
  /************************* MOCK WRITERS COLLEGE STATE TO TEST THAT THE CARD RENDERS  */
  // writersCollege={writersCollege}
  // key={writersCollege.id}

  const companyLabelText = getByLabelText(/company/i);
  //   const positionLabelText = getByLabelText(/position/i);
  const workStartDateLabelText = getByTestId(/start-date/i);
  const responsibilitiesLabelText = getByLabelText(/responsibilites/i);
  // const degreeEarnedLabelText = getByTestId(/degreeEarned/i);
  //   const countryLabelText = getByLabelText(/country/i);

  userEvent.type(companyLabelText, {
    target: { value: "Life" },
  });
  //   userEvent.type(positionLabelText, {
  //     target: { value: "Human" },
  //   });
  userEvent.selectOptions(workStartDateLabelText, {
    target: { value: "1980-01-18" },
  });
  userEvent.type(responsibilitiesLabelText, {
    target: { value: "Just a human, doing human things." },
  });

  // console.log(searchCollegeLabelText);
  // userEvent.click(getByText(/next/i));

  expect(writerWorkFormStateMock).toEqual({
    company: "Life",
    position: "Human",
    workStartDate: "1980-01-18",
    workEndDate: "",
    currentPosition: true,
    responsibilites: "Just a human, doing human things.",
  });
});
