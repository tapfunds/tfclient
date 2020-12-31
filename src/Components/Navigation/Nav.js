import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import image from "../../logo2.svg";
import * as ROUTES from "../../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import { SignOut } from '../../store/modules/auth/actions/authAction';
import './Nav.css'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)

  const currentState = useSelector((state) => state);
  
  const { isAuthenticated, currentUser } = currentState.Auth;

  const dispatch = useDispatch()

  const logoutUser  = () => dispatch(SignOut());



  let imagePreview = null;
  if(currentUser && currentUser.avatar_path){
    imagePreview = (<img className="img_style_nav" src={currentUser.avatar_path} alt="profile 1"/>);
  } else {
    imagePreview = (<img className="img_style_nav" src={"Default"} alt="profile 2"/>);
  }

  const logout = (e) => {
    e.preventDefault()
    logoutUser()
  }

  const userProfile = isAuthenticated ?  `/profile/${currentState.Auth.currentUser.id}` : ""

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
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {imagePreview}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavItem>
                        <NavLink to={userProfile}>Profile</NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <button onClick={logout}>Logout</button>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
