import React, { useState, useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import axios from "axios";

function Link() {
  const [data, setData] = useState("");
  const tokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/create_link_token`;

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


  const onSuccess = useCallback((data, metadata) => {
    // send token to server
    try {
      const response = axios.post(`${process.env.REACT_APP_DEV_API_URL}/api/set_access_token`);
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
  console.log(data);

  return (
    <div>
      <button onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </button>
    </div>
  );
}

export default Link;
