import React, {useState} from 'react';
import {PlaidLink} from "react-plaid-link";
import axios from "axios";
import useAxios from 'axios-hooks';


function Link() {
    const [transactions, setTransactions] = useState([]);
    const [
      
      { data, loading, error }
    
      ] = useAxios(
        {
          url : 'http://localhost:8000/api/create_link_token',
          method: "POST"
        }
    )
    
    const onSuccess = (public_token, metadata) => {
      // send token to server
      axios.post("/api/set_access_token", {
        public_token: public_token
      });
    };

    
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
  
    console.log(data.link_token)
  
  
    return (
      <div>
        
          <PlaidLink
          token={data.link_token}
          onSuccess={onSuccess}
        >
          Connect a bank account
        </PlaidLink>
          
  
      </div>
    );
};


export default Link;