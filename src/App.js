import React from "react";
import "./App.css";
import Home from "./Pages/ProfilePage/Home";
import UserProvider from "./utils/UserProvider";
import SignIn from "./Components/UserAuth/SignIn";
import SignUp from "./Components/UserAuth/SignUp";
import PasswordReset from "./Components/UserAuth/PasswordReset";
import Landing from "./Pages/ProfilePage/Landing"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/signup"><SignUp/></Route>
        <Route path="/login"><SignIn/></Route>
        <Route path="/reset"><PasswordReset/></Route>
        <Route path="/home"><Landing/></Route>
      </Switch>
    </UserProvider>
  );
}

export default App;
