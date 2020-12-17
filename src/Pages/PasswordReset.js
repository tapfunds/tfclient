import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth } from "../utils/firebase";
import { StyleSheet, css } from "aphrodite";
import { Card, Button, Input } from "antd";
import { useHistory } from "react-router-dom";

const styles = StyleSheet.create({
  wrapper: {
    height: "82vh",
    minHeight: "82vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "50px",
  },
  subwrapper: {
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  signIn: {
    paddingLeft: "50px",
    paddingRight: "50px",
    flexGrow: 4,
    alignSelf: "center",
  },
  text: {
    fontSize: "32px",
    lineHeight: "35px",
    color: "black",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  subtext: {
    color: "black",
    padding: "10px",
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
  card: {
    width: "500px",
    fontSize: "30px",
  },
});

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  let history = useHistory();

  const redirect = () => {
    history.push('/signin')
  }
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        redirect()
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <React.Fragment>
      <div className={css(styles.wrapper)}>
        <div className={css(styles.signIn)}>
          <Card
            title={<h1 className={css(styles.text)}>Reset Password</h1>}
            className={css(styles.card)}
          >
            <form action="">
              {emailHasBeenSent && <div>An email has been sent to you!</div>}
              {error !== null && <div>{error}</div>}

              <Input
                type="email"
                name="userEmail"
                id="userEmail"
                value={email}
                placeholder="Email"
                onChange={onChangeHandler}
              />
              <Button
                className={css(styles.button)}
                onClick={(event) => {
                  sendResetEmail(event);
                }}
              >
                Send me a reset link
              </Button>
            </form>
          </Card>
          <p>
            <Link to="/login"> back to sign in page</Link>
          </p>
        </div>
        <div className={css(styles.footer)}>
          <a href="emailwho">Contact Us</a> &nbsp;{" "}
          <a href="privacyright">Privacy</a> &nbsp; <a href="legal">Legal</a>{" "}
          &nbsp;
        </div>
      </div>
    </React.Fragment>
  );
};

export default PasswordReset;
