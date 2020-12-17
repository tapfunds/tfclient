import React from "react";
import UserProvider from "./utils/UserProvider";
import Nav from "./Components/Navigation/Nav";
import Routes from "./Components/Routes/Routes";

const App = () => {
  return (
    <UserProvider>
        <div>
          <Nav/>
        </div>
    </UserProvider>
  );
}

export default App;
