import React from "react";
import { Router } from "@reach/router";
import ProfilePage from "./Profile";
import SignIn from "../../Components/UserAuth/SignIn";
import SignUp from "../../Components/UserAuth/SignUp";
import PasswordReset from "../../Components/UserAuth/PasswordReset";
import Link from "../../Components/Plaid/Link";

function Landing() {
  const user = null;
  return user ? (
    <Link />
  ) : (
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
export default Landing;

// import Link from "../../Components/Plaid/Link";
// function Landing() {
//   const user = null;
//   return  (
//     <Link />
//   ) ;
// };
// export default Landing;