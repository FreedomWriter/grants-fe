import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";

import ApplicantProfile from "./components/applicant-profile/ApplicantProfile";
import Navbar from "./components/navbar/Navbar";
// import ApplicantProfileForm from "./components/ApplicantProfileForm/ApplicantProfileForm";
import WriterProfile from "./components/writer-profile/writerProfile.js";
import Homepage from "./components/homepage/Homepage.jsx";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <WriterProfile />
      </ThemeProvider>
    </Router>
  );
}

export default App;
