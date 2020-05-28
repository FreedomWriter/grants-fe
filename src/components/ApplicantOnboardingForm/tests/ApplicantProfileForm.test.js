import React from "react";
import { axe } from "jest-axe";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import ApplicantProfileForm from "../ApplicantProfileForm.js";
import ApplicantContactInfo from "../ApplicantContactInfo";
import { initialState as initialReducerState } from "../../../store/reducers/onboardingReducer";
import reducer from "../../../store/reducers/onboardingReducer";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

let formStateMock = {};

let formHelperTextMock = {};

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

test("accessible -  ApplicantProfileForm pass axe", async () => {
  const { container } = render(<ApplicantProfileForm />, {
    initialState: {
      user: {},
      login: {
        user: "",
      },
      isLoading: false,
    },
  });
  expect(await axe(container)).toHaveNoViolations();
});

test("Applicant Profile Form to be visible", () => {
  const { container } = rtlRender(
    <ApplicantContactInfo
      formHelperText={formHelperTextMock}
      formState={formStateMock}
    />
  );

  expect(container).toBeVisible();
});

test("form header is visible", () => {
  const { getByText } = render(<ApplicantProfileForm />, {
    initialState: {
      user: {},
      login: {
        user: "",
      },
      isLoading: false,
    },
  });

  const formHeader = getByText(/create profile/i);

  expect(formHeader).toBeVisible();
});

test("Next Button is visible", () => {
  const { getByText } = render(<ApplicantProfileForm />, {
    initialState: {
      user: {},
      login: {
        user: "",
      },
      isLoading: false,
    },
  });
  const nextButton = getByText(/next/i);

  expect(nextButton).toBeVisible();
});

test("Next Button is disabled", () => {
  const { getByText } = render(<ApplicantProfileForm />, {
    initialState: {
      user: {},
      login: {
        user: "",
      },
      isLoading: false,
    },
  });
  const nextButton = getByText(/next/i);

  expect(nextButton).toBeDisabled();
});
