import React, { useState as useStateMock } from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WriterEducationForm from "./WriterEducationForm.js";

import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

let store;
let component;

beforeEach(() => {
  store = mockStore({
    collegeList: {
      colleges: [],
      isLoading: false,
    },
  });

  component = renderer.create(
    <Provider store={store}>
      <WriterEducationForm
        educationFormState={educationFormState}
        formHelperText={formHelperText}
        enableButton={enableButton}
      />
    </Provider>
  );
});

let educationFormState = {
  firstName: "",
  lastName: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const enableButton = jest.fn(() => false);
const setEducationFormStateMock = jest.fn(function () {
  return (educationFormState = {
    college: "Howard University",
    searchCollege: "",
    startDate: "Today",
    endDate: "Tomorrow",
    stillAttending: "Doctoral degree",
    anticipatedGraduation: "",
    degree: "Doctoral degree",
  });
});

// let enableButton = false;

// const setDisableButtonMock = jest.fn(function () {
//   return true
// });

const formHelperText = {
  college: "",
  searchCollege: "",
  startDate: "",
  endDate: "",
  stillAttending: false,
  anticipatedGraduation: "",
  degree: "",
};

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setEducationFormStateMock]);
});

afterEach(() => {
  jest.clearAllMocks();
});

test("contact information is visible", () => {
  const { getByText } = render(
    <WriterEducationForm
      educationFormState={educationFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );
  const header = getByText(/contact information/i);
  expect(header).toBeVisible();
});

test("inputs are visible", () => {
  const { getByLabelText } = render(
    <WriterEducationForm
      educationFormState={educationFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );

  const firstNameLabelText = getByLabelText(/first name/i);
  const lastNameLabelText = getByLabelText(/last Name/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  expect(firstNameLabelText).toBeVisible();
  expect(lastNameLabelText).toBeVisible();
  expect(cityLabelText).toBeVisible();
  expect(stateLabelText).toBeVisible();
  expect(zipLabelText).toBeVisible();
  expect(countryLabelText).toBeVisible();
});

test("form submit adds contact info to state", () => {
  const { getByLabelText, getByText } = render(
    <WriterEducationForm
      educationFormState={educationFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );

  const searchCollegeLabelText = getByLabelText(/Enter School Name/i);
  const startDateLabelText = getByLabelText(/Start Date/i);
  const endDateLabelText = getByLabelText(/End Date/i);
  const currentlyEnrolledLabelText = getByLabelText(/Currently Enrolled/i);
  const degreeEarnedLabelText = getByLabelText(/degree-earned-label/i);
  //   const countryLabelText = getByLabelText(/country/i);

  fireEvent.change(searchCollegeLabelText, {
    target: { value: "Howard University" },
  });
  fireEvent.change(startDateLabelText, { target: { value: "Today" } });
  fireEvent.change(endDateLabelText, { target: { value: "Tomorrow" } });
  fireEvent.change(currentlyEnrolledLabelText, { target: { value: false } });
  fireEvent.change(degreeEarnedLabelText, {
    target: { value: "Doctoral degree" },
  });
  //   fireEvent.change(countryLabelText, {
  //     target: { value: "No Country for Blue Men" },
  //   });
  userEvent.click(getByText(/next/i));

  expect(educationFormState).toEqual({
    college: "Howard University",
    searchCollege: "",
    startDate: "Today",
    endDate: "Tomorrow",
    stillAttending: "Doctoral degree",
    anticipatedGraduation: "",
    degree: "Doctoral degree",
  });
});
