import React from "react";
import { Router } from "@reach/router";
import ProfilePage from "./Profile";
import SignIn from "../../Components/UserAuth/SignIn";
import SignUp from "../../Components/UserAuth/SignUp";
import PasswordReset from "../../Components/UserAuth/PasswordReset";

function Landing() {
  const user = null;
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
