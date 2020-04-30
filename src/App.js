import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";

import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage.jsx";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <Route exact path={"/Homepage"} component={Homepage} /> */}
        <Homepage />
      </ThemeProvider>
    </Router>
  );
}

export default App;
