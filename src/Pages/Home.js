import React from "react";
import ProfilePage from "./Profile";
import { UserContext } from "../utils/UserProvider";
import { FooterContainer } from "../Components/Navigation/FooterContainer";
import { StyleSheet, css } from "aphrodite";
import withAuthorization from "../utils/withAuthorization";

const styles = StyleSheet.create({
  wrapper: {
    height: "150vh",
    minHeight: "300vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

function Home() {
  return (
    <UserContext.Consumer>
      {user => (
      <div className={css(styles.wrapper)}>
        <div>
          <ProfilePage />
        </div>
      <div>
        <FooterContainer />
      </div>
      </div>
      )}
    </UserContext.Consumer>

  )
}

const condition = user => !!user;

export default withAuthorization(condition)(Home);