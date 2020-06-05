import React, { useState as useStateMock } from "react";
import { render as rtlRender } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import { initialState as initialReducerState } from "../../../store/reducers/collegesReducer";
import reducer from "../../../store/reducers/collegesReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import WriterContactInfo from "../WriterContactInfoForm.js";
import WriterReviewForm from "../WriterReviewForm.js";

let contactFormState = {
  first_name: "",
  last_name: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setContactFormStateMock = jest.fn(function () {
  return (contactFormState = {
    first_name: "Blupe",
    last_name: "Fiasco",
    city: "Metropolis",
    state: "Chaos",
    zip: "90210",
    country: "No Country for Blue Men",
  });
});

const enableButton = jest.fn(() => false);

const setDisableCollegeSubmitButtonMock = jest.fn(() => true);

const setDisableWorkHistorySubmitButtonMock = jest.fn(function () {
  return true;
});

const bioFormStateMock = {
  website: "",
  bio: "",
  servicesOffered: "",
};
const workHistoryFormStateMock = {
  company: "",
  position: "",
  start_date: "",
  end_date: "",
  current_position: true,
  responsibilities: "",
};
const educationFormStateMock = {
  college: "",
  searchCollege: "",
  startDate: "",
  endDate: "",
  stillAttending: true,
  anticipatedGraduation: "",
  degree: "",
};

const formHelperText = {
  first_name: undefined,
  sector: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  country: undefined,
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

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setContactFormStateMock]);
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
  console.error.mockRestore();
});

test("accessible -  WriterContactInfo pass axe", async () => {
  const { container } = rtlRender(
    <WriterContactInfo
      contactFormState={contactFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("Contact Information Header is visible", () => {
  const { getByText } = rtlRender(
    <WriterContactInfo
      contactFormState={contactFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );
  const header = getByText(/contact information/i);
  expect(header).toBeVisible();
});

test("inputs are visible", () => {
  const { getByLabelText } = rtlRender(
    <WriterContactInfo
      contactFormState={contactFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );

  const first_nameLabelText = getByLabelText(/first name/i);
  const last_nameLabelText = getByLabelText(/last Name/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  expect(first_nameLabelText).toBeVisible();
  expect(last_nameLabelText).toBeVisible();
  expect(cityLabelText).toBeVisible();
  expect(stateLabelText).toBeVisible();
  expect(zipLabelText).toBeVisible();
  expect(countryLabelText).toBeVisible();
});

test("form submit adds contact info to state", () => {
  const { getByLabelText } = rtlRender(
    <WriterContactInfo
      contactFormState={contactFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
    />
  );

  const first_nameLabelText = getByLabelText(/first name/i);
  const last_nameLabelText = getByLabelText(/last Name/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  userEvent.type(first_nameLabelText, { target: { value: "Blupe" } });
  userEvent.type(last_nameLabelText, { target: { value: "Fiasco" } });
  userEvent.type(cityLabelText, { target: { value: "Metropolis" } });
  userEvent.type(stateLabelText, { target: { value: "Chaos" } });
  userEvent.type(zipLabelText, { target: { value: "90210" } });
  userEvent.type(countryLabelText, {
    target: { value: "No Country for Blue Men" },
  });

  expect(contactFormState).toEqual({
    first_name: first_nameLabelText.value,
    last_name: last_nameLabelText.value,
    city: cityLabelText.value,
    state: stateLabelText.value,
    zip: zipLabelText.value,
    country: countryLabelText.value,
  });
});

test("Review form reflects user Contact Info input", () => {
  const { getByLabelText } = render(
    <WriterReviewForm
      contactFormState={contactFormState}
      formHelperText={formHelperText}
      enableButton={enableButton}
      bioFormState={bioFormStateMock}
      workHistoryFormState={workHistoryFormStateMock}
      educationFormState={educationFormStateMock}
      setDisableCollegeSubmitButton={setDisableCollegeSubmitButtonMock}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
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

  const first_nameLabelText = getByLabelText(/first name/i);
  const last_nameLabelText = getByLabelText(/last Name/i);
  const cityLabelText = getByLabelText(/city/i);
  const stateLabelText = getByLabelText(/state/i);
  const zipLabelText = getByLabelText(/Zip/i);
  const countryLabelText = getByLabelText(/country/i);

  userEvent.type(first_nameLabelText, { target: { value: "Blupe" } });
  userEvent.type(last_nameLabelText, { target: { value: "Fiasco" } });
  userEvent.type(cityLabelText, { target: { value: "Metropolis" } });
  userEvent.type(stateLabelText, { target: { value: "Chaos" } });
  userEvent.type(zipLabelText, { target: { value: "90210" } });
  userEvent.type(countryLabelText, {
    target: { value: "No Country for Blue Men" },
  });

  expect(contactFormState).toEqual({
    first_name: first_nameLabelText.value,
    last_name: last_nameLabelText.value,
    city: cityLabelText.value,
    state: stateLabelText.value,
    zip: zipLabelText.value,
    country: countryLabelText.value,
  });
});
