import React, { useState } from "react";
import scrollToTop from "./hooks/scrollToTop";
import { Switch, Route, withRouter } from "react-router-dom";

//NAVIGATION
import Header from "./containers/navigation/header/Header";
import Footer from "./containers/navigation/footer/Footer";

//CONTAINERS
import Home from "./containers/home/Home";

//slides

import Slides from "./containers/slides/slides";
import Slide from "./containers/slides/slide";

//ARTICLES

const ScrollToTop = withRouter(scrollToTop);

function MainRouter() {
  return (
    <>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/slides">
            <Slides />
          </Route>
          <Route path="/slide/:id">
            <Slide />
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default MainRouter;
