import React, { useContext } from "react";
import { UserContext } from "../utils/UserProvider";
import Balance from "../Components/Plaid/Balance";
import { StyleSheet, css } from "aphrodite";
import ProfileNav from "../Components/Navigation/ProfileNav";

const styles = StyleSheet.create({
  wrapper: {
    height: "82vh",
    minHeight: "82vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "50px",
  },
  button: {
    background: "#48A9FF",
    border: "none",
    fontStyle: "italic",
    color: "white",
  },
  footer: {
    textAlign: "center",
    paddingBottom: "10px",
  },
  text: {
    fontSize: "25px",
    lineHeight: "35px",
    color: "black",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  balance: {},
});

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { displayName } = user;
  console.log(user);

  return (
    <React.Fragment>
      <div className={css(styles.subwrapper)}>
        <ProfileNav />
      </div>
      <div className={css(styles.wrapper)}>
        <div className={css(styles.text)}>
          <h2>Whats goodie, {displayName}!</h2>
        </div>
        <div>
          <Balance />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;

// {
//   /* <div>
// <Button className={css(styles.button)} onClick = {() => {auth.signOut()}}>Sign out</Button>
// </div> */
// }
