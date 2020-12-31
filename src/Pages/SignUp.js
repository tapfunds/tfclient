import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  generateUserDocument,
  provider
} from "../utils/firebase";
import { StyleSheet, css } from "aphrodite";
import { Card, Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  let history = useHistory();

  const redirect = () => {
    history.push('/home')
  }
  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const redirect = () => {
        history.push('/signin')
      }
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      ).then(()=>{
        redirect()
      });
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };


  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then(()=>{
      redirect()
    }).catch((error) => {
      setError("Error signing in with Google");
      console.error("Error signing in with Google", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <React.Fragment>
      <div className={css(styles.wrapper)}>
        <div className={css(styles.signIn)}>
          <Card
            title={<h1 className={css(styles.text)}>Sign Up</h1>}
            className={css(styles.card)}
          >
            {error !== null && (
              <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <form>
              <Input
                type="text"
                name="displayName"
                value={displayName}
                placeholder="Display Name"
                id="displayName"
                onChange={(event) => onChangeHandler(event)}
              />
              <Input
                type="email"
                name="userEmail"
                value={email}
                placeholder="Email"
                id="userEmail"
                onChange={(event) => onChangeHandler(event)}
              />
              <Input.Password
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                type="password"
                name="userPassword"
                value={password}
                placeholder="Password"
                id="userPassword"
                onChange={(event) => onChangeHandler(event)}
              />
              <Button
                className={css(styles.button)}
                onClick={(event) => {
                  createUserWithEmailAndPasswordHandler(event, email, password);
                }}
              >
                Sign up
              </Button>
            </form>
            <Button
              onClick={() => {
                try {
                  signInWithGoogle();
                } catch (error) {
                  console.error("Error signing in with Google", error);
                }
              }}
              className={css(styles.button)}
            >
              Sign up with Google
            </Button>
          </Card>

          <p className="text-center my-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-600">
              Sign in here
            </Link>{" "}
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

export default SignUp;
