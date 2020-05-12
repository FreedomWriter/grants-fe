import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";
import ApplicantProfile from "./components/applicant-profile/ApplicantProfile"
import Navbar from "./components/navbar/Navbar";
<<<<<<< HEAD
=======
// import ApplicantProfileForm from "./components/ApplicantProfileForm/ApplicantProfileForm";
import WriterProfile from "./components/writer-profile/writerProfile.js";

>>>>>>> bc01ee601fc574d6d6bd74878f1fe6008f5225cc

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
<<<<<<< HEAD
=======
        <WriterProfile />
>>>>>>> bc01ee601fc574d6d6bd74878f1fe6008f5225cc
      </ThemeProvider>
    </Router>
  );
}

export default App;
