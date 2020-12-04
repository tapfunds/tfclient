import React from "react";
import { StyleSheet, css } from "aphrodite";
import {Switch, NavLink} from "react-router-dom";

const styles = StyleSheet.create({
  title: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "top",
    color: "white !important",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "35px",
    fontStyle: "italic",
    color: "black"
  },
  navtext:{
    color: "black",
  }
});


function Nav() {
  return (
    <nav className={css(styles.title)}>
            <ul>
                <NavLink to="/" exact className={css(styles.navtext)} >Home</NavLink>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <NavLink to="/login" exact className={css(styles.navtext)}>Sign In</NavLink>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <NavLink to="/" exact className={css(styles.navtext)}>Blog</NavLink>
                &nbsp; &nbsp; &nbsp; &nbsp;
            </ul>
    </nav>
  );
}

export default Nav;