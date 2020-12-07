import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import UserProvider from "./utils/UserProvider";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PasswordReset from "./Pages/PasswordReset";
import Landing from "./Pages/Landing";
import Settings from "./Pages/Settings";
import PlaidAuth from "./Pages/PlaidAuth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Nav from "./Components/Navigation/Nav"
const App = () => {
  return (
    <UserProvider>
      <Router>
        <div>
          <Nav/>
        </div>
        <div>
          <Route exact path={ROUTES.LANDING} component={Landing}/>
          <Route path={ROUTES.SIGN_UP} component={SignUp}/>
          <Route path={ROUTES.SIGN_IN} component={SignIn}/>
          <Route path={ROUTES.RESET} component={PasswordReset}/>
          <Route path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.AUTH} component={PlaidAuth}/>
          <Route path={ROUTES.SETTING} component={Settings}/>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
