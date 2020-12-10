import React from 'react'
import { Button } from 'antd';


const Transfer = (props) => {

    const handleClick = (e)=> {
        if (props.action === "Send") {
            console.log("Send money to which account", e)
            // send money through api from account
        } else if (props.action === "Recieve") {
            console.log("Receieve money from whenst", e)
            // receive money through api
        }
    }
    return <Button onClick={handleClick}>{props.lable}</Button>
}

export default Transfer