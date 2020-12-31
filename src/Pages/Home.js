import React from "react";
import Profile from "../Components/ProfilePage/Profile";
import { FooterContainer } from "../Components/Navigation/FooterContainer";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  wrapper: {
    height: "300vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  child:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignSelf: "auto",
    padding: "13px",
    paddingBottom: "13px"
  },
  footer:{
    display: "flex",
    flexDirection: "column",
    alignSelf: "auto",
    paddingTop: "13px"
  }
});

function Home() {
  return (
    
      <div className={css(styles.wrapper)}>
        <div className={css(styles.child)}>
          <Profile />
        </div>
        <div className={css(styles.footer)}>
          <FooterContainer />
        </div>
      </div>

  )
}


export default Home;