import React, { useState, useCallback, useEffect, useContext } from "react";
import { usePlaidLink } from "react-plaid-link";
import {UserContext} from "../../utils/UserProvider";
import axios from "axios";
import qs from "qs";

const tokenURL = `http://localhost:55375/api/create_link_token`;
const sendTokenURL = `http://localhost:55375/api/set_access_token`;
const saveTokenURL = `http://localhost:8080/tokens`;

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
            access_token: response.data.access_token,
            item_id: response.data.item_id,
            user: id,
          }
        ),
        headers: { "content-type": "application/x-www-form-urlencoded" },
      };
      const res = await axios(saveConfig);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    
  }, [id]);

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
