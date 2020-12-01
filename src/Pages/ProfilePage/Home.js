import React from "react";
import { StyleSheet, css } from "aphrodite";
import image from '../../group1.svg'
import Nav from "../../Components/Navigation/Nav"

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
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    background: "#1890ff",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    transition: ".3s background",
    ":hover": {
      background: "#40a9ff",
    },
  },
});


function Home() {
  return (
    <React.Fragment>
        <div className={css(styles.wrapper)}>
        <Nav/>
            <img src={image} alt="tapfunds logo go boom"/>
        </div>
    </React.Fragment>

  );
}

export default Home;