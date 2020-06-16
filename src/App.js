// import libraries
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";
import { useSelector, useDispatch } from "react-redux";
// import components
import ApplicantProfile from "./components/applicant-profile/ApplicantProfile";
import Navbar from "./components/navbar/Navbar";
import WriterProfile from "./components/writer-profile/writerProfile.js";
import Homepage from "./components/homepage/Homepage.jsx";
import ApplicantProfileForm from "./components/ApplicantOnboardingForm/ApplicantProfileForm.js";
import WriterProfileForm from "./components/WriterOnboardingForms/WriterProfileForm.js";
import RegisterForm from "./components/register/registerForm.js";
import LoginForm from "./components/login/loginForm.js";
import LandingPage from "./components/landingPage/LandingPage.js";
import GrantsList from "./components/applicant-profile/applicant-grants/GrantsList";
import GrantsForm from "./components/applicant-profile/applicant-grants/GrantsForm";
import GrantsPage from "./components/grantsPage/GrantsPage.jsx";
import UpdateGrant from "./components/applicant-profile/applicant-grants/UpdateGrant";
import { getGrants } from "./store/actions/grantsActions";
//
function App() {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const user = useSelector((state) => state.login.user);
  const userType = useSelector((state) => state.login.usertype);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getGrants()));
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path="/">
          <LandingPage />
        </Route>
        {loggedIn && <Navbar />}
        <Switch>
          <PrivateRoute path="/EditGrant/:id" component={UpdateGrant} />
          <PrivateRoute path="/GrantsForm" component={GrantsForm} />
          <PrivateRoute path="/GrantsList" component={GrantsList} />
          {userType && userType === "applicant" ? (
            <PrivateRoute path="/profile" component={ApplicantProfile} />
          ) : (
            <PrivateRoute path="/profile" component={WriterProfile} />
          )}
          <PrivateRoute path="/Homepage" component={Homepage} />
          {user && user.user_type === "applicant" ? (
            <PrivateRoute path="/onboarding" component={ApplicantProfileForm} />
          ) : (
            <PrivateRoute path="/onboarding" component={WriterProfileForm} />
          )}
          <Route path="/RegisterForm">
            <RegisterForm />
          </Route>
          <Route path="/LoginForm">
            <LoginForm />
          </Route>
          <PrivateRoute exact path="/Grants" component={GrantsPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
export default App;
