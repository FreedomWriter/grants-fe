import React, { useState as useStateMock } from "react";
import { axe } from "jest-axe";
import { createStore } from "redux";
import { render as rtlRender, screen, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WriterEducationForm from "./WriterEducationForm.js";
import { initialState as initialReducerState } from "../../store/reducers/collegesReducer";
import reducer from "../../store/reducers/collegesReducer";

import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import axiosMock from "axios";
import WriterEducationCard from "./WriterEducationCard.js";

const enableButton = jest.fn(() => {});
const setDisableCollegeSubmitButton = jest.fn(() => {});

let educationFormStateMock = {
  college: "",
  searchCollege: "",
  startDate: "",
  endDate: "",
  stillAttending: true,
  anticipatedGraduation: "",
  degree: "",
};

const setEducationFormStateMock = jest.fn(function () {
  return (educationFormStateMock = {
    college: "Howard University",
    searchCollege: undefined,
    startDate: "2010-01-01",
    endDate: "2010-01-02",
    stillAttending: true,
    anticipatedGraduation: "",
    degree: "Doctoral degree",
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

function render(
  ui,
  {
    initialState = initialReducerState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

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
    />,
    {
      initialState: {
        collegeList: {
          colleges: [],
        },
        isLoading: false,
      },
    }
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("can render with redux with custom initial state, shows college options when colleges added to state", () => {
  render(
    <WriterEducationForm
      educationFormState={educationFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableCollegeSubmitButton={setDisableCollegeSubmitButton}
    />,
    {
      initialState: {
        collegeList: {
          colleges: [
            { "school.name": "Howard College", id: 225520 },
            { "school.name": "Howard University", id: 131520 },
            { "school.name": "Howard Payne University", id: 225548 },
            { "school.name": "Howard Community College", id: 162779 },
            { "school.name": "Specs Howard School of Media Arts", id: 172325 },
            {
              "school.name": "Howell Cheney THS/CT Aero Tech School",
              id: 417248,
            },
          ],
        },
        isLoading: false,
      },
    }
  );

  expect(screen.getByTestId("colleges-options")).toBeInTheDocument();
});

test("form submit adds contact info to state", async () => {
  const { getByLabelText, getByTestId } = render(
    <WriterEducationForm
      educationFormState={educationFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableCollegeSubmitButton={setDisableCollegeSubmitButton}
      setEducationFormState={setEducationFormStateMock}
    />,
    {
      initialState: {
        collegeList: {
          colleges: [
            { name: "Howard College", id: 225520 },
            { name: "Howard University", id: 131520 },
            { name: "Howard Payne University", id: 225548 },
            { name: "Howard Community College", id: 162779 },
            { name: "Specs Howard School of Media Arts", id: 172325 },
            {
              "school.name": "Howell Cheney THS/CT Aero Tech School",
              id: 417248,
            },
          ],
        },
        isLoading: false,
      },
    }
  );
  // const { getByText } = rtlRender(<WriterEducationCard />);
  /************************* MOCK WRITERS COLLEGE STATE TO TEST THAT THE CARD RENDERS  */
  // writersCollege={writersCollege}
  // key={writersCollege.id}

  const searchCollegeLabelText = getByTestId(/schoolname/i);
  const startDateLabelText = getByLabelText(/Start Date/i);
  const endDateLabelText = getByTestId(/end-anticipated*/i);
  const currentlyEnrolledLabelText = getByLabelText(/Currently Enrolled/i);
  const degreeEarnedLabelText = getByTestId(/degreeEarned/i);
  //   const countryLabelText = getByLabelText(/country/i);

  // userEvent.click(searchCollegeLabelText, {
  //   target: { value: "Howard University" },
  // });
  userEvent.selectOptions(startDateLabelText, {
    target: { value: "2010-01-01" },
  });
  userEvent.selectOptions(endDateLabelText, {
    target: { value: "2010-01-02" },
  });
  userEvent.click(currentlyEnrolledLabelText, {
    target: { value: false },
  });
  // userEvent.selectOptions(degreeEarnedLabelText, {
  //   target: { value: "Doctoral degree" },
  // });

  // console.log(searchCollegeLabelText);
  // userEvent.click(getByText(/next/i));
  // await wait(() =>
  //   useStateMock.mockImplementation((init) => [init, setEducationFormStateMock])
  // );
  // setEducationFormStateMock.mockImplementation(() =>
  //   Promise.resolve({ success: true })
  // );

  // console.log(setEducationFormStateMock.getMockImplementation());
  expect(educationFormStateMock).toEqual({
    college: "Howard University",
    searchCollege: undefined,
    startDate: startDateLabelText.value,
    endDate: endDateLabelText.value,
    stillAttending: true,
    anticipatedGraduation: "",
    degree: "Doctoral degree",
  });
});
