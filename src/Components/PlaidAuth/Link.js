import React, { useState, useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  createIntegration
} from "../../store/modules/integrations/actions/IntegrationAction"

const tokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/v1/create_link_token`;
const sendTokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/v1/set_access_token`;
// const accessTokenURL = `${process.env.REACT_APP_DEV_OBJECT_MAP_API_URL}/api/map/v1/map_item`;

function Link() {
  const [data, setData] = useState("");
  // const [accessToken, setAccessToken] = useState("")
  const currentUserState = useSelector((state) => state.Auth);
  const AuthID = currentUserState.currentUser
    ? currentUserState.currentUser.id
    : "";

  const user = currentUserState.currentUser
  ? currentUserState.currentUser
  : "";
  const dispatch = useDispatch();
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

  // const sendAccessToken = useCallback(async () => {
  //   const config = {
  //     method: "post",
  //     url: accessTokenURL,
  //     data: qs.stringify({ user: AuthID, accesstoken: accessToken }),
  //     headers: { "content-type": "application/json" },
  //   };
  //   try{
  //     const res = await axios(config);
  //     console.log(res)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [accessToken,AuthID]);

  const onSuccess = useCallback(async (token, metadata) => {
    const sendToken = (integrationDetails) => dispatch(createIntegration(integrationDetails));

    // send token to server
    const config = {
      method: "post",
      url: sendTokenURL,
      data: qs.stringify({ public_token: token }),
      headers: { "content-type": "application/json" },
    };
    try {
      const response = await axios(config);
      console.log(response)
      let details = { 
        UserID: AuthID,
        User: user,
        ItemID: response.data.item_id,
        AccessToken: response.data.access_token,
        access_token_institution: response.data.access_token_institution
        
      }
      sendToken(details)
      console.log(response.data.access_token)
      // setAccessToken(response.data.access_token)
      // sendAccessToken()
    } catch (error) {
      console.error(error);
    }


    routeChange()
  }, [AuthID, user, dispatch, routeChange]);



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