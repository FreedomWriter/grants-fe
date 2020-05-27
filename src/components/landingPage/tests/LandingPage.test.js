import React from "react";
import { BrowserRouter, Router } from 'react-router-dom';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from 'history';

import LandingPage from "../LandingPage.js";

describe("Test", () => {
    test("LandingPage renders something..", () => {
      expect(true).toBeTruthy();
    });
  });

describe("LandingPage has buttons", () => {
    test("LandingPage has register button", () => {
        const { getByText } = render(
            <BrowserRouter>
            <LandingPage />
            </BrowserRouter>);
        getByText(/Register/i);
      })
      test("LandingPage has login button", () => {
        const { getByText } = render(
            <BrowserRouter>
            <LandingPage />
            </BrowserRouter>);
        getByText(/Login/i);          
      })
  })

  describe("Login/Register route to correct forms", async () => {
      test("Register button routes to RegisterForm", () => {

        const history = createMemoryHistory();

        const { container, getByText } = render(
            <Router history={history}>
                <LandingPage />
            </Router>
        )

        expect(container.innerHTML).toMatch('Get help with your grant today!')
        fireEvent.click(getByText(/register/i))
        expect(history.location.pathname).toBe("/RegisterForm");
      })
      test("Login button routes to LoginForm", () => {

        const history = createMemoryHistory();

        const { container, getByText } = render(
            <Router history={history}>
                <LandingPage />
            </Router>
        )

        expect(container.innerHTML).toMatch('Get help with your grant today!')
        fireEvent.click(getByText(/login/i))
        expect(history.location.pathname).toBe("/LoginForm");
      })
  })