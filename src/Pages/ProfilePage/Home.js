import React, {useContext } from "react";
import Nav from "../../Components/Navigation/Nav"
import { UserContext  } from '../../utils/UserProvider'
import { Redirect } from "react-router-dom";


function Home() {
    const user = useContext(UserContext);
    return  user ? (
      <Redirect to="/home" />

    ) : (
    <React.Fragment>
      <header>
      <Nav/>
      </header>
      <div>
          This house is not a home
      </div>
    </React.Fragment>

  );
}

export default Home;