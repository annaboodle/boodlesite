import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "react-router-scroll-top";

import "./App.scss";

import { paths } from "./styles/shared";

import Home from "./pages/Home";
import About from "./pages/About";
import Homeward from "./pages/Homeward";
import HubHomepage from "./pages/HubHomepage";
import HubDesignSystem from "./pages/HubDesignSystem";
import PegaTours from "./pages/PegaTours";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <Switch>
            <Route path={paths.pegaTours}>
              <Nav showHomeLink />
              <PegaTours />
            </Route>
            <Route path={paths.hubDesignSystem}>
              <Nav showHomeLink />
              <HubDesignSystem />
            </Route>
            <Route path={paths.hubHomepage}>
              <Nav showHomeLink />
              <HubHomepage />
            </Route>
            <Route path={paths.homeward}>
              <Nav showHomeLink />
              <Homeward />
            </Route>
            <Route path={paths.about}>
              <Nav showHomeLink />
              <About />
            </Route>
            <Route path="/">
              <Nav />
              <Home />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
