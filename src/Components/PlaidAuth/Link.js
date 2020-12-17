import React, { useState, useCallback, useEffect, useContext } from "react";
import { usePlaidLink } from "react-plaid-link";
import {UserContext} from "../../utils/UserProvider";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const tokenURL = `${process.env.REACT_APP_API_URL}/api/create_link_token`;
const sendTokenURL = `${process.env.REACT_APP_API_URL}/api/set_access_token`;
const saveTokenURL = `${process.env.REACT_APP_API_URL}/tokens`;

function Link() {
  const [data, setData] = useState("");
  const user = useContext(UserContext);
  const id = user.uid;

  const fetchToken = useCallback(async () => {
    const config = {
      method: "post",
      url: tokenURL,
    };
    const res = await axios(config);
    setData(res.data.link_token);
  }, []);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  const history = useHistory();

  const routeChange = useCallback( () => { 
    let path = `/home`; 
    history.push(path);
  }, [history]);

  const onSuccess = useCallback(async (token, metadata) => {
    // send token to server
    const config = {
      method: "post",
      url: sendTokenURL,
      data: qs.stringify({ public_token: token }),
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    try {
      const response = await axios(config);
      const saveConfig = {
        method: "post",
        url: saveTokenURL,
        data: qs.stringify(
          { 
            user_id: id,
            item_id: response.data.item_id,
            access_token: response.data.access_token,
            access_token_institution: response.data.access_token_institution
            
          }
        ),
        headers: { "content-type": "application/x-www-form-urlencoded" },
      };
      await axios(saveConfig);
    } catch (error) {
      console.error(error);
    }


    routeChange()
  }, [id, routeChange]);

  const config = {
    token: data,
    onSuccess,
  };

  const { open, ready, err } = usePlaidLink(config);
  // make an
  if (err) return <p>Error!</p>;

  return (
    <div>
      <button onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </button>
    </div>
  );
}

export default Link;
