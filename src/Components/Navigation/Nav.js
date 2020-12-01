import React from "react";
import { StyleSheet, css } from "aphrodite";
import {Switch, NavLink} from "react-router-dom";

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
  title: {
    color: "white !important",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "35px",
    fontStyle: "italic",
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
  a: {
    color: "white",
  },
});


function Nav() {
  return (
    <nav className={css(styles.title)}>
        <Switch>
            <ul>
                <NavLink to="/" exact style={{ color: "black" }} >Home</NavLink>{" "}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <NavLink to="/login" exact style={{ color: "black" }}>Sign In</NavLink>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <NavLink to="/" exact style={{ color: "black" }}>Blog</NavLink>
                &nbsp; &nbsp; &nbsp; &nbsp;
            </ul>
        </Switch>
    </nav>
  );
}

export default Nav;