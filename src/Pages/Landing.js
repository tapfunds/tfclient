import React from "react";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { FooterContainer } from "../Components/Navigation/FooterContainer";
import withAuthorization from "../utils/withAuthorization";
import {CustomButton} from "../Components/Button/Button";
const styles = StyleSheet.create({
  wrapper: {
    height: "200vh",
    minHeight: "200vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

  },
  subwrapper: {
    paddingLeft: "50px",
    paddingRight: "50px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
  },
  sihnupwrapper: {
    paddingLeft: "50px",
    paddingRight: "50px",
    textAlign: "center",

  },
  text: {
    paddingTop:"15px",
    fontSize: "72px",
    lineHeight: "35px",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  subtext: {
    fontSize: "42px",
    paddingTop:"15px",

  },
});

function Landing() {
  return (
    <React.Fragment>
      <div className={css(styles.wrapper)}>

        <div className={css(styles.subwrapper)} style={{color: "white", backgroundColor:"#313030", height:"66vh"}}>
          <div className={css(styles.text)}>Transfer Money Fast</div>
          <p className={css(styles.subtext)} style={{color:"white"}}>
            Safely transfer funds bewteen any of your personal accounts
          </p>
        </div>

        <div className={css(styles.subwrapper)} style={{ height:"66vh"}}>
          <div className={css(styles.text)}>Understand Spending Habits</div>
          <p className={css(styles.subtext)}>
            View account trends to advise yourself on better money habits
          </p>
        </div>
        <div className={css(styles.sihnupwrapper)} style={{ height:"25vh"}}>
            <div className={css(styles.subtext)}>
            Sign up now!{" "} <br/>

            </div>
            
            <Link to="/signin" ><CustomButton text="Tap your finances"/></Link>
          
        </div>
        <div>
          <FooterContainer />
        </div>
      </div>
    </React.Fragment>
  );
}

const condition = (user) => !user;

export default withAuthorization(condition)(Landing);
