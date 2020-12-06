import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import UserProvider from "./utils/UserProvider";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PasswordReset from "./Pages/PasswordReset";
import Landing from "./Pages/Landing"
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/reset"><PasswordReset/></Route>
        <Route path="/signup"><SignUp/></Route>
        <Route path="/login"><SignIn/></Route>
        <Route path="/reset"><PasswordReset/></Route>
        <Route exact path="/"><Home/></Route>
        <Route path="/home"><Landing/></Route>
      </Switch>
    </UserProvider>
  );
}

export default App;
