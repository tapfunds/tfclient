import React from "react";
import "./App.css";
import Landing from "./Pages/ProfilePage/Landing";
import UserProvider from "./utils/UserProvider";

function App() {
  
  return (
    <UserProvider>
      <Landing />
    </UserProvider>
  );
}

export default App;
