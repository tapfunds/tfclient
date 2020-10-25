import React, { useState, useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import axios from "axios";

const tokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/create_link_token`;
const sendTokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/set_access_token`;


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


  useEffect(() => {
    // POST request using axios inside useEffect React hook
    axios
      .post(`${process.env.REACT_APP_DEV_API_URL}/api/somepost`, {
        FirstName: 'Greatest',
        LastName: 'Ever'
      }, {
        headers: {
          // 'application/json' is the modern content-type for JSON, but some
          // older servers may use 'text/json'.
          // See: http://bit.ly/text-json
          'content-type': 'application/json;charset=utf-8'
        }
      })
      .then((response) =>
        console.log(response)
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
