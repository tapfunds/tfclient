import React from 'react'
import {auth} from '../utils/firebase';
import { Button } from "antd";
import { UserContext } from "../utils/UserProvider";
import withAuthorization from "../utils/withAuthorization";

const Settings = () => {
    return(
        <UserContext.Consumer>
    <Button onClick = {() => {auth.signOut()}}>Sign out</Button>
    </UserContext.Consumer>

    );
}

const condition = (user) => !!user;
export default withAuthorization(condition)(Settings);
