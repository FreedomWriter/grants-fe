import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";
import ApplicantProfile from "./components/applicant-profile/ApplicantProfile"
import Navbar from "./components/navbar/Navbar";
// import ApplicantProfileForm from "./components/ApplicantProfileForm/ApplicantProfileForm";
import WriterProfile from "./components/writer-profile/writerProfile.js";


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
