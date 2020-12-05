import React, {useContext } from "react";
import Nav from "../../Components/Navigation/Nav";
import { UserContext  } from '../../utils/UserProvider';
import { Redirect, Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import {FooterContainer} from "../../Components/Navigation/FooterContainer";
const styles = StyleSheet.create({
  text: {
    fontSize: "42px",
    lineHeight: "35px",
    color: "grey",
    fontStyle: "italic",
    fontWeight: "bold",

    
  },
  subtext:{
    lineHeight: "35px",
    color: "grey",
    
  },
});

function Home() {
    const user = useContext(UserContext);
    return  user ? (
      <Redirect to="/home" />

    ) : (
    <React.Fragment>
      <header>
      <Nav/>
      </header>

      <section>
      <div className={css(styles.text)}>
        Transfer Money Fast 
      </div>
      <p className={css(styles.subtext)}>Safely transfer funds bewteen any of your personal accounts</p>
      </section>
      
      <section>
      <div className={css(styles.text)}>
        Understand Spending Habits 
      </div>
        <p className={css(styles.subtext)}>View account trends to advise yourself on better money habits</p>
      </section>
      <section>
        Sign up now! <button><Link to="/login">Tap your finances</Link></button>
      </section>
      <FooterContainer/>
    </React.Fragment>

  );
}

export default Home;