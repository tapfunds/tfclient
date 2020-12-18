import React, { useContext } from "react";
import { StyleSheet, css } from "aphrodite";
import { NavLink } from "react-router-dom";
import image from "../../logo2.svg";
import { Divider } from "antd";
import { UserContext } from "../../utils/UserProvider";
import * as ROUTES from "../../constants/routes";


const styles = StyleSheet.create({
  nav: {
    display: "flex",
    alignItems: "center",
    minHeight: "56px",
    paddingTop: "15px",
  },
  navtext: {
    fontWeight: "bold",
    fontSize: "19px",
    lineHeight: "35px",
    fontStyle: "italic",
    color: "black",
    textDecoration: "none",
    padding: "16px",
    display: "inline-block",
  },
  left: {
    flex: 1,
  },
  middle: {
    textAlign: "center",
    flex: 1,
  },
});

function Nav() {
  const user = useContext(UserContext);

  return user ? <NavigationAuth /> : <NavigationNonAuth />;
}

const NavigationAuth = () => (
  <React.Fragment>
    <div className={css(styles.nav)}>
      <div className={css(styles.left)}>
        <NavLink to={ROUTES.HOME} >
          <img src={image} alt="tapfunds logo go boom" />
        </NavLink>
      </div>
      <div className={css(styles.middle)}>
        <NavLink to={ROUTES.STATS}  className={css(styles.navtext)}>
          Money{" "}
        </NavLink>
        <NavLink to={ROUTES.AUTH}  className={css(styles.navtext)}>
          Connect Account
        </NavLink>
        <NavLink to={ROUTES.SETTING}  className={css(styles.navtext)}>
          Settings
        </NavLink>
      </div>
    </div>
    <Divider />
  </React.Fragment>
);

const NavigationNonAuth = () => (
  <React.Fragment>
    <div className={css(styles.nav)}>
      <div className={css(styles.left)}>
        <NavLink to={ROUTES.LANDING} >
          <img src={image} alt="tapfunds logo go boom" />
        </NavLink>
      </div>
      <div className={css(styles.middle)}>
        <NavLink to={ROUTES.SIGN_IN}  className={css(styles.navtext)}>
          Sign In
        </NavLink>
        <NavLink to={ROUTES.SIGN_UP}  className={css(styles.navtext)}>
          Sign Up
        </NavLink>
        <a href="www.google.com"  className={css(styles.navtext)}>
          Blog
        </a>
      </div>
    </div>
    <Divider />
  </React.Fragment>
);

export default Nav;
