import React from "react";
import { render } from "@testing-library/react";
import BioCard from "../BioCard.js";
let mock = {};
test("renders sector", () => {
  const { getByText } = render(<BioCard applicantDetails={mock} />);
  getByText(/Sector/i);
});
