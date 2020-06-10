import React from "react";
import { axe } from "jest-axe";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import WriterProfileForm from "../WriterProfileForm.js";
import WriterContactInfoForm from "../WriterContactInfoForm";

import { initialState as initialReducerState } from "../../../store/reducers/onboardingReducer";
import reducer from "../../../store/reducers/onboardingReducer";

let contactFormStateMock = {};
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

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("accessible -  WriterProfileForm pass axe", async () => {
  const { container } = render(<WriterProfileForm />, {
    initialState: {
      user: {},
      isLoading: false,
      login: {
        user: "",
      },
      onboarding: { workHistory: {} },
    },
  });
  expect(await axe(container)).toHaveNoViolations();
});

test("Create profile header is visible", () => {
  const { getByText } = render(<WriterProfileForm />, {
    initialState: {
      user: {},
      isLoading: false,
      login: {
        user: "",
      },
      onboarding: { workHistory: {} },
    },
  });
  const createProfileHeader = getByText(/create profile/i);

  expect(createProfileHeader).toBeVisible();
});

test("Stepper is visible", () => {
  const { getByTestId } = render(<WriterProfileForm />, {
    initialState: {
      user: {},
      isLoading: false,
      login: {
        user: "",
      },
      onboarding: { workHistory: {} },
    },
  });
  const stepper = getByTestId("stepper");

  expect(stepper).toBeVisible();
});

test("Next Button is visible", () => {
  const { getByText } = render(<WriterProfileForm />, {
    initialState: {
      user: {},
      isLoading: false,
      login: {
        user: "",
      },
      onboarding: { workHistory: {} },
    },
  });
  const nextButton = getByText(/next/i);

  expect(nextButton).toBeVisible();
});

test("Next Button is disabled", () => {
  const { getByText } = render(<WriterProfileForm />, {
    initialState: {
      user: {},
      isLoading: false,
      login: {
        user: "",
      },
      onboarding: { workHistory: {} },
    },
  });
  const nextButton = getByText(/next/i);

  expect(nextButton).toBeDisabled();
});

test("Applicant Profile Form to be visible", () => {
  const { container } = render(
    <WriterContactInfoForm
      contactFormState={contactFormStateMock}
      formHelperText={formHelperTextMock}
    />,
    {
      initialState: {
        user: {},
        isLoading: false,
        login: {
          user: "",
        },
      },
    }
  );

  expect(container).toBeVisible();
});
