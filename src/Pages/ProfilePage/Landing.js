import React, {useContext } from "react";
import { Router } from "@reach/router";
import ProfilePage from "./Profile";
import SignIn from "../../Components/UserAuth/SignIn";
import SignUp from "../../Components/UserAuth/SignUp";
import PasswordReset from "../../Components/UserAuth/PasswordReset";
import { UserContext  } from '../../utils/UserProvider'

function Landing() {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
export default Landing;