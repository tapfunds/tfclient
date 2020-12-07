import React from 'react'
import {auth} from '../utils/firebase';
import { Button } from "antd";


const Settings = () => {
    return(
    <Button onClick = {() => {auth.signOut()}}>Sign out</Button>

    );
}

export default Settings;