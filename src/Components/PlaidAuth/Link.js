import React, { useState, useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import axios from "axios";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import {
  createIntegration
} from "../../store/modules/integrations/actions/IntegrationAction"

const tokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/v1/create_link_token`;
const sendTokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/v1/set_access_token`;
// const saveTokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/v1/new_integration`;

function Link() {
  const [data, setData] = useState("");
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
        
      }
      sendToken(details)
    } catch (error) {
      console.error(error);
    }

    
  }, [AuthID, user, dispatch]);

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

// import React, { useState, useCallback, useEffect } from "react";
// import { usePlaidLink } from "react-plaid-link";
// import axios from "axios";
// import qs from "qs";
// // import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   createIntegration
// } from "../../store/modules/integrations/actions/IntegrationAction"

// const tokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/v1/create_link_token`;
// const sendTokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/v1/set_access_token`;
// // const saveTokenURL = `${process.env.REACT_APP_DEV_API_URL}/api/v1/newitem`;

// const Link = () => {
//   const [data, setData] = useState("");

//   const currentUserState = useSelector((state) => state.Auth);
//   const AuthID = currentUserState.currentUser
//     ? currentUserState.currentUser.id
//     : "";

//   const user = currentUserState.currentUser
//   ? currentUserState.currentUser
//   : "";
//   const dispatch = useDispatch();
//   const fetchToken = useCallback(async () => {
//     const config = {
//       method: "post",
//       url: tokenURL,
//     };
//     const res = await axios(config);
//     setData(res.data.link_token);
//   }, []);

//   useEffect(() => {
//     fetchToken();
//   }, [fetchToken]);


//   const onSuccess = useCallback(async (token, metadata) => {
//     const sendToken = (integrationDetails) => dispatch(createIntegration(integrationDetails));

//     // send token to server
//     const config = {
//       method: "post",
//       url: sendTokenURL,
//       data: qs.stringify({ public_token: token }),
//       headers: { "content-type": "application/json" },
//     };

//     try {
//       const response = await axios(config);
//       console.log("Save token to DB res",response)

//       let details = { 
//         UserID: AuthID,
//         User: user,
//         ItemID: response.data.item_id,
//         AccessToken: response.data.access_token,
//         PaymentID: response.data.access_token.payment_id,
//         access_token_institution: response.data.access_token_institution
        
//       }
//       sendToken(details)
      
//     } catch (error) {
//       console.error(error);
//     }


//   }, [AuthID, user, dispatch ]);

//   const config = {
//     token: data,
//     onSuccess,
//   };

//   const { open, ready, err } = usePlaidLink(config);
//   // make an
//   if (err) return <p>Error!</p>;

//   return (
//     <div>
//       <button onClick={() => open()} disabled={!ready}>
//         Connect a bank account
//       </button>
//     </div>
//   );
// }

// export default Link;
