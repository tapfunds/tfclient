import React, { useState } from "react";
import { Label, Input, FormGroup, CardHeader, CardBody } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import "./Auth.css";
import { SignIn } from '../store/modules/auth/actions/authAction';
import { Card, Button } from "antd";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  button: {
    background: "#48A9FF",
    border: "none",
    fontStyle: "italic",
    color: "white",
  },
  subtext: {
    color: "black",
    padding: "10px",
  },
  card: {
    width: "360px",
    fontSize: "17px",
  },
});

const Login = () => {

  const currentState = useSelector((state) => state.Auth);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch()

  const userLogin = (credentials) => dispatch(SignIn(credentials))


  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const submitUser = (e) => {
    e.preventDefault()
    userLogin({
      email: user.email,
      password: user.password
    });
  }

  if(currentState.isAuthenticated){
    return <Redirect to='/home' />
  }

    return (
      <div className="App" id="page-container">
        <div className="container Auth">
        <Card className={css(styles.card)}>
          <CardHeader>Login</CardHeader>
          <CardBody>
          <form onSubmit={submitUser}>
          <div className="mb-2">
            { currentState.loginError && currentState.loginError.Incorrect_details ? (
              <small className="color-red">{currentState.loginError.Incorrect_details}</small>
              ) : (
                ""
            )}
            { currentState.loginError && currentState.loginError.No_record ? (
              <small className="color-red">{currentState.loginError.No_record}</small>
              ) : (
                ""
            )}
          </div>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            { currentState.loginError && currentState.loginError.Required_email ? (
              <small className="color-red">{currentState.loginError.Required_email}</small>
              ) : (
                ""
            )}
            { currentState.loginError && currentState.loginError.Invalid_email ? (
              <small className="color-red">{ currentState.loginError.Invalid_email }</small>
              ) : (
                ""
            )}
            </FormGroup>
            <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="password" placeholder="Enter password" onChange={handleChange}/>
            { currentState.loginError && currentState.loginError.Required_password ? (
              <small className="color-red">{ currentState.loginError.Required_password }</small>
              ) : (
                ""
              )}
              { currentState.loginError && currentState.loginError.Invalid_password ? (
              <small className="color-red">{ currentState.loginError.Invalid_password }</small>
              ) : (
                ""
              )}
              { currentState.loginError && currentState.loginError.Incorrect_password ? (
              <small className="color-red">{ currentState.loginError.Incorrect_password }</small>
              ) : (
                ""
              )}
            </FormGroup>

            { currentState.isLoading ? (
              <Button
              className={css(styles.button)}
                color="primary"
                type="submit"
                block
                disabled
              >
                Login...
              </Button>
            ) : (
              <Button
              className={css(styles.button)}
                color="primary"
                type="submit"
                block
                disabled={ user.email === "" || user.password === ""  }
              >
                Login
            </Button>
            )}
            </form>
            <div className="mt-2" style={{display: "flex", justifyContent: "space-between", color: "#48A9FF"}}>
              <div>
                <small><Link to="/signup">Sign Up</Link></small>
              </div>
              <div>
                <small><Link to="/forgotpassword">Forgot Password?</Link></small>
              </div>
            </div>
           
            </CardBody>
          </Card>
        </div>
        

        </div>
    );
}

export default Login