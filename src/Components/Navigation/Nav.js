import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import image from "../../logo2.svg";
import * as ROUTES from "../../constants/routes";
import { useSelector } from "react-redux";
import './Nav.css'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';



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
                <React.Fragment>
                  <NavItem style={{marginRight: "20px" }}>
                    <Link to='/login'>Login</Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/signup'>Signup</Link>
                  </NavItem>
                </React.Fragment>
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
