import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";

import Navbar from "./components/navbar/Navbar";
import WriterProfileForm from "./components/WriterOnboardingForms/WriterProfileForm";
import ApplicantProfileForm from "./components/ApplicantOnboardingForm/ApplicantProfileForm";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <WriterProfileForm />
        {/* <ApplicantProfileForm /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
