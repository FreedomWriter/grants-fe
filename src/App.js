import React from "react";
<<<<<<< HEAD
import "./App.css";
=======
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/globals/theme";

import Navbar from "./components/navbar/Navbar";
>>>>>>> a54d024c29846f676003d2c883b2c99bd038d31f


function App() {
  return (
<<<<<<< HEAD
    <div className="App">
    </div>
=======
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </Router>
>>>>>>> a54d024c29846f676003d2c883b2c99bd038d31f
  );
}

export default App;
