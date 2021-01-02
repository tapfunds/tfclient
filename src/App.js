import React from "react";
import Nav from "./Components/Navigation/Nav";
import Routes from "./Components/Routes/Routes";
import { FooterContainer } from "./Components/Navigation/FooterContainer";

const App = () => {
  return (
    <React.Fragment>
        <div>
          <Nav/>
        </div>
        <Routes/>
        <div>
        <FooterContainer />
        </div>
        
    </React.Fragment>
  );
}

export default App;
