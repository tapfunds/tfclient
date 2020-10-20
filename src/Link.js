import React, { useState, useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import axios from "axios";
import useAxios from "axios-hooks";

function Link() {
  const [data, setData] = useState("");
  const tokenURL = "http://localhost:8000/api/create_link_token";
  // const [

  //   { data, loading, error }

  //   ] = useAxios(
  //     {
  //       url : 'http://localhost:8000/api/create_link_token',
  //       method: "POST"
  //     }
  // )

  // const onSuccess = useCallback((data, metadata) => {
  //   // send token to server
  //   try {
  //     const response = axios.post("http://localhost:8000/api/set_access_token");
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // const getToken = () => {
  //   try {
  //     const response = axios
  //       .post("http://localhost:8000/api/create_link_token")
  //       .then((response) => {
  //         const link = response.data.link_token;
  //         // setData(link)
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(tokenURL)
      .then((response) =>
        setData(response.data.link_token, "", headers )
      ).catch = (error) => {
      console.log(error);
    };
  }, []);

  // const config = {
  //   token: data.link_token,
  //   onSuccess,
  //   // ...
  // };

  // const { open, ready, err } = usePlaidLink(config);

  console.log(data);

  return (
    <div>
      <button>Issa button</button>
    </div>
  );
}

export default Link;
