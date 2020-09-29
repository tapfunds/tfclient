import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { usePlaidLink } from 'react-plaid-link';
import useAxios from 'axios-hooks'

get the link token
use link token to open link 
send publi onSuccess callback, send the temporary public_token to your app's server.
function App() {
  const [transactions, setTransactions] = useState([]);
  const [
    
    { data, loading, error }, 
    
    refetch
  
    ] = useAxios(
      {
        url : 'http://localhost:8000/api/create_link_token',
        method: "POST"
      }
  )
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  console.log(data.link_token)


  // const onSuccess = useCallback((token, metadata) => {
  //   // send token to server
  //   axios.post("/api/set_access_token ", {
  //     public_token: token
  //   });
  // }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button>
          thissa button
          </button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>

    </div>
  );
}

export default App;
