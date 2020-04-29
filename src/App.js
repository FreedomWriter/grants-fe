import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";
import ApplicantProfile from "./components/applicant-profile/ApplicantProfile"
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
      <ApplicantProfile />
    </Router>
  );
}

export default App;
