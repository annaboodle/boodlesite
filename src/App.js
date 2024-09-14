import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";

import "./styles/index.scss";
import { paths } from "./styles/shared";

import Home from "./pages/Home";
import AISuggestions from "./pages/AISuggestions";
import About from "./pages/About";
import Homeward from "./pages/Homeward";
import HubHomepage from "./pages/HubHomepage";
import HubDesignSystem from "./pages/HubDesignSystem";
import PegaTours from "./pages/PegaTours";
import WorkGaps from "./pages/WorkGaps";
import PasswordModal from "./components/PasswordModal";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PrivateRoute({ children, isVerified, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        isVerified ? children : <Redirect to="/" />
      }
    />
  );
}

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [pwModalOpen, setPwModalStatus] = useState(false);
  const [desiredPath, setDesiredPath] = useState("/");

  const sharedNavProps = {
    showHomeLink: true,
    isVerified,
    setIsVerified,
    pwModalOpen,
    setPwModalStatus,
    desiredPath,
    setDesiredPath,
  };

  const sharedModalProps = {
    pwModalOpen,
    setPwModalStatus,
    isVerified,
    setIsVerified,
    desiredPath,
  };

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Nav {...sharedNavProps} showHomeLink={false} />
            <Home {...sharedNavProps} />
            <PasswordModal {...sharedModalProps} />
          </Route>
          <PrivateRoute path={paths.workGaps} isVerified={isVerified}>
            <Nav {...sharedNavProps} />
            <WorkGaps />
            <PasswordModal {...sharedModalProps} />
          </PrivateRoute>
          <PrivateRoute path={paths.aiSuggestions} isVerified={isVerified}>
            <Nav {...sharedNavProps} />
            <AISuggestions />
            <PasswordModal {...sharedModalProps} />
          </PrivateRoute>
          <Route path={paths.pegaTours}>
            <Nav {...sharedNavProps} />
            <PegaTours />
            <PasswordModal {...sharedModalProps} />
          </Route>
          <Route path={paths.hubDesignSystem}>
            <Nav {...sharedNavProps} />
            <HubDesignSystem />
            <PasswordModal {...sharedModalProps} />
          </Route>
          <Route path={paths.hubHomepage}>
            <Nav {...sharedNavProps} />
            <HubHomepage />
            <PasswordModal {...sharedModalProps} />
          </Route>
          <Route path={paths.homeward}>
            <Nav {...sharedNavProps} />
            <Homeward />
            <PasswordModal {...sharedModalProps} />
          </Route>
          <Route path={paths.about}>
            <Nav {...sharedNavProps} />
            <About />
            <PasswordModal {...sharedModalProps} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;