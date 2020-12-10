import React, {useContext } from "react";
import { StyleSheet, css } from "aphrodite";
import image from '../../group1.svg'
import Nav from "../../Components/Navigation/Nav"
import { UserContext  } from '../../utils/UserProvider'
import { Redirect } from "react-router-dom";

const styles = StyleSheet.create({
  wrapper: {
    height: "200vh",
    minHeight: "200vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "top",
    padding: "50px",
    color: "#44487",
    border: "1px solid #1890ff",
    backgroundColor: "#fffff",
  }
});


function Home() {
    const user = useContext(UserContext);
    return  user ? (
        <Redirect to="/home" />

    ) : (
    <React.Fragment>
        <div className={css(styles.wrapper)}>
            <Nav/>
            <img src={image} alt="tapfunds logo go boom"/>
        </div>
        <hr class="dashed"></hr>
    </React.Fragment>

  );
}

export default Home;