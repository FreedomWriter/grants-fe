import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";

import ApplicantProfile from "./components/applicant-profile/ApplicantProfile";
import Navbar from "./components/navbar/Navbar";
import WriterProfile from "./components/writer-profile/writerProfile.js";
import Homepage from "./components/homepage/Homepage.jsx";
import ApplicantProfileForm from "./components/ApplicantOnboardingForm/ApplicantProfileForm.js";
import WriterProfileForm from "./components/WriterOnboardingForms/WriterProfileForm.js";
import RegisterForm from "./components/register/registerForm.js";
import LoginForm from "./components/login/loginForm.js";
import LandingPage from "./components/landingPage/LandingPage.js";
import GrantsList from "./components/applicant-profile/GrantsList";
import GrantsForm from "./components/applicant-profile/GrantsForm";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <div>
          <Link to="/WriterProfile">WriterProfile</Link>
          <Link to="/ApplicantProfileForm">ApplicantProfileForm</Link>
          <Link to="/WriterProfileForm">WriterProfileForm</Link>
          <Link to="/LoginForm">LoginForm</Link>
          <Link to="/RegisterForm">RegisterForm</Link>
          <Link to="/LandingPage">LandingPage</Link>
        </div> */}
        <Switch>
          {/*  */}
          <Route path="/GrantsForm">
            <GrantsForm />
          </Route>
          <Route path="/GrantsList">
            <GrantsList />
          </Route>
          <Route path="/ApplicantProfile">
            <ApplicantProfile />
          </Route>

          <Route path="/WriterProfile">
            <WriterProfile />
          </Route>

          <Route path="/Homepage">
            <Homepage />
          </Route>

          <Route path="/ApplicantProfileForm">
            <ApplicantProfileForm />
          </Route>

          <Route path="/WriterProfileForm">
            <WriterProfileForm />
          </Route>

          <Route path="/RegisterForm">
            <RegisterForm />
          </Route>

          <Route path="/LoginForm">
            <LoginForm />
          </Route>

          <Route exact path="/">
            <LandingPage />
          </Route>
          {/*  */}
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
