import React, { useContext } from "react";
import ProfilePage from "./Profile";
import { UserContext } from "../utils/UserProvider";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { FooterContainer } from "../Components/Navigation/FooterContainer";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  wrapper: {
    height: "150vh",
    minHeight: "300vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

function Landing() {
  const user = useContext(UserContext);
  return user ? (
    <React.Fragment>
      <div className={css(styles.wrapper)}>
        <div>
          <ProfilePage />
        </div>
      </div>
      <div>
          <FooterContainer />
        </div>
    </React.Fragment>
  ) : (
    <Loading3QuartersOutlined style={{ width: "600px", height: "600px" }} />
  );
}

export default Landing;
