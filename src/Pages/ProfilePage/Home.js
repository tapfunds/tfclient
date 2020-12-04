import React, {useContext } from "react";
import { StyleSheet, css } from "aphrodite";
import image from '../../group1.svg'
import Nav from "../../Components/Navigation/Nav"
import { UserContext  } from '../../utils/UserProvider'
import { Redirect } from "react-router-dom";


function Home() {
    const user = useContext(UserContext);
    return  user ? (
        <Redirect to="/home" />

    ) : (
    <React.Fragment>
        <div >
            <Nav/>
            <img src={image} alt="tapfunds logo go boom"/>

        </div>
    </React.Fragment>

  );
}

export default Home;