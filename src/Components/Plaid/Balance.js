import React, { useContext, useEffect, useState } from "react";
import {UserContext} from "../../utils/UserProvider";
import GetBalance from "./GetBalance";
import qs from "qs";
import "./GetBalance.css";

const tokenConfigUrl = `${process.env.REACT_APP_API_URL}/token`

function Balance() {
  const user = useContext(UserContext);
  const userID = user.uid
  const [ data, setData ] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const config = {
      method: "POST",
      body: qs.stringify({ user_id: userID }),
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    async function fetchTokens(){
      setIsLoading(true)
      const fetcher = await window.fetch(tokenConfigUrl, config)
      const response = await fetcher.json()
      setData(response)
      setIsLoading(false)     
    }
    fetchTokens()

  }, [userID]);
  return isLoading ? (
    <div>
      Loadin
    </div>
  ):(
    <div className="container">
      <GetBalance data={data}/>
    </div>
  );
}

export default Balance;