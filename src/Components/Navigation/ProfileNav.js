import React from "react";
import { StyleSheet, css } from "aphrodite";
import { NavLink} from "react-router-dom";
import image from '../../logo2.svg'
import { Divider } from 'antd';

const styles = StyleSheet.create({
  nav:{
    display:"flex",
    alignItems: "center",
    minHeight: "56px",
    paddingTop: "15px",
  },
  navtext:{
    fontWeight: "bold",
    fontSize: "19px",
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


function ProfileNav() {
  return (
    <React.Fragment>
    <div className={css(styles.nav)}>
      <div className={css(styles.left)}>
        <NavLink to="/home" exact ><img  src={image} alt="tapfunds logo go boom"/></NavLink>
      </div>
      <div className={css(styles.middle)}>
        <NavLink to="/stats" exact className={css(styles.navtext)} >Money </NavLink>
        <NavLink to="/auth" exact className={css(styles.navtext)}>Connect Account</NavLink>
        <NavLink to="/setting" exact className={css(styles.navtext)}>Settings</NavLink>
      </div>

    </div>
      <Divider/>
      </React.Fragment>
  );
}

export default ProfileNav;