import React from "react";
import Nav from "./Components/Navigation/Nav";
import Routes from "./Components/Routes/Routes";

const App = () => {
  return (
    <React.Fragment>
        <div>
          <Nav/>
        </div>
        <Routes/>
    </React.Fragment>
  );
}

export default App;
