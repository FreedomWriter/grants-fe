import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import LandingPage from "../LandingPage.js";

describe("Test", () => {
    test("LandingPage renders something..", () => {
      expect(true).toBeTruthy();
    });
  });

  describe("LandingPage has buttons", () => {
      test("LandingPage has register button", () => {
        const { getByText } = render(
            <Router>
            <LandingPage />
            </Router>);
        getByText(/Register/i);
      })
      test("LandingPage has login button", () => {
        const { getByText } = render(
            <Router>
            <LandingPage />
            </Router>);
        getByText(/Login/i);          
      })
  })

//   describe("Login/Register route to correct forms", () => {
//       test("Register button routes to RegisterForm", () => {
//         render(
//             <MemoryRouter initialEntries={['/']}>
//                 <LandingPage />
//             </MemoryRouter>
//         );

//         act(() => {

//         });

//       })
//   })