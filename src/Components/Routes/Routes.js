import React from "react";
import Home from "../../Pages/Home";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import PasswordReset from "../../Pages/PasswordReset";
import Landing from "../../Pages/Landing";
import Settings from "../../Pages/Settings";
import PlaidAuth from "../../Pages/PlaidAuth";
import Stats from "../../Pages/Stats";
import FoF from "../../Pages/FourOhFour"
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const App = () => {
  return (
        <Switch>
            <Route exact path={ROUTES.LANDING} component={Landing}/>
            <Route path={ROUTES.SIGN_UP} component={SignUp}/>
            <Route path={ROUTES.SIGN_IN} component={SignIn}/>
            <Route path={ROUTES.RESET} component={PasswordReset}/>
            <Route path={ROUTES.HOME} component={Home}/>
            <Route path={ROUTES.AUTH} component={PlaidAuth}/>
            <Route path={ROUTES.SETTING} component={Settings}/>
            <Route path={ROUTES.STATS} component={Stats}/>
            <Route component={FoF}/>
        </Switch>
  );
}

export default App;
