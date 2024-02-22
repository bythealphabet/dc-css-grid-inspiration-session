import React from "react";
import ThemeProvider from "./context/ThemeContext";
import { hot } from "react-hot-loader/root";
import { GlobalStyles } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
      <Router>
        <ThemeProvider>
          <GlobalStyles />
          <MainRouter />
        </ThemeProvider>
      </Router>
  );
}

export default hot(App);
