import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";

import Navbar from "./components/navbar/Navbar";
import WriterProfileForm from "./components/WriterOnboardingForms/WriterProfileForm";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <WriterProfileForm />
      </ThemeProvider>
    </Router>
  );
}

export default App;
