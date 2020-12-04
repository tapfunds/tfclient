import React from "react";
import "./App.css";
import Home from "./Pages/ProfilePage/Home";
import UserProvider from "./utils/UserProvider";
import SignIn from "./Components/UserAuth/SignIn";
import SignUp from "./Components/UserAuth/SignUp";
import PasswordReset from "./Components/UserAuth/PasswordReset";
import Landing from "./Pages/ProfilePage/Landing"
import { Route, Switch } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  wrapper: {
    height: "200vh",
    minHeight: "200vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    padding: "50px",
    color: "#44487",
    backgroundColor: "#fffff",
  }
});

function App() {
  return (
    <UserProvider>
      <div className={css(styles.wrapper)}>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/signup"><SignUp/></Route>
        <Route path="/login"><SignIn/></Route>
        <Route path="/reset"><PasswordReset/></Route>
        <Route path="/home"><Landing/></Route>
      </Switch>
      </div>
    </UserProvider>
  );
}

export default App;
