import React from 'react';
// import {PlaidLink} from "react-plaid-link";
import axios from "axios";
import useAxios from 'axios-hooks';


function Link() {
    // const [transactions, setTransactions] = useState([]);
    const [
      
      { data, loading, error }
    
      ] = useAxios(
        {
          url : 'http://localhost:8000/api/create_link_token',
          method: "POST"
        }
    )
    
    async function getUser() {
      try {
        const response = axios.post("http://localhost:8000/api/set_access_token", {
          public_token: data.link_token
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
  
    getUser()
    console.log(data.link_token) 
  
    return (
      <div>
        <button>Issa button</button>
      </div>
    );
};


export default Link;