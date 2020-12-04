import React from "react";
import { StyleSheet, css } from "aphrodite";
import { NavLink} from "react-router-dom";
import image from '../../logo2.svg'

const styles = StyleSheet.create({
  nav:{
    display:"flex",
    alignItems: "center",
    minHeight: "56px",
  },
  navtext:{
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "35px",
    fontStyle: "italic",
    color: "black",
    textDecoration: "none",
    padding: "16px",
    display: "inline-block",
  },
  left:{
    flex: 1,

  },
  middle:{
    textAlign: "center",
    flex: 1,
  },
});


function Nav() {
  return (
    <div className={css(styles.nav)}>
      <div className={css(styles.left)}>
        <img  src={image} alt="tapfunds logo go boom"/>
      </div>
      <div className={css(styles.middle)}>
        <NavLink to="/" exact className={css(styles.navtext)} >Home</NavLink>
        <NavLink to="/login" exact className={css(styles.navtext)}>Sign In</NavLink>
        <NavLink to="/" exact className={css(styles.navtext)}>Blog</NavLink>
      </div>
    </div>
  );
}

export default Nav;