import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import image from "../../logo2.svg";
import * as ROUTES from "../../constants/routes";
import { useSelector } from "react-redux";
import './Nav.css'
import { StyleSheet, css } from "aphrodite";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const styles = StyleSheet.create({

  subtext: {
    color: "#48A9FF",
    padding: "10px",
  },

});

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)

  const currentState = useSelector((state) => state);
  
  const { isAuthenticated } = currentState.Auth;

  const SignedInLinks = (
              <React.Fragment>
              <NavLink to={ROUTES.STATS}  className="mt-2" style={{marginRight: "15px" }}>
                Money{" "}
              </NavLink>
              <NavLink to={ROUTES.AUTH}  className="mt-2" style={{marginRight: "15px" }}>
                Connect Account
              </NavLink>
              <NavLink to={ROUTES.SETTING}  className="mt-2" style={{marginRight: "15px" }}>
                Settings
              </NavLink>
                  
              </React.Fragment>

            )

  const SignedOutLinks = (
                <div className={css(styles.subtext)}>
                  <NavItem style={{marginRight: "20px", color: "#48A9FF"}}>
                    <Link to='/login'>Login</Link>
                  </NavItem>
                  <NavItem style={{color: "#48A9FF"}}>
                    <Link to='/signup'>Signup</Link>
                  </NavItem>
                </div>
              )


  return (
    <div className="mb-3">
      <Navbar color="light" light expand="md"> 
          <NavbarBrand className="mx-auto" href="/"><img src={image} alt="tapfunds logo go boom" /></NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen) } /> 
        <Collapse isOpen={isOpen} navbar> 
          <Nav className="ml-auto" navbar>
            { isAuthenticated ? SignedInLinks: SignedOutLinks }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
