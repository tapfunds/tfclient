import React, {useContext } from "react";
import ProfilePage from "./Profile";
import PlaidAuth from "./PlaidAuth";
import { UserContext  } from '../../utils/UserProvider'
import { Route, Switch, Redirect } from "react-router-dom";
function Landing() {
  const user = useContext(UserContext);
  return user ? (
      <Switch >
        <Route path="/auth"><PlaidAuth/></Route>
        <Route path="/home"><ProfilePage/></Route>
      </Switch>
  ) : (
    <Redirect to="/login" />
  );
}

export default Landing;