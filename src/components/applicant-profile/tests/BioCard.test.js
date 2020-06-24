import React from "react";
import { render as rtlRender } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";

import BioCard from "../BioCard.js";
import reducer from "../../../store/reducers/applicantReducer.js";
let mock = {};

function render(
  ui,
  {
    initialState = mock,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
test("renders sector", () => {
  const { getByText } = render(<BioCard applicantDetails={mock} />);
  getByText(/Sector/i);
});
