import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme.js";
// import "./App.css";

import Homepage from "./components/homepage/Homepage.jsx";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Homepage />
      </ThemeProvider>
    </Router>
  );
}

export default App;
