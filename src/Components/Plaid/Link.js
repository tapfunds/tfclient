import React, { useState, useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import axios from "axios";

const tokenURL = `http://localhost:55375/api/create_link_token`;
const sendTokenURL = `http://localhost:55375/api/set_access_token`;


function Link() {
  const [data, setData] = useState("");
  
  useEffect(() => {
    // POST request using axios inside useEffect React hook
    axios
      .post(tokenURL)
      .then((response) =>
        setData(response.data.link_token )
      ).catch = (error) => {
      console.log(error);
    };
  }, []);

  console.log(data);

  const onSuccess = useCallback((token, metadata) => {
    // send token to server
   // console.log(token);

    try {
      const response = axios
      .post(sendTokenURL, {
        public_token: token,
      },{
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'accept' : '*/*'
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const config = {
    token: data,
    onSuccess,
  };

  const { open, ready, err } = usePlaidLink(config);
  // make an 
  if (err) return <p>Error!</p>

  return (
    <div>
      <button onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </button>
    </div>
  );
}

export default Link;
