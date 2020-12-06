import React, { useState } from "react";
import { Link } from "react-router-dom";
import {auth, signInWithGoogle } from "../utils/firebase";
import Nav from "../Components/Navigation/Nav"
import { StyleSheet, css } from "aphrodite";
import { Card, Button } from 'antd';

const styles = StyleSheet.create({
  wrapper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "50px",

  },
  subwrapper:{
    paddingLeft: "50px",
    paddingRight: "50px",    
  },
  signIn:{
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
    lineHeight: "35px",
    color: "black",
    padding: "16px",

  },
  button:{
    background: "#48A9FF",
    border: "none",
    fontStyle: "italic",
    color: "white"
  },
  footer: {
    textAlign: "center",
    paddingBottom: "10px",
  },
  card:{
    lineHeight: "35px",
    width: "500px",
    fontSize: "30px",
  }
});


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event,email, password) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
    };
    
    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
      
        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    };
 

return (
  <div className={css(styles.wrapper)}>

    <div className={css(styles.subwrapper)}>    
      <Nav/>
    </div >
    <div className={css(styles.signIn)}>
      
      <Card title={<h1 className={css(styles.text)}>Sign In</h1>} className={css(styles.card)}>
      {error !== null && <div >{error}</div>}
        <form >
          <div className={css(styles.subtext)}>
            <input
              type="email"
              name="userEmail"
              value = {email}
              placeholder="Email adderss"
              id="userEmail"
              onChange = {(event) => onChangeHandler(event)}
            />
          </div>

          <div className={css(styles.subtext)}>
            <input
              type="password"
              name="userPassword"
              value = {password}
              placeholder="Password"
              id="userPassword"
              onChange = {(event) => onChangeHandler(event)}
            />
          </div>
          <Button className={css(styles.button)} onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </Button>
        </form>
        <div>
        <Button
          className={css(styles.button)}
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </Button>
        </div>

    </Card>
    <p className="text-center my-3">
      Don't have an account?{" "}
      <Link to="/signup" >
        Sign up here
      </Link>{" "}
      <br />{" "}
      <Link to="/reset">
        Forgot Password?
      </Link>
    </p>
    </div>
    <div className={css(styles.footer)}>
      <a href="emailwho">Contact Us</a> &nbsp; <a href="privacyright">Privacy</a> &nbsp; <a href="legal">Legal</a> &nbsp;
    </div>
  </div>
);
};

export default SignIn;
