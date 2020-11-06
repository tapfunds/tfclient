import React, {useContext } from "react";
import ProfilePage from "./Profile";
import PlaidAuth from "./PlaidAuth";
import SignIn from "../../Components/UserAuth/SignIn";
import SignUp from "../../Components/UserAuth/SignUp";
import PasswordReset from "../../Components/UserAuth/PasswordReset";
import { UserContext  } from '../../utils/UserProvider'
import { Route, Switch } from "react-router-dom";
// import { StyleSheet, css } from 'aphrodite';

// const styles = StyleSheet.create({

//   title: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: '72px',
//     lineHeight: '83.38px',
//     fontStyle: 'italic'
//   }
// });

function Landing() {
  const user = useContext(UserContext);
  return user ? (
    <Switch >
      
    <Route path="/auth"><PlaidAuth/></Route>
      <Route path="/"><ProfilePage/></Route>
      
    </Switch>
  ) : (
    <Switch>
      <Route path="/signup"><SignUp/></Route>
      <Route path="/login"><SignIn/></Route>
      <Route path="/reset"><PasswordReset/></Route>
    </Switch>
  );
}

export default Landing;