import React from "react";
import "./App.css";
import Landing from "./Pages/ProfilePage/Landing";
import UserProvider from "./utils/UserProvider";
import { NavLink } from "react-router-dom";
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  wrapper: {
    height: '100vh',
    minHeight : '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'top',
    padding: '50px',
    color: '#44487',
    border: '1px solid #1890ff',
    backgroundColor: '#48A9FF',
  },
  title: {
    color: 'white !important',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '35px',
    fontStyle: 'italic'
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    background: '#1890ff',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    transition: '.3s background',
    ':hover': {
      background: '#40a9ff'
    }
  },
  a:{
      color: 'white'
  }
});

function App() {
  
  return (
    <div className={css(styles.wrapper)}>
    <UserProvider>
      <nav className={css(styles.title)}>
        <ul >
            <NavLink to="/" style={{color: "white"}}>Home</NavLink> &nbsp; &nbsp; &nbsp; &nbsp;
            <NavLink to="/login" style={{color: "white"}} >Sign In</NavLink>&nbsp; &nbsp; &nbsp; &nbsp;
            <NavLink to="/" style={{color: "white"}}>Legal</NavLink> &nbsp; &nbsp; &nbsp; &nbsp;
            <NavLink to="/" style={{color: "white"}}>Blog</NavLink>&nbsp; &nbsp; &nbsp; &nbsp;
            <NavLink to="/" style={{color: "white"}}>Careers</NavLink> 
        </ul>
      </nav>
      <Landing/>


    </UserProvider>
    </div>
  );
}

export default App;
