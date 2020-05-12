import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";
import ApplicantProfile from "./components/applicant-profile/ApplicantProfile"
import Navbar from "./components/navbar/Navbar";
import ApplicantProfileForm from "./components/ApplicantProfileForm/ApplicantProfileForm";


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <ApplicantProfileForm />
      </ThemeProvider>
    </Router>
  );
}

export default App;
